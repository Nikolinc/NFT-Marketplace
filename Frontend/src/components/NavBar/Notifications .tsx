import React from "react";
import { MdNotifications } from "react-icons/md";

function Notifications() {
  return (
    <div className="mb-2">
      <span className="relative flex h-2 w-2 ">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-Medium-Sky-Blue opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-Turquoise"></span>
      </span>
      <MdNotifications size={30} />
    </div>
  );
}

export default Notifications;
