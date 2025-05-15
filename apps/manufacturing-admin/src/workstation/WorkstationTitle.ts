import { Workstation as TWorkstation } from "../api/workstation/Workstation";

export const WORKSTATION_TITLE_FIELD = "id";

export const WorkstationTitle = (record: TWorkstation): string => {
  return record.id?.toString() || String(record.id);
};
