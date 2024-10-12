import api from "./api";

const getCertificationHash = async (): Promise<string[]> => {
    try {
        const response = await api.auth_get('/certificar/certification_hash');
        return response.data;
    } catch (error) {
        console.error("Error fetching hash certificates:", error);
        throw error;
    }
};

export { getCertificationHash };