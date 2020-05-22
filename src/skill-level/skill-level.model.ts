export interface SkillLevel {
  id: Int16Array;
  name: string;
  desc: string;
  seq: Int16Array;
}

// CREATE TABLE `skill_level` (
//     `id` int PRIMARY KEY,
//     `name` varchar(255) UNIQUE NOT NULL,
//     `desc` varchar(255),
//     `seq` int
//     );
