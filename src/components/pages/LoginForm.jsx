import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "./Field";

export default function LoginForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      if (response.status == 200) {
        const { username, accessToken, refreshToken } = response.data;
        setAuth({ username, accessToken, refreshToken });
        navigate("/");
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: error,
      });
    }
  };
  return (
    <form
      className="border-b border-emerald-200/50 dark:border-stone-400/50 pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="mb-4">
        <Field label="Email" error={errors.email}>
          <input
            {...register("username", { required: "Username is required" })}
            className={`w-full px-3 py-2 rounded-md border bg-white dark:bg-stone-800 text-emerald-600 dark:text-stone-50 placeholder-emerald-400 dark:placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-stone-400 focus:border-emerald-500 dark:focus:border-stone-400 transition-colors ${
              errors.username
                ? "border-red-500"
                : "border-emerald-300 dark:border-stone-700"
            }`}
            name="username"
            type="username"
            id="username"
            placeholder="Enter 'emilys' "
          />
        </Field>
      </div>
      <div className="mb-4">
        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
            })}
            className={`w-full px-3 py-2 rounded-md border bg-white dark:bg-stone-800 text-emerald-600 dark:text-stone-50 placeholder-emerald-400 dark:placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-stone-400 focus:border-emerald-500 dark:focus:border-stone-400 transition-colors ${
              errors.password
                ? "border-red-500"
                : "border-emerald-300 dark:border-stone-700"
            }`}
            name="password"
            type="password"
            id="password"
            placeholder="Enter 'emilyspass' "
          />
        </Field>
      </div>

      {errors?.root?.random?.message && (
        <p className="text-red-500 dark:text-red-400 text-sm mb-4 text-center">
          {errors.root.random.message}
        </p>
      )}

      <div className="mb-4">
        <Field>
          <button
            className="w-full px-4 py-2 rounded-md bg-emerald-600 dark:bg-stone-50 text-white dark:text-stone-600 font-bold transition-all hover:bg-emerald-500 dark:hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-stone-400"
            type="submit"
          >
            Login
          </button>
        </Field>
      </div>
    </form>
  );
}
