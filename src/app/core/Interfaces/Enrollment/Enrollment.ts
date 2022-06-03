import { Student } from '../student/student';
import { Preference } from '../Preference/Preference';
import { Practise } from '../Practise/Practise';
import { ProfessionalDegree } from '../ProfessionalDegree/ProfessionalDegree';
export interface Enrollment {
    id ?: number,
    date ?: Date,
    student ?: Student,
    preferences ?: Preference[],
    practise ?: Practise,
    professionalDegree ?: ProfessionalDegree
}
