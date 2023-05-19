import React, { useRef, useState } from "react";
import { MdNotifications } from "react-icons/md";
import Tagging from "../Tagging";
import useModal from "@/hooks/useModal";

const NotificationsList = [
  {
    key: 7090,
    user: "Sam Smit",
    image:
      "https://lh3.googleusercontent.com/a/AGNmyxZVTr27jB1cTaNjCXZX7zDUCk-x0DTi87l0fyhm=s288-c-no",
    msg: "Hi, how are you",
  },
  {
    key: 7091,
    user: "Sam Smit",
    image:
      "https://lh3.googleusercontent.com/a/AGNmyxZVTr27jB1cTaNjCXZX7zDUCk-x0DTi87l0fyhm=s288-c-no",
    msg: "Hi, how are you",
  },
];

function Notifications() {
  const [opened, setOpened] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClose = () => {
    setOpened(false);
  };

  return (
    <div className="mb-2">
      <Tagging classname="">
        <button
          ref={buttonRef}
          onClick={() => {
            console.log("button click");
            setOpened((v) => !v);
          }}
          className="flex items-center justify-center"
        >
          <MdNotifications size={30} />
        </button>
      </Tagging>{" "}
      <Modal
        opened={opened} triggerRef={buttonRef} onClose={onClose}
      />
    </div>
  );
}

function Modal({ opened, triggerRef, onClose }: ITooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useModal({
    elementRef: tooltipRef,
    triggerRef,
    onOutsideClick: onClose,
    enabled: opened,
  });

  if (!opened) {
    return null;
  }

  return (
    <div
      ref={tooltipRef}
      className="absolute bg-Davy-Grey text-white mt-5 rounded-lg  2xl:right-64 right-32 lg:right-72 xs:right-62 sm:right-40 px-2 py-2  shadow-2xl"
    >
      {NotificationsList.map((msg) => {
        return (
          <div
            className="shadow-lg py-2 pl-3 pr-12 flex gap-2 items-center rounded cursor-pointer hover:border-b-2  border-Turquoise"
            key={msg.key}
          >
            <Tagging classname="">
              <img
                src={msg.image}
                alt="avatar"
                className=" w-12 h-12 rounded-full "
              />
            </Tagging>
            <div className="">
              <p className="text-xl font-bold ml-3">{msg.user}</p>
              <p className="text-lg font-normal ml-2 mt-1"> {msg.msg}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Notifications;
