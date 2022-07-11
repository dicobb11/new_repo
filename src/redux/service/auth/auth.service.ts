import { AxiosResponse } from "axios";
import axios from "axios";
import { $api, DEV_API } from "../../../api";
import { ILogin } from "../../../types/IAuth";
import { ILoginResponse } from "../../../types/ILogin";

export class AuthService {
  static async login(creds: ILogin): Promise<AxiosResponse<ILoginResponse>> {
    return $api.post<ILoginResponse>(`auth/login`, creds);
  }

  static async refresh(): Promise<AxiosResponse<ILoginResponse>> {
    return axios.get<ILoginResponse>(`${DEV_API}auth/refresh`);
  }

  static async logout(): Promise<AxiosResponse<ILoginResponse>> {
    return axios.get(`${DEV_API}auth/logout`);
  }

  // static async logout(): Promise<AxiosResponse<ILoginResponse>> {
  //   return axios.get(`${DEV_API}auth/logout`, { withCredentials: true });
  // }
}
