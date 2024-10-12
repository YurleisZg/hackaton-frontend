import api from "./api";


const getCertificate = async (): Promise<string[]> => {
    try {
        const response = await api.auth_get('/certificado');
        return response.data; 
    } catch (error) {
        console.error("Error fetching certificados:", error);
        throw error; 
    }
};

export { getCertificate};