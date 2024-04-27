export interface AxiosRequest {
  url: string;
  method: string;
  params?: Record<string, any>;
  headers?: Record<string, any>;
  data?: Record<string, any>;
}

export interface AxiosResponse {
  request: AxiosRequest;
  status: number;
  statusText: string;
  data: Record<string, any>;
}

export interface AxiosError {
  response?: {
    request?: AxiosRequest;
    status: number;
    data: Record<string, any>;
  };
  request?: AxiosRequest;
  message: string;
  config: AxiosRequest;
}
