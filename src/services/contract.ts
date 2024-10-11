import api from "./api";

interface contractModel {
    walletStudent: string;
    walletEducator: string;
    idCourse: string;
    nameCourse: string;
    startDate: string;
    endDate: string;
    price: number;
}

async function createContract(contract:contractModel) {
    try {
        await api.post('public/auth/register', contract);
    } catch {
        return false;
    }
    return true;
}

export {createContract};
