import api from './api';

interface UserRegister {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface UserLogin {
    email: string;
    password: string;
}

async function register(user: UserRegister):Promise<boolean> {
    try {
        await api.post('public/auth/register', user);
    } catch {
        return false;
    }
    return true;
}

async function login(user: UserLogin):Promise<boolean> {
    try {
        const server_response = await api.post('public/auth/login', user);
        console.log(server_response.token);
        if (server_response.token) {
            localStorage.setItem('token', server_response.token);
            return true;
        }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return false;
    }
    return true;
}

export { register, login };