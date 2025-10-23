# Spell Name Generator

A web-based spell name generator that creates grammatically correct spell names by combining effects and forms.

## Live Site

**URL:** https://sparkdust.github.io/spellgen/spellgen.html

## Git Configuration

This repository is connected to GitHub:
- **Remote:** https://github.com/Sparkdust/spellgen.git
- **Branch:** master
- **GitHub Username:** Sparkdust
- **Git User:** sparkdust (hopcraft@gmail.com)
- **GitHub Pages:** Enabled, deploys from master branch root

## Making Updates

To update the live site:

```bash
# Make your changes to the files
git add .
git commit -m "Description of changes"
git push
```

Changes will appear on the live site within 2-3 minutes.

## Project Structure

- `spellgen.html` - Main HTML file (entry point)
- `styles.css` - Styling
- `script.js` - Spell generation logic with effects and forms tables

## How It Works

Spells are generated using three patterns:
1. `[effect] [form]` - e.g., "Fiery Dart"
2. `[effect] [effect] [form]` - e.g., "Reflecting Whispering Bridge"
3. `[effect] [form] of [nounForm]` - e.g., "Dark Wall of Fire"

Effects have both base forms (adjectives/verbs) and noun forms to ensure grammatical correctness. The generator:
- Chooses effects randomly (50% one effect, 50% two effects)
- Selects appropriate pattern based on whether effects have noun forms
- Capitalizes properly (all words except "the" and "of")
