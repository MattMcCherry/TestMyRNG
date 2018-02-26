const enemies = [
    {
    name: 'General Graardor',
    killsph: 20,
    rolls: 1,
    drops: [
            {
                name: 'Big bones', 
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Rune 2h sword', 
                dropAmount: [1, 1], 
                rarity: 2/21
            },
            {
                name: 'Rune pickaxe', 
                dropAmount: [1, 1], 
                rarity: 2/21
            },
            {
                name: 'Rune longsword',
                dropAmount: [1, 1],
                rarity: 2/21,
            },
            {
                name: 'Rune platebody',
                dropAmount: [1, 1],
                rarity:  2/21,
            },
            {
                name: 'Bandos chestplate',
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Bandos tassets',
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Bandos boots',
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Nature rune',
                dropAmount: [40, 60],
                rarity: 1/25,
            }, 
            {
                name: 'Adamantite ore',
                dropAmount: [15, 20],
                rarity: 2/21,
            }, 
            {
                name: 'Coal',
                dropAmount: [115, 120],
                rarity: 1/10,
            }, 
            {
                name: 'Coins',
                dropAmount: [19581, 21000],
                rarity: 1/10,
            }, 
            {
                name: 'Snapdragon seed',
                dropAmount: [1, 1],
                rarity: 1/25,
            }, 
            {
                name: 'Magic log',
                dropAmount: [15, 20],
                rarity: 1/25,
            }, 
            {
                name: 'Super restore(4)',
                dropAmount: [3, 3],
                rarity: 1/25,
            }, 
            {
                name: 'Grimy snapdragon',
                dropAmount: [3, 3],
                rarity: 1/25,
            }, 
            {
                name: 'Clue scroll (elite)',
                dropAmount: [1, 1],
                rarity: 1/250,
            }, 
            {
                name: 'Godsword shard 1',
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 2',
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 3',
                dropAmount: [1, 1],
                rarity: 1/256,
            },
            {
                name: 'Long bone',
                dropAmount: [1, 1],
                rarity: 1/400,
            },
            {
                name: 'Bandos hilt',
                dropAmount: [1, 1],
                rarity: 1/508,
            },
            {
                name: 'Pet general graardor',
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
            {
                name: 'Rare drop table',
                dropAmount: [1, 1],
                rarity: 1/127,
            },
        ]
    },
    {
    name: `Kree'arra`,
    killsph: 20,
    rolls: 1,
    drops: [
            {
                name: 'Big bones', 
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Feather', 
                dropAmount: [1, 15], 
                rarity: 100
            },
            {
                name: 'Rune sword', 
                dropAmount: [1, 1], 
                rarity: 1/406
            },
            {
                name: 'Rune crossbow', 
                dropAmount: [1, 1], 
                rarity: 2/21
            },
            {
                name: `Black d'hide`,
                dropAmount: [1, 1],
                rarity: 2/21,
            },
            {
                name: 'Armadyl helmet',
                dropAmount: [1, 1],
                rarity:  1/384,
            },
            {
                name: 'Armadyl chestplate',
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Armadyl chainskirt',
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Bandos boots',
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Runite bolts',
                dropAmount: [18, 25],
                rarity: 2/21,
            }, 
            {
                name: 'Mind rune',
                dropAmount: [500, 601],
                rarity: 1/64, //uncommon
            }, 
            {
                name: 'Rune arrow',
                dropAmount: [100, 105],
                rarity: 1/64, //uncommon
            }, 
            {
                name: 'Dragonstone bolts(e)',
                dropAmount: [5, 15],
                rarity: 1/64,
            }, 
            {
                name: 'Coins',
                dropAmount: [18000, 21000],
                rarity: 2/21,
            }, 
            {
                name: 'Rare drop table',
                dropAmount: [1, 1],
                rarity: 8/127,
            }, 
            {
                name: 'Dwarf weed',
                dropAmount: [5, 22],
                rarity: 2/21,
            }, 
            {
                name: 'Dwarf weed seed',
                dropAmount: [3, 3],
                rarity: 2/21,
            }, 
            {
                name: 'Ranging potion(3)',
                dropAmount: [3, 3],
                rarity: 1/64, //uncommon
            }, 
            {
                name: 'Super defence(3)',
                dropAmount: [3, 3],
                rarity: 1/64, //uncommon
            }, 
            {
                name: 'Crystal key',
                dropAmount: [3, 3],
                rarity: 1/64, //uncommon
            }, 
            {
                name: 'Yew seed',
                dropAmount: [1, 1],
                rarity: 1/128, 
            }, 
            {
                name: 'Clue scroll (elite)',
                dropAmount: [1, 1],
                rarity: 1/250,
            }, 
            {
                name: 'Godsword shard 1',
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 2',
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 3',
                dropAmount: [1, 1],
                rarity: 1/256,
            },
            {
                name: 'Long bone',
                dropAmount: [1, 1],
                rarity: 1/400,
            },
            {
                name: 'Armadyl hilt',
                dropAmount: [1, 1],
                rarity: 1/508,
            },
            {
                name: `Pet kree'arra`,
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
            {
                name: `Curved bone`,
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
        ]
    },
    {
    name: `Kril Tsutsaroth`,
    killsph: 20,
    rolls: 1,
    drops: [
            {
                name: 'Ashes', 
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Adamant arrow(p++)', 
                dropAmount: [295, 300], 
                rarity: 2/21
            },
            {
                name: 'Rune scimitar', 
                dropAmount: [1, 1], 
                rarity: 1/64
            },
            {
                name: `Dragon dagger(p++)`,
                dropAmount: [1, 1],
                rarity: 1/64,
            },
            {
                name: 'Steam battlestaff',
                dropAmount: [1, 1],
                rarity:  1/128,
            },
            {
                name: 'Zamorakian spear',
                dropAmount: [1, 1],
                rarity: 1/128,
            },
            {
                name: 'Rune sword',
                dropAmount: [1, 1],
                rarity: 1/406,
            },
            {
                name: 'Staff of the dead',
                dropAmount: [1, 1],
                rarity: 1/508,
            },
            {
                name: 'Rune platelegs',
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Adamant platebody',
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Super attack(3)',
                dropAmount: [3, 3],
                rarity: 2/21,
            }, 
            {
                name: 'Super strength(3)',
                dropAmount: [3, 3],
                rarity: 2/21,
            }, 
            {
                name: 'Super restore(3)',
                dropAmount: [3, 3],
                rarity: 2/21,
            }, 
            {
                name: 'Zamorak brew(3)',
                dropAmount: [3, 3],
                rarity: 2/21,
            }, 
            {
                name: 'Death rune',
                dropAmount: [120, 125],
                rarity: 2/21,
            }, 
            {
                name: 'Coins',
                dropAmount: [19362, 20073],
                rarity: 2/21,
            }, 
            {
                name: 'Rare drop table',
                dropAmount: [1, 1],
                rarity: 8/127,
            }, 
            {
                name: 'Blood rune',
                dropAmount: [80, 90],
                rarity: 1/64,
            }, 
            {
                name: 'Grimy lantadyme',
                dropAmount: [7, 13],
                rarity: 1/64,
            }, 
            {
                name: 'Lantadyme seed',
                dropAmount: [3, 3],
                rarity: 1/64, 
            }, 
            {
                name: 'Clue scroll (elite)',
                dropAmount: [1, 1],
                rarity: 1/250,
            }, 
            {
                name: 'Godsword shard 1',
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 2',
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 3',
                dropAmount: [1, 1],
                rarity: 1/256,
            },
            {
                name: 'Long bone',
                dropAmount: [1, 1],
                rarity: 1/400,
            },
            {
                name: 'Zamorak hilt',
                dropAmount: [1, 1],
                rarity: 1/508,
            },
            {
                name: `Pet k'ril tsutsaroth`,
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
            {
                name: `Curved bone`,
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
        ]
    },
    {
    name: `Commander Zilyana`,
    killsph: 20,
    rolls: 1,
    drops: [
            {
                name: 'Bones', 
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Saradomin sword', 
                dropAmount: [295, 300], 
                rarity: 1/127
            },
            {
                name: 'Armadyl crossbow', 
                dropAmount: [1, 1], 
                rarity: 1/508
            },
            {
                name: `Rune sword`,
                dropAmount: [1, 1],
                rarity: 1/406,
            },
            {
                name: 'Rune dart',
                dropAmount: [35, 40],
                rarity:  2/21,
            },
            {
                name: 'Law rune',
                dropAmount: [95, 105],
                rarity: 2/21,
            },
            {
                name: 'Rune plateskirt',
                dropAmount: [1, 1],
                rarity: 2/21,
            },
            {
                name: 'Adamant platebody',
                dropAmount: [1, 1],
                rarity: 1/64,
            },
            {
                name: 'Rune kiteshield',
                dropAmount: [1, 1],
                rarity: 1/64,
            }, 
            {
                name: 'Grimy ranarr weed',
                dropAmount: [5, 5],
                rarity: 2/21,
            }, 
            {
                name: 'Ranarr seed',
                dropAmount: [2, 2],
                rarity: 2/21,
            }, 
            {
                name: 'Prayer potion(4)',
                dropAmount: [3, 3],
                rarity: 8/127,
            }, 
            {
                name: 'Saradomin brew(3)',
                dropAmount: [3, 3],
                rarity: 6/127,
            }, 
            {
                name: 'Super restore(4)',
                dropAmount: [3, 3],
                rarity: 6/127,
            },
            {
                name: 'Super defence(4)',
                dropAmount: [3, 3],
                rarity: 6/127,
            }, 
            {
                name: 'Magic potion(3)',
                dropAmount: [3, 3],
                rarity: 6/127,
            }, 
            {
                name: 'Magic seed',
                dropAmount: [1, 1],
                rarity: 1/128,
            }, 
            {
                name: 'Coins',
                dropAmount: [19362, 20073],
                rarity: 2/21,
            }, 
            {
                name: 'Diamond',
                dropAmount: [6, 6],
                rarity: 1/64,
            }, 
            {
                name: 'Rare drop table',
                dropAmount: [1, 1],
                rarity: 8/127,
            }, 
            {
                name: `Saradomin's light`,
                dropAmount: [1, 1],
                rarity: 1/254,
            }, 
            {
                name: 'Clue scroll (elite)',
                dropAmount: [1, 1],
                rarity: 1/250,
            }, 
            {
                name: 'Godsword shard 1',
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 2',
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 3',
                dropAmount: [1, 1],
                rarity: 1/256,
            },
            {
                name: 'Saradomin hilt',
                dropAmount: [1, 1],
                rarity: 1/508,
            },
            {
                name: `Pet zilyana`,
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
        ]
    },
    {
    name: `Giant Mole`,
    killsph: 20,
    rolls: 1,
    drops: [
            {
                name: 'Big bones', 
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Mole Claw', 
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Mole skin', 
                dropAmount: [1, 3], 
                rarity: 100
            },
            {
                name: 'Air rune', 
                dropAmount: [105, 105], 
                rarity: 2/21
            },
            {
                name: `Fire rune`,
                dropAmount: [105, 105],
                rarity: 2/21,
            },
            {
                name: 'Blood rune',
                dropAmount: [15, 15],
                rarity:  2/21,
            },
            {
                name: 'Death rune',
                dropAmount: [7, 7],
                rarity: 1/128,
            },
            {
                name: 'Law rune',
                dropAmount: [15, 15],
                rarity: 1/64,
            },
            {
                name: 'Iron arrow',
                dropAmount: [690, 690],
                rarity: 1/64,
            },
            {
                name: 'Adamant longsword',
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Mithril axe',
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Mithril battleaxe',
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Mithril platebody',
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Rune med helm',
                dropAmount: [1, 1],
                rarity: 1/64,
            }, 
            {
                name: 'Amulet of strength',
                dropAmount: [1, 1],
                rarity: 2/21,
            },
            {
                name: 'Iron ore',
                dropAmount: [100, 100],
                rarity: 1/64,
            }, 
            {
                name: 'Mithril bar',
                dropAmount: [1, 1],
                rarity: 1/128,
            }, 
            {
                name: 'Yew logs',
                dropAmount: [100, 100],
                rarity: 5/64,
            }, 
            {
                name: 'Shark',
                dropAmount: [4, 4],
                rarity: 1/64,
            }, 
            {
                name: 'Oyster pearls',
                dropAmount: [1, 1],
                rarity: 1/128,
            }, 
            {
                name: 'Long bone',
                dropAmount: [1, 1],
                rarity: 1/400,
            }, 
            {
                name: `Baby mole`,
                dropAmount: [1, 1],
                rarity: 1/3000,
            }, 
            {
                name: 'Clue scroll (elite)',
                dropAmount: [1, 1],
                rarity: 1/500,
            }, 
            {
                name: 'Godsword shard 1',
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 2',
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 3',
                dropAmount: [1, 1],
                rarity: 1/256,
            },
            {
                name: 'Curved bone',
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
        ]
    },
];