import { developer } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/80 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 text-center sm:text-left">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Designed & Developed by {developer.name}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © 2026 All Rights Reserved
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <span>Built with React</span>
          <a
            href={developer.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href={developer.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
