import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="font-display text-2xl text-foreground mb-2">
          Seelen<span className="italic">dialog</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Dein stiller Begleiter auf dem Weg zu dir selbst.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
