import { FC, ReactElement, useCallback, useEffect } from "react";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { useNotification } from "./hooks/useNotification";

interface Props {
  children: ReactElement;
}

export type Result<T> = {
  code: number;
  msg: string;
  data: T;
};

const BASE_URL = `http://localhost:5002/api`;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

const WithAxios: FC<Props> = ({ children }: Props): ReactElement => {
  const { display } = useNotification();

  const initAxiosRequestInterceptors = useCallback(() => {
    instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("userToken") as string;
        if (token) {
          config.headers!.Authorization = token;
        }

        return config;
      },
      (err: any) => {
        return Promise.reject(err);
      }
    );
  }, []);

  const initAxiosResponseInterceptors = useCallback(() => {
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data.code === 200) return res.data;
        else {
          display({
            message: res.data?.msg,
            severity: "warning",
          });
          return Promise.reject(res.data?.msg);
        }
      },
      (err: any) => {
        // handle http error code
        console.log("why");
        let message = "";
        switch (err.response.status) {
          case 400:
            message = "Bad Request(400)";
            break;
          case 401:
            message = "Unauthorized(401)";
            // back to login page
            break;
          case 403:
            message = "Forbidden(403)";
            break;
          case 404:
            message = "Not Found(404)";
            break;
          case 408:
            message = "Request Timeout(408)";
            break;
          case 500:
            message = "Internal Server Error(500)";
            break;
          case 501:
            message = "Server Not Implemented(501)";
            break;
          case 502:
            message = "Bad Gateway(502)";
            break;
          case 503:
            message = "Service Unavailable(503)";
            break;
          case 504:
            message = "Gateway Timeout(504)";
            break;
          case 505:
            message = "HTTP Version Not Supported(505)";
            break;
          default:
            message = `Unknown Error (${err.response.status})!`;
        }
        // Global Notification
        display({
          message: `${message} ${err.response.data}`,
          severity: "error",
        });
        return Promise.reject(err.response);
      }
    );
  }, [display]);

  useEffect(() => {
    initAxiosRequestInterceptors();
    initAxiosResponseInterceptors();
  }, [initAxiosRequestInterceptors, initAxiosResponseInterceptors]);

  return children;
};

export function get<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<Result<T>> {
  return instance.get(url, config);
}

export function post<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<Result<T>> {
  return instance.post(url, data, config);
}

export function put<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<Result<T>> {
  return instance.put(url, data, config);
}

export default WithAxios;
