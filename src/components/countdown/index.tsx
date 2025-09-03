'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CountdownProps } from './types';
import { useCountdown } from './hooks/useCountdown';
import { CountdownDigit } from './countdown-digit';

export function Countdown({
  targetDate,
  timezone = 'UTC',
  className,
  onRelease,
  size = 'md',
  showLabels = true,
  theme = 'silksong',
  locale = 'en'
}: CountdownProps) {
  const { timeLeft, isReleased } = useCountdown({
    targetDate,
    timezone,
    onRelease
  });

  // Define labels based on locale
  const labels = {
    en: {
      days: 'Days',
      hours: 'Hours', 
      minutes: 'Minutes',
      seconds: 'Seconds',
      remaining: 'Time until release',
      released: '🎮 Game Released!',
      releasedDesc: 'Hollow Knight: Silksong is now available',
      lastDay: '⚡ Final day!'
    },
    zh: {
      days: '天',
      hours: '时',
      minutes: '分', 
      seconds: '秒',
      remaining: '距离发售还有',
      released: '🎮 游戏已发售！',
      releasedDesc: '《空洞骑士：丝之歌》现已正式发售',
      lastDay: '⚡ 最后一天！'
    }
  };

  const currentLabels = labels[locale as keyof typeof labels] || labels.en;

  if (isReleased) {
    return (
      <motion.div
        className={cn(
          'flex flex-col items-center space-y-4',
          className
        )}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="glass-effect p-6 rounded-xl text-center">
          <motion.h2
            className="hero-title text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {currentLabels.released}
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-sm md:text-base"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {currentLabels.releasedDesc}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(
        'flex flex-col items-center space-y-6',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: 'easeOut',
        // Respect reduced motion preference
        ...(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches && {
          duration: 0,
        })
      }}
    >
      {showLabels && (
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 0.3, 
            duration: 0.6,
            // Respect reduced motion preference
            ...(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches && {
              delay: 0,
              duration: 0,
            })
          }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-muted-foreground">
            {currentLabels.remaining}
          </h3>
        </motion.div>
      )}

      <div
        className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8"
        data-testid="countdown-timer"
      >
        <CountdownDigit
          value={timeLeft.days}
          label={currentLabels.days}
          size={size}
          theme={theme}
        />
        
        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          :
        </motion.div>
        
        <CountdownDigit
          value={timeLeft.hours}
          label={currentLabels.hours}
          size={size}
          theme={theme}
        />
        
        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          :
        </motion.div>
        
        <CountdownDigit
          value={timeLeft.minutes}
          label={currentLabels.minutes}
          size={size}
          theme={theme}
        />
        
        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          :
        </motion.div>
        
        <CountdownDigit
          value={timeLeft.seconds}
          label={currentLabels.seconds}
          size={size}
          theme={theme}
        />
      </div>

      {timeLeft.totalSeconds < 86400 && ( // Less than 24 hours
        <motion.div
          className="glass-effect px-4 py-2 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="text-sm font-medium text-primary">
            {currentLabels.lastDay}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}

export * from './types';
export { useCountdown } from './hooks/useCountdown';