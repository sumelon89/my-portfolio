import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 italic">
            &ldquo;I build marketing systems that connect data to people — and pipeline to revenue.&rdquo;
          </p>
          <div className="flex items-center gap-6">
            <Link href="/#projects" className="text-xs text-slate-400 hover:text-navy transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-xs text-slate-400 hover:text-navy transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-xs text-slate-400 hover:text-navy transition-colors">
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/suri-huang09/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-navy transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
