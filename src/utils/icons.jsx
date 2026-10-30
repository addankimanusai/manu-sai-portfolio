import React from 'react';
import {
  SiOpenjdk,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiLeetcode
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { Award, Code2, Database, Layers, Terminal } from 'lucide-react';

export const getSkillIcon = (iconName, className = "w-6 h-6") => {
  switch (iconName) {
    case 'SiOpenjdk':
      return <SiOpenjdk className={className} />;
    case 'SiJavascript':
      return <SiJavascript className={className} />;
    case 'SiPostgresql':
      return <SiPostgresql className={className} />;
    case 'SiReact':
      return <SiReact className={className} />;
    case 'SiHtml5':
      return <SiHtml5 className={className} />;
    case 'FaCss3Alt':
      return <FaCss3Alt className={className} />;
    case 'SiTailwindcss':
      return <SiTailwindcss className={className} />;
    case 'SiMysql':
      return <SiMysql className={className} />;
    case 'SiMongodb':
      return <SiMongodb className={className} />;
    case 'SiGit':
      return <SiGit className={className} />;
    case 'SiGithub':
      return <SiGithub className={className} />;
    case 'VscVscode':
      return <VscVscode className={className} />;
    case 'SiVercel':
      return <SiVercel className={className} />;
    case 'SiLeetcode':
      return <SiLeetcode className={className} />;
    case 'Award':
      return <Award className={className} />;
    default:
      return <Code2 className={className} />;
  }
};
