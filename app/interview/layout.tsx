import Footbar from '../components/footbar';
import { ResumeProvider } from '../contexts/resume-context';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResumeProvider>
      {children}
    </ResumeProvider>
  );
}
