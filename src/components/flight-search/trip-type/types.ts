// types.ts
import type {ReactNode} from "react";

export type ToggleItem = {
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
};
