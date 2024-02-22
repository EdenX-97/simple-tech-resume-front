'use client'
import React, { createContext, useContext, useState } from 'react';

interface ProfileProviderProps {
  children: React.ReactNode;
}

export interface PersonalInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  location: string;
  email: string;
  phone: string;
}

export interface Links {
  linkedin: string;
  github: string;
  website: string;
}

export interface WorkExperience {
  ifCurrent: boolean;
  companyName: string;
  title: string;
  location: string;
  startDate: Date | null;
  endDate: Date | null;
  description: string;
}

export interface Education {
  ifCurrent: boolean;
  schoolName: string;
  degree: string;
  gpa: string;
  startDate: Date | null;
  endDate: Date | null;
}

export interface Project {
  ifCurrent: boolean;
  projectName: string;
  link: string;
  role: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
}

export interface Award {
  ifNoStart: boolean;
  awardName: string;
  place: string;
  startDate: Date | null;
  endDate: Date | null;
}

interface ProfileContextType {
  personalInfo: PersonalInfo;
  workExperiences: WorkExperience[];
  educations: Education[];
  projects: Project[];
  awards: Award[];
  skills: string;
  links: Links;
  addWorkExperience: () => void;
  removeWorkExperience: (index: number) => void;
  updateWorkExperience: (index: number, workExperience: WorkExperience) => void;
  addEducation: () => void;
  removeEducation: (index: number) => void;
  updateEducation: (index: number, education: Education) => void;
  addProject: () => void;
  removeProject: (index: number) => void;
  updateProject: (index: number, project: Project) => void;
  addAward: () => void;
  removeAward: (index: number) => void;
  updateAward: (index: number, award: Award) => void;
  updateSkills: (skill: string) => void;
  updatePersonalInfo: (personalInfo: PersonalInfo) => void;
  updateLinks: (links: Links) => void;
  clearAll: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [awards, setAwards] = useState<Award[]>([]);
  const [skills, setSkills] = useState('');
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    middleName: '',
    lastName: '',
    location: '',
    email: '',
    phone: '',
  });
  const [links, setLinks] = useState<Links>({
    linkedin: '',
    github: '',
    website: '',
  });

  const addWorkExperience = () => {
    var newWorkExperience: WorkExperience = {
      ifCurrent: false,
      companyName: '',
      title: '',
      location: '',
      startDate: null,
      endDate: null,
      description: '',
    };
    if (workExperiences.length + 1 > 10) {
      throw new Error('You can only add up to 10 work experiences');
    } else {
      setWorkExperiences([...workExperiences, newWorkExperience]);
    }
  }

  const removeWorkExperience = (index: number) => {
    console.log(index);
    setWorkExperiences(workExperiences.filter((exp, i) => i !== index));

  }

  const updateWorkExperience = (index: number, workExperience: WorkExperience) => {
    setWorkExperiences(workExperiences.map((exp, i) => {
      if (i === index) {
        return workExperience;
      }
      return exp;
    }));
  }

  const addEducation = () => {
    var newEducation: Education = {
      ifCurrent: false,
      schoolName: '',
      degree: '',
      gpa: '',
      startDate: null,
      endDate: null,
    };
    if (educations.length + 1 > 10) {
      throw new Error('You can only add up to 10 educations');
    } else {
      setEducations([...educations, newEducation]);
    }
  }

  const removeEducation = (index: number) => {
    setEducations(educations.filter((edu, i) => i !== index));
  }

  const updateEducation = (index: number, education: Education) => {
    setEducations(educations.map((edu, i) => {
      if (i === index) {
        return education;
      }
      return edu;
    }));
  }

  const addProject = () => {
    var newProject: Project = {
      ifCurrent: false,
      projectName: '',
      link: '',
      role: '',
      description: '',
      startDate: null,
      endDate: null,
    };
    if (projects.length + 1 > 10) {
      throw new Error('You can only add up to 10 projects');
    } else {
      setProjects([...projects, newProject]);
    }
  }

  const removeProject = (index: number) => {
    setProjects(projects.filter((project, i) => i !== index));
  }

  const updateProject = (index: number, project: Project) => {
    setProjects(projects.map((project, i) => {
      if (i === index) {
        return project;
      }
      return project;
    }));
  }

  const addAward = () => {
    var newAward: Award = {
      ifNoStart: false,
      awardName: '',
      place: '',
      startDate: null,
      endDate: null,
    };
    if (awards.length + 1 > 10) {
      throw new Error('You can only add up to 10 awards');
    } else {
      setAwards([...awards, newAward]);
    }
  }

  const removeAward = (index: number) => {
    setAwards(awards.filter((award, i) => i !== index));
  }

  const updateAward = (index: number, award: Award) => {
    setAwards(awards.map((award, i) => {
      if (i === index) {
        return award;
      }
      return award;
    }));
  }

  const updateSkills = (skill: string) => {
    console.log(skill)
    setSkills(skill);
  };

  const updatePersonalInfo = (personalInfo: PersonalInfo) => {
    setPersonalInfo(personalInfo);
  }

  const updateLinks = (links: Links) => {
    setLinks(links);
  }

  const clearAll = () => {
    setWorkExperiences([]);
    setEducations([]);
    setProjects([]);
    setAwards([]);
    setSkills('');
    setPersonalInfo({
      firstName: '',
      middleName: '',
      lastName: '',
      location: '',
      email: '',
      phone: '',
    });
    setLinks({
      linkedin: '',
      github: '',
      website: '',
    });
  }

  return (
    <ProfileContext.Provider value={{
      workExperiences,
      skills,
      educations,
      projects,
      awards,
      personalInfo,
      links,
      addWorkExperience,
      removeWorkExperience,
      updateWorkExperience,
      addEducation,
      removeEducation,
      updateEducation,
      addProject,
      removeProject,
      updateProject,
      addAward,
      removeAward,
      updateAward,
      updateSkills,
      updatePersonalInfo,
      updateLinks,
      clearAll,
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};