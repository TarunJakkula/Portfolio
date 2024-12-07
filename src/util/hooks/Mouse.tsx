import { useState, useEffect, useRef } from "react";

interface MousePosition {
  x: number | null;
  y: number | null;
}

interface UseMousePositionOptions {
  enterDelay?: number;
  leaveDelay?: number;
}

const useMousePosition = ({
  enterDelay = 0,
  leaveDelay = 0,
}: UseMousePositionOptions = {}): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: null,
    y: null,
  });
  const enterTimeoutRef = useRef<number | null>(null);
  const leaveTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
      enterTimeoutRef.current = window.setTimeout(() => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }, enterDelay);
    };

    const handleMouseLeave = () => {
      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }
      leaveTimeoutRef.current = window.setTimeout(() => {
        setMousePosition({ x: null, y: null });
      }, leaveDelay);
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, [enterDelay, leaveDelay]);

  return mousePosition;
};

export default useMousePosition;
