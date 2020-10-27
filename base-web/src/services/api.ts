import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { API_ENDPOINT } from '../constants/environment';

export class ApiService {
  private api: AxiosInstance;

  constructor(private baseURL: string) {
    this.api = axios.create({ baseURL });
  }

  // public async login(url: string, data?: any, config?: AxiosRequestConfig) {
  //   const response = await this.post(url, data, config);
  //   console.log(response)
  //   this.api.defaults.headers.Authorization = `Bearer ${token}`;
  // }

  // public logout() {
  //   this.api.defaults.headers.Authorization = null;
  // }

  public get<T = any>(url: string, config?: AxiosRequestConfig) {
    return this.api.get<T>(url, config);
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.api.post<T>(url, data, config);
  }
}

const apiService = new ApiService(API_ENDPOINT);
export default apiService;
