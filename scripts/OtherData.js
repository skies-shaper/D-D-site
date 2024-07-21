let defs = {
    skills : {
        Athletics: 1,
        Acrobatics: 2,
        "Sleight of Hand": 3,
        Stealth: 4,
        Arcana: 5,
        History: 6,
        Investigation: 7,
        Nature: 8,
        Religion: 9,
        "Animal Handling": 10,
        Insight: 11,
        Medicine: 12,
        Perception: 13,
        Survival: 14,
        Deception: 15,
        Intimidation: 16,
        Performance: 17,
        Persuasion: 18
    },
    senses: {
        perception: 1,
        "passive perception": 2,
        darkvision: 3,
        blindsight: 4,

    }

}
{
    let templateForThisStuff = {
        exampleItem: {
            type: "item",
            src: "",
            data: {
                rarity: "",
                name: "",
                description: "",
            }
        },
        exampleSpell: {
            type: "spell",
            src: "",
            data: {
                level: 0,
                school: "evocation",
                description: "what a spell, innit?",
                components: "V, S, M (one macbook)",
                range: "",
                castingTime: "",
                duration: ""
            }
        },
        exampleMonster: {
            type: "monster",
            src: "",
            data: {
                Name: "",
                alignment: "",
                type: "",
                size: "",
                AC: "",
                HP: "15 (2d10-3 or whatever)",
                speed: "",
                STR: "",
                DEX: "",
                CON: "",
                INT: "",
                WIS: "",
                CHA: "",
                savingThrows: "",
                conditionImmunities: "",
                damageResistances: "",
                damageImmunities: "",
                Skillmods: "",
                senses: "",
                languages: ["common"],
                CR: 1,
                XP: 100,
                actions: "",
                modifiers: "",
                description: ""    
            }
        },
        examplePhenomenomphenomenaphenomatriceyeken: {
            type: "phenomenon",
            src: "",
            data: {
                name: "",
                description: ""
            }
        },
        examplePerson: {
            type: "character",
            src: "",
            data: {
                name: "",
                description: "",
                race: "",
                class: "",
                description: "",
                languages: ""
            }
        },
        exampleNPC: {
            type: "npc",
            src: "",
            data: {
                name: "",
                description: "",
                race: "",
                class: "",
                HP: "",
                AC: "",
                speed: "",
                STR: "",
                DEX: "",
                CON: "",
                INT: "",
                WIS: "",
                CHA: "",
                languages: ""
            }
        }
    }
}
let otherData  = {
    "ArduSubgroupsIllochu":{
        type: "article",
        src: "",
        data: {
            name: "The Illochu",
            subtitle: "Ardu subgroup",
            mainContent: `A subgroup of the ^[Ardu Ardu]^  (this setting's Humans), the Illochu are wanderers through the Continent in the Ardu realms [directionsPP Ad-Isto] of the Dwarven mountains.`
        }

    },
   
    "directionsPP":{
        type: "article",
        src: "imgs/Directions.png",
        data: {
            name: "Directionality on the prime plane",
            subtitle: "There's six!",
            mainContent: `The Prime plane uses a system of directional notation based on the four elemental planes, the edge of the Plane and the center of the Plane. Each elemental plane which feeds into the Prime Plane along one of its axes. Thus the four cardinal directions are
            _Ad-Krin_ (Plane of Fire)
            _Ad-Eshu_ (Plane of Water)
            _Ad-Rune_ (Plane of Earth)
            _Ad-Sus_ (Plane of Air)
            The directions _Ad-Sha_ (towards the rim) and _Ad-Krin_ (towards the center) are also used for contextual purposes.
            The directions are named using _Ad_, the [Varlossik Varlossik] term for "Way", and the terms for Fire, Wave, Earth, Wind, Center and Ending.`
        }

    },
    "Aradielgnome":{
        type: "character",
        src: "",
        data: {
            name: "Aradiel Riverstone",
            race: "Forest Gnome",
            class: "Ranger",
            description: `Raised in the [OroudanForest Oroudan Forest], Aradiel was abandoned by her parents at a young age after forsaking their gnomish craftings in exchange for a life of Adventure. She befriended a band of the ^[ArduSubgroupsIllochu Illochu]^, who taught her the ways of the Wilds.`
        }
    },
    "LPSMHelm":{
        type: "item",
        src: "",
        data: {
            rarity: "uncommon",
            name: "Helm of Lightly Pressed Sheet Metal",
            type: "helmet",
            description: "Made by only the finest dwarven armorsmiths, the ^Helm of Lightly Pressed Sheet Metal^ provides only a small (+1) bonus to AC. However, it provides its wearer with a +3 bonus to Intelligence and Wisdom saves, as well as resistance to psychic damage and immunity to unwanted uses of telepathy.",
        }
    },
    "spiritSummonMinor":{
        type: "spell",
        data: {
            name: "Summon Minor Spirit",
            level: 3,
            school: "conjuration (ritual)",
            duration: "varies",
            components: "V, S, M (A summoning focus and a small gemstone)",
            range: "60 feet",
            castingTime: "5 minutes",
            description: `You summon a ^[minorSpirits minor spirit]^ into an empty space in a 60 foot range around you by concentrating your summoning focus into the gemstone, creating a planar gate through which the spirit is drawn.
            _Summoning focuses:_ 
            ^Guide Spirit:^ a small magnetized needle`
        }
    },
    "Guidespirit":{
        type: "monster",
        src: "",
        data: {
            name: "Guide Spirit",
            alignment: "varies",
            type: "spirit",
            size: "small",
            AC: "16",
            HP: "2d10 (11)",
            speed: "20ft., fly 40ft.",
            STR: "10 (+0)",
            DEX: "17 (+3)",
            CON: "10 (+0)",
            INT: "16 (+3)",
            WIS: "16 (+3)",
            CHA: "13 (+1)",
            savingThrows: "",
            conditionImmunities: "",
            damageResistances: "",
            damageImmunities: "",
            skillMods: "Insight +5, Arcana +5",
            senses: "Passive Perception 15",
            languages: "",
            CR: "1/8",
            XP: 100,
            actions:`^_Guide._^ A Guide Spirit will use its action to fly towards the location it acts as a guide to. It will take the path most optimized for those following it, unless it was specified to do otherwise by its summoner. While it cannot speak, it emits a faint telepathic signal (accompanied by whistling and chirp noises) indicating it is meant to guide an individual or group of individuals towards a goal.
            ^_Hide._^ A Guide Spirit can use its action to cast ^Invisibility^ on itself if the group it has been sent to protect is in danger.`,
            modifiers: "",
            description: "A ^Guide Spirit^ is a [CreaturecategorySpirit spirit] summoned by a Magic-User in order to guide a person or group of people towards an object or goal. They can be summoned using [spiritSummonMinor Summon Minor Spirit], with a small magnetized needle used as the ^summoning focus^. Though, as a sprit, an unsummoned Guide Spirit is not aligned, they will most often take the alignment of their summoner, though this represents the aims of their guidance more than their actions, as all guide spirits will act much the same; taking the ^guide^ action when possible, resting with their party when necessary and ^hiding^ in combat."    
        }
    },
    "Worldweaver": {
        type: "monster",
        src: "",
        data: {
            name: "World Weaver",
            alignment: "true chaotic",
            type: "Celestial",
            size: "Huge",
            AC: "",
            HP: "15 (2d10-3 or whatever)",
            speed: "20ft., burrow 20 ft., swim 10ft. ",
            STR: "16 (+3)",
            DEX: "4 (-3)",
            CON: "15 (+2)",
            INT: "15 (+2)",
            WIS: "10 (+0)",
            CHA: "8 (-1)",
            Skillmods: "",
            savingThrows: "",
            conditionImmunities: "",
            damageResistances: "",
            damageImmunities: "",
            senses: "blindsight 100ft., darkvision 100ft., tremorsense 50 ft., truesight 50 ft., passiver Perception 10",
            languages: "All, telepathy 15 ft.",
            CR: 8,
            XP: 3900,
            actions: `^_Flailing Smite._^ If reduced to 20 hit points or lower, gains the ability to smash its tendrils across the ground, knocking loose boulders from the ceiling (1d12 boulders falling from the ceiling over a 30ft radius centered on the Weaver). These boulders do not damage the World Weaver. Each deals 4d10 damage.
            ^_Planar Node._^ (2 uses per battle) Casts ^Mordenkainen's Private Sanctum^ and ^Mirage Arcane^ to trap 1d2 creatures in what ^appears^ to be a different plane. This will entrap them until they complete a preset task, as set by the DM.`,
            modifiers: "^_Hit go bang._^ Tentacle hit. Go bang. 1d8 damage, 1d6 different attacks.",
            description: `A ^World Weaver^ is a great celestial being, vast in size and laying its tendrils down seemingly endless miles of subterannean tunnels. After being summoned by an incantation or wriggling its way through a portal not its own, it gets to work. Teleporting to a Focal Point of high energy somewhere nearby its location, it begins to burrow, superimposing a network of rocky caves over its preexisting underground surroundings. In the junctions between these tunnels, and sometimes interspersed randomly throughout them, it lays "eggs": nodules of energy so potent that they form a small rift in the dimensional fabric of the universe itself. These are self contained, and are structured thusly:
            A small nodule of energy, detectable by a glowing mist or forcefield, acts as the boundary for a sphere with a maximum radius of 30ft. This will most likely be found within a preexisting cave.
            When this nodule is entered, the adventurers will be teleported into a part of a different plane of existence. They will only be allowed access to a limited part of this plane, however that space may be considerably larger than the one they entered from.
            By either leaving the way they came or completing some set goal (as specified by the DM), the adventurers are able to leave this area. They cannot exit the enclosed area through _any other_ means.`    
        }

    }
}