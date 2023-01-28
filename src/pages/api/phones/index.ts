import { PhoneType } from 'mytypes';
import type { NextApiRequest, NextApiResponse } from 'next';
import phones from '../../../../data.json';

export default function all(req: NextApiRequest, res: NextApiResponse<PhoneType[]>){
  res.status(200).json(phones)
}