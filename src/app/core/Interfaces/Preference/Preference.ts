import { Enrollment } from '../Enrollment/Enrollment';
import { Business } from '../business/Business';
export interface Preference {
    id ?: number,
    position ?: number,
    enrollment ?: Enrollment,
    business ?: Business,
    
}
