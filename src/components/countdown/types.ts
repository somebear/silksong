export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isReleased: boolean;
  totalSeconds: number;
}

export interface CountdownConfig {
  targetDate: string;
  timezone?: string;
  onRelease?: () => void;
}

export interface CountdownProps {
  targetDate: string;
  timezone?: string;
  className?: string;
  onRelease?: () => void;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  theme?: 'default' | 'silksong';
  locale?: string;
}

export interface CountdownDigitProps {
  value: number;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'default' | 'silksong';
}