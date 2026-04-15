import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Search, Target, Palette, FileText, Mail, TrendingUp } from "lucide-react";

const services = [
  { icon: Globe, title: "Sites Web Premium", desc: "Des sites haute conversion qui reflètent le prestige de votre clinique." },
  { icon: Search, title: "SEO Local Google", desc: "Dominez Google Maps et les résultats locaux pour vos spécialités." },
  { icon: Target, title: "Google Ads Ciblé", desc: "Campagnes ultra-ciblées pour implants, esthétique et urgences." },
  { icon: Palette, title: "Branding Haut de Gamme", desc: "Une identité visuelle qui positionne votre clinique au sommet." },
  { icon: FileText, title: "Marketing de Contenu", desc: "Du contenu expert qui éduque et convertit vos prospects." },
  { icon: Mail, title: "Email & Automatisation", desc: "Séquences automatisées pour nourrir et convertir vos leads." },
  { icon: TrendingUp, title: "Optimisation Conversion", desc: "Chaque visiteur est une opportunité. Maximisez votre taux." },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Notre système</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Un système complet d'acquisition<br />
            <span className="text-gradient-gold">de patients premium</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.6 }}
              className={`bg-gradient-card border border-border rounded-sm p-8 hover:border-primary/40 hover:glow-gold transition-all group${i === services.length - 1 ? " lg:col-start-2" : ""}`}
            >
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
