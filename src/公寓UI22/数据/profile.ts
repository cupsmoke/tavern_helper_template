import { ref } from 'vue';

export const profile = ref({
  adminName: '',
  identity: '公寓管理员',
  appearance: '黑色长发，身高165cm，常穿制服',
  statusTags: ['管理员', '认真', '亲和力'],
  money: 15000,
  currentEnergy: 5,
  maxEnergy: 15,
  corruption: 25,
  skills: [{ name: '沟通技巧', level: '3', description: '与住户沟通时效果提升' }],
});
