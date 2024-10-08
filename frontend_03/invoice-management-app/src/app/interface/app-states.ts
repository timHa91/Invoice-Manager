import {DataState} from "../enum/datastate.enum";
import {User} from "./user";


export interface LoginState {
  dataState: DataState;
  loginSuccess?: boolean;
  error?: string;
  message?: string;
  phone?: string;
}

export interface CustomHttpResponse<T> {
  timeStamp: Date;
  statusCode: number;
  status: string;
  message: string;
  reason?: string;
  data?: T;
}

export interface Profile {
  user: User;
  events: UserEvent[];
  role: Role[];
  access_token: string;
  refresh_token: string;
}

