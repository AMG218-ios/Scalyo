import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const results = [
  { value: "+60", suffix: "", label: "RDV qualifiés garantis dès le mois 1" },
  { value: "83", suffix: "%", label: "Taux de show sur les rendez-vous" },
  { value: "7 jours", suffix: "", label: "Pour les premiers RDV dans votre agenda" },
  { value: "71", suffix: "%", label: "Des clients dépassent leur objectif en 90 jours" },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="résultats" ref={ref} className="py-32 bg-card/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Résultats</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Des chiffres qui <span className="text-gradient-gold">parlent</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.7 }}
              className="text-center"
            >
              <p className="font-display text-5xl md:text-6xl font-bold text-gradient-gold mb-2">
                {r.value}<span className="text-3xl">{r.suffix}</span>
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
