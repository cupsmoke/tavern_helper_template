export interface Npc {
  name: string;
  role: string;
  affectionValue: number;
  appearance: string;
  relationshipStage: string;
  husbandStatus: string;
  innerMonologue: string;
  triggerableEvents: string;
}

export const npcs: Npc[] = [
  {
    name: '刘阿姨',
    role: '清洁工',
    affectionValue: 80,
    appearance: '和蔼可亲，总是面带微笑',
    relationshipStage: '亲近',
    husbandStatus: '已婚',
    innerMonologue: '看着这些年轻人，就像看到自己的孩子一样。',
    triggerableEvents: '家常菜分享事件[可触发]',
  },
];
