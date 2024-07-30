"use client"
import { Label } from "../../../components/ui/label"

import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import { Separator } from "../../../components/ui/separator"
import Link from "next/link"
import { useNavigate } from "react-router-dom"
import React, { useState, ChangeEvent } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from 'next/navigation'



interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}


export default function Signup() {

  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { name, email, password, confirmPassword } = formData;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }

    // Navigate to another route
    // navigate("/dashboard");
    router.push("/dashboard"); // Navigates to the "/dashboard" route


    // Reset the form data
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6">
        <form onSubmit={handleOnSubmit}>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create a new account</h1>
          <p className="text-muted-foreground">Enter your details to get started</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name"
                name="name"
                value={name}
                type="text"
                onChange={handleOnChange}
                placeholder="John Doe"
                required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                type="email"
                placeholder="abc@example.com" />
          </div>
          <div className="space-y-2 relative">
            <Label htmlFor="password">Password</Label>
            <Input id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                required />
                <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[32px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>

          </div>
          <div className="space-y-2 relative">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                type={showConfirmPassword ? "text" : "password"}
                required  />
                <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[32px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </div>


        </form>
        <Separator className="my-8" />
        <div className="space-y-4">
          <Button variant="outline" className="w-full">
            <ChromeIcon className="mr-2 h-4 w-4" />
            Sign up with Google
          </Button>
          <Button variant="outline" className="w-full">
            <GitlabIcon className="mr-2 h-4 w-4" />
            Sign up with GitHub
          </Button>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline" prefetch={false}>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
// import React from 'react'
// import { Label } from "../../../components/ui/label"
// import { Input } from "../../../components/ui/input"
// import { Button } from "../../../components/ui/button"
// import { Separator } from "../../../components/ui/separator"
// import Link from "next/link"

// export default function Signup() {
//   return (
//     <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-md space-y-6">
//         <div className="space-y-2 text-center">
//           <h1 className="text-3xl font-bold">Create a new account</h1>
//           <p className="text-muted-foreground">Enter your details to get started</p>
//         </div>
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" type="text" placeholder="John Doe" required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" type="email" placeholder="m@example.com" required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="password">Password</Label>
//             <Input id="password" type="password" required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="confirm-password">Confirm Password</Label>
//             <Input id="confirm-password" type="password" required />
//           </div>
//           <Button type="submit" className="w-full">
//             Create Account
//           </Button>
//         </div>
//         <Separator className="my-8" />
//         <div className="space-y-4">
//           <Button variant="outline" className="w-full">
//             <ChromeIcon className="mr-2 h-4 w-4" />
//             Sign up with Google
//           </Button>
//           <Button variant="outline" className="w-full">
//             <GitlabIcon className="mr-2 h-4 w-4" />
//             Sign up with GitHub
//           </Button>
//           <div className="text-center text-sm">
//             Already have an account?{" "}
//             <Link href="/login" className="underline" prefetch={false}>
//               Sign in
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

function ChromeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GitlabIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}