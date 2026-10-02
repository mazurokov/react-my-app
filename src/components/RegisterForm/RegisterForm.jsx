import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function RegisterForm() {
  const registerSchema = z
    .object({
      userName: z
        .string()
        .min(3, "Minimum 3 characters")
        .max(20, "Maximum 20 characters")
        .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscore"),

      name: z.string().min(3, "Minimum 3 characters"),

      email: z.string().email("Invalid email address"),

      age: z.number().min(18, "Minimum age is 18"),

      password: z.string().min(6, "Minimum 6 characters"),

      confirmPassword: z.string().min(1, "Confirm Password is required"),
    })
    .refine(
      (data) => {
        return data.password === data.confirmPassword;
      },
      {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      },
    );

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      userName: "testUser",
      name: "Anna",
      email: "anna@test.com",
      age: 25,
      password: "",
      confirmPassword: "",
    },
  });

  console.log("errors:", errors);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950/20 p-4">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">RegisterForm</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              type="text"
              placeholder="UserName"
              {...register("userName")}
            />
            {errors.userName && (
              <p className="mt-1 text-sm text-red-400">{errors.userName.message}</p>
            )}
          </div>

          <div className="flex-1">
            <input
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
          </div>

          <div className="flex-1">
            <input
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="flex-1">
            <input
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              type="number"
              placeholder="Age"
              {...register("age", {
                valueAsNumber: true,
              })}
            />
            {errors.age && <p className="mt-1 text-sm text-red-400">{errors.age.message}</p>}
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <div className="w-1/3">
            <input
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
            )}
          </div>

          <div className="w-1/3">
            <input
              className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className="mt-3 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          <button
            className="mt-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
            type="button"
            onClick={() =>
              reset({
                userName: "",
                name: "",
                email: "",
                age: "",
                password: "",
                confirmPassword: "",
              })
            }
          >
            Reset
          </button>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
          <p>Dirty: {isDirty ? "YES" : "NO"}</p>
          <p>Valid: {isValid ? "YES" : "NO"}</p>
          <p>Submitting: {isSubmitting ? "YES" : "NO"}</p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
