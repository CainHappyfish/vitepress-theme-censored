export interface Title {
  text: string;
  id: string;
  level: number;
  children: Title[];
  scrollTop: number;
  parent?: Title; // 可选的父级引用
}
