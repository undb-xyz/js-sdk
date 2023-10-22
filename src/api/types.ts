export interface ICreateRecordDTO {
  id?: string
  values: Record<string, any>
}

export interface IUpdateRecordDTO {
  id: string
  values: Record<string, any>
}
