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
