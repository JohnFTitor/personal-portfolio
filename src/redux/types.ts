export type Status = 'idle' | 'loading' | 'completed' | 'error';

export interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
  live: string;
  source: string;
}
