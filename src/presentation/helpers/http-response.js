const MissingParamError = require('./missing-param-error')
const UnathorizedError = require('./unauthorized-error')

module.exports = class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static unathorizedError () {
    return {
      statusCode: 401,
      body: new UnathorizedError()
    }
  }

  static ok () {
    return {
      statusCode: 200
    }
  }
}
