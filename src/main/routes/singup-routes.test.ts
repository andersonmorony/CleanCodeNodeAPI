import request from 'supertest'
import app from '../config/app'

describe('Singup Router', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/singup')
      .send({
        name: 'Anderson',
        email: 'anderson@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
