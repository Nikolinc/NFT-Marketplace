import { useConnect } from "@/hooks/useMetamask";
import React, { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";

const Profile = () => {
  const [connect, setConnect] = useState<boolean>(false);

  useEffect(() => {
    if (connect) {
      useConnect();
    }
  }, [connect]);

  return (
    <button
      className="font-semibold py-2 px-4 rounded inline-flex items-center"
      onClick={() => setConnect(!connect)}
    >
      {connect ? (
        <img
          src="https://avatars.githubusercontent.com/u/54713704?v=4"
          alt="user"
          width="35"
          height="35"
          className="rounded-full"
        />
      ) : (
        <FaUserTie size={30} />
      )}
    </button>
  );
};

export default Profile;
