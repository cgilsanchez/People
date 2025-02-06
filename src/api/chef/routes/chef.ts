    export default {
        routes: [
        {
            method: 'GET',
            path: '/chefs',
            handler: 'chef.find',
            config: { auth: false },
        },
        {
            method: 'GET',
            path: '/chefs/:id',
            handler: 'chef.findOne',
            config: { auth: false },
        },
        {
            method: 'POST',
            path: '/chefs',
            handler: 'chef.create',
            config: { auth: false },
        },
        {
            method: 'PUT',
            path: '/chefs/:id',
            handler: 'chef.update',
            config: { auth: false },
        },
        {
            method: 'DELETE',
            path: '/chefs/:id',
            handler: 'chef.delete',
            config: { auth: false },
        },
        ],
    };
    