

## Transfer-Seite hinzufuegen

Eine neue Seite `/transfer` wird erstellt, die den Prozess beschreibt, wie man ein GitHub-Repository in ein Lovable-Projekt uebertragen kann. Die Seite passt sich dem bestehenden Design (Seelendialog-Stil mit Sage/Forest-Farben, Playfair Display Schrift, Framer Motion Animationen) an.

### Was wird gebaut

Eine informative Seite mit:
- Einer Kopfzeile mit Titel und Beschreibung
- Einer Schritt-fuer-Schritt-Anleitung in Karten-Form (3 Schritte)
- Einem Hinweis-Bereich zu aktuellen Einschraenkungen
- Navigation zurueck zur Startseite

### Die 3 Schritte

1. **Neues Lovable-Projekt erstellen** - Projekt anlegen und mit GitHub verbinden
2. **Repository klonen und Code kopieren** - Lokales Klonen beider Repos, Dateien uebertragen
3. **Push und Sync** - Aenderungen pushen, automatische Synchronisation mit Lovable

### Technische Aenderungen

1. **Neue Datei: `src/pages/Transfer.tsx`**
   - Seite mit Framer Motion Animationen (wie HeroSection)
   - Verwendet bestehende UI-Komponenten (Card, Button)
   - Responsive Layout mit Tailwind-Klassen
   - Link zurueck zur Startseite

2. **Aenderung: `src/App.tsx`**
   - Neue Route `/transfer` hinzufuegen, die auf die Transfer-Seite zeigt

