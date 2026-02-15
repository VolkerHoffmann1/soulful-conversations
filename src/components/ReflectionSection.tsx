import { motion } from "framer-motion";
import { useState } from "react";

const prompts = [
  {
    question: "Was beschäftigt dich gerade am meisten?",
    hint: "Lass deinen Gedanken freien Lauf — es gibt keine falsche Antwort.",
  },
  {
    question: "Wofür bist du heute dankbar?",
    hint: "Auch die kleinsten Dinge zählen.",
  },
  {
    question: "Was würdest du deinem jüngeren Ich sagen?",
    hint: "Nimm dir einen Moment, um mitfühlend zu sein.",
  },
  {
    question: "Welches Gefühl begleitet dich heute?",
    hint: "Benenne es ohne Bewertung.",
  },
];

const ReflectionSection = () => {
  const [activePrompt, setActivePrompt] = useState(0);

  return (
    <section
      id="reflektieren"
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Reflexion
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground">
            Fragen, die dich <span className="italic">berühren</span>
          </h2>
        </motion.div>

        {/* Prompt cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {prompts.map((prompt, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActivePrompt(index)}
              className={`text-left p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                activePrompt === index
                  ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/5"
                  : "bg-card border-border hover:border-primary/20 hover:shadow-md"
              }`}
            >
              <p className="font-display text-lg md:text-xl text-foreground leading-snug mb-3">
                {prompt.question}
              </p>
              <p className="text-sm text-muted-foreground">{prompt.hint}</p>
            </motion.button>
          ))}
        </div>

        {/* Journal entry area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card rounded-2xl border border-border p-8 md:p-12"
        >
          <p className="font-display text-xl md:text-2xl text-foreground mb-2">
            {prompts[activePrompt].question}
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            {prompts[activePrompt].hint}
          </p>
          <textarea
            placeholder="Schreibe hier deine Gedanken..."
            className="w-full h-48 bg-transparent text-foreground placeholder:text-muted-foreground/50 font-body text-base leading-relaxed resize-none focus:outline-none border-none"
          />
          <div className="flex justify-end pt-4 border-t border-border">
            <button className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wide hover:opacity-90 transition-opacity">
              Speichern
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReflectionSection;
