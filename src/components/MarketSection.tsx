import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MarketSection = () => {
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
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">L'opportunité</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Un marché en <span className="text-gradient-gold">pleine expansion</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { value: "15 Mds€", label: "Marché dentaire France", sub: "par an" },
            { value: "+23%", label: "Croissance esthétique", sub: "sur 5 ans" },
            { value: "4 200€", label: "Panier moyen implant", sub: "en moyenne" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="text-center p-8 border border-border rounded-sm"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">{item.value}</p>
              <p className="text-foreground font-medium mb-1">{item.label}</p>
              <p className="text-muted-foreground text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Les patients sont prêts à payer pour la qualité. La question est :
            <span className="text-primary font-semibold"> votre clinique est-elle visible au bon moment ?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;
