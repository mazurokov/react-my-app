import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("errors:", errors);

  const onSubmit = (data) => {
    console.log(data);
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
        <button
          className="mt-3 rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
