// @ts-ignore
import { Request, Response } from 'express';

export default {
  'PUT /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 90,
      disabled: false,
      href: 'https://procomponents.ant.design/',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      name: '武秀英',
      owner: 'White',
      desc: '住维科备写定而般决共压专二拉离上建温。',
      callNo: 95,
      status: 70,
      updatedAt: '&zuZUR',
      createdAt: '9muQ',
      progress: 95,
    });
  },
};
