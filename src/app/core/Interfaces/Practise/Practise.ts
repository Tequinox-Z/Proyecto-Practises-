import { Business } from '../business/Business';
import { Teacher } from '../teacher/teacher';
import { Enrollment } from '../Enrollment/Enrollment';
import { LaborTutor } from '../LaborTutor/LaborTutor';
export interface Practise {
    id ?: number,                                // Id
    start ?: Date,                               // Fecha inicio
    finish ?: Date,                              // Fecha fin
    enrollment ?: Enrollment,                    // Matricula
    teacher ?: Teacher,                          // Profesor
    laborTutor ?: LaborTutor,                    // Tutor
    business ?: Business                         // Empresa
}
