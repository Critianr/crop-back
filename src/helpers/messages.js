let msg = {
    serverError:{
        code: 500,
        error: true,
        msg: 'Internal server error'
    },
    badRequest:{
        code: 400,
        error: true,
        msg: 'Data Error'
    },
    fieldsRequired:{
        code: 400,
        error: true,
        msg: 'Please enter all fields'
    },
    authFailed:{
        code: 401,
        error: true,
        msg: 'Auth Fail'
    }
}
module.exports = msg