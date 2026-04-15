import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { getMessages, markAsRead, type Message } from "@/lib/messageStore";

const Dashboard = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message | null>(null);

  useEffect(() => {
    if (localStorage.getItem("scalyo_admin") !== "true") {
      navigate("/admin");
      return;
    }
    setMessages(getMessages());
  }, [navigate]);

  const unread = messages.filter((m) => !m.lu);
  const read = messages.filter((m) => m.lu);

  const handleSelect = (msg: Message) => {
    if (!msg.lu) {
      markAsRead(msg.id);
      setMessages(getMessages());
    }
    setSelected(msg);
  };

  const handleLogout = () => {
    localStorage.removeItem("scalyo_admin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between py-5 px-6">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight">
            <span className="text-foreground">Scal</span>
            <span className="text-gradient-gold">yo</span>
          </Link>
          <button onClick={handleLogout} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Déconnexion
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground mb-8">
            <span className="text-primary font-semibold">{messages.length}</span> message{messages.length !== 1 ? "s" : ""} reçu{messages.length !== 1 ? "s" : ""}
            {" · "}
            <span className="text-primary font-semibold">{unread.length}</span> non lu{unread.length !== 1 ? "s" : ""}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Messages list */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                📥 Non lus
                {unread.length > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">{unread.length}</span>
                )}
              </h2>
              <div className="space-y-2">
                {unread.length === 0 && <p className="text-muted-foreground text-sm">Aucun message non lu</p>}
                {unread.map((msg) => (
                  <button
                    key={msg.id}
                    onClick={() => handleSelect(msg)}
                    className={`w-full text-left p-4 rounded-sm border transition-colors ${
                      selected?.id === msg.id
                        ? "border-primary bg-card"
                        : "border-border bg-card/40 hover:bg-card/70"
                    }`}
                  >
                    <p className="text-sm font-semibold text-foreground truncate">{msg.nom} {msg.prenom}</p>
                    <p className="text-xs text-muted-foreground truncate">{msg.email}</p>
                    <p className="text-xs text-muted-foreground mt-1">{new Date(msg.date).toLocaleDateString("fr-FR")}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">📬 Lus</h2>
              <div className="space-y-2">
                {read.length === 0 && <p className="text-muted-foreground text-sm">Aucun message lu</p>}
                {read.map((msg) => (
                  <button
                    key={msg.id}
                    onClick={() => handleSelect(msg)}
                    className={`w-full text-left p-4 rounded-sm border transition-colors ${
                      selected?.id === msg.id
                        ? "border-primary bg-card"
                        : "border-border bg-card/40 hover:bg-card/70"
                    }`}
                  >
                    <p className="text-sm font-medium text-muted-foreground truncate">{msg.nom} {msg.prenom}</p>
                    <p className="text-xs text-muted-foreground truncate">{msg.email}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Message detail */}
          <div className="lg:col-span-2">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-card/60 border border-border rounded-sm p-8"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {selected.nom} {selected.prenom}
                    </h3>
                    <p className="text-sm text-primary">{selected.email}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {new Date(selected.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                </div>
              </motion.div>
            ) : (
              <div className="flex items-center justify-center h-64 bg-card/30 border border-border rounded-sm">
                <p className="text-muted-foreground">Sélectionnez un message pour le lire</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
