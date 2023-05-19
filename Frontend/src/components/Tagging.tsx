import React from "react";

function Tagging(props: { children: any; classname: string }) {
  return (
    <div className={props.classname}>
      <span className="relative flex h-2 w-2 ">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-Medium-Sky-Blue opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-Turquoise"></span>
      </span>
      {props.children}
    </div>
  );
}
export default Tagging;
