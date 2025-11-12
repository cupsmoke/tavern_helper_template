export interface Character {
  name: string;
  role: string;
  affectionValue: number;
  appearance: string;
  relationshipStage: string;
  husbandStatus: string;
  innerMonologue: string;
  triggerableEvents: string;
}
export interface Letter {
  title: string;
  from: string;
  status: '进行中' | '未开始' | '已完成';
  character: Character;
}

export const letters: Letter[] = [
  {
    title: '常态化的奇迹',
    from: 'hr',
    status: '进行中',
    character: {
      name: '叶莲娜·科瓦奇',
      role: '#twi@ninaphoenix_ #战争废墟上的白蔷薇',
      affectionValue: 10,
      appearance: '--',
      relationshipStage: '--',
      husbandStatus: '未婚',
      innerMonologue: '...',
      triggerableEvents: '回信事件[可触发]',
    },
  },
  {
    title: '天皇之妻的秘戏',
    // 天皇之妻的秘密游戏
    from: 'ar',
    status: '进行中',
    character: {
      name: '乔治安娜·索拉里',
      role: '#ins@georginagio #黄金牢笼里的黑豹',
      affectionValue: 0,
      appearance: '--',
      relationshipStage: '青梅竹马',
      husbandStatus: '已婚',
      innerMonologue: '不知道他现在过得怎么样...',
      triggerableEvents: '回信事件[可触发]',
    },
  },
  {
    title: '金丝雀筑巢记',
    // 金丝雀养成日记
    // 金丝雀筑巢记
    // 美国甜心[们]
    from: 'us',
    status: '已完成',
    character: {
      name: '贝瑟妮·琼斯',
      role: '#twi@angelicfukdoll #行走的文化炸弹 #无自觉的白桃',
      // - 美利坚甜心炸弹 (强调美式甜心与火爆身材的反差)
      // - 无自觉的白桃 (比喻白皙丰满的肉体与天真)
      affectionValue: 100,
      appearance: '--',
      relationshipStage: '陌生',
      husbandStatus: '未婚',
      innerMonologue: '...',
      triggerableEvents: '接受邀请[可触发]',
    },
  },
  {
    title: '西区的迷途白雪',
    from: 'ua',
    status: '进行中',
    character: {
      name: '奥克萨娜·佐藤',
      role: '#twi@angelicfukdoll #迷失在东方伊甸园的丰饶果实',
      // 迷航的丰饶之船
      // 西区的迷途白雪
      affectionValue: 25,
      appearance: '--',
      relationshipStage: '陌生',
      husbandStatus: '已婚',
      innerMonologue: '...',
      triggerableEvents: '--',
    },
  },
  {
    title: '庇护所的寄生花',
    from: 'ua',
    status: '进行中',
    character: {
      name: '伊莉娜·科瓦连科',
      role: '#twi@milada_moore #迷途的丰腴之鸽',
      // 迷航的丰饶之船
      // 西区的迷途白雪
      affectionValue: 25,
      appearance: '--',
      relationshipStage: '陌生',
      husbandStatus: '未婚',
      innerMonologue: '...',
      triggerableEvents: '--',
    },
  },
  {
    title: '感谢信',
    from: 'jp',
    status: '已完成',
    character: {
      name: '田中',
      role: '#职员',
      affectionValue: 70,
      appearance: '普通的上班族',
      relationshipStage: '感激',
      husbandStatus: '已婚',
      innerMonologue: '多亏了你，我才能渡过难关。',
      triggerableEvents: '无',
    },
  },
  {
    title: '马术',
    from: 'gb',
    status: '未开始',
    character: {
      name: '卡文迪许',
      role: '#马术',
      affectionValue: 0,
      appearance: '普通的上班族',
      relationshipStage: '未知',
      husbandStatus: '未婚',
      innerMonologue: '未知',
      triggerableEvents: '无',
    },
  },
];
