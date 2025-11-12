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
      tenants: null,
    },
    {
      number: '102',
      tenants: [
        {
          name: '木元绫香',
          role: '#教师 #冰山下的火山',
          affectionValue: 0,
          appearance: '房门紧闭',
          relationshipStage: '(未曾谋面)',
          husbandStatus: '关系冷淡',
          innerMonologue: '(无，尚未察觉到你的存在)',
          triggerableEvents: '(无)',
        },
      ],
    },
    {
      number: '103',
      tenants: [
        {
          name: '柳泽特蕾莎',
          role: '#热情的异国花 #母亲',
          affectionValue: 0,
          appearance: '房门紧闭',
          relationshipStage: '(未曾谋面)',
          husbandStatus: '永久缺席',
          innerMonologue: '(无，尚未察觉到你的存在)',
          triggerableEvents: '[剧情] 寻找爱丽丝 (下午时段在庭院触发)',
        },
        {
          name: '柳泽爱丽丝',
          role: '#异国的花蕾 #女儿',
          affectionValue: 1,
          appearance: '房门紧闭。',
          relationshipStage: '(未曾谋面)',
          husbandStatus: '不适用',
          innerMonologue: '(无，尚未察觉到你的存在)',
          triggerableEvents: '(无)',
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
          name: '森瑞枝',
          role: '#未亡人 #贞洁的白百合',
          affectionValue: 0,
          appearance: '房门紧闭',
          relationshipStage: '(未曾谋面)',
          husbandStatus: '已故',
          innerMonologue: '(无，尚未察觉到你的存在)',
          triggerableEvents: '[日常] 问好 (在走廊遇见时)',
        },
      ],
    },
    {
      number: '202',
      tenants: [
        {
          name: '楠濑茧子',
          role: '#剧本的观测者 ',
          affectionValue: 0,
          appearance:
            '房门紧闭，门上贴着一张打印出来的、像素风的告示：‘NOW LOADING... 请勿打断事件触发(EVENT TRIGGER)’。门缝里飘出电烙铁加热松香和陈旧纸张的混合气味。',
          relationshipStage: '未曾谋面',
          husbandStatus: 'NPC-01(丈夫模块)',
          innerMonologue:
            '……（观测到新的可攻略角色（NPC-Key）已配置到地图‘公寓’……正在参照4channel揭示板上的‘神谕’，演算Flag树……）',
          triggerableEvents: '[剧情] 夜间扫除 (夜晚时段在2F走廊触发)',
        },
      ],
    },
    {
      number: '203',
      tenants: [
        {
          name: '三枝凛',
          role: '无垢的好奇心',
          affectionValue: 0,
          appearance: '房门紧闭。',
          relationshipStage: '(未曾谋面)',
          husbandStatus: '性能力不足',
          innerMonologue: '(无，尚未察觉到你的存在)',
          triggerableEvents: '[剧情] 夜巡的发现 (夜晚时段在2F走廊巡视触发，需【扫除】Lv.2)',
        },
      ],
    },
    { number: '204', tenants: null },
  ],
  '3': [
    { number: '301', tenants: null },
    {
      number: '302',
      tenants: [
        {
          name: '林田早纪',
          role: '寂寞的肉食兽',
          affectionValue: 0,
          appearance: '房门紧闭。',
          relationshipStage: '(未曾谋面)',
          husbandStatus: '长期缺席',
          innerMonologue: '(无，尚未察觉到你的存在)',
          triggerableEvents: '[剧情] 初识与试探 (上午时段在3F走廊巡视触发)',
        },
      ],
    },
    { number: '303', tenants: null },
    { number: '304', tenants: null },
  ],
};
