'use client'

import * as React from 'react';
import { WorkExperience } from '../contexts/profile-context';
import DatePicker from 'react-datepicker';
import { useProfile } from '../contexts/profile-context';

interface WorkExperienceProps {
  workExperience: WorkExperience;
  index: number;
}

function WorkExperienceCard({ workExperience, index }: WorkExperienceProps) {
  const { removeWorkExperience, updateWorkExperience } = useProfile();

  const handleRemoveWorkExperience = () => {
    removeWorkExperience(index);
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, valueName: string) => {
    switch (valueName) {
      case "ifCurrent":
        workExperience.ifCurrent = e.target.checked;
        updateWorkExperience(index, workExperience);
        break;
      case "companyName":
        workExperience.companyName = e.target.value;
        updateWorkExperience(index, workExperience);
        break;
      case "title":
        workExperience.title = e.target.value;
        updateWorkExperience(index, workExperience);
        break;
      case "location":
        workExperience.location = e.target.value;
        updateWorkExperience(index, workExperience);
        break;
      case "description":
        workExperience.description = e.target.value;
        updateWorkExperience(index, workExperience);
        break;
      default:
        break;
    }
  }

  const handleDateChange = (date: Date, valueName: string) => {
    switch (valueName) {
      case "startDate":
        workExperience.startDate = date;
        updateWorkExperience(index, workExperience);
        break;
      case "endDate":
        workExperience.endDate = date;
        updateWorkExperience(index, workExperience);
        break;
      default:
        break;
    }
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    workExperience.description = e.target.value;
    updateWorkExperience(index, workExperience);
  }

  return (
    <div className="card shadow-lg bg-base-100 mt-[2vh] p-4">
      <label className="label cursor-pointer flex items-start w-full justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="checkbox"
            checked={workExperience.ifCurrent}
            onChange={(e) => handleValueChange(e, "ifCurrent")}
          ></input>
          <span className="label-text ml-2 text-base">I currently working here</span>
        </div>
        <button className="btn btn-primary btn-xs" onClick={handleRemoveWorkExperience}>Remove</button>
      </label>

      <div className="grid grid-cols-3 gap-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"><span className="text-red-500">*</span> Company Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className={`input input-bordered w-full ${workExperience.companyName.length > 0 ? 'input-success' : 'input-error'}`}
            value={workExperience.companyName}
            onChange={(e) => handleValueChange(e, "companyName")}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"><span className="text-red-500">*</span> Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className={`input input-bordered w-full ${workExperience.title.length > 0 ? 'input-success' : 'input-error'}`}
            value={workExperience.title}
            onChange={(e) => handleValueChange(e, "title")}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"><span className="text-red-500">*</span> Location</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className={`input input-bordered w-full ${workExperience.location.length > 0 ? 'input-success' : 'input-error'}`}
            value={workExperience.location}
            onChange={(e) => handleValueChange(e, "location")}
          />
        </label>
      </div>

      <div className={`grid gap-4 ${workExperience.ifCurrent ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"><span className="text-red-500">*</span> Start Date</span>
          </div>

          <DatePicker
            className={`input input-bordered w-full ${workExperience.startDate ? 'input-success' : 'input-error'}`}
            selected={workExperience.startDate}
            onChange={(date: Date) => handleDateChange(date, "startDate")}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </label>

        {!workExperience.ifCurrent && (
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> End Date</span>
            </div>

            <DatePicker
              className={`input input-bordered w-full ${workExperience.endDate ? 'input-success' : 'input-error'}`}
              selected={workExperience.endDate}
              onChange={(date: Date) => handleDateChange(date, "endDate")}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
          </label>
        )}
      </div>

      <label className="form-control">
        <div className="label">
          <span className="label-text text-base"><span className="text-red-500">*</span> Description</span>
        </div>
        <textarea
          className={`textarea textarea-bordered w-full ${workExperience.description.length > 0 ? 'textarea-success' : 'textarea-error'}`}
          placeholder="Describe your job duties. You can use plain English; no special format needed."
          value={workExperience.description}
          onChange={(e) => handleDescriptionChange(e)}
        />
      </label>

      <p className="text-base mt-[1vh]">{index + 1} / 10</p>
    </div>
  );
}

export default WorkExperienceCard;
