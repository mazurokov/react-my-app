import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";

function TestForm() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        <h1 className="mb-4 text-2xl font-bold tracking-tight">Test Form</h1>

        <RegisterForm />
      </div>
    </section>
  );
}

export default TestForm;