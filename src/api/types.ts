export interface ICreateRecordDTO {
  id?: string;
  values: Record<string, any>;
}

export interface IUpdateRecordDTO {
  id: string;
  values: Record<string, any>;
}

export interface IDeleteRecordsDTO {
  ids: string[];
}

export interface ICreateRecordsDTO {
  records: ICreateRecordDTO[];
}

export interface IUpdateRecordsDTO {
  records: IUpdateRecordDTO[];
}

export interface IDuplidateRecordsDTO {
  ids: string[];
}

export type ISubscribeCallback = (err: any, data: any) => void;

export type IWebhookTargetType = "table";

export interface IWebbook {
  id: string;
  name: string;
  url: string;
  method: "POST" | "PATCH";
  enabled: boolean;
  target: IWebhookTargetType;
  headers?: Record<string, string>;
  filter?: any;
}
