import { Business } from '../business/Business';
import { Teacher } from '../teacher/teacher';
import { Enrollment } from '../Enrollment/Enrollment';
import { LaborTutor } from '../LaborTutor/LaborTutor';
export interface Practise {
    id ?: number,
    start ?: Date,
    finish ?: Date,
    enrollment ?: Enrollment,
    teacher ?: Teacher,
    laborTutor ?: LaborTutor,
    business ?: Business
}
