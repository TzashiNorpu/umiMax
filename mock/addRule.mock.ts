// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 73,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://avatars1.githubusercontent.com/u/8186664?s=40&v=4',
      name: '邵强',
      owner: 'Garcia',
      desc: '派五世斗看着准发放千米支对光市始。',
      callNo: 91,
      status: 95,
      updatedAt: 'YnHFT',
      createdAt: 'rqKg',
      progress: 65,
    });
  },
};
