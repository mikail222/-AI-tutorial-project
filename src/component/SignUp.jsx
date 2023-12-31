import { useState } from "react";
import React from "react-dom";
import chatgptLogo from "../assets/chatgpt-seeklogo.com.pdf";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [toggleLabel, setToggleLabel] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-[100%]  flex flex-col  justify-center items-center">
      <div className=" w-[80%]  lg:w-[30%]  md:w-[45%] flex flex-col justify-center items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg"
          alt=""
          className="w-[40px] h-[40px] mb-[50px] lg:mb-[150px] mt-[10%]"
        />
        <p className="text-[30px] my-[2%] font-bold text-center leading-10">
          Create your account
        </p>
        <p className="text-center lg:w-[85%]">
          Note that phone verification may be required for signup. Your number
          will only be used to verify your identity for security purposes.
        </p>
        <form className="flex flex-col justify-center items-center  w-[100%]">
          <div
            className={
              toggleLabel === true
                ? "flex flex-col justify-center w-[100%] lg:w-[80%] h-[8vh] border-[#10a37f] border-[1px] rounded-[8px] px-[2%] mt-[30px]"
                : "flex flex-col justify-center w-[100%] lg:w-[80%] h-[8vh] border-gray-300 border-[1px] rounded-[8px] px-[2%] mt-[30px]"
            }
          >
            {toggleLabel === true && (
              <label
                htmlFor=""
                className="flex flex-col w-[45%] text-center lg:w-[35%] text-[#10a37f] top-[-15px] bg-[white] px-[6px] relative"
              >
                Email address{" "}
              </label>
            )}
            <input
              onClick={() => setToggleLabel(true)}
              onChange={() => setToggleLabel(false)}
              type="email"
              placeholder={toggleLabel == false && "Email  address"}
              required
              className="outline-none px-[6px] mb-[6px] bg-[transparent]"
            />
          </div>

          <button className="text-center w-[100%] lg:w-[80%] h-[8vh] bg-[#10a37f] border-[1px] rounded-[8px] mt-[5%] text-white outline-none">
            Continue
          </button>
          <div className="flex flex-row justify-center items-center gap-[6px] py-[5%]">
            <p>Already have an account?</p>{" "}
            <button
              className="text-[#10a37f]"
              onClick={() => navigate("/Login")}
            >
              Log in
            </button>
          </div>
        </form>
        <div className="flex flex-col border-gray-400 items-center w-[100%] lg:w-[80%] h-[5vh] border-t-[1px] px-[2%] mt-[5%]">
          {" "}
          <p className=" w-[10%] top-[-15px] bg-[white] px-[6px] text-[10px] relative">
            OR
          </p>
        </div>
        <div className="shortCutSignIn">
          <button>
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p>Continue with Microsoft Account</p>
          </button>
          <button>
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt=""
              className="w-[30px] h-[30px]"
            />{" "}
            <p>Continue with Google</p>
          </button>
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/0/747.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p>Continue with Apple</p>
          </button>
        </div>
        <div className="text-[gray] lg:w-[20vw] mt-[8rem] my-[8%] policy px-[5px]">
          <p>Term of use</p>
          <p className="text-[gray]">|</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
