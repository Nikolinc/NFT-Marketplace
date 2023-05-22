import useTilt from "@/hooks/useTilt";
import React, { useState } from "react";

export default function Tilt(props: { children: any; classname: string }) {
  const [action, setAction] = useState(false);
  const ref = useTilt(action);
  return (
    <div
      className={props.classname}
      onMouseOver={() => setAction(true)}
      onMouseOut={() => setAction(false)}
      ref={ref}
    >
      {props.children}
    </div>
  );
}
