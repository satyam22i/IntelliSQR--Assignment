import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState } from "react";
import { registerSchema } from "../zod/schemas";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import './style.css'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(registerSchema) });
  const { register: signUp } = useAuthStore();

  const onSubmit = async (data: { name: string; email: string; password: string }) => {
    await signUp(data.name, data.email, data.password);
  };

  return (
    <>
    <div className="welcome-message">
        <h1>Ragister here</h1>
      </div>
    <div className="signup-contener">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="name-input" {...register("name")} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}
      <input className="email-input" {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input className="password-input" {...register("password")} placeholder="Password" type="password" />
      {errors.password && <p>{errors.password.message}</p>}
      <button className="btn-sumbit" type="submit">Register</button>
    </form>
    </div>
    <p className="new-user">
        already has account <Link to="/login">Login Here</Link>
      </p>

    </>
  );
};

export default Register;