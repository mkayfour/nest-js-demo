import { Injectable } from '@nestjs/common';
import { SkillLevel } from './skill-level.model';
import * as uuid from 'uuid';
import { CreateSkillLevelDTO } from './dto/createSkillLevel.dto';

@Injectable()
export class SkillLevelService {
  private skillLevels: SkillLevel[] = [];

  getAllSkillLevels(): SkillLevel[] {
    return this.skillLevels;
  }

  getSkillLevelById(id: Int16Array): SkillLevel {
    return this.skillLevels.find(skillLevel => skillLevel.id === id);
  }

  createSkillLevel(createSkillLevelDTO: CreateSkillLevelDTO): SkillLevel[] {
    const { name, desc, seq } = createSkillLevelDTO;
    const skillLevel: SkillLevel = {
      id: uuid.v4(),
      name,
      desc,
      seq,
    };
    this.skillLevels.push(skillLevel);
    return this.skillLevels;
  }

  async deleteSkillLevelById(id: Int16Array) {
    this.skillLevels = await this.skillLevels.filter(
      skillLevel => skillLevel.id !== id,
    );
    return this.skillLevels;
  }

  updateSkillLevel(
    id: Int16Array,
    name: string,
    desc: string,
    seq: Int16Array,
  ) {
    const skillLevel = this.getSkillLevelById(id);
    skillLevel.name = name;
    skillLevel.desc = desc;
    skillLevel.seq = seq;

    return skillLevel;
  }
}
