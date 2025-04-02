import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../store/useAuthStore";
import { loginSchema } from "../zod/schemas";
import { Link } from "react-router-dom";
import './style.css'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) });
  const { login } = useAuthStore();

  const onSubmit = async (data: { email: string; password: string }) => {
    await login(data.email, data.password);
  };

  return (
    <>
      <div className="welcome-message">
        <h1>Welcome Back</h1>
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="uid-input" {...register("email")} placeholder="UID" />
          {errors.email && <p>{errors.email.message}</p>}

          <input className="uid-password" {...register("password")} placeholder="Password" type="password" />
          {errors.password && <p>{errors.password.message}</p>}
          
          <button className="submit-btn" type="submit">Login</button>
        </form>
      </div>
      <p className="new-user">
        New User? <Link to="/register">Register Here</Link>
      </p>
    </>
  );
};

export default Login;