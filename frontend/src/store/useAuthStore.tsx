import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email, password) => {
    try {
      loginSchema.parse({ email, password });
      const res = await axiosInstance.post<{ user: User }>("/auth/signin", {
        email,
        password,
      });

      set({ user: res.data.user, isAuthenticated: true });
      toast.success('Login successful');
    } catch (error: any) {
      toast.error( error.response?.data || error.message);
      toast.error("Invalid credentials")
    }
  },
  register: async (name, email, password) => {
    try {
      registerSchema.parse({ name, email, password });
      await axiosInstance.post("/auth/signup", { name, email, password });
      toast.success('Registration successful');
    } catch (error: any) {
      toast.error(error.response?.data || error.message);
      
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
    toast.success('Logged out successfully');
  },
}));
