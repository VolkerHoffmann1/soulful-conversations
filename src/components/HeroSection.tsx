import { motion } from "framer-motion";
import heroImage from "@/assets/hero-forest.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nebelverhangener Wald im Morgenlicht"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Raum für deine Seele
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-foreground mb-8"
        >
          Seelen
          <span className="italic text-sage-deep">dialog</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
        >
          Ein stiller Ort, an dem du mit dir selbst ins Gespräch kommst.
          Reflektiere, fühle, schreibe — ganz ohne Urteil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#reflektieren"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Beginne dein Gespräch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-breathe"
      >
        <div className="w-px h-12 bg-muted-foreground mx-auto mb-2" />
        <p className="text-xs tracking-widest uppercase text-muted-foreground">Weiter</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
