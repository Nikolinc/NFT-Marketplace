import React, { useEffect, useState } from "react";
import { MdTranslate } from "react-icons/md";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

function Language() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("English");
  const { t, i18n } = useTranslation("default");

  const handleOptionChange = (event: React.FormEvent<EventTarget>) => {
    let target = event.target as HTMLInputElement;
    setSelectedOption(target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: string) => {
    console.log("lng", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="font-semibold py-2 px-2 rounded inline-flex items-center"
      >
        <span className="mr-1">
          <MdTranslate size={30} className="cursor-pointer" />
        </span>
      </button>
      {isOpen && (
        <div className="absolute bg-Chinese-Silver text-Outer-Space rounded mt-1 py-1 pl-3 w-40 shadow-2xl">
          <button className="flex items-center">
            <input
              type="radio"
              id="English"
              name="options"
              value="English"
              checked={selectedOption === "English"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 transition duration-150 ease-in-out"
            />
            <div className="grid grid-cols-1">
              <label
                htmlFor="English"
                className="ml-2 text-Outer-Space font-semibold text-lx "
              >
                English
              </label>
              <label
                htmlFor="English"
                className="ml-4 text-left text-Outer-Space font-medium text-sm "
              >
                English
              </label>
            </div>
          </button>
          <button
            className="flex items-center mt-2"
            onClick={() => changeLanguage("ru")}
          >
            <input
              type="radio"
              id="Russian"
              name="options"
              value="Russian"
              checked={selectedOption === "Russian"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 text-gray-600 transition duration-150 ease-in-out"
            />
            <div className="grid grid-cols-1">
              <label
                htmlFor="Russian"
                className="ml-2 text-Outer-Space font-semibold text-lx "
              >
                Русский
              </label>
              <label
                htmlFor="Russian"
                className="ml-4 text-left text-Outer-Space font-medium text-sm "
              >
                Russian
              </label>
            </div>
          </button>
          <button className="flex items-center mt-2">
            <input
              type="radio"
              id="Dutch"
              name="options"
              value="Dutch"
              checked={selectedOption === "Dutch"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 text-gray-600 transition duration-150 ease-in-out"
            />
            <div className="grid grid-cols-1">
              <label
                htmlFor="Dutch"
                className="ml-2 text-Outer-Space font-semibold text-lx "
              >
                Nederlands
              </label>
              <label
                htmlFor="Dutch"
                className="ml-4 text-left text-Outer-Space font-medium text-sm "
              >
                Dutch
              </label>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default Language;
