import {
  useSearchParams,
  Form,
  useActionData,
  useNavigation,
  Link,
  Outlet,
} from "react-router-dom";
import { loginUser } from "../api";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../api";
import { provider } from "../api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const signin = await loginUser(email, password);
  console.log(signin);
  return signin || null;
}
const Login = () => {
  const [param, setParam] = useSearchParams();
  const [user, setUser] = useState(null);
  const [img, setImg] = useState(null);
  const message = param.get("message");
  const [warning, setwarning] = useState(message);
  const actionerr = useActionData();
  const nav = useNavigation();
  console.log(img);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean-up function for the effect
    return () => unsubscribe();
  }, [user]);

  //logout
  async function logout() {
    try {
      const status = await signOut(auth);
      console.log(status);
    } catch (error) {
      console.error(error.message);
    }
  }

  //signin with google
  async function loginWithGoogle() {
    try {
      const popup = await signInWithPopup(auth, provider);
      console.log(popup);
      setImg(popup.user.photoURL);
    } catch (error) {
      console.log(error);
    }
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
    <div>
      {user != null ? (
        <div className="h-[80vh] flex  flex-col gap-2 relative items-center">
          {user != null && (
            <button
              onClick={logout}
              className="underline underline-offset-1 absolute top-0 right-5 text-[#4d4d4d]"
            >
              log out
            </button>
          )}
          <h1 className="font-int text-[38px]  text-center font-semibold my-20">{`Welcome  ${user.email}`}</h1>
          <img
            width="100"
            height="100"
            src={"https://img.icons8.com/ios-filled/50/user-male-circle.png"}
            alt="user-male-circle"
          />
          <Link
            to="/host"
            className="bg-[#fd8900]  text-white font-bold py-3 px-5 rounded-md mt-10"
          >
            Explore now
          </Link>
        </div>
      ) : (
        <div
          method="post"
          className="flex flex-col relative items-center justify-center font-int gap-5 px-5 md:my-20 h-[90vh] max-w-xl mx-auto"
        >
          {warning && (
            <h2 className="font-mono text-red-500 font-bold mb-2 ">
              {warning}
            </h2>
          )}
          {actionerr && (
            <h2 className="font-mono text-red-500 font-bold mb-2 ">
              {actionerr.split("/")[1].replace(").", "")}
            </h2>
          )}
          <h1 className="font-bold text-[32px] mb-5">
            Sign in to your Account
          </h1>

          <button
            className="px-4  py-2 border flex gap-6 bg-white border-slate-700  rounded-lg dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 hover:shadow transition duration-150 justify-center"
            onClick={loginWithGoogle}
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span className="text-[#161616] font-int font-semibold">
              Sign-In with Google
            </span>
          </button>
          <div>or</div>
          <Form method="post" className="flex flex-col w-[100%] gap-3" replace>
            <input
              type="email"
              name="email"
              id="email"
              className="w-[100%] p-3 border-slate-500 border rounded-md"
              placeholder="Email address"
              onChange={clearWarning}
            />
            <input
              type="password"
              name="password"
              id="password"
              className="w-[100%] p-3 border-slate-500 border rounded-md"
              placeholder="password"
              onChange={clearWarning}
            />
            <button
              type="submit"
              className="bg-[#FF8C38] w-[100%] h-[55px] box-border mt-10 text-white font-bold rounded-md"
              disabled={nav.state === "submitting"}
            >
              {nav.state === "submitting" ? "Logging in..." : "Log in"}
            </button>
          </Form>
          <p className="mt-4">
            Don&apos;t have an account?
            <Link to="signup" className="text-[#ff8c38] ml-2">
              create new account
            </Link>
          </p>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Login;
