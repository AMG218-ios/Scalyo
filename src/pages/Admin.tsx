import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      localStorage.setItem("scalyo_admin", "true");
      navigate("/dashboard");
    } else {
      toast.error("Identifiants incorrects");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between py-5 px-6">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight">
            <span className="text-foreground">Scal</span>
            <span className="text-gradient-gold">yo</span>
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm space-y-6 bg-card/60 border border-border rounded-sm p-8"
        >
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">Administration</h1>
            <p className="text-muted-foreground text-sm">Accès réservé</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Nom d'utilisateur</label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="bg-background/50 border-border"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Mot de passe</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••"
              className="bg-background/50 border-border"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity"
          >
            Connexion
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default Admin;
