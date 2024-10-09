export interface Position {
  title: string;
  time: string;
  description: string;
}

export interface Experience {
  id: number;
  company: string;
  logo: string;
  link: string;
  positions: Position[];
}
