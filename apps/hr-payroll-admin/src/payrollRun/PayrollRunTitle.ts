import { PayrollRun as TPayrollRun } from "../api/payrollRun/PayrollRun";

export const PAYROLLRUN_TITLE_FIELD = "id";

export const PayrollRunTitle = (record: TPayrollRun): string => {
  return record.id?.toString() || String(record.id);
};
