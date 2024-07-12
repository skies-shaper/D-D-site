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
            type: "item",
            src: "",
            data: {
                level: 0,
                school: "evocation",
                description: "what a spell, innit?",
                components: "V, S, M (one macbook)",
                range: "",

            }
        },
        exampleMonster: {
            type: "monster",
            src: "",
            data: {
                versions: [
                   {id:"5e",data: {
                        Name: "",
                        alignment: "",
                        type: "",
                        AC: "",
                        HP: "15 (2d10-3 or whatever)",
                        speed: "",
                        STR: "",
                        DEX: "",
                        CON: "",
                        INT: "",
                        WIS: "",
                        CHA: "",
                        Skillmods: "",
                        senses: "",
                        languages: ["common"],
                        CR: 1,
                        XP: 100,
                        actions: "",
                        modifiers: "",
                        description: ""    
                   }} 
                ]
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
                class: ""
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
                AC: ""
            }
        }
    }
}
let otherData  = {
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
    }
}