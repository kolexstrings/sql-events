export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-card text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold mb-4">SQL Events Nigeria</div>
        <p className="text-muted-foreground mb-6">
          Passion. Innovation. Technology in Events Management.
        </p>
        <div className="flex justify-center space-x-6 text-muted-foreground mb-6">
          <a href="#" className="hover:text-card-foreground transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-card-foreground transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-card-foreground transition-colors">
            Instagram
          </a>
        </div>
        <div className="text-muted-foreground text-sm">
          <p>Lagos, Nigeria | +234 XXX XXX XXXX | hello@sqlevents.ng</p>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-muted-foreground">
          <p>&copy; 2024 SQL Events Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
