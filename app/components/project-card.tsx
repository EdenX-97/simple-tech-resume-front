'use client'

import * as React from 'react';
import { Project } from '../contexts/profile-context';
import DatePicker from 'react-datepicker';
import { useProfile } from '../contexts/profile-context';

interface ProjectProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectProps) {
  const { removeProject, updateProject } = useProfile();

  const handleRemoveProject = () => {
    removeProject(index);
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, valueName: string) => {
    switch (valueName) {
      case "ifCurrent":
        project.ifCurrent = e.target.checked;
        updateProject(index, project);
        break;
      case "projectName":
        project.projectName = e.target.value;
        updateProject(index, project);
        break;
      case "link":
        project.link = e.target.value;
        updateProject(index, project);
        break;
      case "role":
        project.role = e.target.value;
        updateProject(index, project);
        break;
      default:
        break;
    }
  }

  const handleDateChange = (date: Date, valueName: string) => {
    switch (valueName) {
      case "startDate":
        project.startDate = date;
        updateProject(index, project);
        break;
      case "endDate":
        project.endDate = date;
        updateProject(index, project);
        break;
      default:
        break;
    }
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    project.description = e.target.value;
    updateProject(index, project);
  }

  return (
    <div className="card shadow-lg bg-base-100 mt-[2vh] p-4">
      <label className="label cursor-pointer flex items-start w-full justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="checkbox"
            checked={project.ifCurrent}
            onChange={(e) => handleValueChange(e, "ifCurrent")}
          ></input>
          <span className="label-text ml-2 text-base">I currently working on it</span>
        </div>
        <button className="btn btn-primary btn-xs" onClick={handleRemoveProject}>Remove</button>
      </label>

      <div className="grid grid-cols-3 gap-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"><span className="text-red-500">*</span> Project Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className={`input input-bordered w-full ${project.projectName.length > 0 ? 'input-success' : 'input-error'}`}
            value={project.projectName}
            onChange={(e) => handleValueChange(e, "projectName")}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"> Link</span>
          </div>
          <input
            type="text"
            placeholder="Github/Website link"
            className="input input-bordered w-full"
            value={project.link}
            onChange={(e) => handleValueChange(e, "link")}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base">Role</span>
          </div>
          <input
            type="text"
            placeholder="Developer"
            className="input input-bordered w-full"
            value={project.role}
            onChange={(e) => handleValueChange(e, "role")}
          />
        </label>
      </div>

      <div className={`grid gap-4 ${project.ifCurrent ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base"><span className="text-red-500">*</span> Start Date</span>
          </div>

          <DatePicker
            className={`input input-bordered w-full ${project.startDate ? 'input-success' : 'input-error'}`}
            selected={project.startDate}
            onChange={(date: Date) => handleDateChange(date, "startDate")}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </label>

        {!project.ifCurrent && (
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> End Date</span>
            </div>

            <DatePicker
              className={`input input-bordered w-full ${project.endDate ? 'input-success' : 'input-error'}`}
              selected={project.endDate}
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
          className={`textarea textarea-bordered w-full ${project.description.length > 0 ? 'textarea-success' : 'textarea-error'}`}
          placeholder="Describe your project. You can use plain English; no special format needed."
          value={project.description}
          onChange={(e) => handleDescriptionChange(e)}
        />
      </label>

      <p className="text-base mt-[1vh]">{index + 1} / 10</p>
    </div>
  );
}

export default ProjectCard;
