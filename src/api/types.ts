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
