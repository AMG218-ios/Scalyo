import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, Users, Shield, CalendarX } from "lucide-react";

const problems = [
  { icon: Users, title: "Temps perdu en prospection", desc: "Vous passez des heures à chercher des patients au lieu de faire ce que vous faites le mieux." },
  { icon: TrendingDown, title: "Bouche à oreille", desc: "80% de vos patients viennent de recommandations que vous ne contrôlez ni en volume, ni en qualité, ni en timing." },
  { icon: Shield, title: "Image de marque faible", desc: "Votre clinique ne reflète pas le niveau de soin que vous offrez." },
  { icon: AlertTriangle, title: "Concurrence low-cost", desc: "Les cliniques low-cost attirent vos patients potentiels avec du marketing agressif." },
  { icon: CalendarX, title: "Pipeline instable", desc: "Certains mois votre agenda déborde. D'autres il est vide. Impossible de prévoir votre chiffre du mois prochain." },
];

const ProblemsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-card/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Le constat</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Ces problèmes vous parlent<span className="text-gradient-gold"> ?</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="bg-background border border-border rounded-sm p-8 hover:border-primary/30 transition-colors group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <p.icon className="w-5 h-5 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
