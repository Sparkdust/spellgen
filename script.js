// Table of effects
// name: the base form (used as modifier/adjective)
// nounForm: the noun form (used after "of"), can be null if no appropriate noun form exists
const EFFECTS = [
    { name: "light", nounForm: "light" },
    { name: "illuminating", nounForm: "illumination" },
    { name: "dazzling", nounForm: null },
    { name: "dark", nounForm: "darkness" },
    { name: "shadow", nounForm: "shadow" },
    { name: "growing", nounForm: "growth" },
    { name: "shrinking", nounForm: null },
    { name: "fiery", nounForm: "fire" },
    { name: "flaming", nounForm: "flame" },
    { name: "icy", nounForm: "ice" },
    { name: "frozen", nounForm: "frost" },
    { name: "poisonous", nounForm: "poison" },
    { name: "toxic", nounForm: "toxin" },
    { name: "deadly", nounForm: "death" },
    { name: "necrotic", nounForm: "necrosis" },
    { name: "living", nounForm: "life" },
    { name: "healing", nounForm: "health" },
    { name: "silent", nounForm: "silence" },
    { name: "thundering", nounForm: "thunder" },
    { name: "lightning", nounForm: "lightning" },
    { name: "whispering", nounForm: "whispers" },
    { name: "mesmerizing", nounForm: null },
    { name: "illusionary", nounForm: "illusion" },
    { name: "phantom", nounForm: "phantoms" },
    { name: "beast-summoning", nounForm: null },
    { name: "summoning", nounForm: "summons" },
    { name: "banishing", nounForm: "banishment" },
    { name: "mutating", nounForm: "mutation" },
    { name: "transforming", nounForm: "transformation" },
    { name: "teleporting", nounForm: "teleportation" },
    { name: "floating", nounForm: null },
    { name: "flying", nounForm: "flight" },
    { name: "invisible", nounForm: "invisibility" },
    { name: "ethereal", nounForm: "ether" },
    { name: "spectral", nounForm: "spirits" },
    { name: "glowing", nounForm: null },
    { name: "burning", nounForm: null },
    { name: "freezing", nounForm: null },
    { name: "melting", nounForm: null },
    { name: "explosive", nounForm: "explosion" },
    { name: "crushing", nounForm: null },
    { name: "piercing", nounForm: null },
    { name: "slicing", nounForm: null },
    { name: "binding", nounForm: "bonds" },
    { name: "entrapping", nounForm: null },
    { name: "imprisoning", nounForm: "imprisonment" },
    { name: "disintegrating", nounForm: "disintegration" },
    { name: "protective", nounForm: "protection" },
    { name: "shielding", nounForm: null },
    { name: "reflecting", nounForm: "reflection" },
    { name: "absorbing", nounForm: "absorption" },
    { name: "draining", nounForm: null },
    { name: "empowering", nounForm: "power" },
    { name: "weakening", nounForm: "weakness" },
    { name: "charming", nounForm: "charm" },
    { name: "terrifying", nounForm: "terror" },
    { name: "confusing", nounForm: "confusion" },
    { name: "hypnotic", nounForm: "hypnosis" },
    { name: "mind-reading", nounForm: null },
    { name: "prophetic", nounForm: "prophecy" },
    { name: "clairvoyant", nounForm: "clairvoyance" },
    { name: "scrying", nounForm: "visions" },
    { name: "divining", nounForm: "divination" },
    { name: "cursing", nounForm: "curse" },
    { name: "blessed", nounForm: "blessing" },
    { name: "holy", nounForm: "holiness" },
    { name: "unholy", nounForm: null },
    { name: "divine", nounForm: "divinity" },
    { name: "infernal", nounForm: "inferno" },
    { name: "arcane", nounForm: "arcana" },
    { name: "eldritch", nounForm: null },
    { name: "primal", nounForm: null },
    { name: "elemental", nounForm: "elements" },
    { name: "celestial", nounForm: "heaven" },
    { name: "abyssal", nounForm: "abyss" },
    { name: "astral", nounForm: null },
    { name: "temporal", nounForm: "time" },
    { name: "spatial", nounForm: "space" },
    { name: "dimensional", nounForm: "dimensions" },
    { name: "gravitational", nounForm: "gravity" },
    { name: "magnetic", nounForm: "magnetism" },
    { name: "electric", nounForm: "electricity" },
    { name: "sonic", nounForm: "sound" },
    { name: "psychic", nounForm: "mind" },
    { name: "radiant", nounForm: "radiance" },
    { name: "corrosive", nounForm: "corrosion" },
    { name: "acidic", nounForm: "acid" },
    { name: "volcanic", nounForm: "the volcano" },
    { name: "seismic", nounForm: "earthquake" },
    { name: "wind", nounForm: "wind" },
    { name: "stormy", nounForm: "storm" },
    { name: "rainy", nounForm: "rain" },
    { name: "misty", nounForm: "mist" },
    { name: "foggy", nounForm: "fog" },
    { name: "crystal", nounForm: "crystal" },
    { name: "iron", nounForm: "iron" },
    { name: "stone", nounForm: "stone" },
    { name: "golden", nounForm: "gold" },
    { name: "silver", nounForm: "silver" },
    { name: "bloody", nounForm: "blood" },
    { name: "bone", nounForm: "bone" },
    { name: "spirit", nounForm: "the spirit" },
    { name: "soul", nounForm: "soul" },
    { name: "dream", nounForm: "dreams" }
];

