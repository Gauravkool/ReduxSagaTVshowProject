export type Show = {
  id: number;
  name: string;
  rating: { average?: number };
  genres: string[];
  image: { medium?: string; original?: string };
  summary?: string;
};
