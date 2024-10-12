import api from "./api";


const getCursos = async (): Promise<string[]> => {
    try {
        const response = await api.auth_get('/cursos');
        return response.data; 
    } catch (error) {
        console.error("Error fetching teachers:", error);
        throw error; 
    }
};

export { getCursos };