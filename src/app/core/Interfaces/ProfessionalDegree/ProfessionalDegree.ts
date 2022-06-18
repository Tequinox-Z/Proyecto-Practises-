import { Business } from '../business/Business';
import { School } from '../school/school';
import { Teacher } from '../teacher/teacher';
import { Enrollment } from '../Enrollment/Enrollment';

// Interfaz de ciclo

export interface ProfessionalDegree {
    id ?: number,                    // Id
    name ?: string,                  // Nombre
    year ?: number,                  // Año
    image ?: string,                 // Imagen
    businesses ?: Business[],        // Empresas
    school ?: School,                // Centro
    teachers ?: Teacher[],           // Profesores
    enrollments ?: Enrollment[]      // Matriculas
}
