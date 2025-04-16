import { Router, Request, Response  } from "express";

const router = Router();

router.get('/get', (req: Request, res: Response) => {
  res.send('Teste GET');
});

router.post('/post', (req: Request, res: Response) => {
  res.send('Teste POST');
});

router.put('/put', (req: Request, res: Response) => {
  res.send('Teste PUT');
});


router.delete('/delete', (req: Request, res: Response) => {
  res.send('Teste DELETE');
});




export {router};
