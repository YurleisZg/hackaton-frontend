const baseUrl = '/api';

const api = {
    get: async (url: string) => {
        const response = await fetch(baseUrl+url);
        if (!response.ok) {
            throw new Error('Failed to fetch data, error: ' + response.statusText);
        }
        return response.json();
    },

    post: async (url: string, data:unknown) => {
        const response = await fetch(baseUrl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json', 
                'Access-Control-Allow-Origin': ''
              },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to post data, error: ' + response.statusText);
        }
        return response.json();
    },

    auth_post:  async (url: string, teacherData: unknown) => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
    
        const response = await fetch(baseUrl + url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teacherData)
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch data, error: ' + response.statusText);
        }
        return response.json();
    },

    auth_get: async (url: string) => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
    
        const response = await fetch(baseUrl + url, {
            method: 'POST', 
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json' // Asegúrate de indicar el tipo de contenido
            }
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch data, error: ' + response.statusText);
        }
        return response.json();
    }
};

export default api;