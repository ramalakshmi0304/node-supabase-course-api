import supabase from "../supabaseClient";

const validateEnrollment =(req,res,next)=>{
const {student_id,course_id}=req.body
try{
if(!student_id) 
    return res.status(400).res.json({message:"student id is required"})
if(!course_id) 
    return res.status(400).res.json({message:"couse id is required"})

}catch{
    if (error){
        console.log(error)
    res.status(500).res.json({message:"server error"})
}
}

next();
}

export default validateEnrollment