"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
    const { push } = useRouter();
    const [ error, setError ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      setError("")
      setIsLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          fullname: e.target.fullname.value,
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });
      if (res.status === 201) {
        e.target.reset();
        setIsLoading(false);
        push("/login");
      } else {
        setError("Email already exists");
        setIsLoading(false);
      }
    };

    return (
        <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 flex-col">
        {error !== '' && <div className="text-red-600 font-bold mb-3">{error}</div>}
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign Up</h2>
          
          <form onSubmit={(e)=> handleSubmit(e)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                id="email"
                type="email" 
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                id="fullname"
                type="text" 
                name="fullname"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Full Name"
                required
              />
            </div>
      
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                id="password"
                type="password" 
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
      
            <button 
            disabled={isLoading}
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
              { isLoading ? "Loading..." : "Create Account" }
            </button>
          </form>
      
          <div className="mt-6 text-center text-sm text-gray-600">
            Already, have an account? 
            <Link href="/login" className="text-indigo-600 hover:text-indigo-500 font-medium"> Sign in</Link>
          </div>
        </div>
      </div>
        </>
    )
}