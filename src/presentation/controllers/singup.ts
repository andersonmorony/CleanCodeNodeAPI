import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class SingUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const RequiredField = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of RequiredField) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissParamError(field))
      }
    }
    return { statusCode: 200, body: '' }
  }
}
