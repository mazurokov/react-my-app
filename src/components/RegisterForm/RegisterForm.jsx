import {useForm} from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">RegisterForm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <input
            className="flex-1 rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
            type="text" placeholder="Name" {...register("name", {required: true})} />
          <input
            className="flex-1 rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
            type="email" placeholder="Email" {...register("email", {required: true})} />
          <input
            className="flex-1 rounded border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500"
            type="number" placeholder="Age" {...register("age", {valueAsNumber: true})} />
        </div>
        <button
          className="rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 mt-3"
          type="submit">Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm;