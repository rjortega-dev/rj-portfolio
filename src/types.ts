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
  trackClick: (event: string) => void;
};

export type SkillsProps = {
  activeSkill: ActiveSkill;
  onSkillClick: (skill: string) => void;
  onClear: () => void;
};

export type ProjectsProps = {
  activeSkill: ActiveSkill;
  trackClick: (event: string) => void;
};

export type ContactProps = {
  trackClick: (event: string) => void;
};

export type NavProps = {
  isMobile: boolean;
};

export type ClickRow = {
  id: number;
  label: string;
  clicked_at: string;
  referrer: string | null;
};
