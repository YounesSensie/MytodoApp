import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    });
    router.push('/sign-in');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 p-2 rounded-xl text-sm bg-deep_purple text-white font-bold"
    >
      <LogOut className=' text-white size-4'/>
      Logout
    </button>
  );
};

export default LogoutButton;