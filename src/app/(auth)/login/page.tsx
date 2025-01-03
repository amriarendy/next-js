'use client'

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const { push } = useRouter();
    const [ error, setError ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false)

    const handleLogin = async (e: any) => {
      e.preventDefault();
      setError("")
      setIsLoading(true);
      try {
          const res = await signIn("credentials", {
            redirect: false,
            email: e.target.email.value,
            password: e.target.password.value,
            callbackUrl: "/dashbaord",
          })
        if (!res?.error) {
          e.target.reset();
          setIsLoading(false);
          push("/dashboard");
        } else {
          if (res.status === 401) {
            setError("Email or Password incorect")
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.log("Error2: ", error)
      }
    }

    return (
        <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 flex-col">
        {error !== '' && <div className="text-red-600 font-bold mb-3">{error}</div>}
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>
          <form className="space-y-4" onSubmit={(e)=> handleLogin(e)}>
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
              { isLoading ? "Loading..." : "Login" }
            </button>
          </form>
      
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account? 
            <Link href="/register" className="text-indigo-600 hover:text-indigo-500 font-medium"> Sign up</Link>
          </div>
        </div>
      </div>
        </>
    )
}