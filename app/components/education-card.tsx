'use client'

import * as React from 'react';
import { Education } from '../contexts/profile-context';
import DatePicker from 'react-datepicker';
import { useProfile } from '../contexts/profile-context';

interface EducationProps {
  education: Education;
  index: number;
}

function EducationCard({ education, index }: EducationProps) {
  const { removeEducation, updateEducation } = useProfile();

  const handleRemoveEducation = () => {
    removeEducation(index);
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, valueName: string) => {
    switch (valueName) {
      case "ifCurrent":
        education.ifCurrent = e.target.checked;
        updateEducation(index, education);
        break;
      case "schoolName":
        education.schoolName = e.target.value;
        updateEducation(index, education);
        break;
      case "degree":
        education.degree = e.target.value;
        updateEducation(index, education);
        break;
      case "gpa":
        education.gpa = e.target.value;
        updateEducation(index, education);
        break;
      default:
        break;
    }
  }

  const handleDateChange = (date: Date, valueName: string) => {
    switch (valueName) {
      case "startDate":
        education.startDate = date;
        updateEducation(index, education);
        break;
      case "endDate":
        education.endDate = date;
        updateEducation(index, education);
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
            checked={education.ifCurrent}
            onChange={(e) => handleValueChange(e, "ifCurrent")}
          ></input>
          <span className="label-text ml-2 text-base">I currently studying here</span>
        </div>
        <button className="btn btn-primary btn-xs" onClick={handleRemoveEducation}>Remove</button>
      </label>

      <div className="grid grid-cols-3 gap-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"><span className="text-red-500">*</span> School Name</span>
          </div>
          <input
            type="text"
            placeholder="Harvard University"
            className={`input input-bordered w-full ${education.schoolName.length > 0 ? 'input-success' : 'input-error'}`}
            value={education.schoolName}
            onChange={(e) => handleValueChange(e, "schoolName")}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"><span className="text-red-500">*</span> Degree</span>
          </div>
          <input
            type="text"
            placeholder="Master of IT"
            className={`input input-bordered w-full ${education.degree.length > 0 ? 'input-success' : 'input-error'}`}
            value={education.degree}
            onChange={(e) => handleValueChange(e, "degree")}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base">GPA</span>
          </div>
          <input
            type="text"
            placeholder="4.00"
            className="input input-bordered w-full"
            value={education.gpa}
            onChange={(e) => handleValueChange(e, "gpa")}
          />
        </label>
      </div>

      <div className={`grid gap-4 ${education.ifCurrent ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"><span className="text-red-500">*</span> Start Date</span>
          </div>

          <DatePicker
            className={`input input-bordered w-full ${education.startDate ? 'input-success' : 'input-error'}`}
            selected={education.startDate}
            onChange={(date: Date) => handleDateChange(date, "startDate")}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </label>

        {!education.ifCurrent && (
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> End Date</span>
            </div>

            <DatePicker
              className={`input input-bordered w-full ${education.endDate ? 'input-success' : 'input-error'}`}
              selected={education.endDate}
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

export default EducationCard;
