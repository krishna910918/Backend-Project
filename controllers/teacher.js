const User = require('../models/user');
const Score = require('../models/score');

function key (a,b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

    return 0;
    
}

function key2 (a,b){
    if (a.percentage < b.percentage) return -1;
    if (a.percentage > b.percentage) return 1;
    return 0; 
}

exports.getStudents = async (req, res) => {

    try {

        let list = await User.find({role : 'student'});

        list.sort(key);

        return res.status(200).json({list});

    } catch (error) {
        return res.status(500).json({message : "Something went Wrong "});
    }

}

exports.createScoreCard = async (req, res) => {

    let id = req.params.studentId;

    try{

        let existingStudent = await User.findById(id);
        let { subject, score, Comments} = req.body;

        

        if( ! existingStudent ) return res.status(404).json({message : "Student doesn't exist "});

        if( existingStudent.role !== 'student' ) return res.status(400).json({message : "Cannot create scorecard for this user"})

        let existingScore = await Score.findOne({subject,studentId:id});

        

        if ( existingScore ) return res.status(400).json({message : "ScoreCard already created"});

        

        

        let result = await Score.create({studentName : existingStudent.name, subject, score, Comments, studentId : id});
        

        return res.status(201).json({result, message : "Score Card created "});

    } catch(error) {
        return res.status(500).json({message : "Something went Wrong "});
    }



}

exports.getRanks = async (req, res) => {
    
    try{

        let all_students = await User.find({role : "student"});
        

        if(  all_students.length === 0 ) return res.status(404).json({message : "Results not Found "})
        

        let ranks = [];

        for(let student of all_students){

            let results = {
                name : "",
                studentId : "",
                percentage : 0,
                rank : 0
            };
            let tempscore = await Score.find({studentId:student._id});
            if( tempscore.length === 0){
                
                continue;
            }
            let count = 0;
            let total = 0;

            for(let score of tempscore){
                count++;
                total = total + score.score;
            }

            let percentage = ((total)/(100*count))*100;
           
            results.name = student.name;
            results.studentId = student._id;
            results.percentage = percentage;

            ranks.push(results);
        }

        ranks.sort(key2);
        ranks.reverse();

        for(let i = 0;i < ranks.length;i++){
            ranks[i].rank = i+1;
        }

        

        return res.status(200).json({ranks});





    } catch (error) {

        return res.status(500).json({message : "Something went Wrong "});
    }
}