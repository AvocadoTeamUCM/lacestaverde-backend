exports.success = function (req, res, message, status) {
    let statusCode = status || 200;
    let statusMessage = message || '';

    res.status(statusCode).send({
        error: false,
        status: status,
        body: message,
    });
}

exports.error = function (req, res, message, status) {
    let statusCode = status || 500;
    const statusMessage = message == '' ? message: 'Internal server error';

    res.status(statusCode).send({
        error: true,
        status: status ? status: 500,
        body: message ? message: 'Internal server error'
    });
}
