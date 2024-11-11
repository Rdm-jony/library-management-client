import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthHooks from "../../hooks/useAuthHooks";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateUser, signInWithGoogle } = useAuthHooks()
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setError('')
        const { userName, userPhoto, email, password, confirmPassword } = data;
        if (password != confirmPassword) {
            return setError('password and confirm password does not match!')
        }
        createUser(email, password)
            .then(() => {
                updateUser({ displayName: userName, photoURL: userPhoto })
                    .then(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Do you want to continue',
                            icon: 'success',
                            confirmButtonText: 'Continue'
                        })
                        navigate("/")
                        reset()
                    })
                    .catch(er => setError(er.message))
            })
            .catch(er => setError(er.message))
    };
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
                navigate("/")
            })
            .catch(er => setError(er.message))
    }
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="hero-content mx-auto flex-col lg:flex-row-reverse">

                <div className="card bg-base-100  w-2/5  shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" >
                        <h2 className="text-4xl font-bold mb-5">Welcome Back!</h2>

                        <div className="space-y-5">
                            <div className="form-control">
                                <input type="text" placeholder="Name" className=" border-b-2 pb-2 border-gray-300 focus:outline-none text-xl" required {...register('userName')} />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="ImageURL" className="border-b-2 pb-2 border-gray-300 focus:outline-none text-xl" required {...register('userPhoto')} />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Email Address" className="border-b-2 pb-2 border-gray-300 focus:outline-none text-xl" required {...register('email')} />
                            </div>


                            <div className="form-control relative">
                                <input type={showPass ? 'text' : 'password'} placeholder="Password" className="border-b-2 pb-2 border-gray-300 focus:outline-none text-xl" required {...register('password', { pattern: /^(?=.*[A-Z])(?=.*[\W_])(?=.{6,}).*$/ })} aria-invalid={errors.firstName ? "true" : "false"} />
                                <span onClick={() => setShowPass(!showPass)} className="cursor-pointer absolute bottom-3 right-5">{showPass ? <FaEyeSlash /> : <FaEye />}</span>
                                {
                                    errors.password?.type == "pattern" && <p className="text-red-500 text-xs">more than 6 characters, at least one capital letter, and at least one special character</p>
                                }
                            </div>
                            <div className="form-control relative">
                                <input type={showConfirmPass ? 'text' : 'password'} placeholder="Confirm Password" className="border-b-2 pb-2 border-gray-300 focus:outline-none text-xl" required {...register('confirmPassword')} />
                                <span onClick={() => setShowConfirmPass(!showConfirmPass)} className="cursor-pointer absolute bottom-3 right-5">{showConfirmPass ? <FaEyeSlash /> : <FaEye />}</span>

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
                                <button className="relative cursor-pointer inline-block py-3 px-6 text-neutral-50 bg-gradient-to-r from-primary to-primary group overflow-hidden">
                                    <span className='absolute inset-0 bg-gradient-to-r duration-500 transition-transform from-secondary to-secondary -translate-x-full group-hover:translate-x-0 transform'></span>
                                    <span className='relative z-20 flex justify-center gap-3 text-xl font-semibold '>Register</span>
                                </button>
                            </div>
                        </div>
                        <p className="text-sm">Do not have an account? <Link to='/logIn'><span className="text-primary underline font-medium">Log In</span> </Link></p>

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

export default Register;