export type DataResponse<T> = {
  data: {
    id: number;
    attributes: T;
  };
};

export type StrapiResponse<T> = {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: {
      total: number;
      page: number;
      pageSize: number;
      pageCount: number;
    };
  };
};

export type Material = {
  code: string;
  name: string;
  delivered_at: string;
  amount: number;
};

export type MaterialResponse = StrapiResponse<Material>;

export type WorkOrder = {
  code: string;
  order_date: string;
};

export type WorkOrderResponse = StrapiResponse<{
  code: string;
  order_date: string;
}>;

export type MaterialAllocationResponse = StrapiResponse<{
  used_at: string;
  amount: number;
  material: DataResponse<Material>;
  work_order: DataResponse<WorkOrder>;
}>;
