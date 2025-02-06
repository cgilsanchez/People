    export default {
        routes: [
        {
            method: 'PUT',
            path: '/chefs/:id',
            handler: 'chef.update',
            config: { auth: false }, // Desactiva autenticación temporalmente
        }
        ],
    };
    