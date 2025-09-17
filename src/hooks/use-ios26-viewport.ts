import { useState, useEffect } from 'react';

export function useIOS26Viewport() {
  const [isIOS26, setIsIOS26] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isCompactMode, setIsCompactMode] = useState(false);

  useEffect(() => {
    // Detect iOS 26.0+ Safari
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isSafari = /Safari/.test(userAgent) && !/Chrome|CriOS|FxiOS|OPiOS|mercury/.test(userAgent);
    
    // Check for iOS 26.0+ (approximate detection)
    const iosVersion = userAgent.match(/OS (\d+)_/);
    const majorVersion = iosVersion ? parseInt(iosVersion[1], 10) : 0;
    
    if (isIOS && isSafari && majorVersion >= 26) {
      setIsIOS26(true);
    }

    // Get viewport height using window.outerHeight for iOS 26.0 compatibility
    const updateViewportHeight = () => {
      if (isIOS26) {
        // Use window.outerHeight for consistent behavior
        setViewportHeight(window.outerHeight);
        
        // Detect compact mode (smaller inner height indicates compact mode)
        const heightDifference = window.outerHeight - window.innerHeight;
        setIsCompactMode(heightDifference > 100); // Threshold for compact mode detection
      } else {
        setViewportHeight(window.innerHeight);
      }
    };

    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, [isIOS26]);

  return {
    isIOS26,
    viewportHeight,
    isCompactMode,
    // Helper function to get proper height for modals/overlays
    getModalHeight: () => isIOS26 ? window.outerHeight : window.innerHeight,
  };
}
