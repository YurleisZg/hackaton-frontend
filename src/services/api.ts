const baseUrl = 'http://localhost:8000/api/';

const api = {
    get: async (url: string) => {
        const response = await fetch(baseUrl+url);
        if (!response.ok) {
            throw new Error('Failed to fetch data, error: ' + response.statusText);
        }
        return response.json();
    },

    post: async (url: string, data: unknown) => {
        const response = await fetch(baseUrl+url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to post data, error: ' + response.statusText);
        }
        return response.json();
    },

    auth_get: async (url: string) => {

        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch(baseUrl+url, {headers: {'Authorization': 'Bearer ' + token}});
        if (!response.ok) {
            throw new Error('Failed to fetch data, error: ' + response.statusText);
        }
        return response.json();
    }
}

export default api;