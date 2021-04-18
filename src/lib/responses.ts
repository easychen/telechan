import {NowResponse} from '@vercel/node';

export function badRequest(res: NowResponse, text = 'Bad Request') {
  res.status(400).json(text);
}

export function ok(res: NowResponse, text = 'Ok') {
  res.status(200).json(text);
}
