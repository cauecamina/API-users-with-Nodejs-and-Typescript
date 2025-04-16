import { Router, Request, Response  } from "express";

const router = Router();

router.get('/get', (req: Request, res: Response) => {
  res.send('Teste GET');
});

router.post('/post', (req: Request, res: Response) => {
  console.log(req.body)
  res.send(req.body);
});

router.put('/put', (req: Request, res: Response) => {
  res.json('Teste PUT');
});


router.delete('/delete', (req: Request, res: Response) => {
  res.send('Teste DELETE');
});




export {router};
