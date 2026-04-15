import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "En 3 mois, nous avons doublé nos cas d'implantologie premium. L'approche est chirurgicale.",
    name: "Dr. Laurent M.",
    role: "Implantologue, Paris",
  },
  {
    quote: "Enfin une agence qui comprend la dentisterie haut de gamme. Nos patients sont qualifiés et prêts à investir.",
    name: "Dr. Sophie D.",
    role: "Clinique privée, Lyon",
  },
  {
    quote: "Le ROI est exceptionnel. Chaque euro investi nous rapporte 8x en moyenne. Incontournable.",
    name: "Dr. Marc B.",
    role: "Centre dentaire, Bordeaux",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Témoignages</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Ils nous font <span className="text-gradient-gold">confiance</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="border border-border rounded-sm p-8"
            >
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
