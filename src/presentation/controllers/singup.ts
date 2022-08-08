import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const { name, email } = httpRequest.body
    if (!name) {
      return badRequest(new MissParamError('name'))
    }
    if (!email) {
      return badRequest(new MissParamError('email'))
    }
    return {
      statusCode: 200,
      body: ''
    }
  }
}
