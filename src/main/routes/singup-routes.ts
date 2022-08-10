import { Router, Response, Request } from 'express'

export default (router: Router): void => {
  router.post('/singup', (req: Request, res: Response) => {
    res.json({ ok: 'ok' })
  })
}
