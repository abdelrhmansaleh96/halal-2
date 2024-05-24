import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface ApiResponse<T = any> {
  data: T | null;
  error: string | null;
}

export class ApiClient {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        accessToken: localStorage.getItem("token"),
      },
    });

    // Interceptors for central error handling
    this.api.interceptors.response.use(this.handleResponse, this.handleError);
  }

  private handleResponse<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    return response;
  }

  private handleError(error: any): Promise<ApiResponse<null>> {
    const errorMessage = error.response?.data?.message || "An error occurred.";
    return Promise.reject({ data: null, error: errorMessage });
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.get<T>(endpoint, config);
      return { data: response.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.response?.data?.message || "An error occurred.",
      };
    }
  }

  async post<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.post<T>(endpoint, data, config);
      return { data: response.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.response?.data?.message || "An error occurred.",
      };
    }
  }

  async put<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.put<T>(endpoint, data, config);
      return { data: response.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.response?.data?.message || "An error occurred.",
      };
    }
  }

  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.delete<T>(endpoint, config);
      return { data: response.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.response?.data?.message || "An error occurred.",
      };
    }
  }
}
