const express = require('express');
const createCrudController = require('./crudController');

function createCrudRouter(Model, options = {}) {
    const router = express.Router();
    const controller = createCrudController(Model);

    const middlewares = options.middlewares || {};

    router.post('/', middlewares.create || [], controller.create);
    router.get('/', middlewares.getAll || [], controller.getAll);
    router.get('/:id', middlewares.getOne || [], controller.getOne);
    router.put('/:id', middlewares.update || [], controller.update);
    router.delete('/:id', middlewares.delete || [], controller.delete);

    return router;
}

module.exports = createCrudRouter;
