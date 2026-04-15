import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Search, Target, Palette, Mail, TrendingUp } from "lucide-react";

const services = [
  { icon: Globe, title: "Meta Ads visuelles", desc: "Campagnes ciblées sur les propriétaires avec projet de rénovation actif dans votre zone." },
  { icon: Search, title: "Instagram Outreach", desc: "80 messages/jour vers des propriétaires qualifiés par notre setter dédié." },
  { icon: Target, title: "Setter téléphonique", desc: "Chaque lead rappelé en moins de 2 minutes — zéro lead perdu." },
  { icon: Palette, title: "CRM complet", desc: "Pipeline structuré, relances automatiques sur 15 jours, aucune opportunité oubliée." },
  { icon: Mail, title: "Cold Email", desc: "Séquences automatisées vers des prospects ciblés B2B et B2C." },
  { icon: TrendingUp, title: "Contenu organique", desc: "Vos réalisations mises en valeur chaque semaine pour réchauffer votre audience." },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Notre système
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Un système complet d'acquisition<br />
            <span className="text-gradient-gold">de patients premium</span>
          </h2>
        </motion.div>

        {/* GRID PROPRE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.6 }}
              className="bg-gradient-card border border-border rounded-sm p-8 hover:border-primary/40 hover:glow-gold transition-all group h-full flex flex-col"
            >
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="font-display text-lg font-semibold mb-3">
                {s.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
