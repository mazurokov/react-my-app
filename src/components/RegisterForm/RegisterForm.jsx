import {useForm} from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitting,
    },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
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
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
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
                required: "Age is required",
                valueAsNumber: true,
                min: {
                  value: 18,
                  message: "Minimum age is 18",
                },
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
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
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value, formValues) =>
                  value === formValues.password || "Passwords do not match",
              })}
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
            disabled={!isValid}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          <button
            className="mt-3 rounded bg-gray-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
            type="button" onClick={() => reset({
            name: "",
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
          })}>
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
