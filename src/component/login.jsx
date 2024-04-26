import { useState } from "react";

const Login = () => {
    const [formData,setFormData]=useState({email:"",password:""})
    console.log(formData);

    function handledata(event){
         const {name,value}=event.target
         setFormData(prev=>({...prev,[name]:value}))
    }
  return (
    <div className="flex flex-col items-center justify-center font-int gap-5 px-5 md:my-20 my-[200px] max-w-xl mx-auto">
      <h1 className="font-bold text-[32px] mb-5">Sign in to your Account</h1>
      <input
        type="email"
        name="email"
        id="email"
        className="w-[100%] p-3 border-slate-500 border"
        placeholder="Email address"
        onChange={handledata}

      />
      <input
        type="password"
        name="password"
        id="password"
        className="w-[100%] p-3 border-slate-500 border"
        placeholder="password"
        onChange={handledata}
    />
      <button type="submit" className="bg-[#FF8C38] w-[100%] h-[55px] box-border text-white font-bold rounded-md">
        Sign In
      </button>
      <p className="mt-4">
        Don't have an account?
        <a href="" className="text-[#ff8c38] ml-2">
          create one now
        </a>
      </p>
    </div>
  );
};

export default Login;
