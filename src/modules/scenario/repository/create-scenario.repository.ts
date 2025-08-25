import { create } from "domain"
import { CreateScenarioDto } from "../dto/create-scenario.dto"
import { Injectable } from "@nestjs/common";
import { Prisma } from "generated/prisma";
import { PrismaService } from "src/shared/database.ts/prisma.database";

@Injectable()
export class CreateScenarioRepositiory{
    cosntructor(private readonly prisma: PrismaService){}



 async create (data: CreateScenarioDto) {
    const scenario = await this.prisma.scenario.create({
        data,
    });
 }
}