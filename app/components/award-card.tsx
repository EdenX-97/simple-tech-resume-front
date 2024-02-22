'use client'

import * as React from 'react';
import { Award } from '../contexts/profile-context';
import DatePicker from 'react-datepicker';
import { useProfile } from '../contexts/profile-context';

interface AwardProps {
  award: Award;
  index: number;
}

function AwardCard({ award, index }: AwardProps) {
  const { removeAward, updateAward } = useProfile();

  const handleRemoveAward = () => {
    removeAward(index);
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, valueName: string) => {
    switch (valueName) {
      case "ifNoStart":
        award.ifNoStart = e.target.checked;
        updateAward(index, award);
        break;
      case "awardName":
        award.awardName = e.target.value;
        updateAward(index, award);
        break;
      case "place":
        award.place = e.target.value;
        updateAward(index, award);
        break;
      default:
        break;
    }
  }

  const handleDateChange = (date: Date, valueName: string) => {
    switch (valueName) {
      case "startDate":
        award.startDate = date;
        updateAward(index, award);
        break;
      case "endDate":
        award.endDate = date;
        updateAward(index, award);
        break;
      default:
        break;
    }
  }

  return (
    <div className="card shadow-lg bg-base-100 mt-[2vh] p-4">
      <label className="label cursor-pointer flex items-start w-full justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="checkbox"
            checked={award.ifNoStart}
            onChange={(e) => handleValueChange(e, "ifNoStart")}
          ></input>
          <span className="label-text ml-2 text-base">No start date (e.g. certification)</span>
        </div>
        <button className="btn btn-primary btn-xs" onClick={handleRemoveAward}>Remove</button>
      </label>

      <div className="grid grid-cols-2 gap-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"><span className="text-red-500">*</span> Award Name</span>
          </div>
          <input
            type="text"
            placeholder="XXX Hackthon / AWS Certified Developer"
            className={`input input-bordered w-full ${award.awardName.length > 0 ? 'input-success' : 'input-error'}`}
            value={award.awardName}
            onChange={(e) => handleValueChange(e, "awardName")}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base">Place</span>
          </div>
          <input
            type="text"
            placeholder="1st place"
            className="input input-bordered w-full"
            value={award.place}
            onChange={(e) => handleValueChange(e, "place")}
          />
        </label>
      </div>

      <div className={`grid gap-4 ${award.ifNoStart ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <label className="form-control w-full">
          {award.ifNoStart ? (
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> Date</span>
            </div>
          ) : (
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> Start Date</span>
            </div>
          )}

          <DatePicker
            className={`input input-bordered w-full ${award.startDate ? 'input-success' : 'input-error'}`}
            selected={award.startDate}
            onChange={(date: Date) => handleDateChange(date, "startDate")}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </label>

        {!award.ifNoStart && (
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> End Date</span>
            </div>

            <DatePicker
              className={`input input-bordered w-full ${award.endDate ? 'input-success' : 'input-error'}`}
              selected={award.endDate}
              onChange={(date: Date) => handleDateChange(date, "endDate")}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
          </label>
        )}
      </div>

      <p className="text-base mt-[1vh]">{index + 1} / 10</p>
    </div>
  );
}

export default AwardCard;
