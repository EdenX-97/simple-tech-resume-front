'use client'
import React, { createContext, useContext, useState } from 'react';
import Resume from '../resume/page';

interface ResumeProviderProps {
  children: React.ReactNode;
}

export interface JobInfo {
  role: string;
  level: string;
  description: string;
  notes: string;
}

export interface GeneratedResume {
  pdfUrl: string;
  latexUrl: string;
  wordUrl: string;
}

interface ResumeContextType {
  jobInfo: JobInfo;
  generatedResume: GeneratedResume;
  updateJobInfo: (jobInfo: JobInfo) => void;
  updateGeneratedResume: (generatedResume: GeneratedResume) => void;
  clearAll: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  const [jobInfo, setJobInfo] = useState<JobInfo>({
    role: '',
    level: 'Junior',
    description: '',
    notes: '',
  });

  const [generatedResume, setGeneratedResume] = useState<GeneratedResume>({
    pdfUrl: '/template.pdf',
    latexUrl: '/template.latex',
    wordUrl: '/template.docx',
  });

  const updateJobInfo = (jobInfo: JobInfo) => {
    setJobInfo(jobInfo);
  };

  const updateGeneratedResume = (generatedResume: GeneratedResume) => {
    setGeneratedResume(generatedResume);
  };

  const clearAll = () => {
    setJobInfo({
      role: '',
      level: 'Junior',
      description: '',
      notes: '',
    });
  };

  return (
    <ResumeContext.Provider value={{ jobInfo, generatedResume, updateJobInfo, updateGeneratedResume, clearAll }}>
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}