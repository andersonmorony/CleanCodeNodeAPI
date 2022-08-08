import { HttpRequest, HttpResponse, Controller, EmailValidator } from '../protocols'
import { MissParamError, InvalidParamError } from '../errors'
import { badRequest, serverError } from '../helpers/http-helper'

export class SingUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const { email, password, passwordConfirmation } = httpRequest.body
      const RequiredField = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of RequiredField) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissParamError(field))
        }
      }
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      return { statusCode: 200, body: '' }
    } catch (error) {
      return serverError()
    }
  }
}
