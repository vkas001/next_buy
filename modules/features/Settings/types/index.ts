export interface SettingItem {
  id: string;
  label: string;
  icon: string;
  type: "navigate" | "toggle" | "info";
  value?: boolean;
  onPress?: () => void;
}

export interface SettingSection {
  title: string;
  items: SettingItem[];
}
