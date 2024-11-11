import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setError('')
        const { email, password } = data;
        signInUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SuccessFully Logged In!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(er => setError(er.message))

    }
    const handleGoogleSignIn = () => {
        setError('')
        signInWithGoogle()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
                navigate(location?.state ? location.state : "/")
            })
            .catch(er => setError(er.message))
    }
    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="hero-content mx-auto flex-col lg:flex-row-reverse">

                <div className="card bg-base-100  w-2/5 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-4xl font-bold mb-5">Welcome Back!</h2>

                        <div className="space-y-5">

                            <div className="form-control">
                                <input type="email" placeholder="Email Address" className="border-b-2 pb-2 border-gray-300 focus:outline-none text-xl" required {...register('email')} />
                            </div>


                            <div className="form-control relative">
                                <input type="password" placeholder="Password" className="border-b-2 pb-2 border-gray-300 focus:outline-none text-xl" required {...register('password')} />
                                <span onClick={() => setShowPass(!showPass)} className="cursor-pointer absolute bottom-3 right-5">{showPass ? <FaEyeSlash /> : <FaEye />}</span>

                            </div>

                            <div className="flex justify-between">
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="label-text">Remember me</span>
                                    </label>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-semibold text-primary">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error && <p className="text-xs text-red-500">{error}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="relative inline-block py-3 px-6 text-neutral-50 bg-gradient-to-r from-primary to-primary group overflow-hidden cursor-pointer">
                                    <span className='absolute inset-0 bg-gradient-to-r duration-500 transition-transform from-secondary to-secondary -translate-x-full group-hover:translate-x-0 transform'></span>
                                    <span className='relative z-20 flex justify-center gap-3 text-xl font-semibold '>Log In</span>
                                </button>
                            </div>
                        </div>
                        <p className="text-sm">Do not have an account? <Link to='/register'><span className="text-primary underline font-medium">Register</span> </Link></p>
                        <div className="divider">OR</div>
                        <div onClick={handleGoogleSignIn} className="border flex p-3 text-lg items-center rounded-lg hover:text-secondary">
                            <FcGoogle className="mr-10" />
                            <p>Continue With Google</p>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogIn;