import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, GitBranch, Copy, Upload, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const steps = [
  {
    icon: GitBranch,
    title: "Neues Lovable-Projekt erstellen",
    description:
      "Erstelle ein neues Projekt in Lovable und verbinde es über die Projekteinstellungen mit GitHub. Lovable erstellt automatisch ein neues Repository.",
  },
  {
    icon: Copy,
    title: "Repository klonen & Code kopieren",
    description:
      "Klone sowohl dein bestehendes als auch das neue Lovable-Repository lokal. Kopiere alle Dateien (außer .git) aus deinem bestehenden Repo in das Lovable-Repo.",
  },
  {
    icon: Upload,
    title: "Push & Sync",
    description:
      "Committe die kopierten Dateien und pushe sie zum GitHub-Repository. Lovable synchronisiert die Änderungen automatisch in dein Projekt.",
  },
];

const Transfer = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4"
          >
            Anleitung
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-medium tracking-tight text-foreground mb-6"
          >
            GitHub zu <span className="italic text-sage-deep">Lovable</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            So überträgst du ein bestehendes GitHub-Repository in ein
            Lovable-Projekt — Schritt für Schritt.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
            >
              <Card className="border-border bg-card">
                <CardHeader className="flex-row items-start gap-4 space-y-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-1">
                      Schritt {index + 1}
                    </p>
                    <CardTitle className="text-xl font-display">
                      {step.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pl-20">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hinweis */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Alert className="bg-card border-warmth/30">
              <AlertTriangle className="h-4 w-4 text-warmth" />
              <AlertTitle className="font-display">Gut zu wissen</AlertTitle>
              <AlertDescription className="text-muted-foreground">
                Lovable unterstützt derzeit keinen direkten Import bestehender
                Repositories. Der hier beschriebene manuelle Weg ist aktuell die
                empfohlene Methode.
              </AlertDescription>
            </Alert>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Transfer;
