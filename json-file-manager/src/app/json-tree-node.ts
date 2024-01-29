export interface JsonTreeNode {
  name: string;
  children?: JsonTreeNode[];
  value?: any;
  type: 'object' | 'array' | 'value';
}