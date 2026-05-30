export type EggId = "console" | "konami" | "avatar";

export type EasterEgg = {
  id: EggId;
  hint: string;
};

export type HeroProps = {
  eggFound: EggId[];
  onAvatarClick: () => void;
  avatarClicked: boolean;
};

declare global {
  interface Window {
    claimEgg?: () => void;
  }
}
export type Project = {
  title: string;
  year: string;
  tags: string[];
  desc: string;
  github: string;
};

export type SkillsProps = {
  activeSkill: ActiveSkill;
  onSkillClick: (skill: string) => void;
  onClear: () => void;
};

export type ProjectsProps = {
  activeSkill: ActiveSkill;
};

export type ActiveSkill = string[];
