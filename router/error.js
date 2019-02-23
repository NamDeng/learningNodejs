module.exports = app => {
    const expressErrorHandler = require('express-error-handler');
    const errorHandler = expressErrorHandler({
        static: {
            '404' : '/public/error/404.html'
        };
    })
    
    return router;
};