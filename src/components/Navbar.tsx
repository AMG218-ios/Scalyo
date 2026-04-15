import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="font-display text-2xl font-bold tracking-tight">
          <span className="text-foreground">Scal</span>
          <span className="text-gradient-gold">yo</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Résultats", "Offres", "Processus"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/audit"
            className="inline-flex items-center px-6 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity tracking-wide"
          >
            Candidater
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
