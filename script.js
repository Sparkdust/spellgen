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
    { name: "summoning", nounForm: "summoning" },
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

// Table of adventurer traits (alphabetically sorted)
const TRAITS = [
    "Acrobat", "Agile", "Alchemist", "Archer", "Athletic",
    "Axemaster", "Berserker", "Bladedancer", "Brawler", "Brave",
    "Catburglar", "Charismatic", "Deadly", "Defender",
    "Delver", "Duelist", "Explorer", "Fighter", "Healer",
    "Herbalist", "Holy", "Hunter", "Knight", "Mighty", "Mystical",
    "Nimble", "Perceptive", "Resilient", "Rider", "Sailor",
    "Scout", "Shieldbearer", "Spearmaster", "Stealthy", "Strong",
    "Sturdy", "Survivalist", "Swift", "Swordmaster", "Thief",
    "Tough", "Tracker", "Trapfinder", "Veteran", "Vigorous",
    "Warrior", "Wise"
];

// Table of ribbons (alphabetically sorted) - character flavor/background skills
const RIBBONS = [
    "Actor", "Animal Trainer", "Astrologer", "Baker", "Barber",
    "Beekeeper", "Beer Maker", "Blacksmith", "Bookbinder", "Brewer",
    "Butcher", "Carpenter", "Cartographer", "Chef", "Cobbler",
    "Collector", "Dancer", "Dog Breeder", "Falconer", "Farmer",
    "Fisherman", "Fortune Teller", "Gambler", "Gardener", "Glassblower",
    "Guide", "Historian", "Innkeeper", "Jeweler", "Librarian",
    "Mason", "Merchant", "Musician", "Noble", "Painter",
    "Pet Owner", "Pilgrim", "Poet", "Potter", "Scholar",
    "Scribe", "Sculptor", "Shepherd", "Singer", "Stable Hand",
    "Storyteller", "Tailor", "Tanner", "Tax Collector", "Vintner",
    "Watchmaker", "Weaver", "Woodcarver"
];

// Table of quirks (alphabetically sorted) - flaws and complications
const QUIRKS = [
    "Addicted", "Afraid of Blood", "Afraid of Crowds", "Afraid of Darkness", "Afraid of Fire",
    "Afraid of Heights", "Afraid of Magic", "Afraid of Water", "Arrogant", "Boastful",
    "Compulsive Liar", "Cowardly", "Cursed", "Distrustful", "Envious",
    "Foul-Mouthed", "Gluttonous", "Greedy", "Gullible", "Haughty",
    "Honest to a Fault", "Impulsive", "Indecisive", "Jealous", "Kleptomaniac",
    "Lawful to a Fault", "Lazy", "Loud", "Lover of Drink", "Melancholic",
    "Merciful to a Fault", "Naive", "Nervous Tic", "Oath-Bound", "Obsessive",
    "Overconfident", "Overly Curious", "Overspender", "Pacifist", "Paranoid",
    "Perfectionist", "Prideful", "Reckless", "Secretive", "Superstitious",
    "Suspicious", "Unforgiving", "Vengeful", "Vow of Poverty", "Vow of Silence"
];

// Table of equipment (alphabetically sorted) - mundane, mechanical, and minor magical items
const EQUIPMENT = [
    "Alchemical Glue", "Bedroll", "Bellows", "Billowing Cape", "Boots of Dryness",
    "Caltrops", "Candle of Scent", "Chalk", "Collapsible Ladder", "Crowbar",
    "Dust of Sneezing", "Ever-burning Candle", "Ever-growing Beard", "Folding Chair", "Grease",
    "Grappling Hook + Rope", "Horn", "Hourglass", "Lantern + Oil", "Lesser Healing Potion",
    "Magnifying Glass", "Mechanical Bird", "Mirror", "Moldable Wax Figurine", "Music Box",
    "Oil of Slipperiness", "Paired Bag", "Perfume", "Pocket Sand", "Potion of Courage",
    "Pouch of Marbles", "Quill + Ink", "Screaming Mushroom", "Seeking Paper Bird", "Self-inking Quill",
    "Smelling Salts", "Smoke Pellets", "Smokey Torch", "Soap of Cleansing", "Spyglass",
    "Sticky Goo", "String", "Telescoping Pole", "Ten-foot Pole", "Tinderbox and Candles",
    "Unending Chalk", "Vial of Acid", "Vial of Holy Water", "Waterskin", "Whistle",
    "Wind-up Doll", "Wine"
];

