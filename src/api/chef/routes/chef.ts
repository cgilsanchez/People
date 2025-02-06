    export default {
        routes: [
        {
            method: 'PUT',
            path: '/chefs/:id',
            handler: 'chef.update',
            config: {
            auth: {
                scope: ['authenticated'] // Asegura que los usuarios autenticados pueden acceder
            },
            },
        }
        ],
    };
    