// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/currentUser': (req: Request, res: Response) => {
    res.status(200).send({
      name: '石敏',
      avatar: 'https://avatars1.githubusercontent.com/u/8186664?s=40&v=4',
      userid: 'BE22Af1d-3dA5-c8bE-34DA-76056C2dF409',
      email: 'q.gvs@fuqe.kp',
      signature: '者构有料明按般然年多将最需。',
      title: '六育术文划实农区铁万克下数。',
      group: '创新科技组',
      tags: [
        { key: 1, label: '算法工程师' },
        { key: 2, label: '健身达人' },
        { key: 3, label: 'IT 互联网' },
        { key: 4, label: '专注设计' },
        { key: 5, label: '专注设计' },
        { key: 6, label: '名望程序员' },
        { key: 7, label: '专注设计' },
        { key: 8, label: '傻白甜' },
        { key: 9, label: '阳光少年' },
        { key: 10, label: '大长腿' },
        { key: 11, label: '程序员' },
      ],
      notifyCount: 84,
      unreadCount: 75,
      country: '巴西',
      access: '形素论条他各你立队南斗克三济义线。',
      geographic: {
        province: { label: '西藏自治区', key: 12 },
        city: { label: '绍兴市', key: 13 },
      },
      address: '内蒙古自治区 乌海市 乌达区',
      phone: '11268434680',
    });
  },
};
