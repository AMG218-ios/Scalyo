import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Sélection", desc: "Nous évaluons votre clinique et vos ambitions pour garantir un partenariat d'excellence." },
  { num: "02", title: "Audit Stratégique", desc: "Analyse complète de votre positionnement, concurrence et opportunités de croissance." },
  { num: "03", title: "Mise en Place", desc: "Déploiement de votre système d'acquisition sur-mesure en moins de 30 jours." },
  { num: "04", title: "Optimisation", desc: "Suivi continu et optimisation pour maximiser votre retour sur investissement." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processus" ref={ref} className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Processus</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Un processus <span className="text-gradient-gold">exclusif</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="flex gap-6 p-8 border border-border rounded-sm hover:border-primary/30 transition-colors"
            >
              <span className="font-display text-4xl font-bold text-primary/30">{s.num}</span>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
