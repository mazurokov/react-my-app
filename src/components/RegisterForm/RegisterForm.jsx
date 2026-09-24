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
    <div>
      <h2 className="text-2xl font-bold mb-4">RegisterForm</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              className="w-full rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
              type="text"
              placeholder="UserName"
              {...register("userName")}
            />
            {errors.userName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.userName.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <input
              className="w-full rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex-1">
            <input
              className="w-full rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <input
              className="w-full rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
              type="number"
              placeholder="Age"
              {...register("age", {
                valueAsNumber: true,
              })}
            />
            {errors.age && (
              <p className="mt-1 text-sm text-red-500">{errors.age.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="w-1/3">
            <input
              className="w-full rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="w-1/3">
            <input
              className="w-full rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-1">
          <button
            className="mt-3 rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          <button
            className="mt-3 rounded bg-gray-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
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

        <p>Dirty: {isDirty ? "YES" : "NO"}</p>
        <p>Valid: {isValid ? "YES" : "NO"}</p>
        <p>Submitting: {isSubmitting ? "YES" : "NO"}</p>
      </form>
    </div>
  );
}

export default RegisterForm;
