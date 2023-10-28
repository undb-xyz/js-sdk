import { IUndbSDKConfig } from "../config";
import { DEFAULT_URL } from "../constants";

export const getBaseUrl = (config: IUndbSDKConfig) =>
  config.baseURL ?? DEFAULT_URL;
