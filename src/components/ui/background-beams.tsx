"use client";

import React, { useMemo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

export function BackgroundBeams({ className, children, intensity = "medium" }: BackgroundBeamsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate random values for each instance, but only on client side
  const randomValues = useMemo(() => {
    if (!isClient) {
      // Return default values for SSR to prevent hydration mismatch
      return {
        verticalPositions: [25, 50, 75, 16.67, 83.33, 8.33, 91.67, 40, 60],
        horizontalPositions: [25, 66.67, 50, 15, 85],
        diagonalRotations: [12, -12, 6, -6, 20, -25],
        radialPositions: [
          { top: 25, left: 33.33 },
          { top: 75, left: 66.67 },
          { top: 50, left: 16.67 },
          { top: 10, left: 80 },
          { top: 90, left: 20 }
        ],
        delays: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        durations: [10, 12, 8, 14, 9, 11, 13, 7, 15, 6, 16, 5, 17, 4, 18],
        opacities: [0.3, 0.4, 0.2, 0.5, 0.1, 0.35, 0.25, 0.45, 0.15, 0.4, 0.6, 0.3, 0.7, 0.2, 0.8],
        sizes: [1, 1.5, 0.8, 2.2, 0.5]
      };
    }

    const generateRandomPosition = () => Math.random() * 100;
    const generateRandomDelay = () => Math.random() * 15; // 0-15 seconds delay
    const generateRandomDuration = () => 6 + Math.random() * 12; // 6-18 seconds
    const generateRandomOpacity = () => 0.2 + Math.random() * 0.6; // 0.2-0.8
    const generateRandomRotation = () => -45 + Math.random() * 90; // -45 to 45 degrees
    const generateRandomSize = () => 0.3 + Math.random() * 2.2; // 0.3-2.5px
    
    return {
      verticalPositions: Array.from({ length: 9 }, generateRandomPosition), // More vertical beams
      horizontalPositions: Array.from({ length: 5 }, generateRandomPosition), // More horizontal beams
      diagonalRotations: Array.from({ length: 6 }, generateRandomRotation), // More diagonal beams
      radialPositions: Array.from({ length: 5 }, () => ({ // More radial beams
        top: generateRandomPosition(),
        left: generateRandomPosition()
      })),
      delays: Array.from({ length: 15 }, generateRandomDelay), // More delay variations
      durations: Array.from({ length: 15 }, generateRandomDuration), // More duration variations
      opacities: Array.from({ length: 15 }, generateRandomOpacity), // More opacity variations
      sizes: Array.from({ length: 5 }, generateRandomSize) // More size variations
    };
  }, [isClient]);

  const getIntensityClasses = () => {
    switch (intensity) {
      case "subtle":
        return {
          vertical: "via-primary/20",
          horizontal: "via-primary/10",
          diagonal: "via-primary/8",
          overlay: "from-background/10 via-transparent to-background/20"
        };
      case "strong":
        return {
          vertical: "via-primary/60",
          horizontal: "via-primary/40",
          diagonal: "via-primary/30",
          overlay: "from-background/30 via-transparent to-background/40"
        };
      default: // medium
        return {
          vertical: "via-primary/40",
          horizontal: "via-primary/25",
          diagonal: "via-primary/20",
          overlay: "from-background/20 via-transparent to-background/30"
        };
    }
  };

  const intensityClasses = getIntensityClasses();

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Animated beams */}
      <div className="absolute inset-0">
        {/* Random vertical beams */}
        {randomValues.verticalPositions.map((position, index) => (
          <div
            key={`vertical-${index}`}
            className="absolute top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent shadow-none"
            style={{
              left: `${position}%`,
              animation: `beam-${(index % 7) + 1} ${randomValues.durations[index]}s ease-in-out infinite`,
              animationDelay: `${randomValues.delays[index]}s`,
              opacity: randomValues.opacities[index]
            }}
          />
        ))}
        
        {/* Random horizontal beams */}
        {randomValues.horizontalPositions.map((position, index) => (
          <div
            key={`horizontal-${index}`}
            className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-none shadow-primary/15"
            style={{
              top: `${position}%`,
              animation: `beam-horizontal-${(index % 3) + 1} ${randomValues.durations[index + 7]}s ease-in-out infinite`,
              animationDelay: `${randomValues.delays[index + 7]}s`,
              opacity: randomValues.opacities[index + 7]
            }}
          />
        ))}
        
        {/* Random diagonal beams */}
        <div className="absolute top-0 left-0 w-full h-full">
          {randomValues.diagonalRotations.map((rotation, index) => (
            <div
              key={`diagonal-${index}`}
              className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/25 to-transparent shadow-none shadow-primary/15"
              style={{
                top: `${20 + index * 20}%`,
                transform: `rotate(${rotation}deg)`,
                animation: `beam-diagonal-${(index % 4) + 1} ${randomValues.durations[index + 10] || 10}s ease-in-out infinite`,
                animationDelay: `${randomValues.delays[index + 10] || 0}s`,
                opacity: randomValues.opacities[index + 10] || 0.3
              }}
            />
          ))}
        </div>
        
        {/* Random radial beams */}
        {randomValues.radialPositions.map((position, index) => (
          <div
            key={`radial-${index}`}
            className="absolute bg-primary/40 rounded-full animate-pulse shadow-none"
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
              width: `${randomValues.sizes[index] || 1}px`,
              height: `${randomValues.sizes[index] || 1}px`,
              animationDelay: `${randomValues.delays[index + 14] || 0}s`
            }}
          />
        ))}
      </div>
      
      {/* Overlay for better text readability */}
      <div className={`absolute inset-0 bg-gradient-to-b ${intensityClasses.overlay}`} />
      
      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}
