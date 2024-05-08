import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import { setUser } from "../api";

//action function
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const cpassword = formData.get("password");
  if (password === cpassword) {
    const signup = await setUser(email, password);
    return signup;
  } else {
    alert("password not match");
  }
  return null;
}

//signup component
const Signup = () => {
  const err = useActionData();
  const nav = useNavigation();
  console.log("rout err", err);
  return (
    <div>
      <div
        method="post"
        className="flex flex-col relative items-center justify-center font-int gap-5 px-5 md:my-20 h-[90vh] max-w-xl mx-auto"
      >
        <h1 className="font-bold text-[32px] mb-5">Create your Account</h1>
        {err && (
          <h1 className="font-mono text-red-600">
            {err.split(":")[1] || (
              <span className="text-green-500 text-center">{err}</span>
            )}
          </h1>
        )}
        <Form method="post" className="flex flex-col w-[100%] gap-3" replace>
          <input
            type="email"
            name="email"
            id="cemail"
            className="w-[100%] p-3 border-slate-500 border rounded-md"
            placeholder="Email address"
          />
          <input
            type="password"
            name="password"
            id="cpassword"
            className="w-[100%] p-3 border-slate-500 border rounded-md"
            placeholder="password"
          />
          <input
            type="password"
            name="cpassword"
            id="ccpassword"
            className="w-[100%] p-3 border-slate-500 border rounded-md"
            placeholder="confirm password"
          />
          <button
            type="submit"
            className="bg-[#FF8C38] w-[100%] h-[55px] box-border mt-10 text-white font-bold rounded-md"
            disabled={nav.state === "submitting"}
          >
            {nav.state === "submitting" ? "signing in..." : "Sign in"}
          </button>
        </Form>
        <Link
          to="/user/login"
          className="text-[#4d4d4d] underline underline-offset-1"
        >
          back to SignIn
        </Link>
      </div>
    </div>
  );
};

export default Signup;
