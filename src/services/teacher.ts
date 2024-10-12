import api from "./api";


const getTeachers = async (): Promise<string[]> => {
    try {
        const response = await api.auth_get('/profesores');
        return response.data; 
    } catch (error) {
        console.error("Error fetching teachers:", error);
        throw error; 
    }
};

export { getTeachers };