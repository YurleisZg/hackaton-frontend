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


async function login(user: UserLogin): Promise<boolean> {
    try {
        const formData = new FormData();
        formData.append('username', user.username);
        formData.append('password', user.password);

        const server_response = await api.postFormData('/token', formData);
        if (server_response.token) {
            localStorage.setItem('token', server_response.token);
            return true;
        }
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
    return false; // Cambié el retorno a false si no hay token
}

export { register, login, connect };