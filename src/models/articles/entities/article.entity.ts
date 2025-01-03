export interface Article {
  id: number;
  title: string;
  description: string;
  content: { title: string; text: string }[];
}
