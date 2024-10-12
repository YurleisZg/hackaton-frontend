import api from './api';

interface UserRegister {
    id: string;
    name: string;
    email: string;
    password: string;
    wallet: string;
}

interface UserLogin {
    username: string;
    password: string;
}

async function register(user: UserRegister):Promise<boolean> {
    try {
        await api.post('/registrar', user);
    } catch {
        return false;
    }
    return true;
}

async function connect():Promise<boolean> {
    try {
        await api.get('/connect');
    } catch {
        return false;
    }
    return true;
}


async function login(user: UserLogin):Promise<boolean> {
    try {
        const server_response = await api.post('/token', user);
        
        if (server_response.access_token) {
            localStorage.setItem('token', server_response.access_token);
            return true;
        }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return false;
    }
    return false;
}


export { register, login, connect };