import api from "./api";

const certifyClass = async (id_clase: number, session: string): Promise<any> => {
    try {
        const url = `/certificar/${id_clase}?session=${session}`;
        
        const response = await api.auth_post(url, {
            id_clase: id_clase,
            session: session
        });
        return response; 
    } catch (error) {
        console.error("Error certifying class:", error);
        throw error;
    }
};

export { certifyClass };
