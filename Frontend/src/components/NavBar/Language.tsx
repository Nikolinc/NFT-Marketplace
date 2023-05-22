import React, { useEffect, useRef, useState } from "react";
import { MdTranslate } from "react-icons/md";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import useModal from "@/hooks/useModal";

const LangList = [
  {
    name: "English",
    nameEn: "English",
  },
  {
    name: "Русский",
    nameEn: "Russian",
  },
  {
    name: "Nederlands",
    nameEn: "Dutch",
  },
];

function Language() {
  const [opened, setOpened] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClose = () => {
    setOpened(false);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => {
          console.log("button click");
          setOpened((v) => !v);
        }}
        className="font-semibold py-2 px-2 rounded inline-flex items-center"
      >
        <span className="mr-1">
          <MdTranslate size={30} className="cursor-pointer" />
        </span>
      </button>
      <Modal opened={opened} triggerRef={buttonRef} onClose={onClose} />
    </div>
  );
}

function Modal({ opened, triggerRef, onClose }: ITooltipProps) {
  const [selectedOption, setSelectedOption] = useState("English");
  const { t, i18n } = useTranslation("default");

  const handleOptionChange = (event: React.FormEvent<EventTarget>) => {
    let target = event.target as HTMLInputElement;
    setSelectedOption(target.value);
  };

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
      className="absolute bg-Davy-Grey text-white rounded mt-3 py-1 pl-3 w-40 drop-shadow-2xl"
    >
      {LangList.map((lan) => {
        return (
          <button className="flex items-center" key={lan.name}>
            <input
              type="radio"
              id={lan.name}
              name="options"
              value={lan.name}
              checked={selectedOption === lan.name}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 transition duration-150 ease-in-out rounded-full bg-gray-800 accent-Turquoise "
            />
            <div className="grid grid-cols-1 border-Turquoise hover:border-b">
              <label
                htmlFor={lan.name}
                className="ml-2 text-white font-semibold text-lx "
              >
                {lan.name}
              </label>
              <label
                htmlFor={lan.name}
                className="ml-4 text-left text-Light-Silver font-medium text-sm "
              >
                {lan.nameEn}
              </label>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Language;
