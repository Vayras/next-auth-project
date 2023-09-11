"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <span className="mr-48 mb-8">  
            <h1>Signup</h1>
            </span>
            <hr />
            <span className="mr-40 mb-2">  
            <label htmlFor="username">username</label>
            </span>
            <input
            className="p-2 rounded-md mb-2  text-black  border-gray-300"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({
                    ...user, username: e.target.value
                })}
                placeholder="username"
            />
            <span className="mr-48 mb-2">  
             <label htmlFor="email">email</label>
             </span>
            <input
            className="p-2 rounded-md mb-2  text-black  border-gray-300"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({
                    ...user, email: e.target.value
                })}
                placeholder="email"
            />
             <span className="mr-40 mb-2 "> 
            <label htmlFor="password">password</label>
            </span>
            <input
            className="p-2 rounded-md mb-2 text-black border-gray-300"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({
                    ...user, password: e.target.value
                })}
                placeholder="password"
            />
            <button className="p-2 border  mr-32 mt-8 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            onClick={onSignup}
            >
                Signup here
            </button>
            <Link href="/login"  className="underline mt-12">Visit Login</Link>
        </div>
    )
}