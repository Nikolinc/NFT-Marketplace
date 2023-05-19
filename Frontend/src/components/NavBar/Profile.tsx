import { Connect } from "@/service/MetaMask";
import React, { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";

const Profile = () => {
  const [connect, setConnect] = useState<boolean>(false);

  useEffect(() => {
    if (connect) {
      Connect();
    }
  }, [connect]);

  return (
    <button
      className="font-semibold py-2 px-2 rounded inline-flex items-center"
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
