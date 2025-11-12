interface Character {
  name: string;
  role: string;
  affectionValue: number;
  appearance: string;
  relationshipStage: string;
  husbandStatus: string;
  innerMonologue: string;
  triggerableEvents: string;
}

export interface Location {
  name: string;
  description: string;
  characters: Character[];
}

export const locations: Record<string, Location[]> = {
  东侧: [
    {
      name: 'XX寺庙',
      description: '一座古老的寺庙，据说很灵验。',
      characters: [
        {
          name: '扫地僧',
          role: '僧人',
          affectionValue: 50,
          appearance: '慈眉善目',
          relationshipStage: '陌生',
          husbandStatus: '出家',
          innerMonologue: '阿弥陀佛',
          triggerableEvents: '无',
        },
      ],
    },
    { name: '公园', description: '一个适合散步和放松的好去处。', characters: [] },
  ],
  西侧: [
    { name: '图书馆', description: '知识的海洋，精神的家园。', characters: [] },
    { name: '体育馆', description: '挥洒汗水，释放活力的地方。', characters: [] },
  ],
  商店街: [
    { name: 'XX店铺', description: '一家神秘的店铺，不知道卖些什么。', characters: [] },
    { name: '咖啡厅', description: '悠闲的午后，来一杯香浓的咖啡。', characters: [] },
    { name: '书店', description: '书香四溢，静谧的阅读空间。', characters: [] },
  ],
};
