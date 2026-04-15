import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <a href="#" className="font-display text-xl font-bold">
          <span className="text-foreground">Scal</span>
          <span className="text-gradient-gold">yo</span>
        </a>

        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Mentions légales
          </a>

          <a href="#" className="hover:text-foreground transition-colors">
            Confidentialité
          </a>

          <a href="mailto:contact@scalyo.fr" className="hover:text-foreground transition-colors">
            Contact
          </a>

          {/* ADMIN DISCRET */}
          <Link
            to="/admin"
            className="hover:text-foreground transition-colors hover:opacity-100"
          >
            AAAA
          </Link>
        </div>

        <p className="text-xs text-muted-foreground">
          © 2026 Scalyo. Tous droits réservés.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
