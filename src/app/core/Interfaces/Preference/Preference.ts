import { Enrollment } from '../Enrollment/Enrollment';
import { Business } from '../business/Business';

// Preferencia

export interface Preference {
    id ?: number,                    // Id
    position ?: number,              // Posición
    enrollment ?: Enrollment,        // Matricula
    business ?: Business,            // Empresa
    
}
