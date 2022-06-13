
const Score = require('../models/score');



exports.getScoreCards = async (req, res) => {

    try{

        let id = req.user.id;

        let scorecards = await Score.find({studentId:id});

        if( scorecards.length === 0) return res.status(404).json({message : "ScoreCards not found"});
        
        return res.status(200).json({scorecards});

    } catch (error) {
        return res.status(500).json({message : "Something went Wrong "});
    }
}