// Table of 50 forms
const FORMS = [
    "slime", "fox", "goat", "raven", "serpent",
    "wolf", "bear", "dragon", "spider", "beetle",
    "ball", "sphere", "orb", "thought", "word",
    "wall", "barrier", "dome", "shield", "armor",
    "dart", "arrow", "spear", "blade", "hammer",
    "rain", "storm", "cloud", "mist", "wave", "sky",
    "chain", "rope", "web", "cage", "prison",
    "eye", "hand", "claw", "fang", "wing",
    "gate", "door", "portal", "path", "bridge",
    "crown", "throne", "scepter", "circle", "star"
];

// State to track generated spells
const spells = new Array(6).fill(null);

// Get a random element from an array
function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Capitalize words except articles
function capitalizeSpellName(str) {
    if (!str) return str;
    const articles = ['the', 'of'];
    return str.split(' ').map((word, index) => {
        // Always capitalize the first word
        if (index === 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        // Don't capitalize articles
        if (articles.includes(word.toLowerCase())) {
            return word.toLowerCase();
        }
        // Capitalize all other words
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Generate a spell name
function generateSpellName() {
    // First, choose effects randomly (50% chance of 1 effect, 50% chance of 2 effects)
    const numEffects = Math.random() < 0.5 ? 1 : 2;
    const form = randomElement(FORMS);

    if (numEffects === 1) {
        const effect = randomElement(EFFECTS);

        // If the effect has a noun form, we can choose between two patterns
        if (effect.nounForm && Math.random() < 0.5) {
            // Pattern: [form] of [nounForm]
            // Example: "Dart of Fire"
            return capitalizeSpellName(`${form} of ${effect.nounForm}`);
        } else {
            // Pattern: [effect] [form]
            // Example: "Fiery Dart"
            return capitalizeSpellName(`${effect.name} ${form}`);
        }
    } else {
        // We have 2 effects - choose them randomly
        const effect1 = randomElement(EFFECTS);
        const effect2 = randomElement(EFFECTS);

        // If effect2 has a noun form, we can choose between two patterns
        // Otherwise, we must use the [effect] [effect] [form] pattern
        if (effect2.nounForm && Math.random() < 0.5) {
            // Pattern: [effect] [form] of [nounForm]
            // Example: "Reflecting Bridge of Whispers"
            return capitalizeSpellName(`${effect1.name} ${form} of ${effect2.nounForm}`);
        } else {
            // Pattern: [effect] [effect] [form]
            // Example: "Reflecting Whispering Bridge"
            return capitalizeSpellName(`${effect1.name} ${effect2.name} ${form}`);
        }
    }
}

// Update the UI for a specific spell row
function updateSpellRow(index) {
    const row = document.querySelector(`.spell-row[data-index="${index}"]`);
    const generateBtn = row.querySelector('.btn-generate');
    const spellNameEl = row.querySelector('.spell-name');
    const actionsEl = row.querySelector('.spell-actions');

    if (spells[index]) {
        generateBtn.classList.add('hidden');
        spellNameEl.textContent = spells[index];
        actionsEl.classList.remove('hidden');
    } else {
        generateBtn.classList.remove('hidden');
        spellNameEl.textContent = '';
        actionsEl.classList.add('hidden');
    }
}

// Generate all spells from index 0 up to and including targetIndex
function generateSpellsUpTo(targetIndex) {
    for (let i = 0; i <= targetIndex; i++) {
        if (!spells[i]) {
            spells[i] = generateSpellName();
            updateSpellRow(i);
        }
    }
}

// Initialize event listeners
function init() {
    const rows = document.querySelectorAll('.spell-row');

    rows.forEach((row, index) => {
        const generateBtn = row.querySelector('.btn-generate');
        const replaceBtn = row.querySelector('.btn-replace');
        const deleteBtn = row.querySelector('.btn-delete');

        // Generate button click
        generateBtn.addEventListener('click', () => {
            generateSpellsUpTo(index);
        });

        // Replace button click
        replaceBtn.addEventListener('click', () => {
            spells[index] = generateSpellName();
            updateSpellRow(index);
        });

        // Delete button click
        deleteBtn.addEventListener('click', () => {
            spells[index] = null;
            updateSpellRow(index);
        });
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
