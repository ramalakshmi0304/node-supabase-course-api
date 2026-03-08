import supabase from "../supabaseClient";

const validateEnrollment =(res,req,next)=>{
const {student_id,course_id}=req.body
try{
if(!student_id) res.status(400).res.json({message:"student id is required"})
if(!course_id) res.status(400).res.json({message:"couse id is required"})

}catch{
    if (error){
        console.log(err)
    res.status(500).res.json({message:"server error"})
}
}

next();

}



export default validateEnrollment