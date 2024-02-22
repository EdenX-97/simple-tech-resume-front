'use client'
import * as React from 'react';
import PdfViewer from '../components/pdf-viewer';
import { useResume } from '../contexts/resume-context';

export default function Resume() {
  const {
    jobInfo,
    generatedResume,
    updateJobInfo,
    updateGeneratedResume,
    clearAll,
  } = useResume();

  const showModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    } else {
      console.error('Modal element not found or is not a dialog');
    }
  }

  const handleDownload = (fileFormat: string) => {
    const link = document.createElement('a');
    switch (fileFormat) {
      case 'pdf':
        link.href = generatedResume.pdfUrl;
        link.download = "resume.pdf";
        break;
      case 'latex':
        link.href = generatedResume.latexUrl;
        link.download = "resume.tex";
        break;
      case 'word':
        link.href = generatedResume.wordUrl;
        link.download = "resume.docx";
        break;
      default:
        console.error('Invalid file format');
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <div className="bg-base-200 w-full flex flex-row justify-center gap-10">
      {/* Dialogs */}
      <dialog id="modal-clear-all" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Clearing All Current Input</h3>
          <p className="py-4">You are about to clear all current input. Please confirm if you wish to proceed.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn mr-[1vw]">Close</button>
              <button className="btn btn-primary" onClick={clearAll}>Confirm</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="modal-generate" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Generate Resume</h3>
          <p className="py-4">You are about to generate your resume. This may take some time. Please be patient and wait for the process to complete.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn mr-[1vw]">Close</button>
              <button className="btn btn-primary">Confirm</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="bg-base-300 mt-[2vh] mb-[2vh] w-[30vw] flex flex-col pl-6 pr-6 rounded-lg shadow-xl h-fit">
        <h2 className="text-2xl font-bold text-center mt-[2vh]">Job Information</h2>

        <div className="flex flex-row gap-2">
          <label className="form-control w-3/4">
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> Role</span>
            </div>
            <input
              type="text"
              placeholder="E.g. Software Engineer"
              className={`input input-bordered w-full ${jobInfo.role.length > 0 ? 'input-success' : 'input-error'}`}
              value={jobInfo.role}
              onChange={(e) => updateJobInfo({ ...jobInfo, role: e.target.value })}
            />
          </label>

          <label className="form-control w-1/4">
            <div className="label">
              <span className="label-text text-base"><span className="text-red-500">*</span> Level</span>
            </div>
            <select
              className="select select-bordered text-base select-success"
              value={jobInfo.level}
              onChange={(e) => updateJobInfo({ ...jobInfo, level: e.target.value })}
            >
              <option>Grad</option>
              <option selected>Junior</option>
              <option>Mid</option>
              <option>Senior</option>
              <option>Lead</option>
            </select>
          </label>
        </div>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base">Job Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered text-base"
            placeholder="Generate a resume based on the job description you are applying for."
            rows={5}
            value={jobInfo.description}
            onChange={(e) => updateJobInfo({ ...jobInfo, description: e.target.value })}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base">Notes</span>
          </div>
          <textarea
            className="textarea textarea-bordered text-base"
            placeholder="Enter anything you think the AI needs to be aware of when generating your resume."
            rows={5}
            value={jobInfo.notes}
            onChange={(e) => updateJobInfo({ ...jobInfo, notes: e.target.value })}
          />
        </label>

        <button className="btn btn-neutral mb-[1vh] mt-[2vh]" onClick={() => showModal('modal-clear-all')}>Clear all</button>
        <button className="btn btn-primary mb-[2vh]" onClick={() => showModal('modal-generate')}>Generate</button>

      </div>

      <div className="bg-base-300 mt-[2vh] mb-[2vh] pl-6 pr-6 rounded-lg shadow-xl flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center mb-[1vh] mt-[2vh]">Generated Resume</h2>

        <div className="flex flex-row gap-2 mb-[2vh]">
          <select className="select select-bordered select-sm w-auto">
            <option disabled selected>Choose your generated resume version</option>
            <option>Role - Level - 15.02.2024 10:00</option>
            <option>Role - Level - 15.02.2024 10:00</option>
          </select>
          <button className="btn btn-secondary btn-sm" onClick={() => handleDownload("pdf")}>Download PDF</button>
          <button className="btn btn-accent btn-sm" onClick={() => handleDownload("latex")}>Download LATEX</button>
          <button className="btn btn-primary btn-sm" onClick={() => handleDownload("word")}>Download WORD</button>
        </div>

        <PdfViewer url={generatedResume.pdfUrl} />
      </div>
    </div>
  );
}
