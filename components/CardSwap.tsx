"use client";

import {
  Children,
  ReactNode,
  CSSProperties,
  KeyboardEvent,
  isValidElement,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./CardSwap.module.css";

type CardSwapProps = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  skewAmount?: number;
};

type CardProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export function Card({ children, style }: CardProps) {
  return (
    <article className={styles.swapCard} style={style}>
      {children}
    </article>
  );
}

export function CardSwap({
  children,
  width = "100%",
  height = "100%",
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  skewAmount = 4,
}: CardSwapProps) {
  const items = useMemo(
    () => Children.toArray(children).filter(isValidElement),
    [children],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const showControls = items.length > 1;

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (items.length <= 1) return;
    if (pauseOnHover && isHovered) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, delay);

    return () => window.clearInterval(timer);
  }, [delay, isHovered, items.length, pauseOnHover]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }
  };

  return (
    <div
      className={styles.swapRoot}
      style={{ width, height }}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showControls ? (
        <div className={styles.swapControls} aria-label="Card controls">
          <button
            type="button"
            className={styles.swapButton}
            onClick={goToPrevious}
            aria-label="Previous card"
          >
            ←
          </button>
          <button
            type="button"
            className={styles.swapButton}
            onClick={goToNext}
            aria-label="Next card"
          >
            →
          </button>
        </div>
      ) : null}
      {items.map((item, index) => {
        const offset = (index - activeIndex + items.length) % items.length;
        const isHidden = offset > 2;
        const scale = 1 - offset * 0.05;

        return (
          <div
            key={index}
            className={styles.swapLayer}
            style={{
              transform: `translate3d(${offset * cardDistance}px, ${offset * verticalDistance}px, 0) scale(${scale}) skewY(${offset === 0 ? 0 : skewAmount * 0.3}deg)`,
              opacity: isHidden ? 0 : 1,
              zIndex: items.length - offset,
              filter: offset === 0 ? "none" : "brightness(0.78) saturate(0.9)",
              pointerEvents: offset === 0 ? "auto" : "none",
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
