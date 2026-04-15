import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FilterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-px bg-primary mx-auto mb-10" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Nous travaillons <span className="text-gradient-gold">uniquement</span> avec l'élite.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Nous sélectionnons nos partenaires avec exigence. Notre système est conçu pour les cliniques
            qui souhaitent attirer une patientèle haut de gamme.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { no: "Pas de low-cost", yes: "Qualité premium" },
              { no: "Pas de volume", yes: "Valeur par patient" },
              { no: "Pas de compromis", yes: "Excellence uniquement" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="bg-card border border-border rounded-sm p-6"
              >
                <p className="text-destructive/70 text-sm line-through mb-2">{item.no}</p>
                <p className="text-primary font-semibold">{item.yes}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FilterSection;
