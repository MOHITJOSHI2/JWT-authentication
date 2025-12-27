import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedContent = () => {
  const [data, setData] = useState({
    userId: "",
    content: "",
  });
  const navigate = useNavigate();

  useState(() => {
    async function getData() {
      const req = await fetch(
        "http://localhost:3000/content/protectedContent",
        {
          credentials: "include",
          method: "GET",
        }
      );

      const res = await req.json();
      if (req.ok) {
        setData({
          userId: res.id.id,
          content: res.message,
        });
      } else {
        console.log(res.err);
        setData({
          userId: "",
          content: "Login to get protected Data",
        });
      }
    }

    getData();
  }, []);

  const handleLogOut = async () => {
    try {
      const req = await fetch("http://localhost:3000/entry/logout", {
        method: "Get",
        credentials: "include",
      });

      const res = await req.json();
      if (req.ok) {
        navigate("/login");
      } else {
        console.log(res.err);
      }
    } catch (error) {
      console.log("Error at logout", error);
    }
  };

  return (
    <div className="w-[70%] m-auto mt-[50px] bg-white shadow-md p-5 shadow-white text-black">
      <div className="m-2">
        <p className="text-orange-500 text-lg font-semibold">UserId</p>
        <h1 className="text-md">{data.userId}</h1>
      </div>
      <div className="m-2">
        <p className="text-orange-500 text-lg font-semibold">Content</p>
        <h2 className="text-md">{data.content}</h2>
      </div>
      <div className="m-2 text-center">
        <button
          type="button"
          className="border-2 border-black p-1.5 rounded hover:bg-black hover:text-white"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProtectedContent;