// State to track generated spells
const spells = new Array(6).fill(null);

// State to track character characteristics
const characteristics = {
    traits: new Array(3).fill(null),
    ribbons: new Array(3).fill(null),
    quirks: new Array(3).fill(null),
    equipment: new Array(4).fill(null)
};

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

// Generic function to generate from a list (with constraint to avoid repeating previous value)
function generateFromList(list, previousValue = null) {
    if (previousValue === null || list.length === 1) {
        return randomElement(list);
    }

    // Filter out the previous value to avoid repetition
    const availableOptions = list.filter(item => item !== previousValue);
    return randomElement(availableOptions);
}

// Lookup table for characteristic lists
const CHARACTERISTIC_LISTS = {
    'traits': TRAITS,
    'ribbons': RIBBONS,
    'quirks': QUIRKS,
    'equipment': EQUIPMENT
};

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

// Save character sheet to localStorage
function saveCharacterSheet() {
    const characterName = document.getElementById('character-name').value;
    const characterSheet = {
        name: characterName,
        spells: spells,
        characteristics: characteristics
    };
    localStorage.setItem('spellgenCharacter', JSON.stringify(characterSheet));
}

// Load character sheet from localStorage
function loadCharacterSheet() {
    const saved = localStorage.getItem('spellgenCharacter');
    if (saved) {
        try {
            const characterSheet = JSON.parse(saved);
            document.getElementById('character-name').value = characterSheet.name || '';

            // Load spells
            if (characterSheet.spells && Array.isArray(characterSheet.spells)) {
                for (let i = 0; i < characterSheet.spells.length && i < spells.length; i++) {
                    spells[i] = characterSheet.spells[i];
                }
            }

            // Load characteristics
            if (characterSheet.characteristics) {
                for (const section in characteristics) {
                    if (characterSheet.characteristics[section] && Array.isArray(characterSheet.characteristics[section])) {
                        for (let i = 0; i < characterSheet.characteristics[section].length && i < characteristics[section].length; i++) {
                            characteristics[section][i] = characterSheet.characteristics[section][i] || '';
                        }
                    }
                }
            }
        } catch (e) {
            console.error('Error loading character sheet:', e);
        }
    }
}

// Update the UI for a specific spell row
function updateSpellRow(index) {
    const row = document.querySelector(`.spell-row[data-index="${index}"]`);
    const spellNameEl = row.querySelector('.spell-name');

    spellNameEl.textContent = spells[index] || '';

    // Save to localStorage whenever UI updates
    saveCharacterSheet();
}

// Generic function to update UI for a characteristic row
function updateCharacteristicRow(type, index) {
    const row = document.querySelector(`.${type}-row[data-index="${index}"]`);
    if (!row) return;

    const inputEl = row.querySelector(`.${type}-input`);
    if (!inputEl) return;

    inputEl.value = characteristics[type][index] || '';

    // Save to localStorage whenever UI updates
    saveCharacterSheet();
}

// Generate all spells from index 0 up to and including targetIndex
function generateSpellsUpTo(targetIndex) {
    for (let i = 0; i <= targetIndex; i++) {
        if (!spells[i]) {
            // Get all currently used spell names
            const usedSpells = spells.filter(spell => spell !== null && spell !== '');

            // Generate a spell, re-rolling if it's a duplicate
            let newSpell = generateSpellName();
            let attempts = 0;
            const maxAttempts = 50; // Prevent infinite loop

            while (usedSpells.includes(newSpell) && attempts < maxAttempts) {
                newSpell = generateSpellName();
                attempts++;
            }

            spells[i] = newSpell;
            updateSpellRow(i);
        }
    }
}

