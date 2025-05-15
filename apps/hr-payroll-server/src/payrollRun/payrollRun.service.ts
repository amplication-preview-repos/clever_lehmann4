import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PayrollRunServiceBase } from "./base/payrollRun.service.base";

@Injectable()
export class PayrollRunService extends PayrollRunServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
