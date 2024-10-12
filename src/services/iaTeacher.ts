import api from "./api";

const iaTeacher = async (teacherId: string): Promise<any> => {
    try {
        const response = await api.post('/teacher/ia', teacherId);
        return response.data;
    } catch (error) {
        console.error("Error fetching Teacher ID:", error);
        throw error; 
    }
};

export { iaTeacher };