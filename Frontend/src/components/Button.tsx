import React from "react";

interface IProps {
  text: string;
  callback: () => void;
}

function Button(props: IProps) {
  return (
    <button
      onClick={() => props.callback}
      className="inline-block rounded-xl border border-Turquoise bg-Turquoise px-5 py-0.5 text-xl font-black text-Davy-Grey hover:bg-transparent hover:text-Turquoise focus:outline-none focus:ring active:text-Turquoise"
    >
      {props.text}
    </button>
  );
}

export default Button;
