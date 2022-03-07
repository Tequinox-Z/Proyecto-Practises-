
// Respuesta de login

export interface LoginResponse {
    jwt_token ?: string,                        // Token JWT
    status?: string,                            // Código de estado
    message?: string                            // Mensaje
}