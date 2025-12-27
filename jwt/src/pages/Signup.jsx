import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmission = async () => {
    try {
      console.log(input);
      const req = await fetch("http://localhost:3000/entry/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const res = await req.json();

      if (req.ok) {
        navigate("/login");
        if (res.cookieErr) {
          navigate("/protectedContent");
        }
      } else {
        console.log("Error at handlesubmission: ", res);
      }
    } catch (error) {
      console.log("error at handleSubmission: ", error);
    }
  };

  useEffect(() => {
    async function getCookie() {
      const req = await fetch("http://localhost:3000/entry/checkCookie", {
        method: "GET",
        credentials: "include",
      });

      const res = await req.json();
      if (req.ok) {
        navigate("/protectedContent");
      } else {
        console.log(res.err);
      }
    }

    getCookie();
  }, []);

  const labelStyle = "text-sm font-semibold text-gray-700 mb-1";
  const inputStyle =
    "w-full px-4 py-2 rounded-lg border border-gray-300 outline-none text-gray-700 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition";

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Join us Today
        </h2>
        <p className="text-center text-gray-500 mb-6">Signup to continue</p>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className={labelStyle}>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={inputStyle}
              name="name"
              onChange={handleInput}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={inputStyle}
              name="email"
              onChange={handleInput}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className={labelStyle}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className={inputStyle}
              name="password"
              onChange={handleInput}
              required
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full py-2.5 mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:scale-[1.02] hover:shadow-xl transition"
            onClick={handleSubmission}
          >
            Signup
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            className="text-amber-600 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
