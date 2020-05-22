import { Module } from '@nestjs/common';
import { SkillLevelController } from './skill-level.controller';
import { SkillLevelService } from './skill-level.service';

@Module({
  controllers: [SkillLevelController],
  providers: [SkillLevelService]
})
export class SkillLevelModule {}
