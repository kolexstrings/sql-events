"use client";

export default function Footer() {
  return (
    <footer className="py-16 bg-card text-card-foreground border-t border-border">
      <div className="container--wide">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-2xl font-bold mb-4">SQL Events Nigeria</div>
            <p className="text-muted-foreground mb-6">
              Passion. Innovation. Technology in Events Management.
            </p>
            <div className="flex space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground mb-2">Abuja, Nigeria</p>
            <p className="text-muted-foreground mb-2">+234 XXX XXX XXXX</p>
            <p className="text-muted-foreground">contact@sqlevents.com</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 SQL Events Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
