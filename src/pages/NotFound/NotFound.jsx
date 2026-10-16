import {
  ArrowLeft,
  Home,
  Search,
  FileQuestion,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const gridBackgroundStyle = {
  backgroundImage:
    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

const handleGoBack = () => window.history.back();

function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-[-180px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.06]" style={gridBackgroundStyle} />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
          <FileQuestion className="h-9 w-9 text-violet-400" strokeWidth={1.8} />
        </div>

        <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
          <Sparkles className="h-4 w-4" />
          Error 404
        </div>

        <h1 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-7xl font-black tracking-tight text-transparent sm:text-8xl">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
          Сторінку не знайдено
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-zinc-400">
          Схоже, ця сторінка була переміщена, видалена або її адреса
          вказана неправильно.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            <Home className="h-4 w-4" />
            На головну
            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-zinc-300 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад
          </button>
        </div>

        <div className="mx-auto mt-12 flex max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
            <Search className="h-5 w-5 text-violet-400" />
          </div>

          <div>
            <p className="text-sm font-medium text-zinc-200">
              Не можете знайти потрібне?
            </p>
            <p className="mt-0.5 text-xs leading-5 text-zinc-500">
              Поверніться на головну та скористайтеся навігацією.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;