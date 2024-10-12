import api from "./api";

// Tipo de sesión
interface Session {
    clase_id: number;
    date: string;
    start_time: string;
    end_time: string;
}

// Tipo de datos para la creación de una clase
interface CreateClassPayload {
    profesor_id: string;
    sesiones: Session[];
}

// Función para crear una nueva clase
const createClass = async (payload: CreateClassPayload): Promise<void> => {
    try {
        await api.auth_post('/clases/create', payload); // Ajusta la ruta según tu API
    } catch (error) {
        console.error("Error creating class:", error);
        throw error; // Manejo de errores
    }
};

export { createClass };
