import Link from "next/link";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const form = useForm();

  return (
    
      <form className="max-w-[560px] w-full bg-appWhite p-400 flex flex-col gap-8 rounded-150 shadow-sm">
        <h2 className="text-3xl text-appGrey font-bold">Login</h2>

        <fieldset>Teste</fieldset>

        <div className="flex flex-col gap-8">
          <button className="bg-appGrey w-full text-sm font-bold text-appWhite h-14 rounded-100">
            Login
          </button>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm text-appGrey-500 flex gap-2">
              Need to create an account?
              <Link className="text-appGrey font-bold" href="/sign-up">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </form>
    
  );
}
