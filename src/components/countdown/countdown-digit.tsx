'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CountdownDigitProps } from './types';

export function CountdownDigit({ 
  value, 
  label, 
  size = 'md', 
  theme = 'silksong' 
}: CountdownDigitProps) {
  const respectsReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl lg:text-5xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
  };

  const containerSizeClasses = {
    sm: 'min-w-[60px] min-h-[60px] p-2',
    md: 'min-w-[80px] min-h-[80px] p-3',
    lg: 'min-w-[100px] min-h-[100px] p-4'
  };

  const labelSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <motion.div
        className={cn(
          'glass-effect flex items-center justify-center rounded-lg',
          'border border-primary/20 bg-background/40 backdrop-blur-md',
          containerSizeClasses[size],
          theme === 'silksong' && 'silksong-glow'
        )}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: respectsReducedMotion ? 0 : 0.5, 
          ease: 'easeOut' 
        }}
      >
        <motion.span
          className={cn(
            'font-mono font-bold',
            sizeClasses[size],
            theme === 'silksong' ? 'countdown-digit' : 'text-primary'
          )}
          key={value} // This ensures animation triggers on value change
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: respectsReducedMotion ? 0 : 0.3, 
            ease: 'easeOut' 
          }}
          data-testid={`countdown-${label.toLowerCase()}`}
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
      </motion.div>
      
      <motion.span
        className={cn(
          'font-medium text-muted-foreground uppercase tracking-wider',
          labelSizeClasses[size]
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: respectsReducedMotion ? 0 : 0.2, 
          duration: respectsReducedMotion ? 0 : 0.5 
        }}
      >
        {label}
      </motion.span>
    </div>
  );
}