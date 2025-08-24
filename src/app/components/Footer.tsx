import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-card text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/logo.png"
            alt="SQL Events Nigeria Logo"
            width={48}
            height={48}
            className="w-12 h-12 mr-3"
          />
          <div className="text-2xl font-bold">SQL Events Nigeria</div>
        </div>
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
          <p>Flat 3, Block C8, 19th Street, Games Village, Abuja, Nigeria</p>
          <p>
            Tel: +234 (9) 6230272 | Mobile: +234 80 5050 1927 | Email:
            contactus@sql-events.com
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-muted-foreground">
          <p>&copy; {currentYear} SQL Events Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
