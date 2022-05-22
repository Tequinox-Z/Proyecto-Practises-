import { Student } from '../student/student';
import { ProfessionalDegree } from '../professionalDegree/professional-degree';

// Interfaz de matrícula
export interface Enrollment {
    id: number,                                                // Identificador de la matrícula
    date: Date,                                                // Fecha de matriculación
    student: Student,                                          // Estudiante
    professionalDegree: ProfessionalDegree                     // Ciclo
}
