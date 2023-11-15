import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row">
      <div className="hidden lg:flex  flex-col  w-[60vw] bg-[#ffffdb] h-[100vh]">
        <div className="flex flex-row items-center text-[#fe7600] font-bold text-[1.3rem]  p-[3%]">
          <p>ChatGPT </p>
          <p className="bg-[#fe7600]  w-[1rem] h-[1rem] rounded-[100px]"></p>
        </div>
      </div>
      <div className="w-[100vw] lg:w-[40vw] h-[100vh] flex flex-col">
        <div className="w-[100%] h-[100vh] flex flex-col">
          <div className="w-[100%] h-[85vh] flex flex-col justify-center items-center gap-[20px]">
            <p className="font-bold text-[2rem]">Get started</p>
            <div className="btn flex flex-col lg:flex-row justify-center items-center gap-[0.86rem] w-[100%] font-semibold">
              <button onClick={() => navigate("Login")}>Log in</button>
              <button onClick={() => navigate("SignUp")}>Sign up</button>
            </div>
          </div>

          <div className="openai">
            <div className="font-bold text-[1rem] text-gray-300">
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg"
                alt=""
                className="w-[30px] h-[30px] fill-[gray]"
              />
              <p>OpenAI</p>
            </div>
            <div className="text-[gray] w-[50%] text-[.8rem]">
              <p>Term of use</p>
              <p className="font-bold">|</p>
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
