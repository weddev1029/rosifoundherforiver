export type TWeddingTimeline = {
  id: number;
  title: string;
  timeline: TTimeline[];
};

export type TTimeline = {
  id: number;
  time: string;
  description: string;
  subDescription?: string;
};
