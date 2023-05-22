import { useEffect } from "react";
import { useEvent } from "./useEvent";

function useWindowEvent(type: string, cb: (event: Event) => void) {
  const eventCb = useEvent(cb);

  useEffect(() => {
    window.addEventListener(type, eventCb);

    return () => window.removeEventListener(type, eventCb);
  }, [eventCb]);
}

export default useWindowEvent;
