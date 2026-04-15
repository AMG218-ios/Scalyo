import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]" style={{ background: "hsl(38 42% 60%)" }} />

      <div className="relative container mx-auto px-6 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-primary mb-8 font-medium"
        >
          Agence Marketing Dentaire Premium
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight"
        >
          Attirez des patients premium{" "}
          <span className="text-gradient-gold">prêts à investir</span>{" "}
          dans leur sourire.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Stratégies d'acquisition haut de gamme pour cliniques dentaires d'élite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#candidater"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity uppercase"
          >
            Candidater pour un audit privé
          </a>
          <a
            href="#résultats"
            className="px-8 py-4 border border-border text-foreground font-semibold text-sm tracking-wide rounded-sm hover:border-primary/50 transition-colors uppercase"
          >
            Voir nos résultats
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
