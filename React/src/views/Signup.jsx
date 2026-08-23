import { Link } from "react-router-dom";
import apiClient from "../axios";
import { useState } from "react";

export default function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        setErrors("");
        setLoading(true);

        try {
            apiClient
                .post("/signup", {
                    name: fullName,
                    email,
                    password,
                    password_confirmation: confirmPassword,
                })
                .then(({ data }) => console.log(data));
        } catch ({ response }) {
            console.log(response);
            setErrors(response.errors);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        className="w-auto h-10 mx-auto"
                    />
                    <h2 className="mt-10 font-bold tracking-tight text-center text-white text-2xl/9">
                        Sign up to your account
                    </h2>
                    <p className="mt-10 tracking-tight text-center text-blue-100 text-2xl/9">
                        <Link to={"/login"}>Or login to your account</Link>
                    </p>
                </div>

                {errors &&
                    `<div style={{ background: red; }}>
    <p>${errors.name}</p>
    <p>${errors.email}</p>
    <p>${errors.password}</p>
    <div/>`}

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block font-medium text-gray-100 text-sm/6"
                            >
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="full-name"
                                    name="fullName"
                                    type="text"
                                    required
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    autoComplete="full-name"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block font-medium text-gray-100 text-sm/6"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block font-medium text-gray-100 text-sm/6"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-400 hover:text-indigo-300"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="confirm_password"
                                    className="block font-medium text-gray-100 text-sm/6"
                                >
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    autoComplete="confirm_password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-gray-400 text-sm/6">
                        Not a member?{" "}
                        <a
                            href="#"
                            className="font-semibold text-indigo-400 hover:text-indigo-300"
                        >
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
