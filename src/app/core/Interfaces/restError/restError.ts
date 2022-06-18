
// Interfaz de error

export interface RestError {
    estado ?: string,            // Código de estado
    fecha ?: Date,               // Fecha del error
    mensaje ?: string            // Mensaje de error
}
