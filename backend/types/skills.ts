import { SkillCategory, SkillLevel } from "../generated/prisma/enums";

export interface Iskilss  {
    id : number;
    name : string;
    level :SkillLevel;
    category : SkillCategory;
}