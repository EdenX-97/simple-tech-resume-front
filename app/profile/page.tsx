'use client'
import * as React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useProfile } from '../contexts/profile-context';
import WorkExperienceCard from '../components/work-experience-card';
import EducationCard from '../components/education-card';
import ProjectCard from '../components/project-card';
import AwardCard from '../components/award-card';

export default function Profile() {
  const {
    workExperiences,
    educations,
    projects,
    awards,
    skills,
    personalInfo,
    links,
    addWorkExperience,
    addEducation,
    addProject,
    addAward,
    updateSkills,
    updatePersonalInfo,
    updateLinks,
    clearAll,
  } = useProfile();

  const showModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    } else {
      console.error('Modal element not found or is not a dialog');
    }
  }

  return (
    <div className="bg-base-200 w-full flex flex-col items-center text-center">
      {/* Dialogs */}
      <dialog id="modal-clear-all" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Clearing All Current Input</h3>
          <p className="py-4">You are about to clear all current input. This action will only remove the data you have entered in this session and will not affect any previously saved content. Please confirm if you wish to proceed.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn mr-[1vw]">Close</button>
              <button className="btn btn-primary" onClick={clearAll}>Confirm</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="modal-reset" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Reset to Last Saved State</h3>
          <p className="py-4">You are about to reset the content to its last saved state. This action will discard all changes made since your last save. Please confirm if you wish to revert to the previously saved content.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn mr-[1vw]">Close</button>
              <button className="btn btn-primary" onClick={() => { }}>Confirm</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="modal-save" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Save Changes</h3>
          <p className="py-4">You are about to save your edits. This action will overwrite the previously saved content with the current input. Please confirm if you wish to proceed with saving the changes.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn mr-[1vw]">Close</button>
              <button className="btn btn-primary" onClick={() => { }}>Confirm</button>
            </form>
          </div>
        </div>
      </dialog>

      <h1 className="text-4xl font-bold mt-[4vh]">Fill it once, use repeatedly!</h1>

      {/* Personal Information */}
      <div className="card shadow-lg bg-base-300 mt-[4vh] p-4 w-[40vw]">
        <p className="text-xl font-bold">
          Personal Information
          {/* <span className="tooltip tooltip-right" data-tip="hello">
              <HelpOutlineIcon className="ml-2 w-5 h-5 text-gray-500" />
            </span> */}
        </p>

        <div className="grid grid-cols-3 gap-4 mt-[1vh]">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> First Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full ${personalInfo.firstName.length > 0 ? 'input-success' : 'input-error'}`}
              value={personalInfo.firstName}
              onChange={(e) => updatePersonalInfo({ ...personalInfo, firstName: e.target.value })}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base">Middle Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={personalInfo.middleName}
              onChange={(e) => updatePersonalInfo({ ...personalInfo, middleName: e.target.value })}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> Last Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full ${personalInfo.lastName.length > 0 ? 'input-success' : 'input-error'}`}
              value={personalInfo.lastName}
              onChange={(e) => updatePersonalInfo({ ...personalInfo, lastName: e.target.value })}
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full ${personalInfo.email.length > 0 ? 'input-success' : 'input-error'}`}
              value={personalInfo.email}
              onChange={(e) => updatePersonalInfo({ ...personalInfo, email: e.target.value })}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> Phone</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full ${personalInfo.phone.length > 0 ? 'input-success' : 'input-error'}`}
              value={personalInfo.phone}
              onChange={(e) => updatePersonalInfo({ ...personalInfo, phone: e.target.value })}
            />
          </label>
        </div>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base">Location</span>
          </div>
          <input
            type="text"
            placeholder="E.g. San Francisco, California, US"
            className="input input-bordered w-full"
            value={personalInfo.location}
            onChange={(e) => updatePersonalInfo({ ...personalInfo, location: e.target.value })}
          />
        </label>
      </div>

      {/* Links */}
      <div className="card shadow-lg bg-base-300 mt-[2vh] p-4 w-[40vw]">
        <p className="text-xl font-bold">Links</p>

        <label className="form-control w-full mt-[1vh]">
          <div className="label">
            <span className="label-text text-base">LinkedIn</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            value={links.linkedin}
            onChange={(e) => updateLinks({ ...links, linkedin: e.target.value })}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base">Github</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            value={links.github}
            onChange={(e) => updateLinks({ ...links, github: e.target.value })}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base">Personal Website / Portfolio</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            value={links.website}
            onChange={(e) => updateLinks({ ...links, website: e.target.value })}
          />
        </label>
      </div>

      {/* Work experiences */}
      <div className="card shadow-lg bg-base-300 mt-[2vh] p-4 w-[40vw]">
        <p className="text-xl font-bold">Work Experience</p>
        {workExperiences.map((workExperience, index) => (
          <WorkExperienceCard
            key={index}
            index={index}
            workExperience={workExperience}
          />
        ))}

        {workExperiences.length < 10 && (
          <button className="btn btn-outline btn-primary btn-sm mt-[2vh]" onClick={addWorkExperience}>Add Work Experience</button>
        )}
      </div>

      {/* Skills */}
      <div className="card shadow-lg bg-base-300 mt-[2vh] p-4 w-[40vw]">
        <p className="text-xl font-bold">Skills</p>
        <textarea
          className={`textarea textarea-bordered textarea-lg mt-[1vh] ${skills.length > 0 ? 'textarea-success' : 'textarea-error'}`}
          placeholder="List your skills and separate with commas, e.g. Java, Python, React, SQL"
          value={skills}
          onChange={(e) => updateSkills(e.target.value)}
        />
      </div>

      {/* Education */}
      <div className="card shadow-lg bg-base-300 mt-[2vh] p-4 w-[40vw]">
        <p className="text-xl font-bold">Education</p>

        {educations.map((education, index) => (
          <EducationCard
            key={index}
            index={index}
            education={education}
          />
        ))}

        {educations.length < 10 && (
          <button className="btn btn-outline btn-primary btn-sm mt-[2vh]" onClick={addEducation}>Add Education</button>
        )}
      </div>

      <div className="card shadow-lg bg-base-300 mt-[2vh] p-4 w-[40vw]">
        <p className="text-xl font-bold">Projects</p>

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            project={project}
          />
        ))}

        {projects.length < 10 && (
          <button className="btn btn-outline btn-primary btn-sm mt-[2vh]" onClick={addProject}>Add Project</button>
        )}
      </div>

      <div className="card shadow-lg bg-base-300 mt-[2vh] p-4 w-[40vw]">
        <p className="text-xl font-bold">Awards</p>

        {awards.map((award, index) => (
          <AwardCard
            key={index}
            index={index}
            award={award}
          />
        ))}

        {awards.length < 10 && (
          <button className="btn btn-outline btn-primary btn-sm mt-[2vh]" onClick={addAward}>Add Award</button>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 w-[40vw] mt-[2vh] mb-[6vh]">
        <button className="btn btn-neutral" onClick={() => showModal('modal-clear-all')}>Clear all</button>
        <button className="btn btn-accent" onClick={() => showModal('modal-reset')}>Reset</button>
        <button className="btn btn-primary" onClick={() => showModal('modal-save')}>Save</button>
      </div>
    </div>
  );
}