import {
  useSearchParams,
  Form,
  useActionData,
  useNavigation,
  redirect,
} from "react-router-dom";
import { loginUser } from "../api";
import { useEffect, useState } from "react";
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggin", true);
    redirect("/host")
    return {success:true}
  } catch (err) {
    return err.message;
  }
}
const Login = () => {
  const [param, setParam] = useSearchParams();
  const message = param.get("message");
  const [warning, setwarning] = useState(message);
  const actionerr = useActionData();
  const nav = useNavigation();
  function logout() {
    localStorage.removeItem("loggin");
  }
  useEffect(() => {
    setTimeout(() => {
      setwarning(null);
    }, 4000);
  }, []);
  function clearWarning() {
    setwarning(null);
  }
  return (
    <div
      method="post"
      className="flex flex-col relative items-center justify-center font-int gap-5 px-5 md:my-20 h-[90vh] max-w-xl mx-auto"
    >
      {localStorage.getItem("loggin")===true && (
        <button
          onClick={logout}
          className="underline underline-offset-1 absolute top-0 right-5 text-[#4d4d4d]"
        >
          log out
        </button>
      )}
      {warning && (
        <h2 className="font-mono text-red-500 font-bold mb-2 ">{warning}</h2>
      )}
      {actionerr && (
        <h2 className="font-mono text-red-500 font-bold mb-2 ">{actionerr}</h2>
      )}
      <h1 className="font-bold text-[32px] mb-5">Sign in to your Account</h1>
      <Form method="post" className="flex flex-col w-[100%] gap-3" replace>
        <input
          type="email"
          name="email"
          id="email"
          className="w-[100%] p-3 border-slate-500 border rounded-md"
          placeholder="Email address"
          onChange={clearWarning}
          // value={formData.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="w-[100%] p-3 border-slate-500 border rounded-md"
          placeholder="password"
          onChange={clearWarning}
          // value={formData.password}
        />
        <button
          //  onClick={handleSubmit}
          type="submit"
          className="bg-[#FF8C38] w-[100%] h-[55px] box-border mt-10 text-white font-bold rounded-md"
          disabled={nav.state === "submitting"}
        >
          {nav.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
      <p className="mt-4">
        Don&apos;t have an account?
        <a href="" className="text-[#ff8c38] ml-2">
          create one now
        </a>
      </p>
    </div>
  );
};

export default Login;
