import { PhoneType, MessageType } from 'mytypes';
import type { NextApiRequest, NextApiResponse } from 'next';
import phones from '../../../../data.json';


export default function specific(req: NextApiRequest, res: NextApiResponse<PhoneType | MessageType>) {
    const { id } = req.query

    const result = phones.filter((phone) => phone.id === parseInt(id as string))

    if (result.length !== 0) {
        res.status(200).json(result[0])
    } else {
        res.status(404).json({ message: "There is no product with this id" })
    }
    
}