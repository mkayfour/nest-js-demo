import { Module } from '@nestjs/common';
import { SkillLevelModule } from './skill-level/skill-level.module';

@Module({
  imports: [SkillLevelModule],
})
export class AppModule {}
