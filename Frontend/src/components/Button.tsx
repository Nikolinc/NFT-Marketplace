import React from "react";

interface IProps {
  text: string;
  callback: () => void;
  classname: string;
}

function Button(props: IProps) {
  return (
    <button
      onClick={() => props.callback}
      className={`inline-block rounded-xl border border-Turquoise bg-Turquoise px-5 py-0.5  font-black
       text-Davy-Grey hover:bg-transparent hover:text-Turquoise focus:outline-none focus:ring active:text-Turquoise ${props.classname}`}
    >
      {props.text}
    </button>
  );
}

export default Button;
