import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const RequiredField = ['name', 'email', 'password']
    for (const field of RequiredField) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissParamError(field))
      }
    }
    return { statusCode: 200, body: '' }
  }
}
