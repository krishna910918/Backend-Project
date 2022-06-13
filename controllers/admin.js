
const User = require('../models/user');
const Class = require('../models/class');

exports.getTeachers = async (req, res) => {

    try {

        let list = await User.find({role : 'teacher'});

        return res.status(200).json({list});

    } catch (error) {
        return res.status(500).json({message : "Something went Wrong "});
    }

}

exports.addTeacher = async (req, res) => {

    let {name, email, password } = req.body;

    try{

        let existingTeacher = await User.findOne({email});

        if (  existingTeacher ) return res.status(400).json({message : "User Already exists"});

        const result = await User.create({name , email, password, className, role :'teacher'});

        return res.status(201).json({id:result._id,message:"Teacher added "});

    } catch(error) {
        
        return res.status(500).json({message : "SomeThing went Wrong "});
    }
}

exports.deleteTeacher = async (req, res) => {

    let id = req.params.teacherId;
    
    

    try{

        let existingTeacher = await User.findById(id);
        

        if ( ! existingTeacher ) return res.status(404).json({message : "Teacher Not Found "});

        
        await User.findByIdAndRemove(id);

        return res.status(200).json({id,message:"Teacher removed"});
    
    } catch (error) {

        return res.status(500).json({message : "Something went Wrong "});
    } 

}

exports.mapTeachertoClass = async (req, res) => {

    let {teacherId, classId} = req.params;
    

    try{

        let existingTeacher = await User.findById(teacherId);
        let existingClass = await Class.findById(classId);

        if (! existingTeacher || ! existingClass) return res.status(404).json({message : "Teacher or Class not Found "});

        let {teachers} = existingClass;
        

        if (teachers.indexOf(String(teacherId)) !== -1) return res.status(400).json({message:'Teacher already added'});
      

        existingClass.teachers.push(teacherId);

        let result = await Class.findByIdAndUpdate(classId,existingClass,{new : true});

        

        return res.status(200).json({message : "Teacher is added to the class"});

    } catch (error) {

        return res.status(500).json({message : "Something went Wrong "});
    }
}

exports.getStudents = async (req, res) => {

    try {

        let list = await User.find({role : 'student'});

        return res.status(200).json({list});

    } catch (error) {
        return res.status(500).json({message : "Something went Wrong "});
    }

}

exports.addStudent = async (req, res) => {

    let {name, email, password } = req.body;

    try{

        let existingStudent = await User.findOne({email});

        

        if (  existingStudent ) return res.status(400).json({message : "User Already exists"});

        const result = await User.create({name , email, password,  role :'student'});

        return res.status(201).json({id:result._id,message:"Student added "});

    } catch(error) {
        
        return res.status(500).json({message : "SomeThing went Wrong "});
    }
}

exports.deleteStudent = async (req, res) => {

    let id = req.params.studentId;
    
    

    try{

        let existingStudent = await User.findById(id);
        

        if ( ! existingStudent ) return res.status(404).json({message : "Student Not Found "});

        
        await User.findByIdAndRemove(id);

        return res.status(200).json({id,message:"Student removed"});
    
    } catch (error) {

        return res.status(500).json({message : "Something went Wrong "});
    } 

}

exports.mapStudenttoClass = async (req, res) => {

    let {studentId, classId} = req.params;
    

    try{

        let existingStudent = await User.findById(studentId);
        let existingClass = await Class.findById(classId);

        if (! existingStudent || ! existingClass) return res.status(404).json({message : "Student or Class not Found "});

        let {students} = existingClass;
        

        if (students.indexOf(String(studentId)) !== -1) return res.status(400).json({message:'Student already added'});
      

        existingClass.students.push(studentId);

        let result = await Class.findByIdAndUpdate(classId,existingClass,{new : true});

        

        return res.status(200).json({message : "Student is added to the class"});

    } catch (error) {

        return res.status(500).json({message : "Something went Wrong "});
    }
}


exports.addClass = async (req, res) => {

    let {className} = req.body;

    try{

        let existingClass = await Class.findOne({className});

        

        if ( existingClass ) return res.status(400).json({message : "Class Already exists"});

        const result = await Class.create({className});
        

        return res.status(201).json({id : result._id, message : 'Class Added '});
    } catch (error) {

        return res.status(500).json({message : "Something went Wrong "});
    }
}

exports.updateClass = async (req, res) => {

    let {className} = req.body;
    let {classId} = req.params;

    try {

        let existingClass = await Class.findById(classId);

        

        if ( ! existingClass) return res.status(404).json({message : "Class Doesn't exist"});

        if (className === existingClass.className) return res.status(400).json({message : "Cannot Update class"});

        let exClass = await Class.findOne({className});

        if ( exClass) return res.status(400).json({message : "Class Already exists "})

        existingClass.className = className;

        let result = await Class.findByIdAndUpdate(classId,existingClass);

        return res.status(200).json({classId, message : "ClassName updated successfully"});


    } catch (error) {
        
        return res.status(500).json({message : "Something went Wrong "}); 
    }
}

exports.deleteClass = async (req, res) => {
    let {classId} = req.params;

    try{

        let exisitngClass = await Class.findById(classId);

        if( ! exisitngClass ) return res.status(404).json({message : "Class doesn't exist"});

        await Class.findByIdAndRemove(classId);

        return res.status(200).json({classId, message : "Class deleted "});

    } catch(error) {
        return res.status(500).json({message : "Something Went Wrong "});
    }
}