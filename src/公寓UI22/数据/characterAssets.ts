export const characterAvatarMap: Record<string, string> = {
  张伟: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
  王芳: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
  // ... 其他角色的头像URL
};

export const characterPhotosMap: Record<string, { photos: string[]; descriptions: string[] }> = {
  张伟: {
    photos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
    ],
    descriptions: ['下班后的休闲时光'],
  },
  // ... 其他角色的照片数据
};
