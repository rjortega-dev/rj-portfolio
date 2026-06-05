declare global {
  interface Window {
    claimEgg?: () => void;
  }
}

export type EggId = "console" | "konami" | "avatar";

export type ActiveSkill = string[];

export type EasterEgg = {
  id: EggId;
  hint: string;
};

export type Project = {
  title: string;
  year: string;
  tags: string[];
  desc: string;
  github: string;
};

export type HeroProps = {
  eggFound: EggId[];
  onAvatarClick: () => void;
  avatarClicked: boolean;
};

export type SkillsProps = {
  activeSkill: ActiveSkill;
  onSkillClick: (skill: string) => void;
  onClear: () => void;
};

export type ProjectsProps = {
  activeSkill: ActiveSkill;
};

export type NavProps = {
  isMobile: boolean;
};
