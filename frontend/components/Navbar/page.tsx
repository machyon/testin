import Link from 'next/link';

export default function NavbarComponent() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-white transition hover:text-cyan-400"
        >
          LOGO
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              href="/"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}