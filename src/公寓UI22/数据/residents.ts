export interface Tenant {
  name: string;
  role: string;
  affectionValue: number;
  appearance: string;
  relationshipStage: string;
  husbandStatus: string;
  innerMonologue: string;
  triggerableEvents: string;
}

export interface Room {
  number: string;
  tenants: Tenant[] | null;
}

export const rooms: Record<string, Room[]> = {
  '1': [
    {
      number: '101',
      tenants: [
        {
          name: '张伟',
          role: '程序员 #不好',
          affectionValue: 65,
          appearance: '戴眼镜，略显疲惫',
          relationshipStage: '朋友',
          husbandStatus: '未婚',
          innerMonologue: '最近工作压力好大，真想找个人聊聊...',
          triggerableEvents: '深夜加班事件[可触发]',
        },
      ],
    },
    { number: '102', tenants: null },
    {
      number: '103',
      tenants: [
        {
          name: '王芳',
          role: '教师',
          affectionValue: 80,
          appearance: '温柔知性',
          relationshipStage: '邻居',
          husbandStatus: '已婚',
          innerMonologue: '今天的课程很顺利。',
          triggerableEvents: '周末辅导事件[可触发]',
        },
      ],
    },
    { number: '104', tenants: null },
  ],
  '2': [
    {
      number: '201',
      tenants: [
        {
          name: '李娜',
          role: '医生',
          affectionValue: 70,
          appearance: '白大褂，一丝不苟',
          relationshipStage: '普通',
          husbandStatus: '未婚',
          innerMonologue: '希望大家都能健健康康的。',
          triggerableEvents: '健康咨询事件[可触发]',
        },
      ],
    },
    {
      number: '202',
      tenants: [
        {
          name: '刘强',
          role: '健身教练',
          affectionValue: 90,
          appearance: '身材健硕，阳光开朗',
          relationshipStage: '好友',
          husbandStatus: '未婚',
          innerMonologue: '今天也要元气满满！',
          triggerableEvents: '一起健身事件[可触发]',
        },
      ],
    },
    { number: '203', tenants: null },
    {
      number: '204',
      tenants: [
        {
          name: '陈静',
          role: '自由职业者',
          affectionValue: 50,
          appearance: '艺术气息，特立独行',
          relationshipStage: '陌生',
          husbandStatus: '未知',
          innerMonologue: '灵感，快到我碗里来！',
          triggerableEvents: '画展邀请事件[可触发]',
        },
      ],
    },
  ],
  '3': [
    { number: '301', tenants: null },
    {
      number: '302',
      tenants: [
        {
          name: '杨勇',
          role: '外卖员',
          affectionValue: 60,
          appearance: '行色匆匆，皮肤黝黑',
          relationshipStage: '认识',
          husbandStatus: '未知',
          innerMonologue: '下一单，冲！',
          triggerableEvents: '雨天送餐事件[可触发]',
        },
        {
          name: '杨勇是',
          role: '外卖员',
          affectionValue: 60,
          appearance: '行色匆匆，皮肤黝黑',
          relationshipStage: '认识',
          husbandStatus: '未知',
          innerMonologue: '下一单，冲！',
          triggerableEvents: '雨天送餐事件[可触发]',
        },
      ],
    },
    { number: '303', tenants: null },
    { number: '304', tenants: null },
  ],
};
