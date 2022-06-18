
// Registro de temperatura

export interface RegTemp {
    id ?: number,				// Id										
	humidity ?: number,		 	// Humedad							
    celcius	?: number,			// Grados Celcius					
	fahrenheit ?: number,		// Grados Fahrenheit 				
	heatIndexc ?: number,		// Índice de calor en celcius				
	heatIndexf ?: number,		// Índice de calor el fahrenheit
	date ?: Date				// Fecha del registro
}
