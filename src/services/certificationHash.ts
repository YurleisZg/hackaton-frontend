import api from "./api";

const getCertificationHash = async (certification_hash: string): Promise<any> => {
    try {
        const response = await api.auth_get(`/certificar/${certification_hash}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching certification:", error);
        throw error;
    }
};

export { getCertificationHash };