// Generic function to generate all characteristics from index 0 up to targetIndex
function generateCharacteristicsUpTo(type, targetIndex) {
    const list = CHARACTERISTIC_LISTS[type];
    if (!list) return;

    for (let i = 0; i <= targetIndex; i++) {
        if (!characteristics[type][i]) {
            // Get all currently used values for this type (excluding nulls)
            const usedValues = characteristics[type].filter(val => val !== null && val !== '');
            // Generate from list, avoiding all used values
            const availableOptions = list.filter(item => !usedValues.includes(item));

            // If we have available options, use them; otherwise fall back to full list
            if (availableOptions.length > 0) {
                characteristics[type][i] = randomElement(availableOptions);
            } else {
                characteristics[type][i] = randomElement(list);
            }
            updateCharacteristicRow(type, i);
        }
    }
}

// Initialize event listeners
function init() {
    // Load saved character sheet
    loadCharacterSheet();

    // Update UI for all spell rows
    for (let i = 0; i < spells.length; i++) {
        updateSpellRow(i);
    }

    // Generic setup for characteristic rows (traits, ribbon, etc.)
    function setupCharacteristicRows(type) {
        const list = CHARACTERISTIC_LISTS[type];

        // Populate datalist with options
        const datalist = document.getElementById(`${type}-list`);
        if (datalist) {
            datalist.innerHTML = '';
            list.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                datalist.appendChild(option);
            });
        }

        // Update UI for all rows
        for (let i = 0; i < characteristics[type].length; i++) {
            updateCharacteristicRow(type, i);
        }

        // Setup event listeners
        document.querySelectorAll(`.${type}-row`).forEach((row, index) => {
            const inputEl = row.querySelector(`.${type}-input`);
            const replaceBtn = row.querySelector('.btn-replace');
            const deleteBtn = row.querySelector('.btn-delete');

            // Input change - save user's custom entry
            inputEl.addEventListener('input', () => {
                characteristics[type][index] = inputEl.value || null;
                saveCharacterSheet();
            });

            // Replace button - generates if blank, replaces if filled
            replaceBtn.addEventListener('click', () => {
                const currentValue = characteristics[type][index];
                if (!currentValue) {
                    // If blank, generate all blanks up to this index
                    generateCharacteristicsUpTo(type, index);
                } else {
                    // If filled, replace with different value avoiding all used values
                    const usedValues = characteristics[type].filter(val => val !== null && val !== '');
                    const availableOptions = list.filter(item => !usedValues.includes(item));

                    if (availableOptions.length > 0) {
                        characteristics[type][index] = randomElement(availableOptions);
                    } else {
                        // If all options used, just pick a different one from current
                        characteristics[type][index] = generateFromList(list, currentValue);
                    }
                    updateCharacteristicRow(type, index);
                }
            });

            // Delete button
            deleteBtn.addEventListener('click', () => {
                characteristics[type][index] = null;
                updateCharacteristicRow(type, index);
            });
        });
    }

    // Setup all characteristic types
    setupCharacteristicRows('traits');
    setupCharacteristicRows('ribbons');
    setupCharacteristicRows('quirks');
    setupCharacteristicRows('equipment');

    const rows = document.querySelectorAll('.spell-row');

    rows.forEach((row, index) => {
        const replaceBtn = row.querySelector('.btn-replace');
        const deleteBtn = row.querySelector('.btn-delete');

        // Replace button click - generates if blank, replaces if filled
        replaceBtn.addEventListener('click', () => {
            if (!spells[index]) {
                // If blank, generate all blanks up to this index
                generateSpellsUpTo(index);
            } else {
                // If filled, replace with new spell avoiding duplicates
                const usedSpells = spells.filter(spell => spell !== null && spell !== '');
                let newSpell = generateSpellName();
                let attempts = 0;
                const maxAttempts = 50;

                while (usedSpells.includes(newSpell) && attempts < maxAttempts) {
                    newSpell = generateSpellName();
                    attempts++;
                }

                spells[index] = newSpell;
                updateSpellRow(index);
            }
        });

        // Delete button click
        deleteBtn.addEventListener('click', () => {
            spells[index] = null;
            updateSpellRow(index);
        });
    });

    // Save character name when it changes
    const characterNameInput = document.getElementById('character-name');
    characterNameInput.addEventListener('input', () => {
        saveCharacterSheet();
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
