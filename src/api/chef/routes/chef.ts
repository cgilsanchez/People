    export default {
        routes: [
        {
            method: 'PUT',
            path: '/chefs/:id',
            handler: 'chef.update',
            config: {
            auth: { scope: ['authenticated'] }, // Permitir solo usuarios autenticados
            },
        }
        ],
    };
    