'use client'
import * as React from 'react';
import SendIcon from '@mui/icons-material/Send';

export default function Interview() {
  return (
    <div className="bg-base-200 w-full flex flex-row justify-center gap-10 h-[92vh]">
      <div className="bg-base-300 mt-[2vh] mb-[2vh] w-[80vw] flex flex-col pl-6 pr-6 pt-3 rounded-lg shadow-xl h-auto items-center">
        <select className="select select-bordered select-sm w-[20vw] mr-auto">
          <option disabled selected>Choose your generated resume version</option>
          <option>Role - Level - 15.02.2024 10:00</option>
          <option>Role - Level - 15.02.2024 10:00</option>
        </select>

        <div className="bg-base-300 w-full h-full overflow-y-auto flex flex-col items-center mt-[2vh] mb-[2vh]">
          <div className="bg-base-300 w-[50vw] h-full">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
              </div>
              <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
              </div>
              <div className="chat-bubble">It was you who would bring balance to the Force</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
              </div>
              <div className="chat-bubble">Not leave it in Darkness</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="chat-header">
                Interviewer
              </div>
              <div className="chat-bubble">haha</div>
            </div>
          </div>
        </div>

        <label className="input input-bordered flex items-center gap-2 mt-[1vh] mb-[5vh] w-[40vw]">
          <input type="text" className="grow" placeholder="Ask any interview question" />
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg> */}
          <SendIcon />
        </label>



      </div>
    </div>
  );
}