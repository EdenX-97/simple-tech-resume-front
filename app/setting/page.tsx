'use client'
import * as React from 'react';
import Footbar from '../components/footbar';

export default function Setting() {
  return (
    <div className="bg-base-200 w-full h-[92vh] flex flex-col items-center text-center">
      <div className="card shadow-lg bg-base-300 mt-[10vh] mb-[4vh] p-4 w-[30vw] flex justify-center items-center">
        <p className="text-xl font-bold">
          Setting
        </p>

        <div className="flex mt-[1vh] pl-[2vw] pr-[2vw] items-center justify-between w-full">
          <div className="flex">
            <p>Your current plan:</p>
            <p className="ml-2 text-lg font-bold">Monthly Plan</p>
          </div>
          <button className="btn btn-neutral btn-sm ml-2">Cancel</button>
        </div>

        <div className="flex mt-1 w-full pl-[2vw] pr-[2vw] items-center justify-between">
          <progress className="progress progress-accent w-1/2" value={10} max="100"></progress>
          <p >Expire Date: 02-02-2024</p>
        </div>

        <div className="flex mt-[6vh] w-full pl-[2vw] pr-[2vw] items-center justify-between">
          <div className="flex">
            <input type="checkbox" defaultChecked className="checkbox" />
            <p className="ml-2">Send me the latest news and offers</p>
          </div>
          <button className="btn btn-sm ml-2">Update</button>
        </div>


      </div>
      {/* <Footbar /> */}
    </div>
  );
}