'use client'
import * as React from 'react';
import Footbar from '../components/footbar';
import CheckIcon from '@mui/icons-material/Check';

export default function Pricing() {
  return (
    <div className="text-center">
      <div className="bg-base-100 w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-[4vh]">Subscribe now to unlock all features!</h1>
        <div className="w-[50vw] mt-[2vh]">
          <p>We have the perfect plan for your career journey.</p>
          <p>Subscribe now and unlock full access to our AI-driven resume builder and mock interview platform.</p>
          <p>Elevate your career with the right tools - your next big opportunity starts here.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-[60vw] mt-[6vh] mb-[4vh] text-left h-[52vh]">
          <div className="bg-base-200 rounded-2xl p-8 w-full shadow-xl flex flex-col justify-between">
            <div>
              <p className="font-bold">Monthly Plan</p>

              <h2 className="text-4xl font-bold mt-[2vh]">$20 <span className="text-2xl font-normal text-gray-500">/ Month</span></h2>

              <p className="text-gray-500 mt-[3vh]">Get started with our Monthly Plan. It&apos;s a flexible way to unlock all features without a long-term commitment.</p>

              <div className="text-gray-500 mt-[4vh]">
                <ul>
                  <li className="flex"><CheckIcon className="mr-2" />Access all features for a short period at a low cost</li>
                  <li className="flex mt-1"><CheckIcon className="mr-2" />Unlimited resume creation</li>
                  <li className="flex mt-1"><CheckIcon className="mr-2" />Unlimited interview questions</li>
                  <li className="flex mt-1"><CheckIcon className="mr-2" />Download in LaTeX, Word</li>
                </ul>
              </div>
            </div>

            <button className="btn btn-neutral btn-wide btn-sm w-full">Subscribe Now</button>
          </div>

          <div className="bg-neutral rounded-2xl p-8 w-full shadow-xl flex flex-col justify-between">
            <div>
              <p className="font-bold text-neutral-content">Quarterly Plan <div className="badge badge-secondary">Most Popular</div></p>

              <h2 className="text-4xl text-neutral-content font-bold mt-[2vh]">$40 <span className="text-2xl font-normal text-gray-400">/ 3 Months</span></h2>

              <p className="text-gray-400 mt-[3vh]">It&apos;s designed for those who want to maximize their opportunities in a focused timeframe.</p>

              <div className="text-gray-400 mt-[4vh]">
                <ul>
                  <li className="flex"><CheckIcon className="mr-2" />$13.3 per month, suitable for a job-seeking period</li>
                  <li className="flex mt-1"><CheckIcon className="mr-2" />Unlimited resume creation</li>
                  <li className="flex mt-1"><CheckIcon className="mr-2" />Unlimited interview questions</li>
                  <li className="flex mt-1"><CheckIcon className="mr-2" />Download in LaTeX, Word</li>
                </ul>
              </div>
            </div>

            <button className="btn btn-wide btn-sm w-full">Subscribe Now</button>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 w-full shadow-xl flex flex-col justify-between">
            <div>
              <p className="font-bold">Annual Plan <div className="badge badge-secondary">Cheapest</div></p>

              <h2 className="text-4xl font-bold mt-[2vh]">$120 <span className="text-2xl font-normal text-gray-500">/ Year</span></h2>

              <p className="text-gray-500 mt-[3vh]">Enjoy a full year of unlimited access to all features, ensuring you have the support you need to excel.</p>

              <div className="text-gray-500 mt-[4vh]">
                <ul>
                  <li className="flex"><CheckIcon className="mr-2" />$10 per month, most cost effective option for long-term use</li>
                  <li className="flex mt-1"><CheckIcon className="mr-2" />Unlimited resume creation</li>
                  <li className="flex mt-1"><CheckIcon className="mr-2" />Unlimited interview questions</li>
                  <li className="flex mt-1"><CheckIcon className="mr-2" />Download in LaTeX, Word</li>
                </ul>
              </div>
            </div>

            <button className="btn btn-neutral btn-wide btn-sm w-full mt-auto">Subscribe Now</button>
          </div>
        </div>

        {/* <p className="text-3xl font-bold mt-[4vh]">Plan Features Comparison</p>

        <div className="overflow-x-auto mt-[2vh] mb-[4vh] w-[60vw]">
          <table className="table table-lg table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Feature</th>
                <th>Free Plan</th>
                <th>Subscription</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Resume Creation</td>
                <td>Limited to 2 per day</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Interview Questions</td>
                <td>Limited to 5 per day</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Resume Download Formats</td>
                <td>PDF only</td>
                <td>PDF, LaTeX, Word</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
      <Footbar />
    </div>
  );
}