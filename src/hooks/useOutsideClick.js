import { useEffect, useRef } from "react";

export const useOutsideClick = (handler, justCapturing = false) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler();
    };

    document.addEventListener("click", handleClick, justCapturing);

    return () => document.removeEventListener("click", handleClick);
  }, [handler, justCapturing]);

  return ref;
};
