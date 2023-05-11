import React from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useTranslation } from "next-i18next";

function Contact() {
  const { t, i18n } = useTranslation("namespace-name");
  return (
    <div>
      <div className="group relative inline-block rounded-full  py-3 text-Turquoise ">
        <span className="text-xl font-semibold transition-opacity group-hover:opacity-0">
          {t("Contact")}
        </span>

        <ul className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
          <li>
            <a
              className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
              href="https://t.me/TsigulskyNikita"
            >
              <FaTelegram />
            </a>
          </li>

          <li>
            <a
              className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
              href="https://github.com/Nikolinc"
            >
              <FaGithub />
            </a>
          </li>

          <li>
            <a
              className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
              href="mailto:tsigulskynikita@gmail.com"
            >
              <SiGmail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
