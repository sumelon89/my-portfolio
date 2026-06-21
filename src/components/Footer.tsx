import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Suri Huang. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/#projects"
              className="text-sm text-slate-500 hover:text-accent transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-slate-500 hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-slate-500 hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
