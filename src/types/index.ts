export type Project = Partial<{
  name: string; 
  link: string; 
  tags: ('2d' | '3d'| 'video'| 'short' | string)[];
  imageName: string;
}>;