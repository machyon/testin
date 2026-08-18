import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-black font-bold text-xs">
                AK
              </div>
              <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                A-Kanban.inc
              </span>
            </div>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Building modern web experiences with efficiency and sleek elegance.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Product
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {["Features", "Integrations", "Pricing", "Changelog", "Docs"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Company
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {["About", "Blog", "Careers", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 / Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Legal
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Settings", "Security"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-zinc-500 dark:text-zinc-400">
            {/* <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Twitter / X
            </Link> */}
            <Link href="https://github.com/machyon/testin/tree/develop" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              GitHub
            </Link>
            {/* <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Discord
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
