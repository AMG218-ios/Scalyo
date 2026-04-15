import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { addMessage } from "@/lib/messageStore";
import { toast } from "sonner";

const Audit = () => {
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => {
      addMessage(form);
      toast.success("Message envoyé avec succès", { duration: 5000 });
      setForm({ nom: "", prenom: "", email: "", message: "" });
      setSending(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between py-5 px-6">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight">
            <span className="text-foreground">Scal</span>
            <span className="text-gradient-gold">yo</span>
          </Link>
        </div>
      </nav>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="w-16 h-px bg-primary mx-auto mb-10" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
              Candidater pour un <span className="text-gradient-gold">audit privé</span>
            </h1>
            <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
              Remplissez le formulaire ci-dessous pour soumettre votre candidature.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 bg-card/60 border border-border rounded-sm p-8"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nom</label>
                  <Input
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    placeholder="Votre nom"
                    required
                    className="bg-background/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Prénom</label>
                  <Input
                    value={form.prenom}
                    onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    placeholder="Votre prénom"
                    className="bg-background/50 border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="votre@email.com"
                  required
                  className="bg-background/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Décrivez votre clinique, vos objectifs et vos attentes..."
                  required
                  rows={8}
                  className="bg-background/50 border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity"
              >
                {sending ? "Envoi en cours..." : "Envoyer"}
              </Button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Comment candidater ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Décrivez votre clinique, votre positionnement actuel et vos objectifs de croissance. 
                  Précisez les types de soins que vous souhaitez développer (implants, facettes, esthétique…).
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Sélection rigoureuse
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seuls les dossiers sérieux et les cliniques engagées vers l'excellence seront étudiés. 
                  Nous recherchons des partenaires partageant notre vision du premium.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-muted-foreground text-sm italic">
                  Nous vous répondrons dans les plus brefs délais. Places limitées, sélection sur dossier.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Audit;
