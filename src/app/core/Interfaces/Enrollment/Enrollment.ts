import { Student } from '../student/student';
import { Preference } from '../Preference/Preference';
import { Practise } from '../Practise/Practise';
import { ProfessionalDegree } from '../ProfessionalDegree/ProfessionalDegree';

// Interfaz de matricula 2

export interface Enrollment {
    id ?: number,                                // Id 
    date ?: Date,                                // Fecha de matriculación
    student ?: Student,                          // Estudiante
    preferences ?: Preference[],                 // Preferencias
    practise ?: Practise,                        // Practica
    professionalDegree ?: ProfessionalDegree,    // Ciclo
    dniStudent ?: string                         // Dni
}
