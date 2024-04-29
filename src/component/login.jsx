import { useState } from "react";
import { useSearchParams, Form, Navigate } from "react-router-dom";
import { loginUser } from "../api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({ email, password });
  console.log(data);
  return null;
}
const Login = () => {
  // const [formData, setFormData] = useState({ email: "", password: "" });
  const [param, setParam] = useSearchParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");
  const message = param.get("message");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser()
      .then(() => Navigate("/host", { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }
  // function handledata(event) {
  //   const { name, value } = event.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // }
  return (
    <div
      method="post"
      className="flex flex-col items-center justify-center font-int gap-5 px-5 md:my-20 h-[90vh] max-w-xl mx-auto"
    >
      {message && (
        <h2 className="font-mono text-red-500 font-bold mb-2 ">{message}</h2>
      )}
      <h1 className="font-bold text-[32px] mb-5">Sign in to your Account</h1>
      <Form method="post" className="flex flex-col w-[100%] gap-3">
        <input
          type="email"
          name="email"
          id="email"
          className="w-[100%] p-3 border-slate-500 border rounded-md"
          placeholder="Email address"
          // onChange={handledata}
          // value={formData.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="w-[100%] p-3 border-slate-500 border rounded-md"
          placeholder="password"
          // onChange={handledata}
          // value={formData.password}
        />
        <button
         onClick={handleSubmit}
          type="submit"
          className="bg-[#FF8C38] w-[100%] h-[55px] box-border mt-10 text-white font-bold rounded-md"
        >
          Sign In
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
