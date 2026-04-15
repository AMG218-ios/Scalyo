import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "Jour 1-2", title: "Audit complet", desc: "Audit complet de votre business et de votre ICP." },
  { num: "Jour 3", title: "Stratégie validée", desc: "Stratégie validée + objectif contractuel signé." },
  { num: "Jour 4-5", title: "Configuration", desc: "CRM installé, séquences configurées, scripts calibrés." },
  { num: "Jour 6", title: "Lancement", desc: "Instagram outreach + Meta Ads lancés." },
  { num: "Jour 7", title: "Setter opérationnel", desc: "Setter opérationnel — les appels commencent." },
  { num: "Semaine 2", title: "Premiers RDV", desc: "Premiers RDV qualifiés dans votre agenda." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processus" ref={ref} className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Processus
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Un processus <span className="text-gradient-gold">exclusif</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="flex items-center gap-6 p-8 border border-border rounded-sm hover:border-primary/30 transition-colors"
            >
              
              {/* DATE */}
              <span className="font-display text-lg font-semibold text-primary/50 w-24 text-center">
                {s.num}
              </span>

              {/* CONTENT */}
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
