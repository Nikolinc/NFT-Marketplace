import { IUseModal } from "@/types/Modal";
import { useEffect } from "react";
import { useEvent } from "./useEvent";

function useModal({
  elementRef,
  triggerRef,
  enabled = true,
  onOutsideClick,
}: IUseModal) {
  const handleOutsideClick = useEvent(onOutsideClick);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    console.log("attach event listener");
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (!elementRef.current) {
        return;
      }

      const ignoreElements = [elementRef.current];

      if (triggerRef?.current) {
        ignoreElements.push(triggerRef.current);
      }

      if (!ignoreElements.some((element) => element.contains(target))) {
        console.log("outside click");
        handleOutsideClick(e);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [enabled, elementRef, triggerRef, handleOutsideClick]);
}

export default useModal;
