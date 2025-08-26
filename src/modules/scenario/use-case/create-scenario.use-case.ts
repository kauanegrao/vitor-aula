import { create } from 'domain';
import { Scenario } from './../../../../generated/prisma/index.d';
import { Injectable, Logger } from "@nestjs/common";
import { CreateScenarioRepositiory } from "../repository/create-scenario.repository";
import { CreateScenarioDto } from "../dto/create-scenario.dto";

@Injectable
export class CreateScenarioUseCase{
    constructor(
        private readonly createScenarioRepository: CreateScenarioRepositiory,
        private readonly logger: Logger,
    ) {}

    async execute (data: CreateScenarioDto){
        try{
            const  scenario = await this.createScenarioRepositiory.create(data);
        
        } catch (error) {]
            this.logger.error(error);
            throw error;
        }
        
    }
}
