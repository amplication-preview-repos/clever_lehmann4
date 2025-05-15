import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockEntryServiceBase } from "./base/stockEntry.service.base";

@Injectable()
export class StockEntryService extends StockEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
