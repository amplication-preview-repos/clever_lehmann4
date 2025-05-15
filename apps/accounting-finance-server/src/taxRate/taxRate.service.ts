import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaxRateServiceBase } from "./base/taxRate.service.base";

@Injectable()
export class TaxRateService extends TaxRateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
