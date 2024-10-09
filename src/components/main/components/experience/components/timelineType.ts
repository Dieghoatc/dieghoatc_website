export interface Position {
  title: string;
  time: string;
  description: string;
}

export interface Experience {
  company: string;
  logo: string;
  link: string;
  positions: Position[];
}
