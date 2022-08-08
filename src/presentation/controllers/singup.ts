import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissParamError } from '../errors/missing-param-error'

export class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const { name, email } = httpRequest.body
    if (!name) {
      return {
        statusCode: 400,
        body: new MissParamError('name')
      }
    }
    if (!email) {
      return {
        statusCode: 400,
        body: new MissParamError('email')
      }
    }
    return {
      statusCode: 200,
      body: ''
    }
  }
}
