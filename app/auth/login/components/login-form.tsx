"use client";

import { useState } from "react";
import { Eye, EyeOff, Info, Loader, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  return (
    // Changed to flex to easily control the ratio
    // <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
    //   {/* Form Section: Wider (60%) */}
    //   <div className="w-full md:w-[60%] flex p-6 pt-16 justify-center flex-col h-full font-raleway">
    //     <div className="max-w-sm w-full mx-auto">
    //       <div className="flex flex-col gap-2">
    //         <p className="text-3xl font-bold font-space-grotesk">
    //           Welcome Back!
    //         </p>
    //         <h3 className="md:text-base text-sm font-montserrat">Login Here</h3>
    //       </div>
    //       <div className="space-y-3 py-5">
    //         <div className="grid gap-3">
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Email: user@gmail.com"
    //             className="bg-black/10 outline-none dark:border border-gray-700 p-3 rounded-xl placeholder:text-xs placeholder:dark:text-white placeholder:text-black/50"
    //             required
    //           />
    //           <div className="flex items-center bg-black/10 outline-none p-3 rounded-xl justify-between dark:border border-gray-700 dark:text-white">
    //             <input
    //               type="text"
    //               name="password"
    //               placeholder="Password"
    //               className="placeholder:text-xs placeholder:text-black/50 placeholder:dark:text-white bg-transparent outline-none"
    //               required
    //             />
    //             <Eye className="h-4 w-4" />
    //           </div>
    //         </div>
    //         <div className="flex items-center w-full pb-3 gap-1 text-xs">
    //           <p>Not yet a member?</p>
    //           <Link href={"/signup"} className="text-[#377389] underline">
    //             Sign up
    //           </Link>
    //         </div>
    //         <Button
    //           className="w-full rounded-xl bg-[#377389] text-white flex gap-2 items-center"
    //           type="submit"
    //           disabled={loading}
    //         >
    //           {loading && <Loader className=" w-4 h-4 animate-spin" />}
    //           Login
    //         </Button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Image Section: Narrower (40%) */}
    //   <div className="hidden md:block md:w-[40%] h-full">
    //     <img
    //       src="/blog/img6.jpg"
    //       alt=""
    //       className="h-full w-full object-cover"
    //     />
    //   </div>
    // </div>

    <div className="relative h-screen w-screen">
      <div className="absolute inset-0  ">
        <img
          src="/blog/img6.jpg"
          alt="bg-image"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 md:bg-black/75" />

      <div className="relative z-10 flex items-center justify-center h-full w-full ">
        <Card className="bg-white/10 backdrop-blur-xl p-6 border border-neutral-400">
          <div className="flex flex-col gap-1">
            <h2 className="md:text-2xl font-space-grotesk not-dark:text-white text-xl font-semibold md:w-full w-72">
              Welcome Back
            </h2>
            <span className="md:text-sm text-xs font-montserrat font-light text-gray-200">
              Please enter your credentials to login
            </span>
          </div>

          <div className="md:w-90 flex flex-col gap-5">
            <div
              className="space-y-1
            "
            >
              {/* <Label className="md:text-sm text-xs font-space-grotesk not-dark:text-white">
                Email
              </Label> */}
              <div className="w-full border border-gray-400 rounded-md flex items-center gap-4 px-2">
                <Mail size={15} strokeWidth={1.5} color="white" />

                <input
                  className="text-sm font-montserrat text-white placeholder:text-gray-400 selection:bg-[#377389] py-2 placeholder:text-xs border-0 bg-none outline-0 focus-visible:border-0 focus-visible:ring-0 "
                  type="text"
                  placeholder={inputs[0].placeholder}
                />
              </div>
            </div>

            <div className="space-y-1">
              {/* <Label className="md:text-sm text-xs font-space-grotesk not-dark:text-white">
                Password
              </Label> */}
              <div className=" relative border border-gray-400 rounded-md flex items-center gap-4 pl-2">
                <Lock size={15} strokeWidth={1.5} color="white" />
                <input
                  className="text-sm text-white font-montserrat placeholder:text-gray-400 selection:bg-[#377389] w-full py-2 placeholder:text-xs border-0 bg-none outline-0 focus-visible:border-0 focus-visible:ring-0 "
                  type={showPassword ? "text" : "password"}
                  placeholder={inputs[1].placeholder}
                />
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={17} strokeWidth={1.5} color="white" />
                  ) : (
                    <Eye size={17} strokeWidth={1.5} color="white" />
                  )}
                </div>
              </div>
              <div className="flex items-center mt-2 md:text-sm text-xs gap-1 md:gap-2">
                <Info size={14} strokeWidth={1.5} color="white" />
                <Link
                  href={"#"}
                  className="underline font-montserrat text-xs text-gray-200"
                >
                  Forgotten Password
                </Link>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <Button className="w-full font-semibold bg-[#377389] hover:bg-[#377389]/50">
                Login
              </Button>
              <div className="text-xs flex items-center gap-1 md:gap-2 font-montserrat">
                <span className="text-white">Don't have an account?</span>
                <Link
                  href={"/auth/signup"}
                  className="text-[#377389] underline"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
const inputs = [
  {
    title: "Email",
    placeholder: "Enter your email",
  },
  {
    title: "Password",
    placeholder: "Enter your password",
  },
];
