import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { SkillLevelService } from './skill-level.service';
import { SkillLevel } from './skill-level.model';
import { CreateSkillLevelDTO } from './dto/createSkillLevel.dto';

@Controller('skill-level')
export class SkillLevelController {
  constructor(private skillLevelService: SkillLevelService) {}

  @Get()
  getAllSkillLevels(): SkillLevel[] {
    return this.skillLevelService.getAllSkillLevels();
  }

  @Post()
  createSkillLevel(
    @Body() createSkillLevelDTO: CreateSkillLevelDTO,
  ): SkillLevel[] {
    return this.skillLevelService.createSkillLevel(createSkillLevelDTO);
  }

  @Get('/:id')
  getSkillLevelById(@Param('id') id: Int16Array) {
    return this.skillLevelService.getSkillLevelById(id);
  }

  @Delete('/:id')
  deleteSkillLevelById(@Param('id') id: Int16Array) {
    return this.skillLevelService.deleteSkillLevelById(id);
  }

  @Patch('/:id')
  updateSkillLevel(
    @Param('id') id: Int16Array,
    @Body('name') name: string,
    @Body('desc') desc: string,
    @Body('seq') seq: Int16Array,
  ) {
    return this.skillLevelService.updateSkillLevel(id, name, desc, seq);
  }
}
