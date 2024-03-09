import React, { useEffect } from 'react';
import './App.css';
import showPass1 from './components/show_pass';
import showPass2 from './components/show_pass2';
import checkValid from './components/check_correct_pass.jsx';
import CheckButton from './components/checkButton.jsx';
import ValidPass from './components/validPass.jsx';
import strongPass from './components/check_valid_pass.jsx';

function App() {
  useEffect(() => {
    strongPass();
  }, []);
  return (
    <body class="flex justify-center items-center h-screen bg-gradient-to-br from-cyan-300 to-cyan-600">
      <div class="flex flex-col justify-center border-transparent border-solid border
      rounded-xl bg-white p-6 gap-4 text-lg transition-all duration-300 ease-in-out" id="form">
        <div class="flex flex-col relative">
          <div class="flex flex-col relative">
            <input type="password" id="pw1" placeholder='new password' class="border-black border-solid
            border-b-[1px] bg-transparent h-12 w-full focus:border-cyan-500 valid:border-gray-400 outline-none"></input>
            <label class="absolute transition-all duration-250 ease-out text-gray-500 top-3/4 font-semibold" 
            id="label-pw1">New Password</label>
            <CheckButton func={showPass1} id_label="label1" id_check="div-check1" btn="btn1" />
          </div>
          <ValidPass id1="first-child" id2="second-child" id3="third-child" id4="fourth-child" />
        </div>
        <div class="hidden" id="again-password">
          <div class="flex flex-col relative">
            <input type="password" id="pw2" placeholder='type again' class="border-gray-400 border-solid
            border rounded-md bg-transparent h-12 px-3 py-2 w-full outline-none focus:border-cyan-500"></input>
            <label class="absolute transition-all duration-250 ease-out text-gray-500 mx-3 mt-2
            font-semibold" id="label-pw2">Type again</label>
            <CheckButton func={showPass2} id_label="label2" id_check="div-check2" btn="btn2" />
          </div>
        </div>
        <div class="font-normal text-base" id="message"></div>
        <button class="border-transparent bg-gray-400 cursor-not-allowed rounded-md mx-2 py-2 text-white
        transition-all duration-300 ease font-semibold" id="submit-btn" onClick={checkValid}>submit</button>
      </div>
    </body>
  );
}

export default App;
