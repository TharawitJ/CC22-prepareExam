import React, { useEffect, useState } from "react";
import useUserStore from "../store/userStore";
import axios from "axios";
// this use token to access
function TokenProfile() {
  const [user, setUser] = useState(null);
  const token = useUserStore((state) => state.token);

  async function fetchUser() {
    try {
      const resp = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token.accessToken}`, // Pass JWT via Authorization header
        },
      });
      //   setUser(resp.data)
      const { image, lastName, firstName, username, email, accessToken } =
        resp.data;
      setUser({ image, lastName, firstName, username, email });
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);
  if (!user) {
    return <>No User no store</>;
  }

  //   const user = {
  //     image: "https://dummyjson.com/icon/emilys/128",
  //     firstName: "Emilys",
  //     lastName: "Johnson",
  //     username: "emily",
  //     email: "emily.johnson@x.dummyjson.com",
  //   };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 text-center">
        {/* Profile Image */}
        <img
          src={user.image}
          alt="profile"
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
        />

        {/* Name */}
        <h2 className="mt-4 text-2xl font-bold">
          {user.firstName} {user.lastName}
        </h2>

        {/* Username */}
        <p className="text-gray-500">@{user.username}</p>
        {/* Info Section */}
        <div className="mt-6 space-y-3 text-left">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">First Name</span>
            <span>{user.firstName}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Last Name</span>
            <span>{user.lastName}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Email</span>
            <span className="text-sm">{user.email}</span>
          </div>
        </div>

        {/* Logout Button */}
        <button className="mt-6 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
          Logout
        </button>
      </div>
    </div>
  );
}

export default TokenProfile;
