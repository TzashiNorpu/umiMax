// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      data: [
        {
          key: 93,
          disabled: false,
          href: 'https://umijs.org/',
          avatar: '',
          name: '易敏',
          owner: 'Rodriguez',
          desc: '者往开调验期交所极白和器响。',
          callNo: 81,
          status: 71,
          updatedAt: 'tJx',
          createdAt: 'Evm)',
          progress: 99,
        },
        {
          key: 64,
          disabled: false,
          href: 'https://ant.design',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
          name: '于敏',
          owner: 'Jones',
          desc: '传然给和王市且队性化日到效然率。',
          callNo: 90,
          status: 73,
          updatedAt: 'lKxObK',
          createdAt: 'pt@(',
          progress: 95,
        },
        {
          key: 81,
          disabled: true,
          href: 'https://procomponents.ant.design/',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          name: '常芳',
          owner: 'Taylor',
          desc: '局力身例反等价方物资们而克即去。',
          callNo: 69,
          status: 68,
          updatedAt: '9WM[T',
          createdAt: '^F12%a',
          progress: 67,
        },
      ],
      total: 94,
      success: false,
    });
  },
};
