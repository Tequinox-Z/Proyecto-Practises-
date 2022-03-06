import { Student } from '../student/student';
import { ProfessionalDegree } from '../professionalDegree/professional-degree';
export interface Enrollment {
    id: number,
    date: Date,
    student: Student,
    professionalDegree: ProfessionalDegree
}
