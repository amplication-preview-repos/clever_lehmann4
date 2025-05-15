import { PayrollRunWhereInput } from "./PayrollRunWhereInput";
import { PayrollRunOrderByInput } from "./PayrollRunOrderByInput";

export type PayrollRunFindManyArgs = {
  where?: PayrollRunWhereInput;
  orderBy?: Array<PayrollRunOrderByInput>;
  skip?: number;
  take?: number;
};
