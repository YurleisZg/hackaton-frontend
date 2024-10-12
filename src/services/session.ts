import api from "./api";

const signSession = async (sesion_id: number): Promise<any> => {
    try {
        const response = await api.auth_post(`/firmar_sesion/${sesion_id}`, {
            sesion_id: sesion_id
        });
        return response; 
    } catch (error) {
        console.error("Error signing session:", error);
        throw error;
    }
};

export { signSession };
