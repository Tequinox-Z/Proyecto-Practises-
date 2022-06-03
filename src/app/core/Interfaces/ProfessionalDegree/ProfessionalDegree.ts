import { Business } from '../business/Business';
import { School } from '../school/school';
import { Teacher } from '../teacher/teacher';
import { Enrollment } from '../Enrollment/Enrollment';
export interface ProfessionalDegree {
    id ?: number,
    name ?: string,
    year ?: number,
    image ?: string,
    businesses ?: Business[],
    school ?: School,
    teachers ?: Teacher[],
    enrollments ?: Enrollment[]
}
