import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "L'essentiel pour démarrer votre présence premium.",
    features: ["Site web premium", "SEO local optimisé", "Maintenance mensuelle", "Support email"],
    highlighted: false,
  },
  {
    name: "Growth",
    desc: "La formule recommandée pour une croissance rapide.",
    features: ["Tout Starter inclus", "Google Ads ciblé", "Optimisation conversion", "Suivi performances mensuel", "Reporting détaillé"],
    highlighted: true,
  },
  {
    name: "Elite",
    desc: "La stratégie complète pour dominer votre marché.",
    features: ["Tout Growth inclus", "Branding premium complet", "Acquisition patients haut de gamme", "Automatisation complète", "Account manager dédié", "Stratégie sur-mesure"],
    highlighted: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offres" ref={ref} className="py-32 bg-card/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Nos offres</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Choisissez votre <span className="text-gradient-gold">niveau d'ambition</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className={`relative rounded-sm p-8 border transition-all ${
                plan.highlighted
                  ? "border-primary bg-gradient-card glow-gold scale-[1.02]"
                  : "border-border bg-background hover:border-primary/30"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded-sm">
                  Recommandé
                </span>
              )}
              <h3 className="font-display text-2xl font-bold mb-2 text-gradient-gold">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-8">{plan.desc}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#candidater"
                className={`block text-center py-3 text-sm font-semibold tracking-wide rounded-sm transition-all uppercase ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                Candidater
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
