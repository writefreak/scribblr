"use client";

import { useState } from "react";
import { Eye, EyeOff, Info, Loader, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const SignForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  return (
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
              Hello, Welcome 👋
            </h2>
            <span className="md:text-sm text-xs font-montserrat font-light text-gray-200">
              Please enter your credentials to signup
            </span>
          </div>

          <div className="md:w-90 flex flex-col gap-5">
            <div
              className="space-y-1
            "
            >
              {/* <Label className="md:text-sm text-xs font-space-grotesk not-dark:text-white">
                Name
              </Label> */}
              <div className="w-full border border-gray-400 rounded-md flex items-center gap-4 px-2">
                <User size={15} strokeWidth={1.5} color="white" />

                <input
                  className="text-sm font-montserrat text-white placeholder:text-gray-400 selection:bg-[#377389] py-2 placeholder:text-xs border-0 bg-none outline-0 focus-visible:border-0 focus-visible:ring-0 "
                  type="text"
                  placeholder={inputs[0].placeholder}
                />
              </div>
            </div>
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
                  placeholder={inputs[1].placeholder}
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
                  placeholder={inputs[2].placeholder}
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
            </div>

            <div className="pt-4 space-y-4">
              <Button className="w-full font-semibold text-white font-space-grotesk bg-[#377389] hover:bg-[#377389]/50">
                Create Account
              </Button>
              <div className="text-xs flex items-center gap-1 md:gap-2 font-montserrat">
                <span className="text-white">Already have an account?</span>
                <Link href={"/auth/login"} className="text-white underline">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignForm;
const inputs = [
  {
    title: "Name",
    placeholder: "Enter your name",
  },
  {
    title: "Email",
    placeholder: "Enter your email",
  },
  {
    title: "Password",
    placeholder: "Enter your password",
  },
];
