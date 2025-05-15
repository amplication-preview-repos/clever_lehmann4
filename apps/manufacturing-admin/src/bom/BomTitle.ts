import { Bom as TBom } from "../api/bom/Bom";

export const BOM_TITLE_FIELD = "id";

export const BomTitle = (record: TBom): string => {
  return record.id?.toString() || String(record.id);
};
