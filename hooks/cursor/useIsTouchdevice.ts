import { useEffect, useState } from 'react';

const useIsTouchdevice = (): boolean => {
  const [isTouchdevice, setIsTouchdevice] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkTouch = () => {
        const hasTouch =
          'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (navigator as any).msMaxTouchPoints > 0;
        setIsTouchdevice(hasTouch);
      };

      checkTouch();
      window.addEventListener('resize', checkTouch);

      return () => {
        window.removeEventListener('resize', checkTouch);
      };
    }
  }, []);

  return isTouchdevice;
};

export default useIsTouchdevice;
