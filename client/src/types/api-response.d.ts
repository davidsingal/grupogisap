export type StrapiResponse<T> = {
  data: {
    id: number;
    attributes: T;
  }[];
};

export type MaterialResponse = StrapiResponse<{
  code: string;
  name: string;
  delivered_at: string;
  amount: number;
}>;
