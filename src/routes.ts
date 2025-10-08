import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response)=>{
    return res.json({nome: 'Tech Pizza'})
})

export {router};