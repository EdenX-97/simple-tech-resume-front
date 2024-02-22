'use client'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import PersonIcon from '@mui/icons-material/Person';
import TerminalIcon from '@mui/icons-material/Terminal';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Footbar from './components/footbar';
import Link from 'next/link';

export default function Home() {
  let titleList: string[] = [
    "Software Engineer",
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
    "Data Analyst",
    "DevOps Engineer",
    "iOS Developer",
    "Android Developer",
  ];

  return (
    <main className="text-center">
      <div className="bg-base-200 w-full flex flex-col items-center">
        <div className="w-[60vw] items-left">
          <div className="mt-[2vh]">
            <div className="badge badge-secondary">Powered by GPT AI</div>
            <h1 className="text-5xl font-bold mt-[1vh]">
              The Simplest Way to Generate Your
            </h1>
            <h1 className="text-5xl font-bold mt-[1vh]">
              <span className="inline-block text-blue-500">
                <Typewriter
                  options={{
                    strings: titleList,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              Resume
            </h1>

            <p className="text-lg mt-[2vh]">Let AI Speed Up Your Resume and Cover Letter Creation.</p>
            <p className="text-lg">Customized for Each Company and Position.</p>
          </div>

          <div className="mt-[2vh]">
            <button className="btn btn-primary text-lg"><Link href="/profile">Try Now <span className="badge badge-lg ml-1">FREE</span></Link></button>
          </div>

          <div className="flex mt-[4vh] mb-[2vh] text-left">
            <Image src="/template.png" alt="template-image" width={400} height={400} />
            <div className="ml-[6vh] mt-[2vh] w-full">
              <div className="badge badge-primary">Core Features</div>
              <h2 className="text-2xl font-bold">Easily generate your perfect tech resume</h2>
              <div className="grid grid-cols-2 gap-4 mt-[2vh]">
                <div className="mt-[1vh]">
                  <p className="text-lg font-bold"><PersonIcon /> One-Stop Profile Setup</p>
                  <p className="text-base">Forget the resume redo hassle! Fill in your profile once and auto-generate resumes for any job.</p>
                </div>
                <div className="mt-[1vh]">
                  <p className="text-lg font-bold"><TerminalIcon /> Tech Position Optimization</p>
                  <p className="text-base">Efficiently generate perfect resume for software development, data analysis, or any title.</p>
                </div>
                <div className="mt-[1vh]">
                  <p className="text-lg font-bold"><AutoGraphIcon /> AI-Powered Resume Creation</p>
                  <p className="text-base">AI generates compelling resume content from your career history and work experience.</p>
                </div>
                <div className="mt-[1vh]">
                  <p className="text-lg font-bold"><QuestionAnswerIcon /> Interview Yourself</p>
                  <p className="text-base">Test your resume with interview questions and get AI-generated answers.</p>
                </div>
                <div className="mt-[1vh]">
                  <p className="text-lg font-bold"><PictureAsPdfIcon /> Multi-Format Resume Output</p>
                  <p className="text-base">Output LaTeX, Word, or PDF, ready for direct use or custom modifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-300">
        <h1 className="text-2xl font-bold pt-[2vh]">
          FAQ
        </h1>
        <div className="join join-vertical w-[40vw] bg-base-200 mt-[2vh] mb-[2vh]">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              Do you offer a free plan?
            </div>
            <div className="collapse-content flex justify-center">
              <p className="w-5/6">Yes, we are delighted to offer a free plan to our users, reflecting our commitment to accessibility and our belief in the value of our service. Our free plan includes the ability to generate up to <b>5 resumes</b> and ask <b>10 interview questions</b> per day.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              How can I create a resume using your tools?
            </div>
            <div className="collapse-content flex justify-center">
              <p className="w-5/6">Simply fill in your details once in Profile, and our platform will allow you to auto-generate tailored resumes for any job application. This saves you the time and effort of redoing your resume for each new application.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              How does the AI-Powered Resume Creation work?
            </div>
            <div className="collapse-content flex justify-center">
              <p className="w-5/6">Our AI-Powered Resume Creation tool utilizes artificial intelligence and specially tailored prompts to generate professional resumes. Everything is designed following best practices, leveraging the latest AI technology to ensure the creation of exceptional resumes. This process highlights your achievements and skills in a way that resonates with employers, making your resume stand out from other candidates.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              Can I practice for interviews using your platform?
            </div>
            <div className="collapse-content flex justify-center">
              <p className="w-5/6">Absolutely! Our Interview tool allows you to test yourself with interview questions based on your resume. It provides AI-generated answers to help you prepare effectively, improving your confidence and performance in real interviews.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              What resume formats can I create on your website?
            </div>
            <div className="collapse-content flex justify-center">
              <p className="w-5/6">You can create resumes in versatile formats including LaTeX, Word, or PDF. This flexibility allows you to choose the format that best suits your needs, whether you&apos;re looking for direct use or wish to make custom tweaks.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              How can I customize the format of my resume?
            </div>
            <div className="collapse-content flex justify-center">
              <p className="w-5/6">After creating your resume with our AI-Powered Resume Creation tool, you can choose to download it in LaTeX, Word, or PDF format. Each format is ready for direct use, but you can also make custom tweaks to ensure your resume perfectly meets your preferences and the application requirements.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              Can I access resumes I&apos;ve generated in the past?
            </div>
            <div className="collapse-content flex justify-center">
              <p className="w-5/6">Yes! We save the 10 most recent resumes created by each user. These resumes are not only stored for your convenience but are also integrated into our Interview feature. This means you can easily use any of your recent resumes to ask questions in the Interview function.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              Why don&apos;t we offer a variety of templates?
            </div>
            <div className="collapse-content flex justify-center">
              <p className="w-5/6">Including photos, using multiple colors, or opting for complex layouts can detract from what truly matters: the content of your resume. Our approach is informed by an analysis of resumes from some of the employees at FAANG companies. The simplicity of tech resume ensures that the resume is easily navigable, also by Applicant Tracking Systems (ATS) which are commonly used in the hiring process.</p>
            </div>
          </div>
        </div>
      </div>

      <Footbar />
    </main>
  );
}
