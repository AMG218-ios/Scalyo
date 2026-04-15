import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="candidater" ref={ref} className="py-32 bg-card/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[150px]" style={{ background: "hsl(38 42% 60%)" }} />

      <div className="relative container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-px bg-primary mx-auto mb-10" />
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Prêt à attirer des patients<br />
            <span className="text-gradient-gold">premium</span> ?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Candidatez pour rejoindre nos cliniques partenaires. Nous n'acceptons que les cliniques engagées vers l'excellence.
          </p>
          <Link
            to="/audit"
            className="inline-flex items-center px-10 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity uppercase"
          >
            Candidater pour un audit privé
          </Link>
          <p className="text-muted-foreground text-xs mt-6">Places limitées · Sélection sur dossier</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
