'use client';

import { useState, useEffect, useRef } from 'react';
import { TimeLeft, CountdownConfig } from '../types';

export function useCountdown({ targetDate, timezone = 'UTC', onRelease, forceReleased = false }: CountdownConfig) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isReleased: forceReleased,
    totalSeconds: 0,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onReleaseCalledRef = useRef(false);

  const calculateTimeLeft = (): TimeLeft => {
    // For SSR compatibility, return default values during server rendering
    if (typeof window === 'undefined') {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isReleased: forceReleased,
        totalSeconds: 0,
      };
    }
    
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isReleased: true,
        totalSeconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const totalSeconds = Math.floor(difference / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      isReleased: false,
      totalSeconds,
    };
  };

  useEffect(() => {
    if (forceReleased) {
      // If force released, set released state and skip timer logic
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isReleased: true,
        totalSeconds: 0,
      });
      
      // Call onRelease callback immediately if forced
      if (!onReleaseCalledRef.current && onRelease) {
        onReleaseCalledRef.current = true;
        onRelease();
      }
      return;
    }

    const updateTimer = () => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Call onRelease callback only once when the countdown reaches zero
      if (newTimeLeft.isReleased && !onReleaseCalledRef.current && onRelease) {
        onReleaseCalledRef.current = true;
        onRelease();
      }
    };

    // Initial calculation
    updateTimer();

    // Set up interval for updates
    intervalRef.current = setInterval(updateTimer, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [targetDate, onRelease, forceReleased]);

  // Format numbers with leading zeros
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return {
    timeLeft,
    formatNumber,
    isReleased: timeLeft.isReleased,
  };
}