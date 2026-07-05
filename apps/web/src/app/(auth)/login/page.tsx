import GuestGuard from '@/components/guards/GuestGuard';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <GuestGuard>
      <div className="mx-auto max-w-md py-16">
        <LoginForm />
      </div>
    </GuestGuard>
  );
}
