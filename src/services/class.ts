import api from "./api";

const getClass = async (): Promise<string[]> => {
    try {
        const response = await api.auth_get('/clases');
        return response.data; 
    } catch (error) {
        console.error("Error fetching teachers:", error);
        throw error; 
    }
};

export { getClass };