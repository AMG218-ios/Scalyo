import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
  { title: "Implantologie", desc: "Attirez des patients prêts à investir dans des implants de qualité supérieure." },
  { title: "Facettes Dentaires", desc: "Positionnez votre clinique comme la référence du sourire parfait." },
  { title: "Smile Design", desc: "Transformez votre expertise en attractivité digitale irrésistible." },
  { title: "Orthodontie Esthétique", desc: "Captez les adultes recherchant des solutions discrètes et premium." },
  { title: "Cliniques Privées", desc: "Une stratégie globale pour les cliniques à forte ambition." },
];

const SpecializationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-card/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Spécialisations</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Expertise <span className="text-gradient-gold">sectorielle</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {specs.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="border border-border rounded-sm p-8 hover:border-primary/30 transition-all text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <h3 className="font-display text-xl font-semibold mb-3 text-gradient-gold">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
