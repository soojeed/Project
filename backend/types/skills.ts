import { SkillCategory, SkillLevel } from "../generated/prisma/enums";

export interface Iskills {
    id : number;
    name : string;
    level :SkillLevel;
    category : SkillCategory;
}