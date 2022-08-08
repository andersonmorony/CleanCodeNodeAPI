import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'
import { InvalidParamError } from '../errors/invalid-param-error'

export class SingUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const { email } = httpRequest.body
    const RequiredField = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of RequiredField) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissParamError(field))
      }
    }
    const isValid = this.emailValidator.isValid(email)

    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }

    return { statusCode: 200, body: '' }
  }
}
