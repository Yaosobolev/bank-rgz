import { LoginForm } from "@/components";

export const Login: React.FC = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <h1 className="text-2xl mb-5">Авторизация</h1>
      <LoginForm />
    </div>
  );
};
