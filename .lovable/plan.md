
# Automatische Inhalts-Verifikation nach Transfer

## Ziel
Automatisierte Tests erstellen, die sicherstellen, dass alle Sektionen der Seelendialog-App nach einem Transfer korrekt gerendert werden.

## Was wird erstellt

### 1. Render-Test fuer die Index-Seite
Ein Vitest + React Testing Library Test, der prueft:
- **HeroSection**: Titel "Seelendialog", Untertitel "Raum fuer deine Seele", CTA-Button vorhanden
- **ReflectionSection**: Alle 4 Reflexionsfragen sichtbar, Textarea und Speichern-Button vorhanden
- **Footer**: Branding-Text vorhanden

### 2. Komponenten-Tests
Einzelne Tests fuer jede Sektion:
- `HeroSection.test.tsx` - Hero-Bild, Texte, Scroll-Indikator
- `ReflectionSection.test.tsx` - Prompt-Karten, Interaktivitaet (Klick wechselt aktive Frage), Journal-Bereich
- `Footer.test.tsx` - Footer-Inhalt

## Technische Details

### Neue Dateien
| Datei | Inhalt |
|-------|--------|
| `src/test/pages/Index.test.tsx` | Vollstaendiger Render-Test der Hauptseite mit allen Sektionen |
| `src/test/components/HeroSection.test.tsx` | Hero-Sektion Detailtests |
| `src/test/components/ReflectionSection.test.tsx` | Reflexions-Sektion mit Interaktionstests |
| `src/test/components/Footer.test.tsx` | Footer-Verifikation |

### Abhaengigkeiten
- `@testing-library/react` und `@testing-library/user-event` muessen installiert werden
- Framer Motion muss gemockt werden (Animationen stoeren Tests)
- Das Hero-Bild-Asset muss gemockt werden

### Testbeispiel (Index-Seite)
```text
Test: "alle Sektionen rendern nach Transfer"
  - Rendert Index-Komponente
  - Prueft: "Seelendialog" Text vorhanden
  - Prueft: "Raum fuer deine Seele" vorhanden
  - Prueft: Alle 4 Reflexionsfragen vorhanden
  - Prueft: Textarea vorhanden
  - Prueft: Footer-Text vorhanden
  --> PASS = Transfer erfolgreich
```

### Reihenfolge
1. Testing-Bibliotheken installieren
2. Framer Motion Mock einrichten
3. Komponenten-Tests erstellen
4. Index-Gesamttest erstellen
5. Alten Beispieltest entfernen
