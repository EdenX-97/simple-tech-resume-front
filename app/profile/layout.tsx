import Footbar from '../components/footbar';
import { ProfileProvider } from '../contexts/profile-context';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProfileProvider>
      {children}
    </ProfileProvider>
  );
}
