export interface PlatformConfig {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  url: string;
  icon: string;
  color: string;
}

export const PLATFORMS: PlatformConfig[] = [
  {
    id: 'steam',
    name: {
      en: 'Steam',
      zh: 'Steam'
    },
    url: 'https://store.steampowered.com/app/1030300',
    icon: '🎮',
    color: 'oklch(0.5323 0.1865 28.1976)'
  },
  {
    id: 'playstation',
    name: {
      en: 'PlayStation',
      zh: 'PlayStation'
    },
    url: 'https://store.playstation.com/en-us/concept/10005908',
    icon: '🎯',
    color: 'oklch(0.4000 0.2000 250.0000)'
  },
  {
    id: 'xbox',
    name: {
      en: 'Xbox',
      zh: 'Xbox'
    },
    url: 'https://www.xbox.com/en-us/games/store/hollow-knight-silksong/9n116v0599hb',
    icon: '🎪',
    color: 'oklch(0.6000 0.1500 120.0000)'
  },
  {
    id: 'nintendo',
    name: {
      en: 'Nintendo Switch',
      zh: 'Nintendo Switch'
    },
    url: 'https://www.nintendo.com/games/detail/hollow-knight-silksong-switch/',
    icon: '🎨',
    color: 'oklch(0.7000 0.1800 320.0000)'
  }
];

export const getPlatforms = (): PlatformConfig[] => {
  return PLATFORMS;
};