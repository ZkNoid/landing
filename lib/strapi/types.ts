export interface IStrapiData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IStrapiResponse {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface IStrapiImage {
  provider_metadata: {
    public_id: string;
  };
}
