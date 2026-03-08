
import validateEnrollment from "../middleware/validateEnrollment";

const router= express.Router();


router.get("/courses/:id/enrollments", getCoursebyId)
router.get("/course", getAllcourses)
router.post("/enroll",validateEnrollment,createenrollment)


export default router;




