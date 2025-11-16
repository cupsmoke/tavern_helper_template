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
      name: '柚坂市立第三中学',
      description:
        '一栋典型的日本公立中学校舍，三层高的钢筋混凝土建筑，巨大的操场铺着暗红色的塑胶跑道。校门口的金属伸缩门旁，立着刻有校名的石碑。',
      characters: [
        {
          name: '佐藤义正',
          role: '校长',
          affectionValue: 0,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
        {
          name: '铃木健太',
          role: '不良学生',
          affectionValue: 0,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
      ],
    },
    {
      name: '柚坂市立第一小学',
      description:
        '两层楼的校舍外墙是明亮的淡黄色，窗台下摆放着学生们栽种的牵牛花，操场虽小但充满了色彩鲜艳的游乐设施。',
      characters: [
        {
          name: '山田阳子',
          role: '爱丽丝的班主任',
          affectionValue: 0,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
      ],
    },
    {
      name: '柚坂市立图书馆',
      description: '灰色水刷石外墙，巨大的玻璃窗让建筑显得通透明亮。门口有一个小小的自行车停放处。',
      characters: [],
    },
    {
      name: '室内保龄球馆',
      description: '建筑本身显得有些过时和落寞，门口的自动门上贴着褪色的活动海报。',
      characters: [],
    },
    {
      name: '坂上町派出所',
      description: '非常典型的日式交番，门口停着一辆漆成黑白色的警用自行车。',
      characters: [
        {
          name: '吉田诚',
          role: '社区巡查警察',
          affectionValue: 0,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
      ],
    },
  ],
  西侧: [
    {
      name: 'Mon Chéri',
      description: '象牙白的外墙配上天蓝色的遮阳棚，巨大的落地玻璃窗内陈列着如同艺术品般的精致蛋糕。',
      characters: [
        {
          name: '白石莉奈',
          role: '店长兼糕点师',
          affectionValue: 0,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
        {
          name: '铃木亚美',
          role: '兼职店员',
          affectionValue: 0,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
      ],
    },
    {
      name: '桑巴舞蹈教室',
      description:
        'Studio Sol e Samba舞蹈教室，楼下没有任何醒目的招牌，只有入口信箱旁贴着一张小小的桑巴舞者剪影海报，显得十分私密。',
      characters: [
        {
          name: '伊莎贝拉·渡边·丽贝卡',
          role: '舞蹈教练#日裔巴西人',
          affectionValue: 0,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
        {
          name: '加藤由美',
          role: '家庭主妇 #学员',
          affectionValue: 0,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
      ],
    },
    {
      name: '柚坂中央公园',
      description: '占地广阔，拥有大片的草坪、一个人工湖、儿童游乐区以及环绕公园的塑胶跑道。',
      characters: [],
    },
    {
      name: '三枝本家',
      description:
        '米白色的现代主义风格建筑，拥有独立的院落和车库。凛的娘家（本家）庭院里种着修剪整齐的松树，显得颇为威严；而她与丈夫的婚房，院子里则种着各色玫瑰。',
      characters: [
        {
          name: '三枝幸太郎',
          role: '三枝凛的父亲#公司社长',
          affectionValue: 0,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
        {
          name: '三枝明子',
          role: '三枝凛的母亲 #家庭主妇',
          affectionValue: 0,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
      ],
    },
  ],
  商店街: [
    { name: 'XX店铺', description: '一家神秘的店铺，不知道卖些什么。', characters: [] },
    { name: '咖啡厅', description: '悠闲的午后，来一杯香浓的咖啡。', characters: [] },
    { name: '书店', description: '书香四溢，静谧的阅读空间。', characters: [] },
  ],
  后方区域: [
    { name: '🚗月租停车场', description: ' ', characters: [] },
    { name: '河岸堤坝与桥洞', description: ' ', characters: [] },
    {
      name: '📿净心寺',
      description: '一座古老的寺庙，据说很灵验。',
      characters: [
        {
          name: '渡边海源',
          role: '净心寺住持 #得道高僧',
          affectionValue: 20,
          appearance: '慈眉善目',
          relationshipStage: '陌生',
          husbandStatus: '不适用',
          innerMonologue: '阿弥陀佛',
          triggerableEvents: '无',
        },
        {
          name: '渡边佑树',
          role: ' ',
          affectionValue: 20,
          appearance: '慈眉善目',
          relationshipStage: '陌生',
          husbandStatus: '不适用',
          innerMonologue: '阿弥陀佛',
          triggerableEvents: '无',
        },
        {
          name: '渡边美咲',
          role: '#净心寺的慈母观音',
          affectionValue: 20,
          appearance: '慈眉善目',
          relationshipStage: '陌生',
          husbandStatus: '不适用',
          innerMonologue: '阿弥陀佛',
          triggerableEvents: '无',
        },
        {
          name: '渡边小春',
          role: '#住持的孙女 #寺庙里走出的好奇宝宝',
          affectionValue: 20,
          appearance: '--',
          relationshipStage: '陌生',
          husbandStatus: '不适用',
          innerMonologue: '阿弥陀佛',
          triggerableEvents: '无',
        },
      ],
    },
    {
      name: '⛩️柚坂稻荷神社',
      description: '一座古老的寺庙，据说很灵验。',
      characters: [
        {
          name: '藤崎正臣',
          role: '神社宫司',
          affectionValue: 20,
          appearance: '慈眉善目',
          relationshipStage: '陌生',
          husbandStatus: '不适用',
          innerMonologue: '阿弥陀佛',
          triggerableEvents: '无',
        },
        {
          name: '藤崎千代',
          role: '#稻荷神社的幕后将军',
          affectionValue: 20,
          appearance: '慈眉善目',
          relationshipStage: '陌生',
          husbandStatus: '已婚',
          innerMonologue: '阿弥陀佛',
          triggerableEvents: '无',
        },
        {
          name: '藤崎美穗',
          role: '#巫女 #鸟居下的叛逆白鸽',
          affectionValue: 20,
          appearance: '-',
          relationshipStage: '陌生',
          husbandStatus: '不适用',
          innerMonologue: '阿弥陀佛',
          triggerableEvents: '无',
        },
      ],
    },
  ],
  二丁目: [
    {
      name: '宫本家',
      description: '管理员的小学同学一家',
      characters: [
        {
          name: '宫本惠子',
          role: '宫本和也的母亲 #坂上町的向日葵妈妈',
          affectionValue: 10,
          appearance: '--',
          relationshipStage: '亲切',
          husbandStatus: '--',
          innerMonologue: '--',
          triggerableEvents: '无',
        },
      ],
    },
  ],
};
