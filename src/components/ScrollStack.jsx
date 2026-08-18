import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    if (useWindowScroll) {
      // 100% Jitter-Free Native Sticky Stacking with Pronounced 3D Depth Animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        let overlapFactor = 0;
        if (i < cardsRef.current.length - 1) {
          const nextCard = cardsRef.current[i + 1];
          if (nextCard) {
            const cardRect = card.getBoundingClientRect();
            const nextRect = nextCard.getBoundingClientRect();
            const totalHeight = cardRect.height || 550;
            const overlap = cardRect.bottom - nextRect.top;
            if (overlap > 0) {
              overlapFactor = Math.min(1, Math.max(0, overlap / (totalHeight * 0.8)));
            }
          }
        }

        const scale = 1 - overlapFactor * (1 - baseScale);
        const blur = blurAmount ? overlapFactor * blurAmount : 0;
        const rotation = rotationAmount ? (i % 2 === 0 ? -1 : 1) * overlapFactor * rotationAmount : 0;
        const brightness = 1 - overlapFactor * 0.25;

        const newTransform = {
          scale: Math.round(scale * 1000) / 1000,
          rotation: Math.round(rotation * 100) / 100,
          blur: Math.round(blur * 10) / 10,
          brightness: Math.round(brightness * 100) / 100
        };

        const lastTransform = lastTransformsRef.current.get(i);
        const hasChanged =
          !lastTransform ||
          Math.abs(lastTransform.scale - newTransform.scale) > 0.0005 ||
          Math.abs(lastTransform.blur - newTransform.blur) > 0.05 ||
          Math.abs(lastTransform.brightness - newTransform.brightness) > 0.01;

        if (hasChanged) {
          card.style.transform = `scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
          card.style.filter = `blur(${newTransform.blur}px) brightness(${newTransform.brightness})`;
          lastTransformsRef.current.set(i, newTransform);
        }

        if (i === cardsRef.current.length - 1) {
          const cardRect = card.getBoundingClientRect();
          const isInView = cardRect.top <= 120;
          if (isInView && !stackCompletedRef.current) {
            stackCompletedRef.current = true;
            onStackComplete?.();
          } else if (!isInView && stackCompletedRef.current) {
            stackCompletedRef.current = false;
          }
        }
      });
    }

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const onScroll = () => handleScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      };
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') || [])
    );

    cardsRef.current = cards;
    lastTransformsRef.current.clear();

    const containerHeight = window.innerHeight;
    // Sticky Top Position right below Navbar (e.g. 85px top offset)
    const baseTopPx = Math.max(85, parsePercentage(stackPosition, containerHeight));

    cards.forEach((card, i) => {
      if (useWindowScroll) {
        card.style.position = 'sticky';
        card.style.top = `${Math.round(baseTopPx + itemStackDistance * i)}px`;
        card.style.zIndex = `${i + 1}`;
        if (i < cards.length - 1) {
          card.style.marginBottom = `${itemDistance}px`;
        }
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
    });

    const cleanupLenis = setupLenis();

    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (cleanupLenis) {
        cleanupLenis();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [
    children,
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    parsePercentage,
    setupLenis,
    updateCardTransforms
  ]);

  return (
    <div className={`scroll-stack-scroller ${useWindowScroll ? 'window-scroll' : ''} ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
