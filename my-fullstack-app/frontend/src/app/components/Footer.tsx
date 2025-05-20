export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">John Developer</h3>
            <p className="text-slate-400 max-w-md">
              A passionate software developer focused on creating exceptional
              digital experiences.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex md:justify-end gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} John Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
