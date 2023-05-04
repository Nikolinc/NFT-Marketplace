import React, { useEffect, useState } from "react";
import { MdTranslate } from "react-icons/md";
function Language() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleOptionChange = (event: React.FormEvent<EventTarget>) => {
    let target = event.target as HTMLInputElement;
    setSelectedOption(target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span className="mr-1">
          <MdTranslate size={30} className="mr-20 cursor-pointer" />
        </span>
      </button>
      {isOpen && (
        <div className="absolute bg-Chinese-Silver text-Outer-Space rounded mt-1 py-1 pl-3 w-40">
          <div className="flex items-center">
            <input
              type="radio"
              id="option1"
              name="options"
              value="Option 1"
              checked={selectedOption === "Option 1"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 transition duration-150 ease-in-out"
            />
            <div className="grid grid-cols-1">
              <label
                htmlFor="option1"
                className="ml-2 text-Outer-Space font-semibold text-lx "
              >
                English
              </label>
              <label
                htmlFor="option1"
                className="ml-2 text-Outer-Space font-medium text-sm "
              >
                English
              </label>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="option2"
              name="options"
              value="Option 2"
              checked={selectedOption === "Option 2"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 text-gray-600 transition duration-150 ease-in-out"
            />
            <div className="grid grid-cols-1">
              <label
                htmlFor="option2"
                className="ml-2 text-Outer-Space font-semibold text-lx "
              >
                Русский
              </label>
              <label
                htmlFor="option1"
                className="ml-2 text-Outer-Space font-medium text-sm "
              >
                Russian
              </label>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="option3"
              name="options"
              value="Option 3"
              checked={selectedOption === "Option 3"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 text-gray-600 transition duration-150 ease-in-out"
            />
            <div className="grid grid-cols-1">
              <label
                htmlFor="option3"
                className="ml-2 text-Outer-Space font-semibold text-lx "
              >
                Nederlands
              </label>
              <label
                htmlFor="option3"
                className="ml-2 text-Outer-Space font-medium text-sm "
              >
                Dutch
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Language;
