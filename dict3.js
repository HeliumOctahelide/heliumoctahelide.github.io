"use strict";

var database = [
    {
        "name": "Teferi, Hero of Dominaria",
        "cname": "多明纳里亚英雄泰菲力",
        "set": "dom",
        "number": 445516,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Kazarov, Sengir Pureblood",
        "cname": "辛格氏血脉卡札罗夫",
        "set": "dom",
        "number": 445405,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Kwende, Pride of Femeref",
        "cname": "费米瑞甫之傲桂恩岱",
        "set": "dom",
        "number": 445334,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Baird, Steward of Argive",
        "cname": "阿基夫监管人贝尔德",
        "set": "dom",
        "number": 445313,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Yawgmoth's Vile Offering",
        "cname": "约格莫夫的邪恶献祭",
        "set": "dom",
        "number": 445423,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Lavinia, Azorius Renegade",
        "cname": "俄佐立变节者拉温妮",
        "set": "rna",
        "number": 459664,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Kumena, Tyrant of Orazca",
        "cname": "欧拉兹卡暴君库莫那",
        "set": "rix",
        "number": 441648,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Multani, Yavimaya's Avatar",
        "cname": "亚维马雅化身穆塔尼",
        "set": "dom",
        "number": 445483,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Raff Capashen, Ship's Mage",
        "cname": "飞船法师拉夫卡帕轩",
        "set": "dom",
        "number": 445511,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Yargle, Glutton of Urborg",
        "cname": "乌尔博格吞蛙雅骨尔",
        "set": "dom",
        "number": 445422,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Kamahl's Druidic Vow",
        "cname": "卡马尔的德鲁伊誓约",
        "set": "dom",
        "number": 445475,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Primevals' Glorious Rebirth",
        "cname": "太古诸龙的辉煌重生",
        "set": "dom",
        "number": 445510,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Mishra's Self-Replicator",
        "cname": "米斯拉的自仿工人",
        "set": "dom",
        "number": 445532,
        "color": [],
        "others": ""
    },
    {
        "name": "Storrev, Devkarin Lich",
        "cname": "戴卡林巫妖司陀娃",
        "set": "war",
        "number": 463522,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Storm Fleet Pyromancer",
        "cname": "速腾舰队烈焰术士",
        "set": "xln",
        "number": 438008,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Slinn Voda, the Rising Deep",
        "cname": "深洋海怪西林伏特",
        "set": "dom",
        "number": 445375,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": [
            "Search for Azcanta",
            "Azcanta, the Sunken Ruin"
        ],
        "cname": "沉没废墟阿兹坎特",
        "set": "xln",
        "number": [
            437917,
            437918
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Vraska, Scheming Gorgon",
        "cname": "狡诈蛇发妖瓦丝卡",
        "set": "rix",
        "number": 441972,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Davriel, Rogue Shadowmage",
        "cname": "离群影法师达夫黎",
        "set": "war",
        "number": 463386,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Saheeli, Sublime Artificer",
        "cname": "非凡神器师莎希莉",
        "set": "war",
        "number": 463537,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Evra, Halcyon Witness",
        "cname": "宁城见证人艾芙拉",
        "set": "dom",
        "number": 445325,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Tomik, Distinguished Advokist",
        "cname": "杰出倡议人托米克",
        "set": "war",
        "number": 463337,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Zegana, Utopian Speaker",
        "cname": "理想境议员洁加娜",
        "set": "rna",
        "number": 459689,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Jhoira, Weatherlight Captain",
        "cname": "晴空号船长尤依拉",
        "set": "dom",
        "number": 445506,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Whisper, Blood Liturgist",
        "cname": "鲜血仪礼师魏飒璞",
        "set": "dom",
        "number": 445420,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Cyclops Electromancer",
        "cname": "独眼巨人电流术士",
        "set": "war",
        "number": 463425,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Adeliz, the Cinder Wind",
        "cname": "烬火之风艾德莉兹",
        "set": "dom",
        "number": 445499,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Samut, Tyrant Smasher",
        "cname": "暴君抗争人撒姆特",
        "set": "war",
        "number": 463538,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Mavren Fein, Dusk Apostle",
        "cname": "暮影宗徒马仁费恩",
        "set": "xln",
        "number": 437867,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Danitha Capashen, Paragon",
        "cname": "典范达妮莎卡帕轩",
        "set": "dom",
        "number": 445321,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Angrath, Minotaur Pirate",
        "cname": "牛头怪海盗安戈斯",
        "set": "rix",
        "number": 441976,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Zahid, Djinn of the Lamp",
        "cname": "灯里的巨灵札希德",
        "set": "dom",
        "number": 445385,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Vraska, Golgari Queen",
        "cname": "葛加理女王瓦丝卡",
        "set": "grn",
        "number": 455294,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vaevictis Asmadi, the Dire",
        "cname": "怖龙瓦威提阿玛迪",
        "set": "m19",
        "number": 449891,
        "color": [
            "B",
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Tatyova, Benthic Druid",
        "cname": "深洋德鲁伊塔托娃",
        "set": "dom",
        "number": 445515,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Vivien's Arkbow",
        "cname": "薇薇安的方舟神弓",
        "set": "war",
        "number": 463484,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Tiana, Ship's Caretaker",
        "cname": "飞船护持师蒂娅娜",
        "set": "dom",
        "number": 445517,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Niambi, Faithful Healer",
        "cname": "可靠疗疾师妮安碧",
        "set": "dom",
        "number": 445940,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Neheb, Dreadhorde Champion",
        "cname": "震惧军斗士内赫布",
        "set": "war",
        "number": 463443,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Naru Meha, Master Wizard",
        "cname": "魔法大师娜鲁梅哈",
        "set": "dom",
        "number": 445368,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Josu Vess, Lich Knight",
        "cname": "巫妖骑士霍苏维斯",
        "set": "dom",
        "number": 445404,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Sentinel of the Pearl Trident",
        "cname": "珍珠三叉戟哨卫",
        "set": "dom",
        "number": 445374,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Kaya, Orzhov Usurper",
        "cname": "欧佐夫僭位卡娅",
        "set": "rna",
        "number": 459661,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dusk Legion Zealot",
        "cname": "暮影军团狂信者",
        "set": "rix",
        "number": 441554,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Fathom Fleet Boarder",
        "cname": "莫测舰队强袭客",
        "set": "rix",
        "number": 441555,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Tibalt, Rakish Instigator",
        "cname": "放浪煽动者提勃",
        "set": "war",
        "number": 463449,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "God-Eternal Oketra",
        "cname": "永生煞神欧柯塔",
        "set": "war",
        "number": 463319,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Tilonalli's Skinshifter",
        "cname": "蒂洛纳理变貌师",
        "set": "xln",
        "number": 438015,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Davriel's Shadowfugue",
        "cname": "达夫黎的昏乱攫",
        "set": "war",
        "number": 463387,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Sphinx of New Prahv",
        "cname": "新布拉夫史芬斯",
        "set": "rna",
        "number": 459683,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Knight of New Benalia",
        "cname": "新宾纳里亚骑士",
        "set": "dom",
        "number": 445333,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rix Maadi Reveler",
        "cname": "锐兹玛第狂欢人",
        "set": "rna",
        "number": 459584,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Benalish Honor Guard",
        "cname": "宾纳里亚仪队兵",
        "set": "dom",
        "number": 445314,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Vodalian Arcanist",
        "cname": "伏特里亚奥术师",
        "set": "dom",
        "number": 445382,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Aurelia, Exemplar of Justice",
        "cname": "正义模范欧瑞梨",
        "set": "grn",
        "number": 455234,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ajani's Last Stand",
        "cname": "阿耶尼奋绝抗击",
        "set": "m19",
        "number": 449669,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Karn's Temporal Sundering",
        "cname": "卡恩的时间碎裂",
        "set": "dom",
        "number": 445364,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Ravenous Chupacabra",
        "cname": "贪食卓柏卡布拉",
        "set": "rix",
        "number": 441566,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Azorius Knight-Arbiter",
        "cname": "俄佐立仲裁骑士",
        "set": "rna",
        "number": 459629,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Storm Fleet Sprinter",
        "cname": "速腾舰队疾步客",
        "set": "rix",
        "number": 441660,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Paladin of the Bloodstained",
        "cname": "沥血团神圣武士",
        "set": "xln",
        "number": 437868,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Judith, the Scourge Diva",
        "cname": "灾祸歌伶裘蒂丝",
        "set": "rna",
        "number": 459660,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Angrath, Captain of Chaos",
        "cname": "混沌船长安戈斯",
        "set": "war",
        "number": 463530,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Caligo Skin-Witch",
        "cname": "卡利戈剥皮巫师",
        "set": "dom",
        "number": 445389,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": [
            "Nicol Bolas, the Ravager",
            "Nicol Bolas, the Arisen"
        ],
        "cname": "飞升尼可波拉斯",
        "set": "m19",
        "number": [
            449883,
            449884
        ],
        "color": [
            "B",
            "R",
            "U"
        ],
        "others": "transform"
    },
    {
        "name": "Krenko, Tin Street Kingpin",
        "cname": "锡街头目克仑可",
        "set": "war",
        "number": 463440,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": [
            "Nicol Bolas, the Ravager",
            "Nicol Bolas, the Arisen"
        ],
        "cname": "烈龙尼可波拉斯",
        "set": "m19",
        "number": [
            449883,
            449884
        ],
        "color": [
            "B",
            "R",
            "U"
        ],
        "others": "transform"
    },
    {
        "name": "Kasmina, Enigmatic Mentor",
        "cname": "莫测导师克蜜娜",
        "set": "war",
        "number": 463359,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Jaya's Immolating Inferno",
        "cname": "雅亚的燃焰炼狱",
        "set": "dom",
        "number": 445442,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Golgari Findbroker",
        "cname": "葛加理弃物贩商",
        "set": "grn",
        "number": 455256,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": [
            "Growing Rites of Itlimoc",
            "Itlimoc, Cradle of the Sun"
        ],
        "cname": "烈阳育所伊替莫",
        "set": "xln",
        "number": [
            438037,
            438038
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Tocatli Honor Guard",
        "cname": "托卡特理仪队兵",
        "set": "xln",
        "number": 437885,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": [
            "Growing Rites of Itlimoc",
            "Itlimoc, Cradle of the Sun"
        ],
        "cname": "伊替莫成长仪式",
        "set": "xln",
        "number": [
            438037,
            438038
        ],
        "color": [
            "G"
        ],
        "others": "transform"
    },
    {
        "name": "Dire Fleet Daredevil",
        "cname": "焦炬舰队冒险客",
        "set": "rix",
        "number": 441583,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Demonlord Belzenlok",
        "cname": "恶魔领主贝赞洛",
        "set": "dom",
        "number": 445395,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Traxos, Scourge of Kroog",
        "cname": "萼城劫运刹索斯",
        "set": "dom",
        "number": 445543,
        "color": [],
        "others": ""
    },
    {
        "name": "God-Eternal Rhonas",
        "cname": "永生煞神罗纳斯",
        "set": "war",
        "number": 463466,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Guildmages' Forum",
        "cname": "公会法师集会地",
        "set": "grn",
        "number": 455331,
        "color": [],
        "others": ""
    },
    {
        "name": "Yavimaya Sapherd",
        "cname": "亚维马雅牧腐菌",
        "set": "dom",
        "number": 445498,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Deadeye Quartermaster",
        "cname": "必达舰队军需官",
        "set": "xln",
        "number": 437893,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Ob Nixilis's Cruelty",
        "cname": "欧尼希兹的酷行",
        "set": "war",
        "number": 463404,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Teferi, Timebender",
        "cname": "曲时大师泰菲力",
        "set": "dom",
        "number": 445938,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ajani, Wise Counselor",
        "cname": "睿智参谋阿耶尼",
        "set": "m19",
        "number": 450534,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ashiok's Skulker",
        "cname": "安梭苛的潜梦魔",
        "set": "war",
        "number": 463343,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Vivien of the Arkbow",
        "cname": "方舟神弓薇薇安",
        "set": "m19",
        "number": 450554,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Orazca Raptor",
        "cname": "欧拉兹卡迅猛龙",
        "set": "rix",
        "number": 441592,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Arvad the Cursed",
        "cname": "受诅咒的亚瓦德",
        "set": "dom",
        "number": 445500,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Kopala, Warden of Waves",
        "cname": "波涛护卫柯帕拉",
        "set": "xln",
        "number": 437904,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dire Fleet Poisoner",
        "cname": "焦炬舰队投毒客",
        "set": "rix",
        "number": 441552,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Kiora, Behemoth Beckoner",
        "cname": "巨怪唤师奇奥拉",
        "set": "war",
        "number": 463535,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Daring Archaeologist",
        "cname": "大胆的考古学家",
        "set": "dom",
        "number": 445322,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Saheeli's Silverwing",
        "cname": "莎希莉的银翼兽",
        "set": "war",
        "number": 463546,
        "color": [],
        "others": ""
    },
    {
        "name": "Teferi's Time Twist",
        "cname": "泰菲力的曲时术",
        "set": "war",
        "number": 463375,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Aryel, Knight of Windgrace",
        "cname": "风华骑士娅耶尔",
        "set": "dom",
        "number": 445501,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Storm Fleet Swashbuckler",
        "cname": "速腾舰队仗剑客",
        "set": "rix",
        "number": 441601,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Ilharg, the Raze-Boar",
        "cname": "蛮野猪神衣哈格",
        "set": "war",
        "number": 463436,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Tezzeret's Gatebreaker",
        "cname": "泰兹瑞的破门械",
        "set": "m19",
        "number": 450542,
        "color": [],
        "others": ""
    },
    {
        "name": "Domri, Anarch of Bolas",
        "cname": "波拉斯逆竖多密",
        "set": "war",
        "number": 463494,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Vraska's Finisher",
        "cname": "瓦丝卡的终命客",
        "set": "war",
        "number": 463415,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ahn-Crop Invader",
        "cname": "阿恩祀群入侵者",
        "set": "war",
        "number": 463416,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Tilonalli's Summoner",
        "cname": "蒂洛纳理召唤师",
        "set": "rix",
        "number": 441605,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Nicol Bolas, Dragon-God",
        "cname": "龙尊尼可波拉斯",
        "set": "war",
        "number": 463510,
        "color": [
            "B",
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Darigaaz Reincarnated",
        "cname": "复焚龙王达里迦",
        "set": "dom",
        "number": 445502,
        "color": [
            "B",
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Huatli, the Sun's Heart",
        "cname": "烈阳之心华特莉",
        "set": "war",
        "number": 463533,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Storm Fleet Aerialist",
        "cname": "速腾舰队飞空盗",
        "set": "xln",
        "number": 437927,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Tishana's Wayfinder",
        "cname": "提莎娜的探路人",
        "set": "xln",
        "number": 438058,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vivien, Champion of the Wilds",
        "cname": "荒野斗士薇薇安",
        "set": "war",
        "number": 463483,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Phyrexian Scriptures",
        "cname": "非瑞克西亚经文",
        "set": "dom",
        "number": 445409,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Teshar, Ancestor's Apostle",
        "cname": "圣祖灵门徒铁夏",
        "set": "dom",
        "number": 445345,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "God-Eternal Kefnet",
        "cname": "永生煞神刻法涅",
        "set": "war",
        "number": 463356,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": [
            "Arguel's Blood Fast",
            "Temple of Aclazotz"
        ],
        "cname": "阿古尔血禁仪式",
        "set": "xln",
        "number": [
            437934,
            437935
        ],
        "color": [
            "B"
        ],
        "others": "transform"
    },
    {
        "name": "Admiral Beckett Brass",
        "cname": "贝克蒂霸司总帅",
        "set": "xln",
        "number": 438064,
        "color": [
            "B",
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Kasmina's Transmutation",
        "cname": "克蜜娜的易质术",
        "set": "war",
        "number": 463360,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Tezzeret's Strider",
        "cname": "泰兹瑞的神行像",
        "set": "m19",
        "number": 450543,
        "color": [],
        "others": ""
    },
    {
        "name": "Deadeye Plunderers",
        "cname": "必达舰队劫掠者",
        "set": "xln",
        "number": 438067,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Triumph of Gerrard",
        "cname": "杰拉尔德凯旋志",
        "set": "dom",
        "number": 445347,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gishath, Sun's Avatar",
        "cname": "烈阳化身基撒斯",
        "set": "xln",
        "number": 438069,
        "color": [
            "G",
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Deadeye Tormentor",
        "cname": "必达舰队拷问人",
        "set": "xln",
        "number": 437943,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Deadeye Tracker",
        "cname": "必达舰队追迹人",
        "set": "xln",
        "number": 437944,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Senate Guildmage",
        "cname": "参议院公会法师",
        "set": "rna",
        "number": 459679,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dire Fleet Hoarder",
        "cname": "焦炬舰队匿宝客",
        "set": "xln",
        "number": 437947,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Dire Fleet Interloper",
        "cname": "焦炬舰队径闯客",
        "set": "xln",
        "number": 437948,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Dire Fleet Ravager",
        "cname": "焦炬舰队劫夺客",
        "set": "xln",
        "number": 437949,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Huatli, Warrior Poet",
        "cname": "战士诗人华特莉",
        "set": "xln",
        "number": 438071,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Domri's Nodorog",
        "cname": "多密的诺多洛兽",
        "set": "rna",
        "number": 460119,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Fathom Fleet Cutthroat",
        "cname": "莫测舰队割喉客",
        "set": "xln",
        "number": 437952,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Tezzeret, Artifice Master",
        "cname": "神器大师泰兹瑞",
        "set": "m19",
        "number": 449744,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Valduk, Keeper of the Flame",
        "cname": "源火守卫瓦杜克",
        "set": "dom",
        "number": 445457,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Lurking Chupacabra",
        "cname": "伏击卓柏卡布拉",
        "set": "xln",
        "number": 437956,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Jodah, Archmage Eternal",
        "cname": "永世大法师裘达",
        "set": "dom",
        "number": 445507,
        "color": [
            "R",
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Torgaar, Famine Incarnate",
        "cname": "饥馑化身托迦尔",
        "set": "dom",
        "number": 445417,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Urgoros, the Empty One",
        "cname": "虚无幽灵乌格洛",
        "set": "dom",
        "number": 445418,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Huatli's Raptor",
        "cname": "华特莉的迅猛龙",
        "set": "war",
        "number": 463503,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Roalesk, Apex Hybrid",
        "cname": "无上综源罗列茨",
        "set": "war",
        "number": 463516,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Orazca Frillback",
        "cname": "欧拉兹卡鳍背龙",
        "set": "rix",
        "number": 441624,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Tishana, Voice of Thunder",
        "cname": "雷霆之声提莎娜",
        "set": "xln",
        "number": 438077,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Urza's Ruinous Blast",
        "cname": "克撒的毁世震荡",
        "set": "dom",
        "number": 445348,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ral's Staticaster",
        "cname": "拉尔的静电术士",
        "set": "grn",
        "number": 455734,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Huatli, Dinosaur Knight",
        "cname": "恐龙骑士华特莉",
        "set": "xln",
        "number": 438137,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Huatli's Snubhorn",
        "cname": "华特莉的短角龙",
        "set": "xln",
        "number": 438138,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Vraska, Regal Gorgon",
        "cname": "蛇发女王瓦丝卡",
        "set": "grn",
        "number": 455735,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Angrath's Marauders",
        "cname": "安戈斯的劫掠者",
        "set": "xln",
        "number": 437977,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Vraska's Conquistador",
        "cname": "瓦丝卡的征服者",
        "set": "rix",
        "number": 441974,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Tezzeret, Master of the Bridge",
        "cname": "渡桥大师泰兹瑞",
        "set": "war",
        "number": 463941,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Liliana, the Necromancer",
        "cname": "死灵术士莉莲娜",
        "set": "m19",
        "number": 450544,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Captain Lannery Storm",
        "cname": "兰娜莉速腾船长",
        "set": "xln",
        "number": 437981,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Dusk Legion Dreadnought",
        "cname": "暮影军团无畏舰",
        "set": "xln",
        "number": 438085,
        "color": [],
        "others": ""
    },
    {
        "name": "Lazotep Behemoth",
        "cname": "拉佐特贝西摩斯",
        "set": "war",
        "number": 463398,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "The Mending of Dominaria",
        "cname": "多明纳里亚愈合",
        "set": "dom",
        "number": 445482,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Fathom Fleet Firebrand",
        "cname": "莫测舰队惹事人",
        "set": "xln",
        "number": 437987,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Deadeye Brawler",
        "cname": "必达舰队好斗者",
        "set": "rix",
        "number": 441639,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dire Fleet Neckbreaker",
        "cname": "焦炬舰队断颈客",
        "set": "rix",
        "number": 441640,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Elenda, the Dusk Rose",
        "cname": "暮影蔷薇依莲达",
        "set": "rix",
        "number": 441641,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Emmara, Soul of the Accord",
        "cname": "协音之魂艾玛拉",
        "set": "grn",
        "number": 455249,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Angrath's Ambusher",
        "cname": "安戈斯的伏击客",
        "set": "rix",
        "number": 441977,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": [
            "Hadana's Climb",
            "Winged Temple of Orazca"
        ],
        "cname": "欧拉兹卡翔翼殿",
        "set": "rix",
        "number": [
            441642,
            441643
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Kiora's Dambreaker",
        "cname": "奇奥拉的夷坝怪",
        "set": "war",
        "number": 463361,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Huatli, Radiant Champion",
        "cname": "辉光斗士华特莉",
        "set": "rix",
        "number": 441644,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": [
            "Journey to Eternity",
            "Atzal, Cave of Eternity"
        ],
        "cname": "转生洞穴阿札尔",
        "set": "rix",
        "number": [
            441645,
            441646
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Tezzeret, Cruel Machinist",
        "cname": "残忍械师泰兹瑞",
        "set": "m19",
        "number": 450539,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Vraska, Swarm's Eminence",
        "cname": "群落显贵瓦丝卡",
        "set": "war",
        "number": 463539,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Liliana, Dreadhorde General",
        "cname": "震惧军将莉莲娜",
        "set": "war",
        "number": 463400,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Liliana, Untouched by Death",
        "cname": "长生不死莉莲娜",
        "set": "m19",
        "number": 449771,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Deadeye Rig-Hauler",
        "cname": "必达舰队栓索人",
        "set": "rix",
        "number": 441520,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Narset's Reversal",
        "cname": "娜尔施的挪移术",
        "set": "war",
        "number": 463365,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Storm Fleet Arsonist",
        "cname": "速腾舰队纵火客",
        "set": "xln",
        "number": 438007,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": [
            "Path of Mettle",
            "Metzali, Tower of Triumph"
        ],
        "cname": "得胜高塔梅札理",
        "set": "rix",
        "number": [
            441651,
            441652
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Homarid Explorer",
        "cname": "荷马利族探险家",
        "set": "dom",
        "number": 445362,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Tajic, Legion's Edge",
        "cname": "教团尖锋塔疾克",
        "set": "grn",
        "number": 455285,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rona, Disciple of Gix",
        "cname": "基克斯信徒罗娜",
        "set": "dom",
        "number": 445512,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Jaya, Venerated Firemage",
        "cname": "焰法明范雅亚",
        "set": "war",
        "number": 463438,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Song of Freyalise",
        "cname": "妃雅丽兹颂歌",
        "set": "dom",
        "number": 445488,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Tetsuko Umezawa, Fugitive",
        "cname": "浪人梅泽哲子",
        "set": "dom",
        "number": 445378,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Oreskos Swiftclaw",
        "cname": "俄瑞恣迅爪兵",
        "set": "m19",
        "number": 449696,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ugin's Conjurant",
        "cname": "乌金的变幻僧",
        "set": "war",
        "number": 463306,
        "color": [],
        "others": ""
    },
    {
        "name": "Chandra's Pyrohelix",
        "cname": "茜卓的旋炎咒",
        "set": "war",
        "number": 463423,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Azorius Guildgate",
        "cname": "俄佐立公会门",
        "set": "rna",
        "number": 459719,
        "color": [],
        "others": ""
    },
    {
        "name": "Tolarian Scholar",
        "cname": "陶拉里亚学者",
        "set": "dom",
        "number": 445380,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Awakening of Vitu-Ghazi",
        "cname": "维图加基醒转",
        "set": "war",
        "number": 463455,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ixalan's Binding",
        "cname": "依夏兰的束缚",
        "set": "xln",
        "number": 437859,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Kinjalli's Sunwing",
        "cname": "津加理旭翼龙",
        "set": "xln",
        "number": 437861,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Trollbred Guardian",
        "cname": "巨魔种守护者",
        "set": "rna",
        "number": 459623,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Lawmage's Binding",
        "cname": "律法师的束缚",
        "set": "rna",
        "number": 459665,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Liliana's Spoils",
        "cname": "莉莲娜的斩获",
        "set": "m19",
        "number": 450547,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Piston-Fist Cyclops",
        "cname": "冲拳独眼巨人",
        "set": "grn",
        "number": 455298,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Erratic Cyclops",
        "cname": "乖僻独眼巨人",
        "set": "grn",
        "number": 455179,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Cult Guildmage",
        "cname": "宗派公会法师",
        "set": "rna",
        "number": 459639,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Cabal Paladin",
        "cname": "柯帮神圣武士",
        "set": "dom",
        "number": 445388,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Nahiri, Storm of Stone",
        "cname": "飞石暴娜希丽",
        "set": "war",
        "number": 463536,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Nikya of the Old Ways",
        "cname": "古式信徒妮恰",
        "set": "rna",
        "number": 459668,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Palladia-Mors, the Ruiner",
        "cname": "烬龙派蒂墨司",
        "set": "m19",
        "number": 449885,
        "color": [
            "G",
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sphinx of the Guildpact",
        "cname": "十会盟史芬斯",
        "set": "rna",
        "number": 459716,
        "color": [
            "B",
            "G",
            "R",
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Brazen Freebooter",
        "cname": "莽霸联盟掠盗",
        "set": "rix",
        "number": 441579,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Azorius Guildgate",
        "cname": "俄佐立公会门",
        "set": "rna",
        "number": 459718,
        "color": [],
        "others": ""
    },
    {
        "name": "Vedalken Mesmerist",
        "cname": "维多肯催眠师",
        "set": "grn",
        "number": 455138,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sarkhan, Dragonsoul",
        "cname": "龙魂合一萨坎",
        "set": "m19",
        "number": 450549,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Ashiok, Dream Render",
        "cname": "裂梦师安梭苛",
        "set": "war",
        "number": 463531,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Centaur Nurturer",
        "cname": "半人马滋养师",
        "set": "war",
        "number": 463459,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gideon, the Oathsworn",
        "cname": "守誓卫士基定",
        "set": "war",
        "number": 463931,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Jiang Yanggu, Wildcrafter",
        "cname": "塑野师姜旸谷",
        "set": "war",
        "number": 463467,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ajani's Pridemate",
        "cname": "阿耶尼的群伴",
        "set": "war",
        "number": 463307,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rakdos Firewheeler",
        "cname": "拉铎司火轮师",
        "set": "rna",
        "number": 459672,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Jace, Cunning Castaway",
        "cname": "流离谋士杰斯",
        "set": "xln",
        "number": 437903,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Domri, City Smasher",
        "cname": "焚城暴徒多密",
        "set": "rna",
        "number": 460116,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Orzhov Guildgate",
        "cname": "欧佐夫公会门",
        "set": "war",
        "number": 463935,
        "color": [],
        "others": ""
    },
    {
        "name": "God-Eternal Bontu",
        "cname": "永生煞神芭图",
        "set": "war",
        "number": 463395,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Smelt-Ward Minotaur",
        "cname": "熔护区牛头怪",
        "set": "grn",
        "number": 455197,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Orzhov Guildgate",
        "cname": "欧佐夫公会门",
        "set": "rna",
        "number": 459727,
        "color": [],
        "others": ""
    },
    {
        "name": "Mystic Archaeologist",
        "cname": "神秘考古学家",
        "set": "m19",
        "number": 449728,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": [
            "Search for Azcanta",
            "Azcanta, the Sunken Ruin"
        ],
        "cname": "探寻阿兹坎特",
        "set": "xln",
        "number": [
            437917,
            437918
        ],
        "color": [
            "U"
        ],
        "others": "transform"
    },
    {
        "name": "Vivien's Jaguar",
        "cname": "薇薇安的猎豹",
        "set": "m19",
        "number": 450558,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Jace, Arcane Strategist",
        "cname": "奥术策士杰斯",
        "set": "war",
        "number": 463936,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Orzhov Guildgate",
        "cname": "欧佐夫公会门",
        "set": "rna",
        "number": 459728,
        "color": [],
        "others": ""
    },
    {
        "name": "Tilonalli's Crown",
        "cname": "蒂洛纳理之冠",
        "set": "rix",
        "number": 441604,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Rubblebelt Runner",
        "cname": "瓦砾区亡命客",
        "set": "rna",
        "number": 459677,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Storm Fleet Spy",
        "cname": "速腾舰队探子",
        "set": "xln",
        "number": 437928,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sai, Master Thopterist",
        "cname": "扑翼大师塞埃",
        "set": "m19",
        "number": 449734,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Orzhov Enforcer",
        "cname": "欧佐夫执法者",
        "set": "rna",
        "number": 459554,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Mowu, Loyal Companion",
        "cname": "忠诚旅伴默武",
        "set": "war",
        "number": 463470,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Dovin, Grand Arbiter",
        "cname": "大仲裁者多温",
        "set": "rna",
        "number": 459642,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": [
            "Arguel's Blood Fast",
            "Temple of Aclazotz"
        ],
        "cname": "阿洛佐兹神殿",
        "set": "xln",
        "number": [
            437934,
            437935
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Aethershield Artificer",
        "cname": "乙太盾神器师",
        "set": "m19",
        "number": 449667,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Kaya, Bane of the Dead",
        "cname": "亡者灾祸卡娅",
        "set": "war",
        "number": 463534,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bloodcrazed Paladin",
        "cname": "血狂神圣武士",
        "set": "xln",
        "number": 437938,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ral, Caller of Storms",
        "cname": "风暴唤师拉尔",
        "set": "grn",
        "number": 455731,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Orzhov Racketeers",
        "cname": "欧佐夫敲诈人",
        "set": "rna",
        "number": 459555,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Devkarin Dissident",
        "cname": "戴卡林异见者",
        "set": "grn",
        "number": 455208,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Tamiyo's Epiphany",
        "cname": "多美代的顿悟",
        "set": "war",
        "number": 463374,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Giltgrove Stalker",
        "cname": "熠金林伏击客",
        "set": "rix",
        "number": 441615,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Fathom Fleet Captain",
        "cname": "莫测舰队船长",
        "set": "xln",
        "number": 437951,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Tolarian Scholar",
        "cname": "陶拉里亚学者",
        "set": "m19",
        "number": 449745,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Golgari Raiders",
        "cname": "葛加理突击队",
        "set": "grn",
        "number": 455211,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Dovin, Architect of Law",
        "cname": "律法筑师多温",
        "set": "rna",
        "number": 460112,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Magistrate's Scepter",
        "cname": "执政官的权杖",
        "set": "m19",
        "number": 449904,
        "color": [],
        "others": ""
    },
    {
        "name": "Oath of Teferi",
        "cname": "泰菲力的誓约",
        "set": "dom",
        "number": 445509,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rubblebelt Rioters",
        "cname": "瓦砾区喧闹人",
        "set": "war",
        "number": 463518,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sigiled Sword of Valeron",
        "cname": "威烈隆饰印剑",
        "set": "m19",
        "number": 449910,
        "color": [],
        "others": ""
    },
    {
        "name": "Vraska's Contempt",
        "cname": "瓦丝卡的藐视",
        "set": "xln",
        "number": 437974,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Attendant of Vraska",
        "cname": "瓦丝卡的随员",
        "set": "grn",
        "number": 455737,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Brazen Buccaneers",
        "cname": "莽霸联盟海贼",
        "set": "xln",
        "number": 437979,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Fblthp, the Lost",
        "cname": "迷途的夫毕佐",
        "set": "war",
        "number": 463353,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Undercity Scavenger",
        "cname": "地底城拾荒者",
        "set": "rna",
        "number": 459563,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Sorin, Vengeful Bloodlord",
        "cname": "复仇血领索霖",
        "set": "war",
        "number": 463520,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Augur of Bolas",
        "cname": "波拉斯卜算师",
        "set": "war",
        "number": 463344,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Atzocan Seer",
        "cname": "阿佐坎预言师",
        "set": "rix",
        "number": 441637,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Azor, the Lawbringer",
        "cname": "律法使者俄佐",
        "set": "rix",
        "number": 441638,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dovin, Hand of Control",
        "cname": "操控之手多温",
        "set": "war",
        "number": 463532,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Lazotep Reaver",
        "cname": "拉佐特裂肢兽",
        "set": "war",
        "number": 463399,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Vraska's Stoneglare",
        "cname": "瓦丝卡的瞪视",
        "set": "grn",
        "number": 455738,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Otepec Huntmaster",
        "cname": "欧特佩克猎师",
        "set": "xln",
        "number": 437998,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Saruli Caretaker",
        "cname": "撒路里护持师",
        "set": "rna",
        "number": 459614,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Impervious Greatwurm",
        "cname": "无畏庞巨亚龙",
        "set": "grn",
        "number": 455739,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Liliana's Contract",
        "cname": "莉莲娜的契约",
        "set": "m19",
        "number": 449772,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Burning-Tree Vandal",
        "cname": "火树族破坏者",
        "set": "rna",
        "number": 459569,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Wary Okapi",
        "cname": "警觉欧卡皮鹿",
        "set": "grn",
        "number": 455230,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": [
            "Profane Procession",
            "Tomb of the Dusk Rose"
        ],
        "cname": "暮影蔷薇之墓",
        "set": "rix",
        "number": [
            441653,
            441654
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Tilonalli's Knight",
        "cname": "蒂洛纳理骑士",
        "set": "xln",
        "number": 438014,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Shanna, Sisay's Legacy",
        "cname": "西赛后人莎娜",
        "set": "dom",
        "number": 445513,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sphinx's Insight",
        "cname": "史芬斯的洞察",
        "set": "rna",
        "number": 459684,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": [
            "Vance's Blasting Cannons",
            "Spitfire Bastion"
        ],
        "cname": "凡丝轰击炮阵",
        "set": "xln",
        "number": [
            438018,
            438019
        ],
        "color": [
            "R"
        ],
        "others": "transform"
    },
    {
        "name": "Ghitu Chronicler",
        "cname": "基图年代史家",
        "set": "dom",
        "number": 445434,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Ghitu Journeymage",
        "cname": "基图老练法师",
        "set": "dom",
        "number": 445435,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Atzocan Archer",
        "cname": "阿佐坎弓箭手",
        "set": "xln",
        "number": 438022,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Tenth District Legionnaire",
        "cname": "第十区军团兵",
        "set": "war",
        "number": 463525,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rakdos Guildgate",
        "cname": "拉铎司公会门",
        "set": "rna",
        "number": 459730,
        "color": [],
        "others": ""
    },
    {
        "name": "Azorius Skyguard",
        "cname": "俄佐立巡空卫",
        "set": "rna",
        "number": 459630,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Syndicate Guildmage",
        "cname": "集团公会法师",
        "set": "rna",
        "number": 459686,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Boros Challenger",
        "cname": "波洛斯好斗者",
        "set": "grn",
        "number": 455237,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Aesthir Glider",
        "cname": "艾斯鹰滑翔翼",
        "set": "dom",
        "number": 445518,
        "color": [],
        "others": ""
    },
    {
        "name": "Ixalli's Diviner",
        "cname": "依夏理占卜师",
        "set": "xln",
        "number": 438039,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Keldon Raider",
        "cname": "凯尔顿突击兵",
        "set": "dom",
        "number": 445444,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Keldon Warcaller",
        "cname": "凯尔顿战呼人",
        "set": "dom",
        "number": 445445,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Basilica Bell-Haunt",
        "cname": "大教堂缠钟灵",
        "set": "rna",
        "number": 459631,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rampaging Cyclops",
        "cname": "莽闯独眼巨人",
        "set": "dom",
        "number": 445448,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Orazca Relic",
        "cname": "欧拉兹卡遗宝",
        "set": "rix",
        "number": 441672,
        "color": [],
        "others": ""
    },
    {
        "name": "Centaur Peacemaker",
        "cname": "半人马调停人",
        "set": "grn",
        "number": 455239,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Biomancer's Familiar",
        "cname": "生机术士佣兽",
        "set": "rna",
        "number": 459633,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Flight of Equenauts",
        "cname": "飞马骑士战团",
        "set": "grn",
        "number": 455092,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ripjaw Raptor",
        "cname": "断甲颚迅猛龙",
        "set": "xln",
        "number": 438050,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "River Heralds' Boon",
        "cname": "川流使的恩泽",
        "set": "xln",
        "number": 438051,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Arch of Orazca",
        "cname": "欧拉兹卡拱门",
        "set": "rix",
        "number": 441676,
        "color": [],
        "others": ""
    },
    {
        "name": "Shapers' Sanctuary",
        "cname": "塑形师庇护所",
        "set": "xln",
        "number": 438053,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Sky Theater Strix",
        "cname": "空舞战阵烈枭",
        "set": "war",
        "number": 463370,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Ajani's Pridemate",
        "cname": "阿耶尼的群伴",
        "set": "m19",
        "number": 449670,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Silhana Wayfinder",
        "cname": "西哈纳引路人",
        "set": "rna",
        "number": 459616,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Bolrac-Clan Crusher",
        "cname": "波朗族破坏人",
        "set": "rna",
        "number": 459634,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Rakdos Guildgate",
        "cname": "拉铎司公会门",
        "set": "rna",
        "number": 459731,
        "color": [],
        "others": ""
    },
    {
        "name": "Dreadhorde Arcanist",
        "cname": "震惧军奥术师",
        "set": "war",
        "number": 463428,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Conclave Guildmage",
        "cname": "盟会公会法师",
        "set": "grn",
        "number": 455243,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dire Fleet Captain",
        "cname": "焦炬舰队船长",
        "set": "xln",
        "number": 438068,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Ghor-Clan Wrecker",
        "cname": "高尔族毁坏者",
        "set": "rna",
        "number": 459578,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Tithe Taker",
        "cname": "什一税征收员",
        "set": "rna",
        "number": 459502,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Vivien's Grizzly",
        "cname": "薇薇安的幻熊",
        "set": "war",
        "number": 463485,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vona, Butcher of Magan",
        "cname": "玛甘屠夫沃娜",
        "set": "xln",
        "number": 438078,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Vraska, Relic Seeker",
        "cname": "寻宝客瓦丝卡",
        "set": "xln",
        "number": 438079,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Samut's Sprint",
        "cname": "撒姆特的冲刺",
        "set": "war",
        "number": 463445,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": [
            "Conqueror's Galleon",
            "Conqueror's Foothold"
        ],
        "cname": "征服者巨帆船",
        "set": "xln",
        "number": [
            438081,
            438082
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Vraska's Scorn",
        "cname": "瓦丝卡的轻蔑",
        "set": "rix",
        "number": 441975,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Dimir Spybug",
        "cname": "底密尔窃听虫",
        "set": "grn",
        "number": 455247,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dismissive Pyromancer",
        "cname": "高傲烈焰术士",
        "set": "m19",
        "number": 449801,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Simic Guildgate",
        "cname": "析米克公会门",
        "set": "rna",
        "number": 459732,
        "color": [],
        "others": ""
    },
    {
        "name": "Pirate's Cutlass",
        "cname": "海盗的短弯刀",
        "set": "xln",
        "number": 438091,
        "color": [],
        "others": ""
    },
    {
        "name": "Simic Guildgate",
        "cname": "析米克公会门",
        "set": "rna",
        "number": 459733,
        "color": [],
        "others": ""
    },
    {
        "name": "Guardians of Koilos",
        "cname": "喀洛斯守护者",
        "set": "dom",
        "number": 445525,
        "color": [],
        "others": ""
    },
    {
        "name": "Angrath's Fury",
        "cname": "安戈斯的怒火",
        "set": "rix",
        "number": 441979,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Angrath's Rampage",
        "cname": "安戈斯的狂愤",
        "set": "war",
        "number": 463488,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Karn, Scion of Urza",
        "cname": "克撒传人卡恩",
        "set": "dom",
        "number": 445310,
        "color": [],
        "others": ""
    },
    {
        "name": "Teferi's Sentinel",
        "cname": "泰菲力的哨卫",
        "set": "dom",
        "number": 445941,
        "color": [],
        "others": ""
    },
    {
        "name": "Selesnya Locket",
        "cname": "瑟雷尼亚坠饰",
        "set": "grn",
        "number": 455321,
        "color": [],
        "others": ""
    },
    {
        "name": [
            "Thaumatic Compass",
            "Spires of Orazca"
        ],
        "cname": "欧拉兹卡尖塔",
        "set": "xln",
        "number": [
            438099,
            438100
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Garrison Sergeant",
        "cname": "驻防地军士长",
        "set": "grn",
        "number": 455253,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Teyo's Lightshield",
        "cname": "泰佑的幻光盾",
        "set": "war",
        "number": 463336,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Goblin Electromancer",
        "cname": "鬼怪电流术士",
        "set": "grn",
        "number": 455255,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Benalish Marshal",
        "cname": "宾纳里亚元帅",
        "set": "dom",
        "number": 445315,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Lena, Selfless Champion",
        "cname": "无私斗士莉娜",
        "set": "m19",
        "number": 449686,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Chandra, Bold Pyromancer",
        "cname": "舞焰勇将茜卓",
        "set": "dom",
        "number": 445943,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Jhoira's Familiar",
        "cname": "尤依拉的佣兽",
        "set": "dom",
        "number": 445529,
        "color": [],
        "others": ""
    },
    {
        "name": "Ob Nixilis, the Hate-Twisted",
        "cname": "忿恨欧尼希兹",
        "set": "war",
        "number": 463403,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Nahiri's Stoneblades",
        "cname": "娜希丽的石剑",
        "set": "war",
        "number": 463442,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "D'Avenant Trapper",
        "cname": "阿维农布陷人",
        "set": "dom",
        "number": 445320,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Onakke Ogre",
        "cname": "欧纳克食人魔",
        "set": "m19",
        "number": 449818,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "House Guildmage",
        "cname": "会堂公会法师",
        "set": "grn",
        "number": 455258,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Rubblebelt Recluse",
        "cname": "瓦砾区隐世魔",
        "set": "rna",
        "number": 459586,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Vizkopa Vampire",
        "cname": "伟柯帕吸血鬼",
        "set": "rna",
        "number": 459695,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dovin's Automaton",
        "cname": "多温的机械兽",
        "set": "rna",
        "number": 460115,
        "color": [],
        "others": ""
    },
    {
        "name": "Skarrgan Hellkite",
        "cname": "始卡克残虐者",
        "set": "rna",
        "number": 459589,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Chainwhip Cyclops",
        "cname": "链鞭独眼巨人",
        "set": "war",
        "number": 463421,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Jace, Ingenious Mind-Mage",
        "cname": "灵控逸才杰斯",
        "set": "xln",
        "number": 438132,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "League Guildmage",
        "cname": "联盟公会法师",
        "set": "grn",
        "number": 455266,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Huatli's Spurring",
        "cname": "华特莉的驱策",
        "set": "xln",
        "number": 438139,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Hero of Precinct One",
        "cname": "第一城区勇士",
        "set": "rna",
        "number": 459486,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Legion Guildmage",
        "cname": "教团公会法师",
        "set": "grn",
        "number": 455268,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Viashino Pyromancer",
        "cname": "舞火凡尔西诺",
        "set": "m19",
        "number": 449831,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Lazotep Plating",
        "cname": "拉佐特石护体",
        "set": "war",
        "number": 463362,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Elfhame Druid",
        "cname": "妖精乡德鲁伊",
        "set": "dom",
        "number": 445468,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Famished Paladin",
        "cname": "饥馑神圣武士",
        "set": "rix",
        "number": 441492,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Arrester's Admonition",
        "cname": "逮捕人的训诫",
        "set": "rna",
        "number": 459506,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Pardic Wanderer",
        "cname": "帕笛可漫游者",
        "set": "dom",
        "number": 445535,
        "color": [],
        "others": ""
    },
    {
        "name": "Lyra Dawnbringer",
        "cname": "黎明使者莱拉",
        "set": "dom",
        "number": 445335,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Paladin of Atonement",
        "cname": "赎罪神圣武士",
        "set": "rix",
        "number": 441500,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Benthic Biomancer",
        "cname": "深洋生机术士",
        "set": "rna",
        "number": 459507,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Enter the God-Eternals",
        "cname": "永生煞神降临",
        "set": "war",
        "number": 463499,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Ajani's Influence",
        "cname": "阿耶尼的威能",
        "set": "m19",
        "number": 450535,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Simic Guildgate",
        "cname": "析米克公会门",
        "set": "war",
        "number": 463940,
        "color": [],
        "others": ""
    },
    {
        "name": "Sphinx's Decree",
        "cname": "史芬斯的裁决",
        "set": "rix",
        "number": 441508,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Shalai, Voice of Plenty",
        "cname": "众生使者莎黎",
        "set": "dom",
        "number": 445344,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Druid of the Cowl",
        "cname": "外沿区德鲁伊",
        "set": "m19",
        "number": 449842,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Grunn, the Lonely King",
        "cname": "孤独猴王古恩",
        "set": "dom",
        "number": 445474,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ral, Izzet Viceroy",
        "cname": "伊捷总督拉尔",
        "set": "grn",
        "number": 455276,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Academy Journeymage",
        "cname": "学院老练法师",
        "set": "dom",
        "number": 445350,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Expel from Orazca",
        "cname": "逐出欧拉兹卡",
        "set": "rix",
        "number": 441521,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Rosemane Centaur",
        "cname": "玫瑰鬃半人马",
        "set": "grn",
        "number": 455278,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Skyknight Legionnaire",
        "cname": "空骑士军团兵",
        "set": "grn",
        "number": 455279,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Krosan Druid",
        "cname": "克洛萨德鲁伊",
        "set": "dom",
        "number": 445476,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Goreclaw, Terror of Qal Sisma",
        "cname": "黑山之威血爪",
        "set": "m19",
        "number": 449851,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Sumala Woodshaper",
        "cname": "索马拉塑木师",
        "set": "grn",
        "number": 455281,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Swarm Guildmage",
        "cname": "群落公会法师",
        "set": "grn",
        "number": 455282,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Karplusan Hound",
        "cname": "卡普路桑猎犬",
        "set": "dom",
        "number": 445945,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Arlinn, Voice of the Pack",
        "cname": "狼群之声雅琳",
        "set": "war",
        "number": 463453,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Thran Temporal Gateway",
        "cname": "索蓝时间闸门",
        "set": "dom",
        "number": 445542,
        "color": [],
        "others": ""
    },
    {
        "name": "Clan Guildmage",
        "cname": "部族公会法师",
        "set": "rna",
        "number": 459637,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "The Mirari Conjecture",
        "cname": "映奇宝珠探究",
        "set": "dom",
        "number": 445366,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Naban, Dean of Iteration",
        "cname": "迭演院长奈班",
        "set": "dom",
        "number": 445367,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Combine Guildmage",
        "cname": "联合公会法师",
        "set": "rna",
        "number": 459638,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Chemister's Insight",
        "cname": "化学师的洞察",
        "set": "grn",
        "number": 455113,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Growth-Chamber Guardian",
        "cname": "生长室守护者",
        "set": "rna",
        "number": 459603,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Worldsoul Colossus",
        "cname": "世界之魂巨像",
        "set": "grn",
        "number": 455296,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Adanto Vanguard",
        "cname": "艾唐托先锋",
        "set": "xln",
        "number": 437843,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Whispering Snitch",
        "cname": "细语告密客",
        "set": "grn",
        "number": 455171,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Bellowing Aegisaur",
        "cname": "嚎吼卫护龙",
        "set": "xln",
        "number": 437846,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sphinx of Foresight",
        "cname": "远见史芬斯",
        "set": "rna",
        "number": 459530,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Bishop's Soldier",
        "cname": "主教的士兵",
        "set": "xln",
        "number": 437848,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Barging Sergeant",
        "cname": "莽撞军士长",
        "set": "grn",
        "number": 455173,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Duskborne Skymarcher",
        "cname": "暮游天行客",
        "set": "xln",
        "number": 437851,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Glorifier of Dusk",
        "cname": "暮影荣耀兵",
        "set": "xln",
        "number": 437854,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Goring Ceratops",
        "cname": "猛抵犄角龙",
        "set": "xln",
        "number": 437855,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Imperial Aerosaur",
        "cname": "帝国翔翼龙",
        "set": "xln",
        "number": 437856,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Imperial Lancer",
        "cname": "帝国枪骑兵",
        "set": "xln",
        "number": 437857,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Kinjalli's Caller",
        "cname": "津加理唤师",
        "set": "xln",
        "number": 437860,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Legion Conquistador",
        "cname": "军团征服者",
        "set": "xln",
        "number": 437862,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": [
            "Legion's Landing",
            "Adanto, the First Fort"
        ],
        "cname": "首砦艾唐托",
        "set": "xln",
        "number": [
            437864,
            437865
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Gruul Guildgate",
        "cname": "古鲁公会门",
        "set": "rna",
        "number": 459724,
        "color": [],
        "others": ""
    },
    {
        "name": "Looming Altisaur",
        "cname": "掷影硕伟龙",
        "set": "xln",
        "number": 437866,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Experimental Frenzy",
        "cname": "实验性狂乱",
        "set": "grn",
        "number": 455180,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Pterodon Knight",
        "cname": "翼牙龙骑士",
        "set": "xln",
        "number": 437871,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Fearless Halberdier",
        "cname": "无惧长戟兵",
        "set": "grn",
        "number": 455181,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Suncleanser",
        "cname": "承阳净化僧",
        "set": "m19",
        "number": 449704,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Raptor Companion",
        "cname": "迅猛龙旅伴",
        "set": "xln",
        "number": 437874,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Fire Urchin",
        "cname": "火焰促狭鬼",
        "set": "grn",
        "number": 455182,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Gruul Guildgate",
        "cname": "古鲁公会门",
        "set": "rna",
        "number": 459725,
        "color": [],
        "others": ""
    },
    {
        "name": "Shining Aerosaur",
        "cname": "耀日翔翼龙",
        "set": "xln",
        "number": 437879,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Skyblade of the Legion",
        "cname": "军团天刃兵",
        "set": "xln",
        "number": 437880,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Prime Speaker Vannifar",
        "cname": "首席凡妮法",
        "set": "rna",
        "number": 459670,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Steadfast Armasaur",
        "cname": "坚定悍扫龙",
        "set": "xln",
        "number": 437882,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sunrise Seeker",
        "cname": "日升探寻者",
        "set": "xln",
        "number": 437883,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Territorial Hammerskull",
        "cname": "据地颅锤龙",
        "set": "xln",
        "number": 437884,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Vampire's Zeal",
        "cname": "吸血鬼狂热",
        "set": "xln",
        "number": 437886,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Aven Wind Mage",
        "cname": "艾文风法师",
        "set": "m19",
        "number": 449710,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Hellkite Whelp",
        "cname": "残虐者幼龙",
        "set": "grn",
        "number": 455187,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Bloodmist Infiltrator",
        "cname": "血雾渗透者",
        "set": "rna",
        "number": 459540,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Carrion Imp",
        "cname": "腐肉小恶魔",
        "set": "rna",
        "number": 459541,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Daring Saboteur",
        "cname": "大胆破坏者",
        "set": "xln",
        "number": 437892,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Deeproot Waters",
        "cname": "繁根林水域",
        "set": "xln",
        "number": 437894,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Kronch Wrangler",
        "cname": "恐骐兽驯师",
        "set": "war",
        "number": 463469,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Rakdos Roustabout",
        "cname": "拉铎司杂役",
        "set": "rna",
        "number": 459673,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Cry of the Carnarium",
        "cname": "剜祭场呼喊",
        "set": "rna",
        "number": 459545,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Frilled Sea Serpent",
        "cname": "刃鳍巨海蛇",
        "set": "m19",
        "number": 449721,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Rakdos, the Showstopper",
        "cname": "镇场拉铎司",
        "set": "rna",
        "number": 459674,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Lookout's Dispersal",
        "cname": "警戒员驱障",
        "set": "xln",
        "number": 437905,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Navigator's Ruin",
        "cname": "领航员失格",
        "set": "xln",
        "number": 437906,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Rubblebelt Boar",
        "cname": "瓦砾区野猪",
        "set": "grn",
        "number": 455195,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Debtors' Transport",
        "cname": "负债者驮兽",
        "set": "rna",
        "number": 459547,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Pirate's Prize",
        "cname": "海盗的奖赏",
        "set": "xln",
        "number": 437911,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "River Sneak",
        "cname": "河流偷袭客",
        "set": "xln",
        "number": 437913,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Font of Agonies",
        "cname": "苦痛洗礼盘",
        "set": "rna",
        "number": 459549,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Herald of the Dreadhorde",
        "cname": "震惧军先锋",
        "set": "war",
        "number": 463396,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Shaper Apprentice",
        "cname": "塑形师学徒",
        "set": "xln",
        "number": 437919,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Shipwreck Looter",
        "cname": "船难掠夺客",
        "set": "xln",
        "number": 437920,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Siren Lookout",
        "cname": "塞连警戒员",
        "set": "xln",
        "number": 437922,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Wojek Bodyguard",
        "cname": "沃耶克保镖",
        "set": "grn",
        "number": 455201,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Affectionate Indrik",
        "cname": "热情巨犀兽",
        "set": "grn",
        "number": 455202,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gutterbones",
        "cname": "水沟骷髅妖",
        "set": "rna",
        "number": 459551,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Noxious Groodion",
        "cname": "恶毒古汀兽",
        "set": "rna",
        "number": 459553,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Skilled Animator",
        "cname": "卓越赋生师",
        "set": "m19",
        "number": 449738,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Bishop of the Bloodstained",
        "cname": "沥血团主教",
        "set": "xln",
        "number": 437936,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Erratic Visionary",
        "cname": "古怪幻视师",
        "set": "war",
        "number": 463351,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Boneyard Parley",
        "cname": "聚骨场会谈",
        "set": "xln",
        "number": 437939,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Loxodon Sergeant",
        "cname": "象族军士长",
        "set": "war",
        "number": 463324,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Desperate Castaways",
        "cname": "危急落难人",
        "set": "xln",
        "number": 437946,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Kaya's Ghostform",
        "cname": "卡娅的魂体",
        "set": "war",
        "number": 463397,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Seraph of the Scales",
        "cname": "天秤炽天使",
        "set": "rna",
        "number": 459680,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Mark of the Vampire",
        "cname": "吸血鬼印记",
        "set": "xln",
        "number": 437958,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Eternal Skylord",
        "cname": "永生空领主",
        "set": "war",
        "number": 463352,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Queen's Bay Soldier",
        "cname": "女王湾士兵",
        "set": "xln",
        "number": 437960,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Windreader Sphinx",
        "cname": "风信史芬斯",
        "set": "m19",
        "number": 449749,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Rakdos Trumpeter",
        "cname": "拉铎司号手",
        "set": "rna",
        "number": 459559,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Spawn of Mayhem",
        "cname": "破坏魔后裔",
        "set": "rna",
        "number": 459560,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Bogstomper",
        "cname": "腐沼跺地兽",
        "set": "m19",
        "number": 449752,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Sanctum Seeker",
        "cname": "访圣团骑士",
        "set": "xln",
        "number": 437965,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Seekers' Squire",
        "cname": "访圣团扈从",
        "set": "xln",
        "number": 437966,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Skittering Heartstopper",
        "cname": "掠行断心虫",
        "set": "xln",
        "number": 437967,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Spire Mangler",
        "cname": "尖塔破坏者",
        "set": "rna",
        "number": 459561,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Skymarch Bloodletter",
        "cname": "血文天行客",
        "set": "xln",
        "number": 437969,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Kraul Foragers",
        "cname": "刻洛搜粮群",
        "set": "grn",
        "number": 455216,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Kraul Harpooner",
        "cname": "刻洛鱼叉手",
        "set": "grn",
        "number": 455217,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vicious Conquistador",
        "cname": "恶毒征服者",
        "set": "xln",
        "number": 437973,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Diregraf Ghoul",
        "cname": "战墓食尸鬼",
        "set": "m19",
        "number": 449757,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Nullhide Ferox",
        "cname": "韧皮龇牙兽",
        "set": "grn",
        "number": 455219,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Bonded Horncrest",
        "cname": "坐骑角羽龙",
        "set": "xln",
        "number": 437978,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Charging Monstrosaur",
        "cname": "猛冲暴霸龙",
        "set": "xln",
        "number": 437983,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Undercity's Embrace",
        "cname": "地底城之拥",
        "set": "rna",
        "number": 459564,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Pelt Collector",
        "cname": "兽皮收集客",
        "set": "grn",
        "number": 455222,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vindictive Vampire",
        "cname": "怀恨吸血鬼",
        "set": "rna",
        "number": 459565,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Leyline Prowler",
        "cname": "地脉游掠兽",
        "set": "war",
        "number": 463505,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Firecannon Blast",
        "cname": "火炎炮轰击",
        "set": "xln",
        "number": 437990,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Frenzied Raptor",
        "cname": "狂乱迅猛龙",
        "set": "xln",
        "number": 437991,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Infectious Horror",
        "cname": "播疫惊惧兽",
        "set": "m19",
        "number": 449766,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Bolas's Citadel",
        "cname": "波拉斯尊殿",
        "set": "war",
        "number": 463382,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Urban Utopia",
        "cname": "城市理想境",
        "set": "grn",
        "number": 455227,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Isareth the Awakener",
        "cname": "唤尸依萨蕾",
        "set": "m19",
        "number": 449769,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Rampaging Ferocidon",
        "cname": "莽闯暴猛龙",
        "set": "xln",
        "number": 437999,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Raptor Hatchling",
        "cname": "迅猛龙幼雏",
        "set": "xln",
        "number": 438000,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Simic Ascendancy",
        "cname": "析米克威权",
        "set": "rna",
        "number": 459682,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Rigging Runner",
        "cname": "索具奔越者",
        "set": "xln",
        "number": 438002,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Macabre Waltz",
        "cname": "亡者华尔滋",
        "set": "m19",
        "number": 449773,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Flux Channeler",
        "cname": "量束联能师",
        "set": "war",
        "number": 463355,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Wild Ceratok",
        "cname": "野生冠角牛",
        "set": "grn",
        "number": 455231,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Thrash of Raptors",
        "cname": "迅猛龙击群",
        "set": "xln",
        "number": 438013,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Phylactery Lich",
        "cname": "避邪符巫妖",
        "set": "m19",
        "number": 449778,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Reassembling Skeleton",
        "cname": "重组骷髅妖",
        "set": "m19",
        "number": 449781,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ancient Brontodon",
        "cname": "远古霆伟龙",
        "set": "xln",
        "number": 438021,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Skeleton Archer",
        "cname": "骷髅妖箭手",
        "set": "m19",
        "number": 449783,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Carnage Tyrant",
        "cname": "杀戮暴霸龙",
        "set": "xln",
        "number": 438025,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Colossal Dreadmaw",
        "cname": "庞巨血口龙",
        "set": "xln",
        "number": 438026,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Skymarch Bloodletter",
        "cname": "血文天行客",
        "set": "m19",
        "number": 449784,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Stitcher's Supplier",
        "cname": "拼接师备尸",
        "set": "m19",
        "number": 449786,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Deathgorge Scavenger",
        "cname": "噬尸食腐龙",
        "set": "xln",
        "number": 438030,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Deeproot Champion",
        "cname": "繁根林斗士",
        "set": "xln",
        "number": 438031,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Deeproot Warrior",
        "cname": "繁根林战士",
        "set": "xln",
        "number": 438032,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Emperor's Vanguard",
        "cname": "皇帝的先锋",
        "set": "xln",
        "number": 438035,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Grazing Whiptail",
        "cname": "食草鞭尾龙",
        "set": "xln",
        "number": 438036,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ixalli's Keeper",
        "cname": "依夏理守卫",
        "set": "xln",
        "number": 438040,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Jade Guardian",
        "cname": "翠玉守护者",
        "set": "xln",
        "number": 438041,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Jungle Delver",
        "cname": "丛林探索客",
        "set": "xln",
        "number": 438042,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Kumena's Speaker",
        "cname": "库莫那传谕",
        "set": "xln",
        "number": 438043,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Teysa Karlov",
        "cname": "泰莎卡洛夫",
        "set": "rna",
        "number": 459687,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Guildpact Informant",
        "cname": "十会盟信使",
        "set": "war",
        "number": 463937,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Liliana's Triumph",
        "cname": "莉莲娜得胜",
        "set": "war",
        "number": 463401,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ranging Raptors",
        "cname": "漫群迅猛龙",
        "set": "xln",
        "number": 438048,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ravenous Daggertooth",
        "cname": "贪食匕牙龙",
        "set": "xln",
        "number": 438049,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Feral Maaka",
        "cname": "野性玛卡兽",
        "set": "rna",
        "number": 459575,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Paradise Druid",
        "cname": "天堂德鲁伊",
        "set": "war",
        "number": 463474,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Snapping Sailback",
        "cname": "急攫帆背龙",
        "set": "xln",
        "number": 438055,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Spike-Tailed Ceratops",
        "cname": "刺尾犄角龙",
        "set": "xln",
        "number": 438056,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Thundering Spineback",
        "cname": "雷动背棘龙",
        "set": "xln",
        "number": 438057,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Flames of the Raze-Boar",
        "cname": "野猪神烈焰",
        "set": "rna",
        "number": 459576,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Vineshaper Mystic",
        "cname": "塑蔓秘教徒",
        "set": "xln",
        "number": 438061,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Waker of the Wilds",
        "cname": "蛮荒醒眠师",
        "set": "xln",
        "number": 438062,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Belligerent Brontodon",
        "cname": "好战霆伟龙",
        "set": "xln",
        "number": 438065,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Marauding Looter",
        "cname": "劫掠翻拣客",
        "set": "xln",
        "number": 438072,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Raging Swordtooth",
        "cname": "狂怒剑齿龙",
        "set": "xln",
        "number": 438073,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Regisaur Alpha",
        "cname": "帝王龙首领",
        "set": "xln",
        "number": 438074,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Shapers of Nature",
        "cname": "自然塑形师",
        "set": "xln",
        "number": 438075,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Zhur-Taa Goblin",
        "cname": "筑塔族鬼怪",
        "set": "rna",
        "number": 459690,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": [
            "Conqueror's Galleon",
            "Conqueror's Foothold"
        ],
        "cname": "征服者据点",
        "set": "xln",
        "number": [
            438081,
            438082
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Teyo, the Shieldmage",
        "cname": "盾法师泰佑",
        "set": "war",
        "number": 463335,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Elaborate Firecannon",
        "cname": "精巧火炎炮",
        "set": "xln",
        "number": 438086,
        "color": [],
        "others": ""
    },
    {
        "name": "Pollenbright Druid",
        "cname": "孢光德鲁伊",
        "set": "war",
        "number": 463476,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": [
            "Primal Amulet",
            "Primal Wellspring"
        ],
        "cname": "原初护身符",
        "set": "xln",
        "number": [
            438092,
            438093
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Etrata, the Silencer",
        "cname": "灭口艾庄塔",
        "set": "grn",
        "number": 455251,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sentinel Totem",
        "cname": "哨戒图腾像",
        "set": "xln",
        "number": 438095,
        "color": [],
        "others": ""
    },
    {
        "name": "Shadowed Caravel",
        "cname": "影笼轻帆船",
        "set": "xln",
        "number": 438096,
        "color": [],
        "others": ""
    },
    {
        "name": "Sleek Schooner",
        "cname": "华贵纵帆船",
        "set": "xln",
        "number": 438097,
        "color": [],
        "others": ""
    },
    {
        "name": "Sorcerous Spyglass",
        "cname": "巫视望远镜",
        "set": "xln",
        "number": 438098,
        "color": [],
        "others": ""
    },
    {
        "name": "Vanquisher's Banner",
        "cname": "得胜者战旗",
        "set": "xln",
        "number": 438103,
        "color": [],
        "others": ""
    },
    {
        "name": "Guttersnipe",
        "cname": "贫窟伏击客",
        "set": "m19",
        "number": 449810,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Hostile Minotaur",
        "cname": "敌意牛头怪",
        "set": "m19",
        "number": 449812,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Inferno Hellion",
        "cname": "业火地狱兽",
        "set": "m19",
        "number": 449813,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Lathliss, Dragon Queen",
        "cname": "龙后拉黎丝",
        "set": "m19",
        "number": 449814,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Senate Griffin",
        "cname": "参议院狮鹫",
        "set": "rna",
        "number": 459694,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Price of Betrayal",
        "cname": "背叛的代价",
        "set": "war",
        "number": 463405,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Shriekdiver",
        "cname": "尖啸俯冲鸟",
        "set": "war",
        "number": 463406,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Sorin's Thirst",
        "cname": "索霖的饥渴",
        "set": "war",
        "number": 463407,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Spark Reaper",
        "cname": "火花掠夺客",
        "set": "war",
        "number": 463409,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Vampire Opportunist",
        "cname": "投机吸血鬼",
        "set": "war",
        "number": 463413,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Vizier of the Scorpion",
        "cname": "蝎毒维齐尔",
        "set": "war",
        "number": 463414,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Izoni, Thousand-Eyed",
        "cname": "千目依佐妮",
        "set": "grn",
        "number": 455261,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Lazav, the Multifarious",
        "cname": "百相拉札夫",
        "set": "grn",
        "number": 455265,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Jace's Sentinel",
        "cname": "杰斯的哨卫",
        "set": "xln",
        "number": 438135,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Smelt-Ward Ignus",
        "cname": "熔护区火灵",
        "set": "rna",
        "number": 459591,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Exultant Skymarcher",
        "cname": "欢欣天行客",
        "set": "rix",
        "number": 441491,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Command the Dreadhorde",
        "cname": "统领震惧军",
        "set": "war",
        "number": 463385,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Imperial Ceratops",
        "cname": "帝国犄角龙",
        "set": "rix",
        "number": 441494,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Legion Conquistador",
        "cname": "军团征服者",
        "set": "rix",
        "number": 441495,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Colossal Dreadmaw",
        "cname": "庞巨血口龙",
        "set": "m19",
        "number": 449837,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Majestic Heliopterus",
        "cname": "庄严旭翼龙",
        "set": "rix",
        "number": 441497,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Martyr of Dusk",
        "cname": "暮影殉道者",
        "set": "rix",
        "number": 441498,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Nightveil Predator",
        "cname": "夜篷掠食者",
        "set": "grn",
        "number": 455272,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Pride of Conquerors",
        "cname": "征服者之傲",
        "set": "rix",
        "number": 441501,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Niv-Mizzet, Parun",
        "cname": "元祖尼米捷",
        "set": "grn",
        "number": 455273,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Raptor Companion",
        "cname": "迅猛龙旅伴",
        "set": "rix",
        "number": 441503,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sanguine Glorifier",
        "cname": "血色赐耀僧",
        "set": "rix",
        "number": 441504,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Skymarcher Aspirant",
        "cname": "野心天行客",
        "set": "rix",
        "number": 441505,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Tin Street Dodger",
        "cname": "锡街躲闪客",
        "set": "rna",
        "number": 459595,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Snubhorn Sentry",
        "cname": "哨卫短角龙",
        "set": "rix",
        "number": 441507,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Druid of Horns",
        "cname": "犄角德鲁伊",
        "set": "m19",
        "number": 449841,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Sun-Crested Pterodon",
        "cname": "旭盔翼牙龙",
        "set": "rix",
        "number": 441511,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Temple Altisaur",
        "cname": "殿堂硕伟龙",
        "set": "rix",
        "number": 441512,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Trapjaw Tyrant",
        "cname": "残暴笼颚龙",
        "set": "rix",
        "number": 441513,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Zetalpa, Primal Dawn",
        "cname": "始辉泽塔帕",
        "set": "rix",
        "number": 441514,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Axebane Beast",
        "cname": "禁伐林野兽",
        "set": "rna",
        "number": 459596,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Rhizome Lurcher",
        "cname": "根茎狩猎菌",
        "set": "grn",
        "number": 455277,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ghastbark Twins",
        "cname": "双面白皮木",
        "set": "m19",
        "number": 449846,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ghirapur Guide",
        "cname": "吉拉波向导",
        "set": "m19",
        "number": 449847,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ravnica at War",
        "cname": "战乱拉尼卡",
        "set": "war",
        "number": 463331,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Kumena's Awakening",
        "cname": "库莫那觉醒",
        "set": "rix",
        "number": 441526,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Nezahal, Primal Tide",
        "cname": "始潮涅札哈",
        "set": "rix",
        "number": 441529,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Hungering Hydra",
        "cname": "饥渴多头龙",
        "set": "m19",
        "number": 449854,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "River Darter",
        "cname": "河流穿梭客",
        "set": "rix",
        "number": 441531,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Riverwise Augur",
        "cname": "通流卜算师",
        "set": "rix",
        "number": 441532,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "God-Pharaoh's Statue",
        "cname": "法老神塑像",
        "set": "war",
        "number": 463541,
        "color": [],
        "others": ""
    },
    {
        "name": "Swiftblade Vindicator",
        "cname": "雪恨快剑手",
        "set": "grn",
        "number": 455284,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Pelakka Wurm",
        "cname": "皮拉卡亚龙",
        "set": "m19",
        "number": 449857,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Secrets of the Golden City",
        "cname": "黄金城奥秘",
        "set": "rix",
        "number": 441536,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "End-Raze Forerunners",
        "cname": "灭世劫前锋",
        "set": "rna",
        "number": 459599,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Enraged Ceratok",
        "cname": "盛怒冠角牛",
        "set": "rna",
        "number": 459600,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gideon's Battle Cry",
        "cname": "基定的战呼",
        "set": "war",
        "number": 463933,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Trostani Discordant",
        "cname": "异声卓塔妮",
        "set": "grn",
        "number": 455289,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gideon's Company",
        "cname": "基定的袍泽",
        "set": "war",
        "number": 463934,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Timestream Navigator",
        "cname": "时流领航员",
        "set": "rix",
        "number": 441543,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Warkite Marauder",
        "cname": "战筝劫掠者",
        "set": "rix",
        "number": 441544,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Undercity Uprising",
        "cname": "地底城抗暴",
        "set": "grn",
        "number": 455291,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Runic Armasaur",
        "cname": "符脊悍扫龙",
        "set": "m19",
        "number": 449865,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Underrealm Lich",
        "cname": "地底境巫妖",
        "set": "grn",
        "number": 455292,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Wee Dragonauts",
        "cname": "袖珍龙航师",
        "set": "grn",
        "number": 455295,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Vigilant Baloth",
        "cname": "警戒巴洛西",
        "set": "m19",
        "number": 449871,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gruul Beastmaster",
        "cname": "古鲁驯兽师",
        "set": "rna",
        "number": 459604,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vivien Reid",
        "cname": "薇薇安瑞德",
        "set": "m19",
        "number": 449873,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vivien's Invocation",
        "cname": "薇薇安召现",
        "set": "m19",
        "number": 449874,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Narset, Parter of Veils",
        "cname": "揭帷娜尔施",
        "set": "war",
        "number": 463364,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Aerial Engineer",
        "cname": "空行工程师",
        "set": "m19",
        "number": 449876,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Arcades, the Strategist",
        "cname": "智龙阿卡迪",
        "set": "m19",
        "number": 449877,
        "color": [
            "G",
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Brawl-Bash Ogre",
        "cname": "殴斗食人魔",
        "set": "m19",
        "number": 449878,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Oathsworn Vampire",
        "cname": "立誓吸血鬼",
        "set": "rix",
        "number": 441564,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Pitiless Plunderer",
        "cname": "冷酷袭劫者",
        "set": "rix",
        "number": 441565,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Chromium, the Mutable",
        "cname": "化龙铬米恩",
        "set": "m19",
        "number": 449879,
        "color": [
            "B",
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sadistic Skymarcher",
        "cname": "凌虐天行客",
        "set": "rix",
        "number": 441569,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Tetzimoc, Primal Death",
        "cname": "始亡帝兹默",
        "set": "rix",
        "number": 441570,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Pitiless Gorgon",
        "cname": "冷酷蛇发妖",
        "set": "grn",
        "number": 455299,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vernadi Shieldmate",
        "cname": "盟地护盾手",
        "set": "grn",
        "number": 455300,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Vampire Revenant",
        "cname": "吸血鬼复灵",
        "set": "rix",
        "number": 441573,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Voracious Vampire",
        "cname": "暴食吸血鬼",
        "set": "rix",
        "number": 441575,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Brass's Bounty",
        "cname": "霸司的奖赏",
        "set": "rix",
        "number": 441578,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Mana Geode",
        "cname": "法术力晶球",
        "set": "war",
        "number": 463544,
        "color": [],
        "others": ""
    },
    {
        "name": "Charging Tuskodon",
        "cname": "冲锋巨牙龙",
        "set": "rix",
        "number": 441581,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Daring Buccaneer",
        "cname": "大胆的海贼",
        "set": "rix",
        "number": 441582,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Etali, Primal Storm",
        "cname": "始啸埃泰力",
        "set": "rix",
        "number": 441584,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Fanatical Firebrand",
        "cname": "狂热惹事鬼",
        "set": "rix",
        "number": 441585,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Psychic Symbiont",
        "cname": "心灵共生体",
        "set": "m19",
        "number": 449887,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Incubation Druid",
        "cname": "护育德鲁伊",
        "set": "rna",
        "number": 459606,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Frilled Deathspitter",
        "cname": "褶领漫毒龙",
        "set": "rix",
        "number": 441588,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Satyr Enchanter",
        "cname": "施咒羊蹄人",
        "set": "m19",
        "number": 449889,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Needletooth Raptor",
        "cname": "锐齿迅猛龙",
        "set": "rix",
        "number": 441591,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Skyrider Patrol",
        "cname": "驭空巡侦员",
        "set": "m19",
        "number": 449890,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Amulet of Safekeeping",
        "cname": "庇佑护身符",
        "set": "m19",
        "number": 449892,
        "color": [],
        "others": ""
    },
    {
        "name": "Jace's Ruse",
        "cname": "杰斯的诈术",
        "set": "war",
        "number": 463939,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Silverclad Ferocidons",
        "cname": "银甲暴猛龙",
        "set": "rix",
        "number": 441599,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Stampeding Horncrest",
        "cname": "狂奔角羽龙",
        "set": "rix",
        "number": 441600,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sun-Collared Raptor",
        "cname": "旭羽迅猛龙",
        "set": "rix",
        "number": 441602,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Niv-Mizzet Reborn",
        "cname": "新生尼米捷",
        "set": "war",
        "number": 463511,
        "color": [
            "B",
            "G",
            "R",
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Oath of Kaya",
        "cname": "卡娅的誓约",
        "set": "war",
        "number": 463512,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Colossal Dreadmaw",
        "cname": "庞巨血口龙",
        "set": "rix",
        "number": 441609,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Crested Herdcaller",
        "cname": "盔冠唤伴龙",
        "set": "rix",
        "number": 441610,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Deeproot Elite",
        "cname": "繁根林精兵",
        "set": "rix",
        "number": 441611,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Rampaging Rendhorn",
        "cname": "莽闯猛角兽",
        "set": "rna",
        "number": 459610,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Forerunner of the Heralds",
        "cname": "川流使先驱",
        "set": "rix",
        "number": 441613,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ghalta, Primal Hunger",
        "cname": "始饥戈厄塔",
        "set": "rix",
        "number": 441614,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ral's Outburst",
        "cname": "拉尔的爆发",
        "set": "war",
        "number": 463515,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Gargoyle Sentinel",
        "cname": "哨兵石像鬼",
        "set": "m19",
        "number": 449902,
        "color": [],
        "others": ""
    },
    {
        "name": "Gearsmith Guardian",
        "cname": "工匠守护者",
        "set": "m19",
        "number": 449903,
        "color": [],
        "others": ""
    },
    {
        "name": "Jadelight Ranger",
        "cname": "玉光巡林客",
        "set": "rix",
        "number": 441620,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Knight of the Stampede",
        "cname": "狂奔龙骑士",
        "set": "rix",
        "number": 441622,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Overgrown Armasaur",
        "cname": "蔓生悍扫龙",
        "set": "rix",
        "number": 441625,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Marauder's Axe",
        "cname": "劫掠者战斧",
        "set": "m19",
        "number": 449906,
        "color": [],
        "others": ""
    },
    {
        "name": "Elite Arrester",
        "cname": "菁英逮捕人",
        "set": "rna",
        "number": 460113,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Polyraptor",
        "cname": "多态迅猛龙",
        "set": "rix",
        "number": 441628,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Interplanar Beacon",
        "cname": "跨时空信标",
        "set": "war",
        "number": 463550,
        "color": [],
        "others": ""
    },
    {
        "name": "Thrashing Brontodon",
        "cname": "痛击霆伟龙",
        "set": "rix",
        "number": 441632,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Skyscanner",
        "cname": "巡天扑翼机",
        "set": "m19",
        "number": 449911,
        "color": [],
        "others": ""
    },
    {
        "name": "Wayward Swordtooth",
        "cname": "刚愎剑齿龙",
        "set": "rix",
        "number": 441634,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Angrath, the Flame-Chained",
        "cname": "炎锁安戈斯",
        "set": "rix",
        "number": 441636,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": [
            "Hadana's Climb",
            "Winged Temple of Orazca"
        ],
        "cname": "哈达那登高",
        "set": "rix",
        "number": [
            441642,
            441643
        ],
        "color": [
            "G",
            "U"
        ],
        "others": "transform"
    },
    {
        "name": "Jungle Creeper",
        "cname": "丛林匐行怪",
        "set": "rix",
        "number": 441647,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Tamiyo, Collector of Tales",
        "cname": "寰录多美代",
        "set": "war",
        "number": 463523,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Teferi, Time Raveler",
        "cname": "理时泰菲力",
        "set": "war",
        "number": 463524,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Protean Raider",
        "cname": "变幻突击客",
        "set": "rix",
        "number": 441655,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Raging Regisaur",
        "cname": "愤怒帝王龙",
        "set": "rix",
        "number": 441656,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Relentless Raptor",
        "cname": "不休迅猛龙",
        "set": "rix",
        "number": 441657,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Siegehorn Ceratops",
        "cname": "攻城犄角龙",
        "set": "rix",
        "number": 441659,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": [
            "Storm the Vault",
            "Vault of Catlacan"
        ],
        "cname": "卡拉坎宝库",
        "set": "rix",
        "number": [
            441661,
            441662
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Boros Locket",
        "cname": "波洛斯坠饰",
        "set": "grn",
        "number": 455312,
        "color": [],
        "others": ""
    },
    {
        "name": "Zacama, Primal Calamity",
        "cname": "始灾札卡玛",
        "set": "rix",
        "number": 441663,
        "color": [
            "G",
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Awakened Amalgam",
        "cname": "醒转拼合像",
        "set": "rix",
        "number": 441664,
        "color": [],
        "others": ""
    },
    {
        "name": "Chamber Sentry",
        "cname": "会盟堂哨卫",
        "set": "grn",
        "number": 455313,
        "color": [],
        "others": ""
    },
    {
        "name": "Sauroform Hybrid",
        "cname": "蜥身混生体",
        "set": "rna",
        "number": 459615,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Captain's Hook",
        "cname": "船长的铁钩",
        "set": "rix",
        "number": 441667,
        "color": [],
        "others": ""
    },
    {
        "name": "Dimir Locket",
        "cname": "底密尔坠饰",
        "set": "grn",
        "number": 455315,
        "color": [],
        "others": ""
    },
    {
        "name": [
            "Golden Guardian",
            "Gold-Forge Garrison"
        ],
        "cname": "金锻驻防地",
        "set": "rix",
        "number": [
            441669,
            441670
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": [
            "Golden Guardian",
            "Gold-Forge Garrison"
        ],
        "cname": "金辉守护者",
        "set": "rix",
        "number": [
            441669,
            441670
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Submerged Boneyard",
        "cname": "水下聚骨场",
        "set": "m19",
        "number": 449923,
        "color": [],
        "others": ""
    },
    {
        "name": "Gatekeeper Gargoyle",
        "cname": "石像鬼门卫",
        "set": "grn",
        "number": 455316,
        "color": [],
        "others": ""
    },
    {
        "name": "Strider Harness",
        "cname": "海行客挽具",
        "set": "rix",
        "number": 441674,
        "color": [],
        "others": ""
    },
    {
        "name": "Traveler's Amulet",
        "cname": "旅人护身符",
        "set": "rix",
        "number": 441675,
        "color": [],
        "others": ""
    },
    {
        "name": "Glaive of the Guildpact",
        "cname": "十会盟巨剑",
        "set": "grn",
        "number": 455317,
        "color": [],
        "others": ""
    },
    {
        "name": "Golgari Locket",
        "cname": "葛加理坠饰",
        "set": "grn",
        "number": 455318,
        "color": [],
        "others": ""
    },
    {
        "name": "Thundering Ceratok",
        "cname": "雷动冠角牛",
        "set": "war",
        "number": 463482,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Devouring Hellion",
        "cname": "吞噬地狱兽",
        "set": "war",
        "number": 463427,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Dreadhorde Twins",
        "cname": "震惧军双子",
        "set": "war",
        "number": 463429,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Steeple Creeper",
        "cname": "尖顶漫行客",
        "set": "rna",
        "number": 459617,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vampire Champion",
        "cname": "吸血鬼斗士",
        "set": "rix",
        "number": 441973,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ajani, the Greathearted",
        "cname": "至善阿耶尼",
        "set": "war",
        "number": 463487,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bioessence Hydra",
        "cname": "菁粹多头龙",
        "set": "war",
        "number": 463489,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dovin's Dismissal",
        "cname": "多温的驱散",
        "set": "rna",
        "number": 460114,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Board the Weatherlight",
        "cname": "重登晴空号",
        "set": "dom",
        "number": 445317,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sylvan Brushstrider",
        "cname": "森林拂行兽",
        "set": "rna",
        "number": 459619,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Goblin Assault Team",
        "cname": "鬼怪突袭队",
        "set": "war",
        "number": 463432,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Domri's Ambush",
        "cname": "多密的伏击",
        "set": "war",
        "number": 463495,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Fall of the Thran",
        "cname": "索蓝覆亡录",
        "set": "dom",
        "number": 445327,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gideon's Reproach",
        "cname": "基定的怒责",
        "set": "dom",
        "number": 445328,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dovin's Veto",
        "cname": "多温的否决",
        "set": "war",
        "number": 463496,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "History of Benalia",
        "cname": "宾纳里亚史",
        "set": "dom",
        "number": 445330,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dreadhorde Butcher",
        "cname": "震惧军屠夫",
        "set": "war",
        "number": 463497,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Elite Guardmage",
        "cname": "精英卫法师",
        "set": "war",
        "number": 463498,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Mesa Unicorn",
        "cname": "台地独角兽",
        "set": "dom",
        "number": 445336,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "On Serra's Wings",
        "cname": "承撒拉之翼",
        "set": "dom",
        "number": 445337,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Serra's Guardian",
        "cname": "撒拉守护使",
        "set": "m19",
        "number": 450537,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "The Antiquities War",
        "cname": "古文明之战",
        "set": "dom",
        "number": 445351,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Artificer's Assistant",
        "cname": "神器师助手",
        "set": "dom",
        "number": 445353,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Riddlemaster Sphinx",
        "cname": "设谜史芬斯",
        "set": "m19",
        "number": 450540,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Steam Vents",
        "cname": "蒸气喷发口",
        "set": "grn",
        "number": 455338,
        "color": [],
        "others": ""
    },
    {
        "name": "Cloudreader Sphinx",
        "cname": "识云史芬斯",
        "set": "dom",
        "number": 445356,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Cold-Water Snapper",
        "cname": "霜冻骤咬龟",
        "set": "dom",
        "number": 445357,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Diligent Excavator",
        "cname": "勤勉开挖人",
        "set": "dom",
        "number": 445360,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Honor the God-Pharaoh",
        "cname": "崇敬法老神",
        "set": "war",
        "number": 463435,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "In Bolas's Clutches",
        "cname": "受制波拉斯",
        "set": "dom",
        "number": 445363,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Merfolk Trickster",
        "cname": "人鱼诈术师",
        "set": "dom",
        "number": 445365,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Relic Runner",
        "cname": "亡命窃宝客",
        "set": "dom",
        "number": 445371,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Arisen Gorgon",
        "cname": "复生蛇发妖",
        "set": "m19",
        "number": 450545,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Sage of Lat-Nam",
        "cname": "拉特南智者",
        "set": "dom",
        "number": 445373,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Tempest Djinn",
        "cname": "暴风雨巨灵",
        "set": "dom",
        "number": 445377,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Time of Ice",
        "cname": "冰雪时代纪",
        "set": "dom",
        "number": 445379,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Jaya's Greeting",
        "cname": "雅亚的问候",
        "set": "war",
        "number": 463439,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Blessing of Belzenlok",
        "cname": "贝赞洛祝福",
        "set": "dom",
        "number": 445386,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Cabal Evangel",
        "cname": "柯帮福音师",
        "set": "dom",
        "number": 445387,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Chainer's Torment",
        "cname": "崔纳的绝境",
        "set": "dom",
        "number": 445391,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Tattered Mummy",
        "cname": "褴褛木乃伊",
        "set": "m19",
        "number": 450548,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Deathbloom Thallid",
        "cname": "死华散绿菌",
        "set": "dom",
        "number": 445393,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Kargan Dragonrider",
        "cname": "卡加龙骑士",
        "set": "m19",
        "number": 450550,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sarkhan's Dragonfire",
        "cname": "萨坎的龙炎",
        "set": "m19",
        "number": 450551,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sarkhan's Whelp",
        "cname": "萨坎的幼龙",
        "set": "m19",
        "number": 450552,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Feral Abomination",
        "cname": "野性憎恶兽",
        "set": "dom",
        "number": 445401,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Aggressive Mammoth",
        "cname": "猛袭长毛象",
        "set": "m19",
        "number": 450555,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Tolsimir, Friend to Wolves",
        "cname": "狼友托西密",
        "set": "war",
        "number": 463527,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Nexus of Fate",
        "cname": "龙命连结点",
        "set": "m19",
        "number": 450559,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Tyrant's Scorn",
        "cname": "暴君的轻蔑",
        "set": "war",
        "number": 463528,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Rite of Belzenlok",
        "cname": "贝赞洛仪式",
        "set": "dom",
        "number": 445411,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Stronghold Confessor",
        "cname": "城塞告解僧",
        "set": "dom",
        "number": 445414,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Thallid Omnivore",
        "cname": "杂食散绿菌",
        "set": "dom",
        "number": 445415,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Thallid Soothsayer",
        "cname": "预言散绿菌",
        "set": "dom",
        "number": 445416,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ral's Dispersal",
        "cname": "拉尔的驱散",
        "set": "grn",
        "number": 455732,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Azorius Locket",
        "cname": "俄佐立坠饰",
        "set": "rna",
        "number": 459706,
        "color": [],
        "others": ""
    },
    {
        "name": "Bloodstone Goblin",
        "cname": "血玉髓鬼怪",
        "set": "dom",
        "number": 445424,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Kraul Raider",
        "cname": "刻洛突击队",
        "set": "grn",
        "number": 455736,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "The Flame of Keld",
        "cname": "凯尔顿源火",
        "set": "dom",
        "number": 445432,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Applied Biomancy",
        "cname": "实用生机术",
        "set": "rna",
        "number": 459628,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Ghitu Lavarunner",
        "cname": "基图奔熔客",
        "set": "dom",
        "number": 445436,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Warchief",
        "cname": "鬼怪战酋长",
        "set": "dom",
        "number": 445439,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Arrester's Zeal",
        "cname": "逮捕人热忱",
        "set": "rna",
        "number": 459479,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Jaya Ballard",
        "cname": "雅亚巴拉德",
        "set": "dom",
        "number": 445441,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Keldon Overseer",
        "cname": "凯尔顿督军",
        "set": "dom",
        "number": 445443,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Orcish Vandal",
        "cname": "莽撞半兽人",
        "set": "dom",
        "number": 445446,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Siege-Gang Commander",
        "cname": "攻城指挥官",
        "set": "dom",
        "number": 445452,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Skirk Prospector",
        "cname": "司克探矿者",
        "set": "dom",
        "number": 445453,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Haazda Marshal",
        "cname": "哈资达元帅",
        "set": "grn",
        "number": 455094,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Healer's Hawk",
        "cname": "治疗师翔鹰",
        "set": "grn",
        "number": 455095,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Verix Bladewing",
        "cname": "锋翼维黎兹",
        "set": "dom",
        "number": 445458,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Hunted Witness",
        "cname": "遭缉见证人",
        "set": "grn",
        "number": 455096,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Inspiring Unicorn",
        "cname": "振奋独角兽",
        "set": "grn",
        "number": 455097,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ironclad Krovod",
        "cname": "披甲克瓦兽",
        "set": "war",
        "number": 463322,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ledev Guardian",
        "cname": "列夫守护者",
        "set": "grn",
        "number": 455099,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Light of the Legion",
        "cname": "教团辉光使",
        "set": "grn",
        "number": 455100,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Loxodon Restorer",
        "cname": "象族复元师",
        "set": "grn",
        "number": 455101,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Baloth Gorger",
        "cname": "暴食巴洛西",
        "set": "dom",
        "number": 445465,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Haazda Officer",
        "cname": "哈资达长官",
        "set": "rna",
        "number": 459485,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Impassioned Orator",
        "cname": "激情雄辩家",
        "set": "rna",
        "number": 459487,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gaea's Blessing",
        "cname": "盖亚的祝福",
        "set": "dom",
        "number": 445470,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gaea's Protector",
        "cname": "盖亚守护者",
        "set": "dom",
        "number": 445471,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Roc Charger",
        "cname": "坐骑洛克鸟",
        "set": "grn",
        "number": 455105,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Justiciar's Portal",
        "cname": "大司法通道",
        "set": "rna",
        "number": 459488,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Glass of the Guildpact",
        "cname": "十会盟彩窗",
        "set": "rna",
        "number": 459708,
        "color": [],
        "others": ""
    },
    {
        "name": "Lumbering Battlement",
        "cname": "缓行城垛兽",
        "set": "rna",
        "number": 459490,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ministrant of Obligation",
        "cname": "守责主礼人",
        "set": "rna",
        "number": 459491,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Tenth District Guard",
        "cname": "第十区守卫",
        "set": "grn",
        "number": 455110,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Marwyn, the Nurturer",
        "cname": "培育人玛雯",
        "set": "dom",
        "number": 445481,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Citywatch Sphinx",
        "cname": "监城史芬斯",
        "set": "grn",
        "number": 455114,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Resolute Watchdog",
        "cname": "坚毅看门狗",
        "set": "rna",
        "number": 459494,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sporecrown Thallid",
        "cname": "孢冠散绿菌",
        "set": "dom",
        "number": 445490,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Dimir Informant",
        "cname": "底密尔线人",
        "set": "grn",
        "number": 455117,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Territorial Allosaurus",
        "cname": "据地异特龙",
        "set": "dom",
        "number": 445493,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Rescuer Sphinx",
        "cname": "救援史芬斯",
        "set": "war",
        "number": 463368,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dream Eater",
        "cname": "食梦史芬斯",
        "set": "grn",
        "number": 455119,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Deputy of Detention",
        "cname": "扣留代行官",
        "set": "rna",
        "number": 459640,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Charging War Boar",
        "cname": "冲锋战野猪",
        "set": "rna",
        "number": 460118,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Grand Warlord Radha",
        "cname": "大军阀拉妲",
        "set": "dom",
        "number": 445504,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Hallar, the Firefletcher",
        "cname": "炎箭贺拉尔",
        "set": "dom",
        "number": 445505,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Muldrotha, the Gravetide",
        "cname": "腐潮穆杜塔",
        "set": "dom",
        "number": 445508,
        "color": [
            "B",
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Slimefoot, the Stowaway",
        "cname": "寄舱客黏足",
        "set": "dom",
        "number": 445514,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Junktroller",
        "cname": "垃圾回收机",
        "set": "rna",
        "number": 459710,
        "color": [],
        "others": ""
    },
    {
        "name": "Orzhov Locket",
        "cname": "欧佐夫坠饰",
        "set": "rna",
        "number": 459711,
        "color": [],
        "others": ""
    },
    {
        "name": "Tenth District Veteran",
        "cname": "第十区老兵",
        "set": "rna",
        "number": 459501,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Murmuring Mystic",
        "cname": "细语秘教徒",
        "set": "grn",
        "number": 455126,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Narcomoeba",
        "cname": "梦生阿米巴",
        "set": "grn",
        "number": 455128,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Rakdos Locket",
        "cname": "拉铎司坠饰",
        "set": "rna",
        "number": 459712,
        "color": [],
        "others": ""
    },
    {
        "name": "Dreadhorde Invasion",
        "cname": "震惧军入侵",
        "set": "war",
        "number": 463389,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Icy Manipulator",
        "cname": "寒冰操弄器",
        "set": "dom",
        "number": 445528,
        "color": [],
        "others": ""
    },
    {
        "name": "Navigator's Compass",
        "cname": "领航员罗盘",
        "set": "dom",
        "number": 445534,
        "color": [],
        "others": ""
    },
    {
        "name": "Powerstone Shard",
        "cname": "魔力石碎片",
        "set": "dom",
        "number": 445536,
        "color": [],
        "others": ""
    },
    {
        "name": "Skittering Surveyor",
        "cname": "掠行勘探械",
        "set": "dom",
        "number": 445539,
        "color": [],
        "others": ""
    },
    {
        "name": "Selective Snare",
        "cname": "拣择性圈套",
        "set": "grn",
        "number": 455134,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sparring Construct",
        "cname": "战训组构体",
        "set": "dom",
        "number": 445541,
        "color": [],
        "others": ""
    },
    {
        "name": "Urza's Tome",
        "cname": "克撒的巨著",
        "set": "dom",
        "number": 445544,
        "color": [],
        "others": ""
    },
    {
        "name": "Simic Locket",
        "cname": "析米克坠饰",
        "set": "rna",
        "number": 459715,
        "color": [],
        "others": ""
    },
    {
        "name": "Frilled Mystic",
        "cname": "褶领秘教徒",
        "set": "rna",
        "number": 459649,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Clifftop Retreat",
        "cname": "崖顶修行所",
        "set": "dom",
        "number": 445548,
        "color": [],
        "others": ""
    },
    {
        "name": "Isolated Chapel",
        "cname": "孤立礼拜堂",
        "set": "dom",
        "number": 445550,
        "color": [],
        "others": ""
    },
    {
        "name": "Memorial to Folly",
        "cname": "愚行纪念碑",
        "set": "dom",
        "number": 445551,
        "color": [],
        "others": ""
    },
    {
        "name": "Memorial to Genius",
        "cname": "智行纪念碑",
        "set": "dom",
        "number": 445552,
        "color": [],
        "others": ""
    },
    {
        "name": "Memorial to Glory",
        "cname": "勇行纪念碑",
        "set": "dom",
        "number": 445553,
        "color": [],
        "others": ""
    },
    {
        "name": "Memorial to Unity",
        "cname": "齐行纪念碑",
        "set": "dom",
        "number": 445554,
        "color": [],
        "others": ""
    },
    {
        "name": "Memorial to War",
        "cname": "战行纪念碑",
        "set": "dom",
        "number": 445555,
        "color": [],
        "others": ""
    },
    {
        "name": "Silent Submersible",
        "cname": "静航潜水舰",
        "set": "war",
        "number": 463369,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Zhalfirin Void",
        "cname": "赛费尔虚境",
        "set": "dom",
        "number": 445558,
        "color": [],
        "others": ""
    },
    {
        "name": "Raging Kronch",
        "cname": "狂怒恐骐兽",
        "set": "war",
        "number": 463444,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Coral Commando",
        "cname": "珊瑚突击兵",
        "set": "rna",
        "number": 459511,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sarkhan's Catharsis",
        "cname": "萨坎的净秽",
        "set": "war",
        "number": 463447,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Tome of the Guildpact",
        "cname": "十会盟圣典",
        "set": "rna",
        "number": 459717,
        "color": [],
        "others": ""
    },
    {
        "name": "Tibalt's Rager",
        "cname": "提勃的躁鬼",
        "set": "war",
        "number": 463450,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Turret Ogre",
        "cname": "炮台食人魔",
        "set": "war",
        "number": 463451,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Arboreal Grazer",
        "cname": "树栖食草兽",
        "set": "war",
        "number": 463452,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Arlinn's Wolf",
        "cname": "雅琳的凶狼",
        "set": "war",
        "number": 463454,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Grasping Thrull",
        "cname": "攫掠索尔兽",
        "set": "rna",
        "number": 459652,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gateway Sneak",
        "cname": "门前偷袭客",
        "set": "rna",
        "number": 459515,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Gruul Spellbreaker",
        "cname": "古鲁破咒人",
        "set": "rna",
        "number": 459654,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Gyre Engineer",
        "cname": "涡旋工程师",
        "set": "rna",
        "number": 459655,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Mesmerizing Benthid",
        "cname": "催眠渊栖怪",
        "set": "rna",
        "number": 459518,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Doom Whisperer",
        "cname": "毁灭低语魔",
        "set": "grn",
        "number": 455150,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Persistent Petitioners",
        "cname": "执着诉愿人",
        "set": "rna",
        "number": 459519,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Chandra's Outburst",
        "cname": "茜卓的爆发",
        "set": "dom",
        "number": 445944,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Pyromantic Pilgrim",
        "cname": "烈焰朝圣客",
        "set": "dom",
        "number": 445946,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Firesong and Sunspeaker",
        "cname": "咏火与颂日",
        "set": "dom",
        "number": 445967,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Hired Poisoner",
        "cname": "雇佣投毒客",
        "set": "grn",
        "number": 455153,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ajani, Adversary of Tyrants",
        "cname": "抗暴阿耶尼",
        "set": "m19",
        "number": 449668,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ajani's Welcome",
        "cname": "阿耶尼相迎",
        "set": "m19",
        "number": 449671,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gideon's Sacrifice",
        "cname": "基定的牺牲",
        "set": "war",
        "number": 463317,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Lotleth Giant",
        "cname": "洛特离巨人",
        "set": "grn",
        "number": 455155,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Midnight Reaper",
        "cname": "午夜镰刀手",
        "set": "grn",
        "number": 455158,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Sage's Row Savant",
        "cname": "智者街学者",
        "set": "rna",
        "number": 459524,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Herald of Faith",
        "cname": "信念传令使",
        "set": "m19",
        "number": 449678,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Hieromancer's Cage",
        "cname": "圣术士囚笼",
        "set": "m19",
        "number": 449679,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Senate Courier",
        "cname": "参议院讯使",
        "set": "rna",
        "number": 459525,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Pilfering Imp",
        "cname": "偷窃小恶魔",
        "set": "grn",
        "number": 455162,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Price of Fame",
        "cname": "名誉的代价",
        "set": "grn",
        "number": 455164,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Hydroid Krasis",
        "cname": "水螅融合体",
        "set": "rna",
        "number": 459658,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Law-Rune Enforcer",
        "cname": "律印执法官",
        "set": "war",
        "number": 463323,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Spinal Centipede",
        "cname": "脊椎百足虫",
        "set": "grn",
        "number": 455167,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Undercity Necrolisk",
        "cname": "地底城尸蜥",
        "set": "grn",
        "number": 455168,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ashes of the Abhorrent",
        "cname": "异徒化尘",
        "set": "xln",
        "number": 437844,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Axis of Mortality",
        "cname": "凡命旋轴",
        "set": "xln",
        "number": 437845,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bishop of Rebirth",
        "cname": "重生主教",
        "set": "xln",
        "number": 437847,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bright Reprisal",
        "cname": "明光报复",
        "set": "xln",
        "number": 437849,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rising Populace",
        "cname": "起义民众",
        "set": "war",
        "number": 463332,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Emissary of Sunrise",
        "cname": "日升密使",
        "set": "xln",
        "number": 437852,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Encampment Keeper",
        "cname": "营地守卫",
        "set": "xln",
        "number": 437853,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Inspiring Cleric",
        "cname": "励志僧侣",
        "set": "xln",
        "number": 437858,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Legion's Judgment",
        "cname": "军团裁决",
        "set": "xln",
        "number": 437863,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": [
            "Legion's Landing",
            "Adanto, the First Fort"
        ],
        "cname": "军团登陆",
        "set": "xln",
        "number": [
            437864,
            437865
        ],
        "color": [
            "W"
        ],
        "others": "transform"
    },
    {
        "name": "Pious Interdiction",
        "cname": "虔诚禁制",
        "set": "xln",
        "number": 437869,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Priest of the Wakening Sun",
        "cname": "晓阳僧侣",
        "set": "xln",
        "number": 437870,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Queen's Commission",
        "cname": "女王任命",
        "set": "xln",
        "number": 437872,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rallying Roar",
        "cname": "奋扬咆哮",
        "set": "xln",
        "number": 437873,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ritual of Rejuvenation",
        "cname": "复春仪式",
        "set": "xln",
        "number": 437875,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sanguine Sacrament",
        "cname": "血色圣礼",
        "set": "xln",
        "number": 437876,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Settle the Wreckage",
        "cname": "处理残迹",
        "set": "xln",
        "number": 437877,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sheltering Light",
        "cname": "庇护光盾",
        "set": "xln",
        "number": 437878,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Slash of Talons",
        "cname": "利爪挥斩",
        "set": "xln",
        "number": 437881,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Wakening Sun's Avatar",
        "cname": "晓阳化身",
        "set": "xln",
        "number": 437887,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Air Elemental",
        "cname": "大气元素",
        "set": "xln",
        "number": 437888,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Arcane Adaptation",
        "cname": "玄秘适境",
        "set": "xln",
        "number": 437889,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Eternal Taskmaster",
        "cname": "永生工头",
        "set": "war",
        "number": 463393,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Chart a Course",
        "cname": "规划航路",
        "set": "xln",
        "number": 437891,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Depths of Desire",
        "cname": "欲望深渊",
        "set": "xln",
        "number": 437895,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Finale of Eternity",
        "cname": "永恒终时",
        "set": "war",
        "number": 463394,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Dreamcaller Siren",
        "cname": "致梦塞连",
        "set": "xln",
        "number": 437897,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Entrancing Melody",
        "cname": "摄魂旋律",
        "set": "xln",
        "number": 437898,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Favorable Winds",
        "cname": "眷顾之风",
        "set": "xln",
        "number": 437899,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Fleet Swallower",
        "cname": "吞舰巨鱼",
        "set": "xln",
        "number": 437900,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Headwater Sentries",
        "cname": "源流哨卫",
        "set": "xln",
        "number": 437901,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Herald of Secret Streams",
        "cname": "秘溪讯使",
        "set": "xln",
        "number": 437902,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "One With the Wind",
        "cname": "御风而行",
        "set": "xln",
        "number": 437907,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Overflowing Insight",
        "cname": "洞察满溢",
        "set": "xln",
        "number": 437909,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Perilous Voyage",
        "cname": "险恶旅程",
        "set": "xln",
        "number": 437910,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Prosperous Pirates",
        "cname": "丰获海盗",
        "set": "xln",
        "number": 437912,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "River's Rebuke",
        "cname": "河流拒斥",
        "set": "xln",
        "number": 437914,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sailor of Means",
        "cname": "通天水手",
        "set": "xln",
        "number": 437916,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Shore Keeper",
        "cname": "海岸守卫",
        "set": "xln",
        "number": 437921,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Siren Stormtamer",
        "cname": "息暴塞连",
        "set": "xln",
        "number": 437923,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Siren's Ruse",
        "cname": "塞连诈术",
        "set": "xln",
        "number": 437924,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Spell Pierce",
        "cname": "点破咒语",
        "set": "xln",
        "number": 437925,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Spell Swindle",
        "cname": "咒语欺诈",
        "set": "xln",
        "number": 437926,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Storm Sculptor",
        "cname": "风暴塑师",
        "set": "xln",
        "number": 437929,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Tempest Caller",
        "cname": "暴雨唤师",
        "set": "xln",
        "number": 437930,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Watertrap Weaver",
        "cname": "水阱织师",
        "set": "xln",
        "number": 437931,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Wind Strider",
        "cname": "驭风人鱼",
        "set": "xln",
        "number": 437932,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Anointed Deacon",
        "cname": "祝圣助祭",
        "set": "xln",
        "number": 437933,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Blight Keeper",
        "cname": "萎荒守卫",
        "set": "xln",
        "number": 437937,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Contract Killing",
        "cname": "雇凶杀人",
        "set": "xln",
        "number": 437940,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Costly Plunder",
        "cname": "昂贵劫夺",
        "set": "xln",
        "number": 437941,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Dark Nourishment",
        "cname": "黑暗滋养",
        "set": "xln",
        "number": 437942,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Deathless Ancient",
        "cname": "不亡先祖",
        "set": "xln",
        "number": 437945,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Grim Captain's Call",
        "cname": "司命召令",
        "set": "xln",
        "number": 437953,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Heartless Pillage",
        "cname": "无情劫掠",
        "set": "xln",
        "number": 437954,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Kitesail Freebooter",
        "cname": "航筝掠盗",
        "set": "xln",
        "number": 437955,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "March of the Drowned",
        "cname": "溺魂行伍",
        "set": "xln",
        "number": 437957,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Queen's Agent",
        "cname": "女王密探",
        "set": "xln",
        "number": 437959,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Raiders' Wake",
        "cname": "突袭残迹",
        "set": "xln",
        "number": 437961,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Revel in Riches",
        "cname": "拥财狂欢",
        "set": "xln",
        "number": 437962,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ruin Raider",
        "cname": "遗迹劫徒",
        "set": "xln",
        "number": 437963,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ruthless Knave",
        "cname": "无情诈徒",
        "set": "xln",
        "number": 437964,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Skulduggery",
        "cname": "阴谋诡计",
        "set": "xln",
        "number": 437968,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Spreading Rot",
        "cname": "凋萎散播",
        "set": "xln",
        "number": 437970,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Sword-Point Diplomacy",
        "cname": "剑尖外交",
        "set": "xln",
        "number": 437971,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Vanquish the Weak",
        "cname": "消亡弱者",
        "set": "xln",
        "number": 437972,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Walk the Plank",
        "cname": "逼上跳板",
        "set": "xln",
        "number": 437975,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Wanted Scoundrels",
        "cname": "遭缉无赖",
        "set": "xln",
        "number": 437976,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Burning Sun's Avatar",
        "cname": "炙阳化身",
        "set": "xln",
        "number": 437980,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Captivating Crew",
        "cname": "魅力船员",
        "set": "xln",
        "number": 437982,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Dinosaur Stampede",
        "cname": "恐龙狂奔",
        "set": "xln",
        "number": 437985,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Dual Shot",
        "cname": "接连射击",
        "set": "xln",
        "number": 437986,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Fiery Cannonade",
        "cname": "激烈炮击",
        "set": "xln",
        "number": 437988,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Fire Shrine Keeper",
        "cname": "炎祠守卫",
        "set": "xln",
        "number": 437989,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Headstrong Brute",
        "cname": "顽强蛮汉",
        "set": "xln",
        "number": 437992,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Lightning Strike",
        "cname": "闪电炼击",
        "set": "xln",
        "number": 437994,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Lightning-Rig Crew",
        "cname": "电擎船员",
        "set": "xln",
        "number": 437995,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Makeshift Munitions",
        "cname": "代用军火",
        "set": "xln",
        "number": 437996,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Nest Robber",
        "cname": "劫巢恐龙",
        "set": "xln",
        "number": 437997,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Repeating Barrage",
        "cname": "持续齐射",
        "set": "xln",
        "number": 438001,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Rowdy Crew",
        "cname": "喧闹船员",
        "set": "xln",
        "number": 438004,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Rummaging Goblin",
        "cname": "翻拣鬼怪",
        "set": "xln",
        "number": 438005,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Star of Extinction",
        "cname": "灭绝星落",
        "set": "xln",
        "number": 438006,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sun-Crowned Hunters",
        "cname": "旭冠猎龙",
        "set": "xln",
        "number": 438009,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sunbird's Invocation",
        "cname": "阳禽祝愿",
        "set": "xln",
        "number": 438010,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sure Strike",
        "cname": "必中一击",
        "set": "xln",
        "number": 438011,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Swashbuckling",
        "cname": "神气活现",
        "set": "xln",
        "number": 438012,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Trove of Temptation",
        "cname": "诱人珍宝",
        "set": "xln",
        "number": 438016,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Unfriendly Fire",
        "cname": "蓄意开火",
        "set": "xln",
        "number": 438017,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": [
            "Vance's Blasting Cannons",
            "Spitfire Bastion"
        ],
        "cname": "喷火堡垒",
        "set": "xln",
        "number": [
            438018,
            438019
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Wily Goblin",
        "cname": "狡诈鬼怪",
        "set": "xln",
        "number": 438020,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Blinding Fog",
        "cname": "蔽目浓雾",
        "set": "xln",
        "number": 438023,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Blossom Dryad",
        "cname": "盛花树灵",
        "set": "xln",
        "number": 438024,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Commune with Dinosaurs",
        "cname": "恐龙商谈",
        "set": "xln",
        "number": 438027,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Crash the Ramparts",
        "cname": "冲破壁垒",
        "set": "xln",
        "number": 438028,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Crushing Canopy",
        "cname": "树冠压袭",
        "set": "xln",
        "number": 438029,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Drover of the Mighty",
        "cname": "巨兽牧者",
        "set": "xln",
        "number": 438033,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Emergent Growth",
        "cname": "突发成长",
        "set": "xln",
        "number": 438034,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Merfolk Branchwalker",
        "cname": "缘木人鱼",
        "set": "xln",
        "number": 438044,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Old-Growth Dryads",
        "cname": "古生树灵",
        "set": "xln",
        "number": 438046,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Savage Stomp",
        "cname": "蛮野重跺",
        "set": "xln",
        "number": 438052,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Slice in Twain",
        "cname": "一刀两断",
        "set": "xln",
        "number": 438054,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Verdant Rebirth",
        "cname": "新绿重生",
        "set": "xln",
        "number": 438059,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Verdant Sun's Avatar",
        "cname": "青阳化身",
        "set": "xln",
        "number": 438060,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Wildgrowth Walker",
        "cname": "野生行客",
        "set": "xln",
        "number": 438063,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Call to the Feast",
        "cname": "盛宴邀令",
        "set": "xln",
        "number": 438066,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Hostage Taker",
        "cname": "人质挟匪",
        "set": "xln",
        "number": 438070,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sunblade Angel",
        "cname": "旭刃天使",
        "set": "war",
        "number": 463334,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Cobbled Wings",
        "cname": "拼凑翅翼",
        "set": "xln",
        "number": 438080,
        "color": [],
        "others": ""
    },
    {
        "name": [
            "Dowsing Dagger",
            "Lost Vale"
        ],
        "cname": "探源匕首",
        "set": "xln",
        "number": [
            438083,
            438084
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Fell Flagship",
        "cname": "极恶旗舰",
        "set": "xln",
        "number": 438087,
        "color": [],
        "others": ""
    },
    {
        "name": "Gilded Sentinel",
        "cname": "覆金哨卫",
        "set": "xln",
        "number": 438088,
        "color": [],
        "others": ""
    },
    {
        "name": "Hierophant's Chalice",
        "cname": "法皇圣杯",
        "set": "xln",
        "number": 438089,
        "color": [],
        "others": ""
    },
    {
        "name": "Pillar of Origins",
        "cname": "源始雕柱",
        "set": "xln",
        "number": 438090,
        "color": [],
        "others": ""
    },
    {
        "name": [
            "Primal Amulet",
            "Primal Wellspring"
        ],
        "cname": "原初涌泉",
        "set": "xln",
        "number": [
            438092,
            438093
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Prying Blade",
        "cname": "夺宝利刃",
        "set": "xln",
        "number": 438094,
        "color": [],
        "others": ""
    },
    {
        "name": [
            "Thaumatic Compass",
            "Spires of Orazca"
        ],
        "cname": "奇术罗盘",
        "set": "xln",
        "number": [
            438099,
            438100
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": [
            "Treasure Map",
            "Treasure Cove"
        ],
        "cname": "藏宝海湾",
        "set": "xln",
        "number": [
            438101,
            438102
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Dragonskull Summit",
        "cname": "龙颅山峰",
        "set": "xln",
        "number": 438104,
        "color": [],
        "others": ""
    },
    {
        "name": "Drowned Catacomb",
        "cname": "水没墓穴",
        "set": "xln",
        "number": 438105,
        "color": [],
        "others": ""
    },
    {
        "name": "Field of Ruin",
        "cname": "战场遗迹",
        "set": "xln",
        "number": 438106,
        "color": [],
        "others": ""
    },
    {
        "name": "Glacial Fortress",
        "cname": "冰河要塞",
        "set": "xln",
        "number": 438107,
        "color": [],
        "others": ""
    },
    {
        "name": "Rootbound Crag",
        "cname": "盘根峭壁",
        "set": "xln",
        "number": 438108,
        "color": [],
        "others": ""
    },
    {
        "name": "Sunpetal Grove",
        "cname": "日瓣树丛",
        "set": "xln",
        "number": 438109,
        "color": [],
        "others": ""
    },
    {
        "name": "Unclaimed Territory",
        "cname": "无主领地",
        "set": "xln",
        "number": 438110,
        "color": [],
        "others": ""
    },
    {
        "name": "Unknown Shores",
        "cname": "无闻海岸",
        "set": "xln",
        "number": 438111,
        "color": [],
        "others": ""
    },
    {
        "name": "Massacre Girl",
        "cname": "杀戮女郎",
        "set": "war",
        "number": 463402,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Spark Harvest",
        "cname": "收割火花",
        "set": "war",
        "number": 463408,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Tithebearer Giant",
        "cname": "征税巨人",
        "set": "war",
        "number": 463410,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Toll of the Invasion",
        "cname": "战乱忧愁",
        "set": "war",
        "number": 463411,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Unlikely Aid",
        "cname": "意外援助",
        "set": "war",
        "number": 463412,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Blindblast",
        "cname": "眩目冲击",
        "set": "war",
        "number": 463417,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Bolt Bend",
        "cname": "咒击偏折",
        "set": "war",
        "number": 463418,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Bond of Passion",
        "cname": "热情璧合",
        "set": "war",
        "number": 463419,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Burning Prophet",
        "cname": "灼热先知",
        "set": "war",
        "number": 463420,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Castaway's Despair",
        "cname": "落难丧志",
        "set": "xln",
        "number": 438133,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Grasping Current",
        "cname": "攫陷潮流",
        "set": "xln",
        "number": 438134,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Woodland Stream",
        "cname": "林地溪流",
        "set": "xln",
        "number": 438136,
        "color": [],
        "others": ""
    },
    {
        "name": "Sun-Blessed Mount",
        "cname": "日佑坐骑",
        "set": "xln",
        "number": 438140,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Baffling End",
        "cname": "不知所终",
        "set": "rix",
        "number": 441485,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bishop of Binding",
        "cname": "镇魂主教",
        "set": "rix",
        "number": 441486,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Blazing Hope",
        "cname": "耀目希望",
        "set": "rix",
        "number": 441487,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Cleansing Ray",
        "cname": "净化射线",
        "set": "rix",
        "number": 441488,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Divine Verdict",
        "cname": "明圣裁定",
        "set": "rix",
        "number": 441489,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Everdawn Champion",
        "cname": "霞辉斗士",
        "set": "rix",
        "number": 441490,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Forerunner of the Legion",
        "cname": "军团先驱",
        "set": "rix",
        "number": 441493,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Luminous Bonds",
        "cname": "光缕禁锢",
        "set": "rix",
        "number": 441496,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Moment of Triumph",
        "cname": "得胜之时",
        "set": "rix",
        "number": 441499,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Radiant Destiny",
        "cname": "辉煌命运",
        "set": "rix",
        "number": 441502,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Slaughter the Strong",
        "cname": "斩杀猛兽",
        "set": "rix",
        "number": 441506,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Squire's Devotion",
        "cname": "扈从随行",
        "set": "rix",
        "number": 441509,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sun Sentinel",
        "cname": "烈阳哨卫",
        "set": "rix",
        "number": 441510,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Admiral's Order",
        "cname": "总帅号令",
        "set": "rix",
        "number": 441515,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Aquatic Incursion",
        "cname": "水路入侵",
        "set": "rix",
        "number": 441516,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Crafty Cutpurse",
        "cname": "狡智扒手",
        "set": "rix",
        "number": 441517,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Crashing Tide",
        "cname": "覆顶潮浪",
        "set": "rix",
        "number": 441518,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Curious Obsession",
        "cname": "好奇求索",
        "set": "rix",
        "number": 441519,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Flood of Recollection",
        "cname": "回忆满盈",
        "set": "rix",
        "number": 441522,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Hornswoggle",
        "cname": "招摇撞骗",
        "set": "rix",
        "number": 441523,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Induced Amnesia",
        "cname": "引发失忆",
        "set": "rix",
        "number": 441524,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Kitesail Corsair",
        "cname": "航筝海盗",
        "set": "rix",
        "number": 441525,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Mist-Cloaked Herald",
        "cname": "雾隐传令",
        "set": "rix",
        "number": 441527,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Chandra, Fire Artisan",
        "cname": "炎技茜卓",
        "set": "war",
        "number": 463422,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Release to the Wind",
        "cname": "清风散形",
        "set": "rix",
        "number": 441530,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sailor of Means",
        "cname": "通天水手",
        "set": "rix",
        "number": 441533,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sea Legs",
        "cname": "如履平地",
        "set": "rix",
        "number": 441534,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Seafloor Oracle",
        "cname": "海床先知",
        "set": "rix",
        "number": 441535,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Silvergill Adept",
        "cname": "银鳃专家",
        "set": "rix",
        "number": 441537,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Siren Reaver",
        "cname": "掳掠塞连",
        "set": "rix",
        "number": 441538,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Slippery Scoundrel",
        "cname": "矫捷恶棍",
        "set": "rix",
        "number": 441539,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Topple the Statue",
        "cname": "推倒塑像",
        "set": "war",
        "number": 463338,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Spire Winder",
        "cname": "尖顶缠蟒",
        "set": "rix",
        "number": 441541,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sworn Guardian",
        "cname": "盟誓守卫",
        "set": "rix",
        "number": 441542,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Waterknot",
        "cname": "水结纠缠",
        "set": "rix",
        "number": 441545,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Arterial Flow",
        "cname": "血脉喷涌",
        "set": "rix",
        "number": 441546,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Canal Monitor",
        "cname": "运河巨蜥",
        "set": "rix",
        "number": 441547,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Champion of Dusk",
        "cname": "暮影斗士",
        "set": "rix",
        "number": 441548,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Dark Inquiry",
        "cname": "黑暗探寻",
        "set": "rix",
        "number": 441549,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Trusted Pegasus",
        "cname": "可靠飞马",
        "set": "war",
        "number": 463339,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dinosaur Hunter",
        "cname": "恐龙猎人",
        "set": "rix",
        "number": 441551,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Dusk Charger",
        "cname": "暮影战马",
        "set": "rix",
        "number": 441553,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Forerunner of the Coalition",
        "cname": "联盟先驱",
        "set": "rix",
        "number": 441556,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Golden Demise",
        "cname": "金光殒命",
        "set": "rix",
        "number": 441557,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Grasping Scoundrel",
        "cname": "贪婪恶棍",
        "set": "rix",
        "number": 441558,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Gruesome Fate",
        "cname": "可怖命运",
        "set": "rix",
        "number": 441559,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Mastermind's Acquisition",
        "cname": "主脑得逞",
        "set": "rix",
        "number": 441561,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Mausoleum Harpy",
        "cname": "陵墓哈痞",
        "set": "rix",
        "number": 441562,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Moment of Craving",
        "cname": "渴血之时",
        "set": "rix",
        "number": 441563,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Reaver Ambush",
        "cname": "掠盗突袭",
        "set": "rix",
        "number": 441567,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Chandra's Triumph",
        "cname": "茜卓得胜",
        "set": "war",
        "number": 463424,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Tomb Robber",
        "cname": "古墓袭兵",
        "set": "rix",
        "number": 441571,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Twilight Prophet",
        "cname": "暮光先知",
        "set": "rix",
        "number": 441572,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Vona's Hunger",
        "cname": "沃娜血欲",
        "set": "rix",
        "number": 441574,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Blood Sun",
        "cname": "腥红之日",
        "set": "rix",
        "number": 441576,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Bombard",
        "cname": "火炮轰击",
        "set": "rix",
        "number": 441577,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Buccaneer's Bravado",
        "cname": "海贼威势",
        "set": "rix",
        "number": 441580,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Forerunner of the Empire",
        "cname": "帝国先驱",
        "set": "rix",
        "number": 441586,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Form of the Dinosaur",
        "cname": "化身恐龙",
        "set": "rix",
        "number": 441587,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Trailblazer",
        "cname": "领路鬼怪",
        "set": "rix",
        "number": 441589,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Pirate's Pillage",
        "cname": "海盗掠夺",
        "set": "rix",
        "number": 441593,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Reckless Rage",
        "cname": "难遏怒火",
        "set": "rix",
        "number": 441594,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Rekindling Phoenix",
        "cname": "复焰凤凰",
        "set": "rix",
        "number": 441595,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "See Red",
        "cname": "勃然大怒",
        "set": "rix",
        "number": 441596,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Shake the Foundations",
        "cname": "地表震颤",
        "set": "rix",
        "number": 441597,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Swaggering Corsair",
        "cname": "神气海盗",
        "set": "rix",
        "number": 441603,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Aggressive Urge",
        "cname": "攻性驱策",
        "set": "rix",
        "number": 441606,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Jace's Projection",
        "cname": "杰斯幻身",
        "set": "war",
        "number": 463938,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Cherished Hatchling",
        "cname": "受护幼雏",
        "set": "rix",
        "number": 441608,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Enter the Unknown",
        "cname": "踏入迷境",
        "set": "rix",
        "number": 441612,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Hardy Veteran",
        "cname": "勇猛老兵",
        "set": "rix",
        "number": 441616,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Hunt the Weak",
        "cname": "猎捕弱者",
        "set": "rix",
        "number": 441617,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Jade Bearer",
        "cname": "翠玉传人",
        "set": "rix",
        "number": 441618,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Jadecraft Artisan",
        "cname": "雕玉工匠",
        "set": "rix",
        "number": 441619,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Jungleborn Pioneer",
        "cname": "林生前锋",
        "set": "rix",
        "number": 441621,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Naturalize",
        "cname": "回归自然",
        "set": "rix",
        "number": 441623,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Path of Discovery",
        "cname": "发现之径",
        "set": "rix",
        "number": 441626,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Plummet",
        "cname": "铅直落下",
        "set": "rix",
        "number": 441627,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Strength of the Pack",
        "cname": "击群之力",
        "set": "rix",
        "number": 441629,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Swift Warden",
        "cname": "迅捷护卫",
        "set": "rix",
        "number": 441630,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Tendershoot Dryad",
        "cname": "新叶树灵",
        "set": "rix",
        "number": 441631,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Thunderherd Migration",
        "cname": "霆群迁徙",
        "set": "rix",
        "number": 441633,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Dreadmalkin",
        "cname": "恐怖斑猫",
        "set": "war",
        "number": 463390,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": [
            "Journey to Eternity",
            "Atzal, Cave of Eternity"
        ],
        "cname": "追寻永生",
        "set": "rix",
        "number": [
            441645,
            441646
        ],
        "color": [
            "B",
            "G"
        ],
        "others": "transform"
    },
    {
        "name": "Legion Lieutenant",
        "cname": "军团尉官",
        "set": "rix",
        "number": 441649,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Merfolk Mistbinder",
        "cname": "雾锁人鱼",
        "set": "rix",
        "number": 441650,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": [
            "Path of Mettle",
            "Metzali, Tower of Triumph"
        ],
        "cname": "艰困路途",
        "set": "rix",
        "number": [
            441651,
            441652
        ],
        "color": [
            "R",
            "W"
        ],
        "others": "transform"
    },
    {
        "name": [
            "Profane Procession",
            "Tomb of the Dusk Rose"
        ],
        "cname": "渎神行列",
        "set": "rix",
        "number": [
            441653,
            441654
        ],
        "color": [
            "B",
            "W"
        ],
        "others": "transform"
    },
    {
        "name": "Resplendent Griffin",
        "cname": "华辉狮鹫",
        "set": "rix",
        "number": 441658,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": [
            "Storm the Vault",
            "Vault of Catlacan"
        ],
        "cname": "突袭宝库",
        "set": "rix",
        "number": [
            441661,
            441662
        ],
        "color": [
            "R",
            "U"
        ],
        "others": "transform"
    },
    {
        "name": [
            "Azor's Gateway",
            "Sanctum of the Sun"
        ],
        "cname": "圣阳圣所",
        "set": "rix",
        "number": [
            441665,
            441666
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": [
            "Azor's Gateway",
            "Sanctum of the Sun"
        ],
        "cname": "俄佐闸门",
        "set": "rix",
        "number": [
            441665,
            441666
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Gleaming Barrier",
        "cname": "金光屏障",
        "set": "rix",
        "number": 441668,
        "color": [],
        "others": ""
    },
    {
        "name": "The Immortal Sun",
        "cname": "永生圣阳",
        "set": "rix",
        "number": 441671,
        "color": [],
        "others": ""
    },
    {
        "name": "Silent Gravestone",
        "cname": "肃穆墓碑",
        "set": "rix",
        "number": 441673,
        "color": [],
        "others": ""
    },
    {
        "name": "Evolving Wilds",
        "cname": "成形野地",
        "set": "rix",
        "number": 441677,
        "color": [],
        "others": ""
    },
    {
        "name": "Forsaken Sanctuary",
        "cname": "遭弃圣殿",
        "set": "rix",
        "number": 441678,
        "color": [],
        "others": ""
    },
    {
        "name": "Foul Orchard",
        "cname": "邪秽果园",
        "set": "rix",
        "number": 441679,
        "color": [],
        "others": ""
    },
    {
        "name": "Highland Lake",
        "cname": "高地湖泊",
        "set": "rix",
        "number": 441680,
        "color": [],
        "others": ""
    },
    {
        "name": "War Screecher",
        "cname": "战鸣猎鹰",
        "set": "war",
        "number": 463342,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Woodland Stream",
        "cname": "林地溪流",
        "set": "rix",
        "number": 441682,
        "color": [],
        "others": ""
    },
    {
        "name": "Finale of Promise",
        "cname": "允诺终时",
        "set": "war",
        "number": 463430,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Assailant",
        "cname": "逞凶鬼怪",
        "set": "war",
        "number": 463431,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Swab Goblin",
        "cname": "鬼怪水手",
        "set": "rix",
        "number": 441978,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Cinder Barrens",
        "cname": "煤烬瘠地",
        "set": "rix",
        "number": 441980,
        "color": [],
        "others": ""
    },
    {
        "name": "Adamant Will",
        "cname": "坚定意志",
        "set": "dom",
        "number": 445311,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Aven Sentry",
        "cname": "艾文哨兵",
        "set": "dom",
        "number": 445312,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Blessed Light",
        "cname": "受福明光",
        "set": "dom",
        "number": 445316,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Call the Cavalry",
        "cname": "召集骑队",
        "set": "dom",
        "number": 445318,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dauntless Bodyguard",
        "cname": "不屈护卫",
        "set": "dom",
        "number": 445323,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Grim Initiate",
        "cname": "残酷祀徒",
        "set": "war",
        "number": 463433,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Excavation Elephant",
        "cname": "挖掘驮象",
        "set": "dom",
        "number": 445326,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Healing Grace",
        "cname": "疗伤光辉",
        "set": "dom",
        "number": 445329,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Invoke the Divine",
        "cname": "召现神力",
        "set": "dom",
        "number": 445331,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Knight of Grace",
        "cname": "美善骑士",
        "set": "dom",
        "number": 445332,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Pegasus Courser",
        "cname": "飞天骏马",
        "set": "dom",
        "number": 445338,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sanctum Spirit",
        "cname": "圣所精怪",
        "set": "dom",
        "number": 445339,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Heartfire",
        "cname": "心源烈焰",
        "set": "war",
        "number": 463434,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Serra Angel",
        "cname": "撒拉天使",
        "set": "dom",
        "number": 445342,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Serra Disciple",
        "cname": "撒拉信徒",
        "set": "dom",
        "number": 445343,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Tragic Poet",
        "cname": "悲剧诗人",
        "set": "dom",
        "number": 445346,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Academy Drake",
        "cname": "学院龙兽",
        "set": "dom",
        "number": 445349,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Arcane Flight",
        "cname": "翔空秘法",
        "set": "dom",
        "number": 445352,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Befuddle",
        "cname": "困惑不已",
        "set": "dom",
        "number": 445354,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Blink of an Eye",
        "cname": "眨眼即逝",
        "set": "dom",
        "number": 445355,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Curator's Ward",
        "cname": "馆长守护",
        "set": "dom",
        "number": 445358,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Deep Freeze",
        "cname": "急冻深寒",
        "set": "dom",
        "number": 445359,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Precognition Field",
        "cname": "预见力场",
        "set": "dom",
        "number": 445370,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Invading Manticore",
        "cname": "侵攻蝎狮",
        "set": "war",
        "number": 463437,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Weight of Memory",
        "cname": "记忆之重",
        "set": "dom",
        "number": 445383,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Wizard's Retort",
        "cname": "法师驳击",
        "set": "dom",
        "number": 445384,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dark Bargain",
        "cname": "黯境交易",
        "set": "dom",
        "number": 445392,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Demonic Vigor",
        "cname": "恶魔活力",
        "set": "dom",
        "number": 445394,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Mizzium Tank",
        "cname": "米捷战车",
        "set": "war",
        "number": 463441,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Dread Shade",
        "cname": "恐惧阴魂",
        "set": "dom",
        "number": 445397,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Drudge Sentinel",
        "cname": "苦力哨卫",
        "set": "dom",
        "number": 445398,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "The Eldest Reborn",
        "cname": "恶源重生",
        "set": "dom",
        "number": 445399,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Eviscerate",
        "cname": "摘胆剜心",
        "set": "dom",
        "number": 445400,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Final Parting",
        "cname": "生离死别",
        "set": "dom",
        "number": 445402,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Fungal Infection",
        "cname": "真菌感染",
        "set": "dom",
        "number": 445403,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Knight of Malice",
        "cname": "恶意骑士",
        "set": "dom",
        "number": 445406,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Lich's Mastery",
        "cname": "巫妖掌控",
        "set": "dom",
        "number": 445407,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Lingering Phantom",
        "cname": "徘徊幻影",
        "set": "dom",
        "number": 445408,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Rat Colony",
        "cname": "老鼠群落",
        "set": "dom",
        "number": 445410,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Settle the Score",
        "cname": "最终了断",
        "set": "dom",
        "number": 445412,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Soul Salvage",
        "cname": "回收灵魂",
        "set": "dom",
        "number": 445413,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Vicious Offering",
        "cname": "邪恶献祭",
        "set": "dom",
        "number": 445419,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Windgrace Acolyte",
        "cname": "风华侍僧",
        "set": "dom",
        "number": 445421,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Champion of the Flame",
        "cname": "源火斗士",
        "set": "dom",
        "number": 445425,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Fervent Strike",
        "cname": "激昂一击",
        "set": "dom",
        "number": 445426,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Fiery Intervention",
        "cname": "火热干预",
        "set": "dom",
        "number": 445427,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Fight with Fire",
        "cname": "耀火扬威",
        "set": "dom",
        "number": 445428,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Firefist Adept",
        "cname": "烈掌专家",
        "set": "dom",
        "number": 445430,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "The First Eruption",
        "cname": "创世涌动",
        "set": "dom",
        "number": 445431,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Frenzied Rage",
        "cname": "狂热怒火",
        "set": "dom",
        "number": 445433,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Barrage",
        "cname": "鬼怪齐射",
        "set": "dom",
        "number": 445437,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Chainwhirler",
        "cname": "舞链鬼怪",
        "set": "dom",
        "number": 445438,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Haphazard Bombardment",
        "cname": "胡乱轰炸",
        "set": "dom",
        "number": 445440,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Radiating Lightning",
        "cname": "放射闪电",
        "set": "dom",
        "number": 445447,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Run Amok",
        "cname": "横冲直撞",
        "set": "dom",
        "number": 445449,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Seismic Shift",
        "cname": "地动变境",
        "set": "dom",
        "number": 445450,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Shivan Fire",
        "cname": "西瓦烈焰",
        "set": "dom",
        "number": 445451,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Aven Eternal",
        "cname": "永生艾文",
        "set": "war",
        "number": 463345,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Squee, the Immortal",
        "cname": "不死斯奎",
        "set": "dom",
        "number": 445455,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Two-Headed Giant",
        "cname": "双头巨人",
        "set": "dom",
        "number": 445456,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Warcry Phoenix",
        "cname": "战嚎凤凰",
        "set": "dom",
        "number": 445459,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Warlord's Fury",
        "cname": "军阀怒火",
        "set": "dom",
        "number": 445460,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Wizard's Lightning",
        "cname": "法师雷击",
        "set": "dom",
        "number": 445461,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Adventurous Impulse",
        "cname": "冒险冲动",
        "set": "dom",
        "number": 445462,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ancient Animus",
        "cname": "远古原心",
        "set": "dom",
        "number": 445463,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Arbor Armament",
        "cname": "乔木战具",
        "set": "dom",
        "number": 445464,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Broken Bond",
        "cname": "缘尽而去",
        "set": "dom",
        "number": 445466,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Corrosive Ooze",
        "cname": "腐蚀流浆",
        "set": "dom",
        "number": 445467,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Fungal Plots",
        "cname": "真菌策谋",
        "set": "dom",
        "number": 445469,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gift of Growth",
        "cname": "成长赋礼",
        "set": "dom",
        "number": 445472,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Grow from the Ashes",
        "cname": "死灰新生",
        "set": "dom",
        "number": 445473,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Llanowar Elves",
        "cname": "罗堰妖精",
        "set": "dom",
        "number": 445477,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Llanowar Envoy",
        "cname": "罗堰使节",
        "set": "dom",
        "number": 445478,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Llanowar Scout",
        "cname": "罗堰斥候",
        "set": "dom",
        "number": 445479,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Mammoth Spider",
        "cname": "庞巨蜘蛛",
        "set": "dom",
        "number": 445480,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Nature's Spiral",
        "cname": "自然回旋",
        "set": "dom",
        "number": 445484,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Pierce the Sky",
        "cname": "划破苍穹",
        "set": "dom",
        "number": 445485,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Primordial Wurm",
        "cname": "原初亚龙",
        "set": "dom",
        "number": 445486,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Saproling Migration",
        "cname": "腐生迁徙",
        "set": "dom",
        "number": 445487,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Spore Swarm",
        "cname": "孢子大群",
        "set": "dom",
        "number": 445489,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Steel Leaf Champion",
        "cname": "钢叶斗士",
        "set": "dom",
        "number": 445491,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Sylvan Awakening",
        "cname": "森林觉醒",
        "set": "dom",
        "number": 445492,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Thorn Elemental",
        "cname": "刺棘元素",
        "set": "dom",
        "number": 445494,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Untamed Kavu",
        "cname": "野性卡甫",
        "set": "dom",
        "number": 445495,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Verdant Force",
        "cname": "新绿使者",
        "set": "dom",
        "number": 445496,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Wild Onslaught",
        "cname": "荒野猛攻",
        "set": "dom",
        "number": 445497,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Garna, the Bloodflame",
        "cname": "炎脉加娜",
        "set": "dom",
        "number": 445503,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Amaranthine Wall",
        "cname": "不朽之壁",
        "set": "dom",
        "number": 445519,
        "color": [],
        "others": ""
    },
    {
        "name": "Blackblade Reforged",
        "cname": "重铸乌锋",
        "set": "dom",
        "number": 445520,
        "color": [],
        "others": ""
    },
    {
        "name": "Bloodtallow Candle",
        "cname": "鲜血蜡烛",
        "set": "dom",
        "number": 445521,
        "color": [],
        "others": ""
    },
    {
        "name": "Damping Sphere",
        "cname": "滞阻法球",
        "set": "dom",
        "number": 445522,
        "color": [],
        "others": ""
    },
    {
        "name": "Forebear's Blade",
        "cname": "先人之剑",
        "set": "dom",
        "number": 445523,
        "color": [],
        "others": ""
    },
    {
        "name": "Gilded Lotus",
        "cname": "金箔莲花",
        "set": "dom",
        "number": 445524,
        "color": [],
        "others": ""
    },
    {
        "name": "Helm of the Host",
        "cname": "军团之盔",
        "set": "dom",
        "number": 445526,
        "color": [],
        "others": ""
    },
    {
        "name": "Howling Golem",
        "cname": "嚎叫魔像",
        "set": "dom",
        "number": 445527,
        "color": [],
        "others": ""
    },
    {
        "name": "Juggernaut",
        "cname": "攻城巨车",
        "set": "dom",
        "number": 445531,
        "color": [],
        "others": ""
    },
    {
        "name": "Mox Amber",
        "cname": "琥珀玛珂",
        "set": "dom",
        "number": 445533,
        "color": [],
        "others": ""
    },
    {
        "name": "Shield of the Realm",
        "cname": "圣域坚盾",
        "set": "dom",
        "number": 445537,
        "color": [],
        "others": ""
    },
    {
        "name": "Sorcerer's Wand",
        "cname": "术士魔杖",
        "set": "dom",
        "number": 445540,
        "color": [],
        "others": ""
    },
    {
        "name": "Voltaic Servant",
        "cname": "电压仆从",
        "set": "dom",
        "number": 445545,
        "color": [],
        "others": ""
    },
    {
        "name": "Bond of Insight",
        "cname": "洞察璧合",
        "set": "war",
        "number": 463346,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Cabal Stronghold",
        "cname": "柯帮城塞",
        "set": "dom",
        "number": 445547,
        "color": [],
        "others": ""
    },
    {
        "name": "Hinterland Harbor",
        "cname": "内陆港湾",
        "set": "dom",
        "number": 445549,
        "color": [],
        "others": ""
    },
    {
        "name": "Sulfur Falls",
        "cname": "硫磺瀑布",
        "set": "dom",
        "number": 445556,
        "color": [],
        "others": ""
    },
    {
        "name": "Woodland Cemetery",
        "cname": "林地墓园",
        "set": "dom",
        "number": 445557,
        "color": [],
        "others": ""
    },
    {
        "name": "Sarkhan the Masterless",
        "cname": "破箝萨坎",
        "set": "war",
        "number": 463446,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Spellgorger Weird",
        "cname": "咒润怪奇",
        "set": "war",
        "number": 463448,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Band Together",
        "cname": "携手出击",
        "set": "war",
        "number": 463456,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Bloom Hulk",
        "cname": "绽花巨体",
        "set": "war",
        "number": 463457,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Bond of Flourishing",
        "cname": "茁壮璧合",
        "set": "war",
        "number": 463458,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Challenger Troll",
        "cname": "好斗巨魔",
        "set": "war",
        "number": 463460,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Courage in Crisis",
        "cname": "临危不惧",
        "set": "war",
        "number": 463461,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Evolution Sage",
        "cname": "演化智者",
        "set": "war",
        "number": 463462,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Finale of Devastation",
        "cname": "幻灭终时",
        "set": "war",
        "number": 463463,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Temporal Machinations",
        "cname": "时间计谋",
        "set": "dom",
        "number": 445939,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Meandering River",
        "cname": "蜿蜒河流",
        "set": "dom",
        "number": 445942,
        "color": [],
        "others": ""
    },
    {
        "name": "Timber Gorge",
        "cname": "林场峡谷",
        "set": "dom",
        "number": 445947,
        "color": [],
        "others": ""
    },
    {
        "name": "Aegis of the Heavens",
        "cname": "天国庇佑",
        "set": "m19",
        "number": 449666,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Angel of the Dawn",
        "cname": "黎明天使",
        "set": "m19",
        "number": 449672,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Cavalry Drillmaster",
        "cname": "骑兵教官",
        "set": "m19",
        "number": 449673,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Cleansing Nova",
        "cname": "涤净散华",
        "set": "m19",
        "number": 449674,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Daybreak Chaplain",
        "cname": "破晓教士",
        "set": "m19",
        "number": 449675,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dwarven Priest",
        "cname": "矮人僧侣",
        "set": "m19",
        "number": 449676,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gallant Cavalry",
        "cname": "华铠骑兵",
        "set": "m19",
        "number": 449677,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Inspired Charge",
        "cname": "鼓舞冲锋",
        "set": "m19",
        "number": 449680,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Invoke the Divine",
        "cname": "召现神力",
        "set": "m19",
        "number": 449681,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Forced Landing",
        "cname": "强令着陆",
        "set": "war",
        "number": 463464,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Knight of the Tusk",
        "cname": "战象骑士",
        "set": "m19",
        "number": 449683,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Knight's Pledge",
        "cname": "骑士誓言",
        "set": "m19",
        "number": 449684,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Knightly Valor",
        "cname": "骑士骁勇",
        "set": "m19",
        "number": 449685,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Leonin Vanguard",
        "cname": "狮族先锋",
        "set": "m19",
        "number": 449687,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Leonin Warleader",
        "cname": "领战狮族",
        "set": "m19",
        "number": 449688,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Loxodon Line Breaker",
        "cname": "破阵象族",
        "set": "m19",
        "number": 449689,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Luminous Bonds",
        "cname": "光缕禁锢",
        "set": "m19",
        "number": 449690,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Make a Stand",
        "cname": "奋勇抗敌",
        "set": "m19",
        "number": 449691,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Mentor of the Meek",
        "cname": "驯良明师",
        "set": "m19",
        "number": 449692,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Mighty Leap",
        "cname": "大步飞跃",
        "set": "m19",
        "number": 449693,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Militia Bugler",
        "cname": "司号民兵",
        "set": "m19",
        "number": 449694,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Novice Knight",
        "cname": "新手骑士",
        "set": "m19",
        "number": 449695,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Pegasus Courser",
        "cname": "飞天骏马",
        "set": "m19",
        "number": 449697,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Remorseful Cleric",
        "cname": "悔恨僧侣",
        "set": "m19",
        "number": 449698,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Resplendent Angel",
        "cname": "华辉天使",
        "set": "m19",
        "number": 449699,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Revitalize",
        "cname": "再现活力",
        "set": "m19",
        "number": 449700,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rustwing Falcon",
        "cname": "褐翼猎鹰",
        "set": "m19",
        "number": 449701,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Shield Mare",
        "cname": "盾护牝马",
        "set": "m19",
        "number": 449702,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Star-Crowned Stag",
        "cname": "星冠麋鹿",
        "set": "m19",
        "number": 449703,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Callous Dismissal",
        "cname": "冷酷驱散",
        "set": "war",
        "number": 463347,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Trusty Packbeast",
        "cname": "可靠驮兽",
        "set": "m19",
        "number": 449706,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Valiant Knight",
        "cname": "英勇骑士",
        "set": "m19",
        "number": 449707,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Aether Tunnel",
        "cname": "乙太通道",
        "set": "m19",
        "number": 449708,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Anticipate",
        "cname": "预先考虑",
        "set": "m19",
        "number": 449709,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Aviation Pioneer",
        "cname": "翔空先驱",
        "set": "m19",
        "number": 449711,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Bone to Ash",
        "cname": "白骨化灰",
        "set": "m19",
        "number": 449712,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Departed Deckhand",
        "cname": "灵异水手",
        "set": "m19",
        "number": 449714,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Kraul Stinger",
        "cname": "螫刺刻洛",
        "set": "war",
        "number": 463468,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Djinn of Wishes",
        "cname": "祈愿巨灵",
        "set": "m19",
        "number": 449717,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Essence Scatter",
        "cname": "菁华离散",
        "set": "m19",
        "number": 449719,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Exclusion Mage",
        "cname": "排拒法师",
        "set": "m19",
        "number": 449720,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Gearsmith Prodigy",
        "cname": "工匠逸才",
        "set": "m19",
        "number": 449722,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Ghostform",
        "cname": "鬼影形体",
        "set": "m19",
        "number": 449723,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Horizon Scholar",
        "cname": "天际学者",
        "set": "m19",
        "number": 449724,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Metamorphic Alteration",
        "cname": "拟形变幻",
        "set": "m19",
        "number": 449725,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Commence the Endgame",
        "cname": "终谋始动",
        "set": "war",
        "number": 463348,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Contentious Plan",
        "cname": "争议计划",
        "set": "war",
        "number": 463349,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Omenspeaker",
        "cname": "示兆先知",
        "set": "m19",
        "number": 449729,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Omniscience",
        "cname": "全知全能",
        "set": "m19",
        "number": 449730,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "One with the Machine",
        "cname": "机械融合",
        "set": "m19",
        "number": 449731,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Patient Rebuilding",
        "cname": "耐心复原",
        "set": "m19",
        "number": 449732,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Psychic Corrosion",
        "cname": "心灵侵蚀",
        "set": "m19",
        "number": 449733,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Crush Dissent",
        "cname": "打压异见",
        "set": "war",
        "number": 463350,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Scholar of Stars",
        "cname": "星相学者",
        "set": "m19",
        "number": 449736,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Snapping Drake",
        "cname": "闪光龙兽",
        "set": "m19",
        "number": 449740,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Supreme Phantom",
        "cname": "超凡幽魅",
        "set": "m19",
        "number": 449741,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Surge Mare",
        "cname": "兴潮牝马",
        "set": "m19",
        "number": 449742,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Switcheroo",
        "cname": "私密交换",
        "set": "m19",
        "number": 449743,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Totally Lost",
        "cname": "完全迷途",
        "set": "m19",
        "number": 449746,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Uncomfortable Chill",
        "cname": "不适冰寒",
        "set": "m19",
        "number": 449747,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Abnormal Endurance",
        "cname": "异常耐力",
        "set": "m19",
        "number": 449750,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Blood Divination",
        "cname": "鲜血占卦",
        "set": "m19",
        "number": 449751,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Bone Dragon",
        "cname": "骸骨巨龙",
        "set": "m19",
        "number": 449753,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Child of Night",
        "cname": "暗夜之子",
        "set": "m19",
        "number": 449754,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Death Baron",
        "cname": "死亡爵主",
        "set": "m19",
        "number": 449755,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Demon of Catastrophes",
        "cname": "灾变恶魔",
        "set": "m19",
        "number": 449756,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Doomed Dissenter",
        "cname": "注亡逆徒",
        "set": "m19",
        "number": 449758,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Epicure of Blood",
        "cname": "鲜血饕客",
        "set": "m19",
        "number": 449760,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Fell Specter",
        "cname": "骇人幽灵",
        "set": "m19",
        "number": 449761,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Fraying Omnipotence",
        "cname": "全能渐散",
        "set": "m19",
        "number": 449762,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Finale of Revelation",
        "cname": "预示终时",
        "set": "war",
        "number": 463354,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Graveyard Marshal",
        "cname": "坟场元帅",
        "set": "m19",
        "number": 449764,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Hired Blade",
        "cname": "雇剑打手",
        "set": "m19",
        "number": 449765,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Infernal Reckoning",
        "cname": "狱境报复",
        "set": "m19",
        "number": 449767,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Infernal Scarring",
        "cname": "炼狱留痕",
        "set": "m19",
        "number": 449768,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Lich's Caress",
        "cname": "巫妖抚慰",
        "set": "m19",
        "number": 449770,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Nissa, Who Shakes the World",
        "cname": "撼世妮莎",
        "set": "war",
        "number": 463472,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Nightmare's Thirst",
        "cname": "梦魇饥渴",
        "set": "m19",
        "number": 449776,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Open the Graves",
        "cname": "开坟现墓",
        "set": "m19",
        "number": 449777,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Plague Mare",
        "cname": "散疫牝马",
        "set": "m19",
        "number": 449779,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ravenous Harpy",
        "cname": "贪婪哈痞",
        "set": "m19",
        "number": 449780,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Rise from the Grave",
        "cname": "坟场复生",
        "set": "m19",
        "number": 449782,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Sovereign's Bite",
        "cname": "君王啮咬",
        "set": "m19",
        "number": 449785,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Strangling Spores",
        "cname": "窒息芽孢",
        "set": "m19",
        "number": 449787,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Two-Headed Zombie",
        "cname": "双头灵俑",
        "set": "m19",
        "number": 449788,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Vampire Neonate",
        "cname": "吸血稚儿",
        "set": "m19",
        "number": 449789,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Vampire Sovereign",
        "cname": "吸血君王",
        "set": "m19",
        "number": 449790,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Nissa's Triumph",
        "cname": "妮莎得胜",
        "set": "war",
        "number": 463473,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Alpine Moon",
        "cname": "月轮山影",
        "set": "m19",
        "number": 449793,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Apex of Power",
        "cname": "无上力量",
        "set": "m19",
        "number": 449794,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Boggart Brute",
        "cname": "波尬蛮汉",
        "set": "m19",
        "number": 449796,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Catalyst Elemental",
        "cname": "触媒元素",
        "set": "m19",
        "number": 449797,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Crash Through",
        "cname": "全力突破",
        "set": "m19",
        "number": 449798,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Dark-Dweller Oracle",
        "cname": "暗栖先知",
        "set": "m19",
        "number": 449799,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Demanding Dragon",
        "cname": "索祭巨龙",
        "set": "m19",
        "number": 449800,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Jace, Wielder of Mysteries",
        "cname": "博奥杰斯",
        "set": "war",
        "number": 463357,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Planewide Celebration",
        "cname": "普世欢腾",
        "set": "war",
        "number": 463475,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Fiery Finish",
        "cname": "火热终局",
        "set": "m19",
        "number": 449805,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Jace's Triumph",
        "cname": "杰斯得胜",
        "set": "war",
        "number": 463358,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Goblin Instigator",
        "cname": "煽动鬼怪",
        "set": "m19",
        "number": 449807,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Motivator",
        "cname": "激励鬼怪",
        "set": "m19",
        "number": 449808,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Trashmaster",
        "cname": "坏物鬼怪",
        "set": "m19",
        "number": 449809,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Havoc Devils",
        "cname": "浩劫魔鬼",
        "set": "m19",
        "number": 449811,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Lightning Mare",
        "cname": "霹雳牝马",
        "set": "m19",
        "number": 449816,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Lightning Strike",
        "cname": "闪电炼击",
        "set": "m19",
        "number": 449817,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sarkhan, Fireblood",
        "cname": "炎血萨坎",
        "set": "m19",
        "number": 449819,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sarkhan's Unsealing",
        "cname": "萨坎解印",
        "set": "m19",
        "number": 449820,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Primordial Wurm",
        "cname": "原初亚龙",
        "set": "war",
        "number": 463477,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Siegebreaker Giant",
        "cname": "破围巨人",
        "set": "m19",
        "number": 449822,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Return to Nature",
        "cname": "回返自然",
        "set": "war",
        "number": 463478,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Sparktongue Dragon",
        "cname": "啸电巨龙",
        "set": "m19",
        "number": 449824,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sure Strike",
        "cname": "必中一击",
        "set": "m19",
        "number": 449826,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Tectonic Rift",
        "cname": "地壳迸裂",
        "set": "m19",
        "number": 449827,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Thud",
        "cname": "掷物有声",
        "set": "m19",
        "number": 449828,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Tormenting Voice",
        "cname": "折磨幽声",
        "set": "m19",
        "number": 449829,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Trumpet Blast",
        "cname": "号角震天",
        "set": "m19",
        "number": 449830,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Volley Veteran",
        "cname": "齐射老手",
        "set": "m19",
        "number": 449833,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Bristling Boar",
        "cname": "鬃毛野猪",
        "set": "m19",
        "number": 449835,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Centaur Courser",
        "cname": "半人骏马",
        "set": "m19",
        "number": 449836,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Colossal Majesty",
        "cname": "巨兽扬威",
        "set": "m19",
        "number": 449838,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Daggerback Basilisk",
        "cname": "匕背蜥怪",
        "set": "m19",
        "number": 449839,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Declare Dominance",
        "cname": "宣示威权",
        "set": "m19",
        "number": 449840,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Dryad Greenseeker",
        "cname": "寻碧树灵",
        "set": "m19",
        "number": 449843,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Elvish Clancaller",
        "cname": "唤族妖精",
        "set": "m19",
        "number": 449844,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Elvish Rejuvenator",
        "cname": "回春妖精",
        "set": "m19",
        "number": 449845,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Giant Spider",
        "cname": "巨型蜘蛛",
        "set": "m19",
        "number": 449848,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gift of Paradise",
        "cname": "天堂赋礼",
        "set": "m19",
        "number": 449849,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Naga Eternal",
        "cname": "永生那伽",
        "set": "war",
        "number": 463363,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Greenwood Sentinel",
        "cname": "翠林哨兵",
        "set": "m19",
        "number": 449852,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Highland Game",
        "cname": "高地猎物",
        "set": "m19",
        "number": 449853,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Naturalize",
        "cname": "回归自然",
        "set": "m19",
        "number": 449855,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Oakenform",
        "cname": "橡树形体",
        "set": "m19",
        "number": 449856,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Plummet",
        "cname": "铅直落下",
        "set": "m19",
        "number": 449858,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Prodigious Growth",
        "cname": "异常成长",
        "set": "m19",
        "number": 449859,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Rabid Bite",
        "cname": "狂疾啃咬",
        "set": "m19",
        "number": 449860,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Reclamation Sage",
        "cname": "复碧智者",
        "set": "m19",
        "number": 449861,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Recollect",
        "cname": "重拾记忆",
        "set": "m19",
        "number": 449862,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Rhox Oracle",
        "cname": "罗克先知",
        "set": "m19",
        "number": 449863,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Root Snare",
        "cname": "重根绊索",
        "set": "m19",
        "number": 449864,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Steady Aim",
        "cname": "沉稳瞄准",
        "set": "war",
        "number": 463480,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Talons of Wildwood",
        "cname": "野林利爪",
        "set": "m19",
        "number": 449867,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Thorn Lieutenant",
        "cname": "荆棘副官",
        "set": "m19",
        "number": 449868,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Thornhide Wolves",
        "cname": "荆皮群狼",
        "set": "m19",
        "number": 449869,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Titanic Growth",
        "cname": "巨力成长",
        "set": "m19",
        "number": 449870,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vine Mare",
        "cname": "藤蔓牝马",
        "set": "m19",
        "number": 449872,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Draconic Disciple",
        "cname": "巨龙信徒",
        "set": "m19",
        "number": 449880,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Enigma Drake",
        "cname": "谜翼龙兽",
        "set": "m19",
        "number": 449881,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Heroic Reinforcements",
        "cname": "英勇增援",
        "set": "m19",
        "number": 449882,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Poison-Tip Archer",
        "cname": "沾毒箭手",
        "set": "m19",
        "number": 449886,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Regal Bloodlord",
        "cname": "威严血领",
        "set": "m19",
        "number": 449888,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Arcane Encyclopedia",
        "cname": "秘法全书",
        "set": "m19",
        "number": 449893,
        "color": [],
        "others": ""
    },
    {
        "name": "Chaos Wand",
        "cname": "混沌法杖",
        "set": "m19",
        "number": 449894,
        "color": [],
        "others": ""
    },
    {
        "name": "Crucible of Worlds",
        "cname": "世间锤炼",
        "set": "m19",
        "number": 449895,
        "color": [],
        "others": ""
    },
    {
        "name": "Desecrated Tomb",
        "cname": "受渎陵墓",
        "set": "m19",
        "number": 449896,
        "color": [],
        "others": ""
    },
    {
        "name": "Diamond Mare",
        "cname": "晶钻牝马",
        "set": "m19",
        "number": 449897,
        "color": [],
        "others": ""
    },
    {
        "name": "Dragon's Hoard",
        "cname": "巨龙宝库",
        "set": "m19",
        "number": 449898,
        "color": [],
        "others": ""
    },
    {
        "name": "Explosive Apparatus",
        "cname": "爆炸装置",
        "set": "m19",
        "number": 449899,
        "color": [],
        "others": ""
    },
    {
        "name": "Field Creeper",
        "cname": "骇野草人",
        "set": "m19",
        "number": 449900,
        "color": [],
        "others": ""
    },
    {
        "name": "Fountain of Renewal",
        "cname": "新机喷泉",
        "set": "m19",
        "number": 449901,
        "color": [],
        "others": ""
    },
    {
        "name": "Manalith",
        "cname": "魔力巨石",
        "set": "m19",
        "number": 449905,
        "color": [],
        "others": ""
    },
    {
        "name": "Meteor Golem",
        "cname": "陨石魔像",
        "set": "m19",
        "number": 449907,
        "color": [],
        "others": ""
    },
    {
        "name": "Millstone",
        "cname": "研磨石轮",
        "set": "m19",
        "number": 449908,
        "color": [],
        "others": ""
    },
    {
        "name": "Rogue's Gloves",
        "cname": "浪客手套",
        "set": "m19",
        "number": 449909,
        "color": [],
        "others": ""
    },
    {
        "name": "Suspicious Bookcase",
        "cname": "可疑书架",
        "set": "m19",
        "number": 449912,
        "color": [],
        "others": ""
    },
    {
        "name": "Transmogrifying Wand",
        "cname": "突变法杖",
        "set": "m19",
        "number": 449913,
        "color": [],
        "others": ""
    },
    {
        "name": "Cinder Barrens",
        "cname": "煤烬瘠地",
        "set": "m19",
        "number": 449914,
        "color": [],
        "others": ""
    },
    {
        "name": "Forsaken Sanctuary",
        "cname": "遭弃圣殿",
        "set": "m19",
        "number": 449916,
        "color": [],
        "others": ""
    },
    {
        "name": "Foul Orchard",
        "cname": "邪秽果园",
        "set": "m19",
        "number": 449917,
        "color": [],
        "others": ""
    },
    {
        "name": "Highland Lake",
        "cname": "高地湖泊",
        "set": "m19",
        "number": 449918,
        "color": [],
        "others": ""
    },
    {
        "name": "Meandering River",
        "cname": "蜿蜒河流",
        "set": "m19",
        "number": 449919,
        "color": [],
        "others": ""
    },
    {
        "name": "No Escape",
        "cname": "无路可逃",
        "set": "war",
        "number": 463366,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Rupture Spire",
        "cname": "破裂尖塔",
        "set": "m19",
        "number": 449921,
        "color": [],
        "others": ""
    },
    {
        "name": "Relentless Advance",
        "cname": "无情进军",
        "set": "war",
        "number": 463367,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Timber Gorge",
        "cname": "林场峡谷",
        "set": "m19",
        "number": 449924,
        "color": [],
        "others": ""
    },
    {
        "name": "Tranquil Expanse",
        "cname": "静谧旷野",
        "set": "m19",
        "number": 449925,
        "color": [],
        "others": ""
    },
    {
        "name": "Woodland Stream",
        "cname": "林地溪流",
        "set": "m19",
        "number": 449926,
        "color": [],
        "others": ""
    },
    {
        "name": "Storm the Citadel",
        "cname": "攻袭尊殿",
        "set": "war",
        "number": 463481,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Wardscale Crocodile",
        "cname": "鳞护鳄鱼",
        "set": "war",
        "number": 463486,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Casualties of War",
        "cname": "战争伤亡",
        "set": "war",
        "number": 463490,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Cruel Celebrant",
        "cname": "残酷主祭",
        "set": "war",
        "number": 463491,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Deathsprout",
        "cname": "命绝机生",
        "set": "war",
        "number": 463492,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Despark",
        "cname": "灭除火花",
        "set": "war",
        "number": 463493,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Feather, the Redeemed",
        "cname": "复耀飞羽",
        "set": "war",
        "number": 463500,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Court Cleric",
        "cname": "庭园僧侣",
        "set": "m19",
        "number": 450536,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Silverbeak Griffin",
        "cname": "银嘴狮鹫",
        "set": "m19",
        "number": 450538,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Pendulum of Patterns",
        "cname": "调律钟摆",
        "set": "m19",
        "number": 450541,
        "color": [],
        "others": ""
    },
    {
        "name": "Gravewaker",
        "cname": "醒尸灵鸟",
        "set": "m19",
        "number": 450546,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Shivan Dragon",
        "cname": "西瓦巨龙",
        "set": "m19",
        "number": 450553,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Skalla Wolf",
        "cname": "斯凯拉狼",
        "set": "m19",
        "number": 450556,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ursine Champion",
        "cname": "熊身斗士",
        "set": "m19",
        "number": 450557,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Sun Sentinel",
        "cname": "烈阳哨卫",
        "set": "m19",
        "number": 450560,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Air Elemental",
        "cname": "大气元素",
        "set": "m19",
        "number": 450561,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Befuddle",
        "cname": "困惑不已",
        "set": "m19",
        "number": 450562,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Mist-Cloaked Herald",
        "cname": "雾隐传令",
        "set": "m19",
        "number": 450563,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Waterknot",
        "cname": "水结纠缠",
        "set": "m19",
        "number": 450564,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Grasping Scoundrel",
        "cname": "贪婪恶棍",
        "set": "m19",
        "number": 450565,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Radiating Lightning",
        "cname": "放射闪电",
        "set": "m19",
        "number": 450566,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Llanowar Elves",
        "cname": "罗堰妖精",
        "set": "m19",
        "number": 450567,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Blade Instructor",
        "cname": "舞剑教官",
        "set": "grn",
        "number": 455082,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bounty Agent",
        "cname": "赏金密探",
        "set": "grn",
        "number": 455083,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Candlelight Vigil",
        "cname": "烛光守夜",
        "set": "grn",
        "number": 455084,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Citywide Bust",
        "cname": "全城拘捕",
        "set": "grn",
        "number": 455085,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Collar the Culprit",
        "cname": "栓制魁首",
        "set": "grn",
        "number": 455086,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Conclave Tribunal",
        "cname": "盟会裁定",
        "set": "grn",
        "number": 455087,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Crush Contraband",
        "cname": "粉碎禁品",
        "set": "grn",
        "number": 455088,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dawn of Hope",
        "cname": "希望曙光",
        "set": "grn",
        "number": 455089,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gleaming Overseer",
        "cname": "金光督军",
        "set": "war",
        "number": 463501,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Divine Visitation",
        "cname": "神恩天降",
        "set": "grn",
        "number": 455091,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gird for Battle",
        "cname": "战斗准备",
        "set": "grn",
        "number": 455093,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Intrusive Packbeast",
        "cname": "莽闯驮兽",
        "set": "grn",
        "number": 455098,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Luminous Bonds",
        "cname": "光缕禁锢",
        "set": "grn",
        "number": 455102,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Parhelion Patrol",
        "cname": "炫日巡卫",
        "set": "grn",
        "number": 455103,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Righteous Blow",
        "cname": "正气霆击",
        "set": "grn",
        "number": 455104,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Skyline Scout",
        "cname": "天际斥候",
        "set": "grn",
        "number": 455106,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sunhome Stalwart",
        "cname": "阳园坚兵",
        "set": "grn",
        "number": 455107,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sworn Companions",
        "cname": "盟誓伙伴",
        "set": "grn",
        "number": 455108,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Take Heart",
        "cname": "抖擞精神",
        "set": "grn",
        "number": 455109,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Venerated Loxodon",
        "cname": "景仰象族",
        "set": "grn",
        "number": 455111,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Capture Sphere",
        "cname": "拘捕法球",
        "set": "grn",
        "number": 455112,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dazzling Lights",
        "cname": "眩目光辉",
        "set": "grn",
        "number": 455115,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Devious Cover-Up",
        "cname": "暗地掩饰",
        "set": "grn",
        "number": 455116,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Drowned Secrets",
        "cname": "冲尽秘密",
        "set": "grn",
        "number": 455120,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Enhanced Surveillance",
        "cname": "多加刺探",
        "set": "grn",
        "number": 455121,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Guild Summit",
        "cname": "公会聚首",
        "set": "grn",
        "number": 455122,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Heartwarming Redemption",
        "cname": "温馨救赎",
        "set": "war",
        "number": 463502,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Maximize Altitude",
        "cname": "极限飞升",
        "set": "grn",
        "number": 455124,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Mission Briefing",
        "cname": "任务简报",
        "set": "grn",
        "number": 455125,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Muse Drake",
        "cname": "思灵龙兽",
        "set": "grn",
        "number": 455127,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Nightveil Sprite",
        "cname": "夜篷仙子",
        "set": "grn",
        "number": 455129,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Omnispell Adept",
        "cname": "千咒专家",
        "set": "grn",
        "number": 455130,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Passwall Adept",
        "cname": "密墙专家",
        "set": "grn",
        "number": 455131,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Quasiduplicate",
        "cname": "伪体拟形",
        "set": "grn",
        "number": 455132,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Radical Idea",
        "cname": "激进创想",
        "set": "grn",
        "number": 455133,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sinister Sabotage",
        "cname": "恶意破坏",
        "set": "grn",
        "number": 455135,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Thoughtbound Phantasm",
        "cname": "缚念幻象",
        "set": "grn",
        "number": 455136,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Unexplained Disappearance",
        "cname": "神秘消失",
        "set": "grn",
        "number": 455137,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Spark Double",
        "cname": "火花替身",
        "set": "war",
        "number": 463371,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Barrier of Bones",
        "cname": "尸骨屏障",
        "set": "grn",
        "number": 455142,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Bartizan Bats",
        "cname": "顶塔蝙蝠",
        "set": "grn",
        "number": 455143,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Blood Operative",
        "cname": "鲜血特务",
        "set": "grn",
        "number": 455144,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Spellkeeper Weird",
        "cname": "咒返怪奇",
        "set": "war",
        "number": 463372,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Child of Night",
        "cname": "暗夜之子",
        "set": "grn",
        "number": 455146,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Creeping Chill",
        "cname": "寒意蔓延",
        "set": "grn",
        "number": 455147,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Deadly Visit",
        "cname": "夺命造访",
        "set": "grn",
        "number": 455149,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Stealth Mission",
        "cname": "秘密行动",
        "set": "war",
        "number": 463373,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Gruesome Menagerie",
        "cname": "兽群惧集",
        "set": "grn",
        "number": 455152,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Kraul Swarm",
        "cname": "刻洛虫群",
        "set": "grn",
        "number": 455154,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Mausoleum Secrets",
        "cname": "陵墓奥秘",
        "set": "grn",
        "number": 455156,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Mephitic Vapors",
        "cname": "恶臭毒气",
        "set": "grn",
        "number": 455157,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Moodmark Painter",
        "cname": "貌纹绘师",
        "set": "grn",
        "number": 455159,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Never Happened",
        "cname": "从未发生",
        "set": "grn",
        "number": 455161,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ritual of Soot",
        "cname": "煤烟仪式",
        "set": "grn",
        "number": 455165,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Severed Strands",
        "cname": "斩断束缕",
        "set": "grn",
        "number": 455166,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Veiled Shade",
        "cname": "隐匿阴魂",
        "set": "grn",
        "number": 455169,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Vicious Rumors",
        "cname": "恶毒传言",
        "set": "grn",
        "number": 455170,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Arclight Phoenix",
        "cname": "弧光凤凰",
        "set": "grn",
        "number": 455172,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Thunder Drake",
        "cname": "雷霆龙兽",
        "set": "war",
        "number": 463376,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Command the Storm",
        "cname": "掌控风暴",
        "set": "grn",
        "number": 455175,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Cosmotronic Wave",
        "cname": "宙子散漫",
        "set": "grn",
        "number": 455176,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Direct Current",
        "cname": "导引电流",
        "set": "grn",
        "number": 455177,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Electrostatic Field",
        "cname": "静电力场",
        "set": "grn",
        "number": 455178,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Banneret",
        "cname": "鬼怪掌旗",
        "set": "grn",
        "number": 455183,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Cratermaker",
        "cname": "滥炸鬼怪",
        "set": "grn",
        "number": 455184,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Locksmith",
        "cname": "撬锁鬼怪",
        "set": "grn",
        "number": 455185,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Gravitic Punch",
        "cname": "重力冲拳",
        "set": "grn",
        "number": 455186,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Inescapable Blaze",
        "cname": "定劫烈焰",
        "set": "grn",
        "number": 455188,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Lava Coil",
        "cname": "熔岩缠绕",
        "set": "grn",
        "number": 455189,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Legion Warboss",
        "cname": "教团战首",
        "set": "grn",
        "number": 455190,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Invade the City",
        "cname": "入侵城市",
        "set": "war",
        "number": 463504,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Maximize Velocity",
        "cname": "极限狂飙",
        "set": "grn",
        "number": 455192,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Ornery Goblin",
        "cname": "暴躁鬼怪",
        "set": "grn",
        "number": 455193,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Risk Factor",
        "cname": "风险因素",
        "set": "grn",
        "number": 455194,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Runaway Steam-Kin",
        "cname": "落跑汽身",
        "set": "grn",
        "number": 455196,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Street Riot",
        "cname": "街头暴乱",
        "set": "grn",
        "number": 455198,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sure Strike",
        "cname": "必中一击",
        "set": "grn",
        "number": 455199,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Torch Courier",
        "cname": "火炬讯使",
        "set": "grn",
        "number": 455200,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Arboretum Elemental",
        "cname": "示园元素",
        "set": "grn",
        "number": 455203,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Beast Whisperer",
        "cname": "兽群语者",
        "set": "grn",
        "number": 455204,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Bounty of Might",
        "cname": "瀚力恩泽",
        "set": "grn",
        "number": 455205,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Circuitous Route",
        "cname": "迂回路线",
        "set": "grn",
        "number": 455206,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Crushing Canopy",
        "cname": "树冠压袭",
        "set": "grn",
        "number": 455207,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "District Guide",
        "cname": "城区向导",
        "set": "grn",
        "number": 455209,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Generous Stray",
        "cname": "高贵野猫",
        "set": "grn",
        "number": 455210,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Grappling Sundew",
        "cname": "攫物毡苔",
        "set": "grn",
        "number": 455212,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Hatchery Spider",
        "cname": "孵卵蜘蛛",
        "set": "grn",
        "number": 455213,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Hitchclaw Recluse",
        "cname": "钩爪隐士",
        "set": "grn",
        "number": 455214,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Ironshell Beetle",
        "cname": "铁壳甲虫",
        "set": "grn",
        "number": 455215,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Might of the Masses",
        "cname": "众人之力",
        "set": "grn",
        "number": 455218,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Pack's Favor",
        "cname": "集群之威",
        "set": "grn",
        "number": 455220,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Pause for Reflection",
        "cname": "片刻反思",
        "set": "grn",
        "number": 455221,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Portcullis Vine",
        "cname": "闸门藤蔓",
        "set": "grn",
        "number": 455223,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Siege Wurm",
        "cname": "攻城亚龙",
        "set": "grn",
        "number": 455225,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Sprouting Renewal",
        "cname": "芽生新机",
        "set": "grn",
        "number": 455226,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vigorspore Wurm",
        "cname": "弘孢亚龙",
        "set": "grn",
        "number": 455228,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Vivid Revival",
        "cname": "霓彩复生",
        "set": "grn",
        "number": 455229,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Artful Takedown",
        "cname": "巧妙击倒",
        "set": "grn",
        "number": 455232,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Assassin's Trophy",
        "cname": "杀手留念",
        "set": "grn",
        "number": 455233,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Beacon Bolt",
        "cname": "信标电击",
        "set": "grn",
        "number": 455235,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Beamsplitter Mage",
        "cname": "分束法师",
        "set": "grn",
        "number": 455236,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Camaraderie",
        "cname": "同袍情谊",
        "set": "grn",
        "number": 455238,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Chance for Glory",
        "cname": "成仁拼搏",
        "set": "grn",
        "number": 455240,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Charnel Troll",
        "cname": "阴森巨魔",
        "set": "grn",
        "number": 455241,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Conclave Cavalier",
        "cname": "盟会骑兵",
        "set": "grn",
        "number": 455242,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Crackling Drake",
        "cname": "爆响龙兽",
        "set": "grn",
        "number": 455244,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Darkblade Agent",
        "cname": "黯刃密探",
        "set": "grn",
        "number": 455245,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Deafening Clarion",
        "cname": "震耳号角",
        "set": "grn",
        "number": 455246,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Disinformation Campaign",
        "cname": "散布谣言",
        "set": "grn",
        "number": 455248,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Erstwhile Trooper",
        "cname": "故军士兵",
        "set": "grn",
        "number": 455250,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Firemind's Research",
        "cname": "炎灵研究",
        "set": "grn",
        "number": 455252,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Glowspore Shaman",
        "cname": "辉孢祭师",
        "set": "grn",
        "number": 455254,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Hammer Dropper",
        "cname": "重锤巨人",
        "set": "grn",
        "number": 455257,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Hypothesizzle",
        "cname": "破颅假想",
        "set": "grn",
        "number": 455259,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Totally Lost",
        "cname": "完全迷途",
        "set": "war",
        "number": 463377,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Join Shields",
        "cname": "架盾守护",
        "set": "grn",
        "number": 455262,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Justice Strike",
        "cname": "正义一击",
        "set": "grn",
        "number": 455263,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Knight of Autumn",
        "cname": "暮秋骑士",
        "set": "grn",
        "number": 455264,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ledev Champion",
        "cname": "列夫斗士",
        "set": "grn",
        "number": 455267,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "March of the Multitudes",
        "cname": "大军行进",
        "set": "grn",
        "number": 455269,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Mnemonic Betrayal",
        "cname": "记忆叛离",
        "set": "grn",
        "number": 455270,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Molderhulk",
        "cname": "腐霉巨汉",
        "set": "grn",
        "number": 455271,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Notion Rain",
        "cname": "心念如雨",
        "set": "grn",
        "number": 455274,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Ochran Assassin",
        "cname": "瓯坎杀手",
        "set": "grn",
        "number": 455275,
        "color": [
            "B",
            "G"
        ],
        "others": ""
    },
    {
        "name": "Sonic Assault",
        "cname": "音波来袭",
        "set": "grn",
        "number": 455280,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Swathcutter Giant",
        "cname": "劈扫巨人",
        "set": "grn",
        "number": 455283,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Thief of Sanity",
        "cname": "心智窃贼",
        "set": "grn",
        "number": 455286,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Thought Erasure",
        "cname": "抹消思绪",
        "set": "grn",
        "number": 455287,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Thousand-Year Storm",
        "cname": "千年风暴",
        "set": "grn",
        "number": 455288,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Truefire Captain",
        "cname": "精炎队长",
        "set": "grn",
        "number": 455290,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Unmoored Ego",
        "cname": "抹除自我",
        "set": "grn",
        "number": 455293,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Fresh-Faced Recruit",
        "cname": "稚嫩新兵",
        "set": "grn",
        "number": 455297,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Whisper Agent",
        "cname": "细语密探",
        "set": "grn",
        "number": 455301,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Living Twister",
        "cname": "生体龙卷",
        "set": "war",
        "number": 463506,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Mayhem Devil",
        "cname": "破坏魔鬼",
        "set": "war",
        "number": 463507,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Merfolk Skydiver",
        "cname": "跃空人鱼",
        "set": "war",
        "number": 463508,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Neoform",
        "cname": "形体一新",
        "set": "war",
        "number": 463509,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Pledge of Unity",
        "cname": "齐心誓言",
        "set": "war",
        "number": 463513,
        "color": [
            "G",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ral, Storm Conduit",
        "cname": "召雷拉尔",
        "set": "war",
        "number": 463514,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Role Reversal",
        "cname": "角色反转",
        "set": "war",
        "number": 463517,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Solar Blaze",
        "cname": "烈阳炙焰",
        "set": "war",
        "number": 463519,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Duskmantle Operative",
        "cname": "暮篷特务",
        "set": "war",
        "number": 463391,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Chromatic Lantern",
        "cname": "五彩宫灯",
        "set": "grn",
        "number": 455314,
        "color": [],
        "others": ""
    },
    {
        "name": "Izzet Locket",
        "cname": "伊捷坠饰",
        "set": "grn",
        "number": 455319,
        "color": [],
        "others": ""
    },
    {
        "name": "Rampaging Monument",
        "cname": "莽闯碑像",
        "set": "grn",
        "number": 455320,
        "color": [],
        "others": ""
    },
    {
        "name": "Silent Dart",
        "cname": "无声袖剑",
        "set": "grn",
        "number": 455322,
        "color": [],
        "others": ""
    },
    {
        "name": "Wand of Vertebrae",
        "cname": "椎骨魔杖",
        "set": "grn",
        "number": 455323,
        "color": [],
        "others": ""
    },
    {
        "name": "Gateway Plaza",
        "cname": "门前广场",
        "set": "grn",
        "number": 455328,
        "color": [],
        "others": ""
    },
    {
        "name": "Overgrown Tomb",
        "cname": "蔓生墓园",
        "set": "grn",
        "number": 455334,
        "color": [],
        "others": ""
    },
    {
        "name": "Sacred Foundry",
        "cname": "圣洁锻炉",
        "set": "grn",
        "number": 455335,
        "color": [],
        "others": ""
    },
    {
        "name": "Temple Garden",
        "cname": "殿堂花园",
        "set": "grn",
        "number": 455339,
        "color": [],
        "others": ""
    },
    {
        "name": "Watery Grave",
        "cname": "积水墓地",
        "set": "grn",
        "number": 455340,
        "color": [],
        "others": ""
    },
    {
        "name": "Time Wipe",
        "cname": "时间抹除",
        "set": "war",
        "number": 463526,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Widespread Brutality",
        "cname": "暴行四窜",
        "set": "war",
        "number": 463529,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Precision Bolt",
        "cname": "精准电击",
        "set": "grn",
        "number": 455733,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Angel of Grace",
        "cname": "恩典天使",
        "set": "rna",
        "number": 459476,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Angelic Exaltation",
        "cname": "天使颂赞",
        "set": "rna",
        "number": 459477,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Archway Angel",
        "cname": "拱门天使",
        "set": "rna",
        "number": 459478,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bring to Trial",
        "cname": "送上法庭",
        "set": "rna",
        "number": 459480,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Civic Stalwart",
        "cname": "城市坚兵",
        "set": "rna",
        "number": 459481,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Concordia Pegasus",
        "cname": "齐心飞马",
        "set": "rna",
        "number": 459482,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Expose to Daylight",
        "cname": "放诸白日",
        "set": "rna",
        "number": 459483,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Forbidding Spirit",
        "cname": "禁制精怪",
        "set": "rna",
        "number": 459484,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Knight of Sorrows",
        "cname": "哀恸骑士",
        "set": "rna",
        "number": 459489,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Prowling Caracal",
        "cname": "潜行狞猫",
        "set": "rna",
        "number": 459492,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rally to Battle",
        "cname": "战斗动员",
        "set": "rna",
        "number": 459493,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sentinel's Mark",
        "cname": "哨兵印记",
        "set": "rna",
        "number": 459495,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Sky Tether",
        "cname": "通天栓链",
        "set": "rna",
        "number": 459496,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Smothering Tithe",
        "cname": "税赋压身",
        "set": "rna",
        "number": 459497,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Spirit of the Spires",
        "cname": "尖塔精怪",
        "set": "rna",
        "number": 459498,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Summary Judgment",
        "cname": "即决审判",
        "set": "rna",
        "number": 459499,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Syndicate Messenger",
        "cname": "集团信使",
        "set": "rna",
        "number": 459500,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Twilight Panther",
        "cname": "暮色猎豹",
        "set": "rna",
        "number": 459503,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Unbreakable Formation",
        "cname": "难破妙阵",
        "set": "rna",
        "number": 459504,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Watchful Giant",
        "cname": "警醒巨人",
        "set": "rna",
        "number": 459505,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Aid the Fallen",
        "cname": "救护亡者",
        "set": "war",
        "number": 463379,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Clear the Mind",
        "cname": "清空思绪",
        "set": "rna",
        "number": 459509,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Code of Constraint",
        "cname": "拘捕守则",
        "set": "rna",
        "number": 459510,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Essence Capture",
        "cname": "捕捉菁华",
        "set": "rna",
        "number": 459512,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Eyes Everywhere",
        "cname": "全城有眼",
        "set": "rna",
        "number": 459513,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Faerie Duelist",
        "cname": "仙灵斗客",
        "set": "rna",
        "number": 459514,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Humongulus",
        "cname": "巨型造妖",
        "set": "rna",
        "number": 459516,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Mass Manipulation",
        "cname": "全面操弄",
        "set": "rna",
        "number": 459517,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Precognitive Perception",
        "cname": "预先感知",
        "set": "rna",
        "number": 459520,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Prying Eyes",
        "cname": "眼线窥视",
        "set": "rna",
        "number": 459521,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Shimmer of Possibility",
        "cname": "远景烁影",
        "set": "rna",
        "number": 459526,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Skatewing Spy",
        "cname": "滑翼密探",
        "set": "rna",
        "number": 459527,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Skitter Eel",
        "cname": "掠行蟹鳗",
        "set": "rna",
        "number": 459528,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Slimebind",
        "cname": "黏菌缠身",
        "set": "rna",
        "number": 459529,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Swirling Torrent",
        "cname": "回旋激流",
        "set": "rna",
        "number": 459531,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Thought Collapse",
        "cname": "思想坍塌",
        "set": "rna",
        "number": 459532,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Verity Circle",
        "cname": "真相束环",
        "set": "rna",
        "number": 459533,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Banehound",
        "cname": "灾祸猎犬",
        "set": "war",
        "number": 463380,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Windstorm Drake",
        "cname": "疾风龙兽",
        "set": "rna",
        "number": 459535,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Awaken the Erstwhile",
        "cname": "唤醒故军",
        "set": "rna",
        "number": 459536,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Bankrupt in Blood",
        "cname": "负债血偿",
        "set": "rna",
        "number": 459537,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Bleeding Edge",
        "cname": "刀刃喋血",
        "set": "war",
        "number": 463381,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Bladebrand",
        "cname": "炙烤剑尖",
        "set": "rna",
        "number": 459539,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Catacomb Crocodile",
        "cname": "陵墓鳄鱼",
        "set": "rna",
        "number": 459542,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Clear the Stage",
        "cname": "清空舞台",
        "set": "rna",
        "number": 459543,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Consign to the Pit",
        "cname": "坠入深渊",
        "set": "rna",
        "number": 459544,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Dead Revels",
        "cname": "亡者狂欢",
        "set": "rna",
        "number": 459546,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Drill Bit",
        "cname": "凿灵作乐",
        "set": "rna",
        "number": 459548,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Grotesque Demise",
        "cname": "怪诞夺命",
        "set": "rna",
        "number": 459550,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Ill-Gotten Inheritance",
        "cname": "不当遗产",
        "set": "rna",
        "number": 459552,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Pestilent Spirit",
        "cname": "瘟疫精怪",
        "set": "rna",
        "number": 459556,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Plague Wight",
        "cname": "疫病老妖",
        "set": "rna",
        "number": 459557,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Priest of Forgotten Gods",
        "cname": "弃神僧侣",
        "set": "rna",
        "number": 459558,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Thirsting Shade",
        "cname": "饥渴阴魂",
        "set": "rna",
        "number": 459562,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Burn Bright",
        "cname": "怒火冲天",
        "set": "rna",
        "number": 459568,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Cavalcade of Calamity",
        "cname": "灾祸行进",
        "set": "rna",
        "number": 459570,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Clamor Shaman",
        "cname": "喧哗祭司",
        "set": "rna",
        "number": 459571,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Bond of Revival",
        "cname": "复生璧合",
        "set": "war",
        "number": 463383,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Deface",
        "cname": "大举破坏",
        "set": "rna",
        "number": 459573,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Electrodominance",
        "cname": "控驭电能",
        "set": "rna",
        "number": 459574,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Gates Ablaze",
        "cname": "城门失火",
        "set": "rna",
        "number": 459577,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Goblin Gathering",
        "cname": "鬼怪集群",
        "set": "rna",
        "number": 459579,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Gravel-Hide Goblin",
        "cname": "扬砾鬼怪",
        "set": "rna",
        "number": 459580,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Immolation Shaman",
        "cname": "火牲祭师",
        "set": "rna",
        "number": 459581,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Light Up the Stage",
        "cname": "照亮舞台",
        "set": "rna",
        "number": 459582,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Mirror March",
        "cname": "镜像行进",
        "set": "rna",
        "number": 459583,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Rubble Reading",
        "cname": "研读瓦砾",
        "set": "rna",
        "number": 459585,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Rumbling Ruin",
        "cname": "踽行废墟",
        "set": "rna",
        "number": 459587,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Skewer the Critics",
        "cname": "遏止倒彩",
        "set": "rna",
        "number": 459590,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Charity Extractor",
        "cname": "榨善骑士",
        "set": "war",
        "number": 463384,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Spikewheel Acrobat",
        "cname": "刺轮舞者",
        "set": "rna",
        "number": 459593,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Biogenic Ooze",
        "cname": "生源流浆",
        "set": "rna",
        "number": 459597,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Biogenic Upgrade",
        "cname": "生源进化",
        "set": "rna",
        "number": 459598,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gatebreaker Ram",
        "cname": "破门公羊",
        "set": "rna",
        "number": 459601,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gift of Strength",
        "cname": "力量赋礼",
        "set": "rna",
        "number": 459602,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Guardian Project",
        "cname": "卫护计划",
        "set": "rna",
        "number": 459605,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Mammoth Spider",
        "cname": "庞巨蜘蛛",
        "set": "rna",
        "number": 459607,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Open the Gates",
        "cname": "打开大门",
        "set": "rna",
        "number": 459608,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Rampage of the Clans",
        "cname": "部族狂愤",
        "set": "rna",
        "number": 459609,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Regenesis",
        "cname": "再获新生",
        "set": "rna",
        "number": 459611,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Root Snare",
        "cname": "重根绊索",
        "set": "rna",
        "number": 459612,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Sagittars' Volley",
        "cname": "射手齐发",
        "set": "rna",
        "number": 459613,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Stony Strength",
        "cname": "顽石之力",
        "set": "rna",
        "number": 459618,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Territorial Boar",
        "cname": "据地野猪",
        "set": "rna",
        "number": 459620,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Titanic Brawl",
        "cname": "巨身争斗",
        "set": "rna",
        "number": 459621,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Tower Defense",
        "cname": "塔顶防御",
        "set": "rna",
        "number": 459622,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Wilderness Reclamation",
        "cname": "复归荒野",
        "set": "rna",
        "number": 459624,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Wrecking Beast",
        "cname": "毁坏巨兽",
        "set": "rna",
        "number": 459625,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Aeromunculus",
        "cname": "空行造妖",
        "set": "rna",
        "number": 459627,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Captive Audience",
        "cname": "俘获观众",
        "set": "rna",
        "number": 459635,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Cindervines",
        "cname": "烬火藤蔓",
        "set": "rna",
        "number": 459636,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Domri, Chaos Bringer",
        "cname": "致乱多密",
        "set": "rna",
        "number": 459641,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Dovin's Acuity",
        "cname": "多温凝思",
        "set": "rna",
        "number": 459643,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Emergency Powers",
        "cname": "紧急权力",
        "set": "rna",
        "number": 459644,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ethereal Absolution",
        "cname": "赦免虚灵",
        "set": "rna",
        "number": 459645,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Final Payment",
        "cname": "偿清债务",
        "set": "rna",
        "number": 459646,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Fireblade Artist",
        "cname": "炎刃艺师",
        "set": "rna",
        "number": 459647,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Frenzied Arynx",
        "cname": "狂热猛猁",
        "set": "rna",
        "number": 459648,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Galloping Lizrog",
        "cname": "快生蜥蛙",
        "set": "rna",
        "number": 459650,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Get the Point",
        "cname": "直击要害",
        "set": "rna",
        "number": 459651,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Growth Spiral",
        "cname": "成长涡旋",
        "set": "rna",
        "number": 459653,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Hackrobat",
        "cname": "险技舞者",
        "set": "rna",
        "number": 459656,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "High Alert",
        "cname": "高度戒备",
        "set": "rna",
        "number": 459657,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Imperious Oligarch",
        "cname": "傲慢寡头",
        "set": "rna",
        "number": 459659,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Kaya's Wrath",
        "cname": "卡娅之怒",
        "set": "rna",
        "number": 459662,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Knight of the Last Breath",
        "cname": "终息骑士",
        "set": "rna",
        "number": 459663,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Macabre Mockery",
        "cname": "亵渎亡者",
        "set": "rna",
        "number": 459666,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Pitiless Pontiff",
        "cname": "冷酷主教",
        "set": "rna",
        "number": 459669,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rafter Demon",
        "cname": "居椽恶魔",
        "set": "rna",
        "number": 459671,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Ravager Wurm",
        "cname": "吞噬亚龙",
        "set": "rna",
        "number": 459675,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Rhythm of the Wild",
        "cname": "荒野韵律",
        "set": "rna",
        "number": 459676,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Savage Smash",
        "cname": "蛮野猛击",
        "set": "rna",
        "number": 459678,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sunder Shaman",
        "cname": "粉碎祭师",
        "set": "rna",
        "number": 459685,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Theater of Horrors",
        "cname": "恐怖剧场",
        "set": "rna",
        "number": 459688,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Footlight Fiend",
        "cname": "脚灯邪鬼",
        "set": "rna",
        "number": 459691,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Rubble Slinger",
        "cname": "碎石掷客",
        "set": "rna",
        "number": 459692,
        "color": [
            "G",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Deliver Unto Evil",
        "cname": "屈从邪恶",
        "set": "war",
        "number": 463388,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Guild Globe",
        "cname": "公会示球",
        "set": "war",
        "number": 463542,
        "color": [],
        "others": ""
    },
    {
        "name": "Iron Bully",
        "cname": "铸铁恶霸",
        "set": "war",
        "number": 463543,
        "color": [],
        "others": ""
    },
    {
        "name": "Prismite",
        "cname": "虹彩魔像",
        "set": "war",
        "number": 463545,
        "color": [],
        "others": ""
    },
    {
        "name": "Blast Zone",
        "cname": "爆裂地带",
        "set": "war",
        "number": 463547,
        "color": [],
        "others": ""
    },
    {
        "name": "Emergence Zone",
        "cname": "传袭地带",
        "set": "war",
        "number": 463548,
        "color": [],
        "others": ""
    },
    {
        "name": "Gateway Plaza",
        "cname": "门前广场",
        "set": "war",
        "number": 463549,
        "color": [],
        "others": ""
    },
    {
        "name": "Karn's Bastion",
        "cname": "卡恩关堡",
        "set": "war",
        "number": 463551,
        "color": [],
        "others": ""
    },
    {
        "name": "Mobilized District",
        "cname": "动员城区",
        "set": "war",
        "number": 463552,
        "color": [],
        "others": ""
    },
    {
        "name": "Desperate Lunge",
        "cname": "危急跃击",
        "set": "war",
        "number": 463932,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gate Colossus",
        "cname": "城门巨像",
        "set": "rna",
        "number": 459707,
        "color": [],
        "others": ""
    },
    {
        "name": "Gruul Locket",
        "cname": "古鲁坠饰",
        "set": "rna",
        "number": 459709,
        "color": [],
        "others": ""
    },
    {
        "name": "Screaming Shield",
        "cname": "尖啸盾牌",
        "set": "rna",
        "number": 459714,
        "color": [],
        "others": ""
    },
    {
        "name": "Blood Crypt",
        "cname": "血腥墓穴",
        "set": "rna",
        "number": 459720,
        "color": [],
        "others": ""
    },
    {
        "name": "Breeding Pool",
        "cname": "滋生之池",
        "set": "rna",
        "number": 459721,
        "color": [],
        "others": ""
    },
    {
        "name": "Gateway Plaza",
        "cname": "门前广场",
        "set": "rna",
        "number": 459722,
        "color": [],
        "others": ""
    },
    {
        "name": "Godless Shrine",
        "cname": "无神祭祠",
        "set": "rna",
        "number": 459723,
        "color": [],
        "others": ""
    },
    {
        "name": "Hallowed Fountain",
        "cname": "崇圣喷泉",
        "set": "rna",
        "number": 459726,
        "color": [],
        "others": ""
    },
    {
        "name": "Plaza of Harmony",
        "cname": "和谐广场",
        "set": "rna",
        "number": 459729,
        "color": [],
        "others": ""
    },
    {
        "name": "Stomping Ground",
        "cname": "晃动大地",
        "set": "rna",
        "number": 459734,
        "color": [],
        "others": ""
    },
    {
        "name": "Ragefire",
        "cname": "怒火烧身",
        "set": "rna",
        "number": 460117,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "The Haunt of Hightower",
        "cname": "高塔祟影",
        "set": "rna",
        "number": 460120,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Karn, the Great Creator",
        "cname": "万创卡恩",
        "set": "war",
        "number": 463304,
        "color": [],
        "others": ""
    },
    {
        "name": "Ugin, the Ineffable",
        "cname": "休论乌金",
        "set": "war",
        "number": 463305,
        "color": [],
        "others": ""
    },
    {
        "name": "Battlefield Promotion",
        "cname": "战场晋升",
        "set": "war",
        "number": 463308,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bond of Discipline",
        "cname": "守律璧合",
        "set": "war",
        "number": 463309,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bulwark Giant",
        "cname": "援护巨人",
        "set": "war",
        "number": 463310,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Charmed Stray",
        "cname": "迷人野猫",
        "set": "war",
        "number": 463311,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Defiant Strike",
        "cname": "无畏挥击",
        "set": "war",
        "number": 463312,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Divine Arrow",
        "cname": "神箭穿心",
        "set": "war",
        "number": 463313,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Enforcer Griffin",
        "cname": "执法狮鹫",
        "set": "war",
        "number": 463314,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Finale of Glory",
        "cname": "荣光终时",
        "set": "war",
        "number": 463315,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gideon Blackblade",
        "cname": "乌锋基定",
        "set": "war",
        "number": 463316,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Gideon's Triumph",
        "cname": "基定得胜",
        "set": "war",
        "number": 463318,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Grateful Apparition",
        "cname": "感德亡灵",
        "set": "war",
        "number": 463320,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Ignite the Beacon",
        "cname": "燃亮信标",
        "set": "war",
        "number": 463321,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Makeshift Battalion",
        "cname": "杂牌大队",
        "set": "war",
        "number": 463325,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Martyr for the Cause",
        "cname": "大义烈士",
        "set": "war",
        "number": 463326,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Parhelion II",
        "cname": "幻日二号",
        "set": "war",
        "number": 463327,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Pouncing Lynx",
        "cname": "扑击山猫",
        "set": "war",
        "number": 463328,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Prison Realm",
        "cname": "拘禁地境",
        "set": "war",
        "number": 463329,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Rally of Wings",
        "cname": "飞翼集结",
        "set": "war",
        "number": 463330,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "The Elderspell",
        "cname": "至尊咒",
        "set": "war",
        "number": 463392,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "New Horizons",
        "cname": "新天地",
        "set": "xln",
        "number": 438045,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Sky Terror",
        "cname": "霸天龙",
        "set": "xln",
        "number": 438076,
        "color": [
            "R",
            "W"
        ],
        "others": ""
    },
    {
        "name": [
            "Dowsing Dagger",
            "Lost Vale"
        ],
        "cname": "未名谷",
        "set": "xln",
        "number": [
            438083,
            438084
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": [
            "Treasure Map",
            "Treasure Cove"
        ],
        "cname": "藏宝图",
        "set": "xln",
        "number": [
            438101,
            438102
        ],
        "color": [],
        "others": "transform"
    },
    {
        "name": "Stone Quarry",
        "cname": "采石场",
        "set": "xln",
        "number": 438141,
        "color": [],
        "others": ""
    },
    {
        "name": "Soul of the Rapids",
        "cname": "急流灵",
        "set": "rix",
        "number": 441540,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dead Man's Chest",
        "cname": "死魂棺",
        "set": "rix",
        "number": 441550,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Cacophodon",
        "cname": "啸齿龙",
        "set": "rix",
        "number": 441607,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "World Shaper",
        "cname": "塑世师",
        "set": "rix",
        "number": 441635,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Stone Quarry",
        "cname": "采石场",
        "set": "rix",
        "number": 441681,
        "color": [],
        "others": ""
    },
    {
        "name": "Sergeant-at-Arms",
        "cname": "纠仪长",
        "set": "dom",
        "number": 445341,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Fire Elemental",
        "cname": "火元素",
        "set": "dom",
        "number": 445429,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Skizzik",
        "cname": "嘶气客",
        "set": "dom",
        "number": 445454,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Weatherlight",
        "cname": "晴空号",
        "set": "dom",
        "number": 445546,
        "color": [],
        "others": ""
    },
    {
        "name": "Giant Growth",
        "cname": "变巨术",
        "set": "war",
        "number": 463465,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Mirror Image",
        "cname": "镜身影",
        "set": "m19",
        "number": 449726,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Mistcaller",
        "cname": "漫雾师",
        "set": "m19",
        "number": 449727,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Salvager of Secrets",
        "cname": "探密客",
        "set": "m19",
        "number": 449735,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sleep",
        "cname": "眠梦咒",
        "set": "m19",
        "number": 449739,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Wall of Mist",
        "cname": "迷雾墙",
        "set": "m19",
        "number": 449748,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "New Horizons",
        "cname": "新天地",
        "set": "war",
        "number": 463471,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gravedigger",
        "cname": "掘墓怪",
        "set": "m19",
        "number": 449763,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Mind Rot",
        "cname": "心之衰",
        "set": "m19",
        "number": 449774,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Banefire",
        "cname": "禁咒焰",
        "set": "m19",
        "number": 449795,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Doublecast",
        "cname": "连咒击",
        "set": "m19",
        "number": 449802,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Fire Elemental",
        "cname": "火元素",
        "set": "m19",
        "number": 449806,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Lava Axe",
        "cname": "熔岩斧",
        "set": "m19",
        "number": 449815,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Snarespinner",
        "cname": "织陷蛛",
        "set": "war",
        "number": 463479,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Volcanic Dragon",
        "cname": "火山龙",
        "set": "m19",
        "number": 449832,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Blanchwood Armor",
        "cname": "白木甲",
        "set": "m19",
        "number": 449834,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Gigantosaurus",
        "cname": "巨太龙",
        "set": "m19",
        "number": 449850,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Wall of Vines",
        "cname": "藤蔓墙",
        "set": "m19",
        "number": 449875,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Detection Tower",
        "cname": "探测塔",
        "set": "m19",
        "number": 449915,
        "color": [],
        "others": ""
    },
    {
        "name": "Reliquary Tower",
        "cname": "圣物塔",
        "set": "m19",
        "number": 449920,
        "color": [],
        "others": ""
    },
    {
        "name": "Stone Quarry",
        "cname": "采石场",
        "set": "m19",
        "number": 449922,
        "color": [],
        "others": ""
    },
    {
        "name": "Disdainful Stroke",
        "cname": "倨傲击",
        "set": "grn",
        "number": 455118,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Wall of Mist",
        "cname": "迷雾墙",
        "set": "grn",
        "number": 455139,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Watcher in the Mist",
        "cname": "雾中灵",
        "set": "grn",
        "number": 455140,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Wishcoin Crab",
        "cname": "许愿蟹",
        "set": "grn",
        "number": 455141,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Burglar Rat",
        "cname": "窃物鼠",
        "set": "grn",
        "number": 455145,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Douser of Lights",
        "cname": "蔽光兽",
        "set": "grn",
        "number": 455151,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Necrotic Wound",
        "cname": "溃疽伤",
        "set": "grn",
        "number": 455160,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Plaguecrafter",
        "cname": "播疫师",
        "set": "grn",
        "number": 455163,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Book Devourer",
        "cname": "噬书兽",
        "set": "grn",
        "number": 455174,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Ionize",
        "cname": "电离化",
        "set": "grn",
        "number": 455260,
        "color": [
            "R",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Soul Diviner",
        "cname": "占魂师",
        "set": "war",
        "number": 463521,
        "color": [
            "B",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Chillbringer",
        "cname": "寒冰灵",
        "set": "rna",
        "number": 459508,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Wall of Lost Thoughts",
        "cname": "忘念墙",
        "set": "rna",
        "number": 459534,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Blade Juggler",
        "cname": "耍刀客",
        "set": "rna",
        "number": 459538,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Amplifire",
        "cname": "倍火妖",
        "set": "rna",
        "number": 459567,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Dagger Caster",
        "cname": "飞刀客",
        "set": "rna",
        "number": 459572,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Spear Spewer",
        "cname": "击矛手",
        "set": "rna",
        "number": 459592,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Storm Strike",
        "cname": "疾风击",
        "set": "rna",
        "number": 459594,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Sharktocrab",
        "cname": "鲨蛸蟹",
        "set": "rna",
        "number": 459681,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Scuttlegator",
        "cname": "蟹鳄龟",
        "set": "rna",
        "number": 459693,
        "color": [
            "G",
            "U"
        ],
        "others": ""
    },
    {
        "name": "Firemind Vessel",
        "cname": "炎灵皿",
        "set": "war",
        "number": 463540,
        "color": [],
        "others": ""
    },
    {
        "name": "Scrabbling Claws",
        "cname": "翻拣爪",
        "set": "rna",
        "number": 459713,
        "color": [],
        "others": ""
    },
    {
        "name": "Wanderer's Strike",
        "cname": "飘萍斩",
        "set": "war",
        "number": 463341,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Wall of Runes",
        "cname": "符文墙",
        "set": "war",
        "number": 463378,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Demystify",
        "cname": "揭秘",
        "set": "xln",
        "number": 437850,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Cancel",
        "cname": "取消",
        "set": "xln",
        "number": 437890,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dive Down",
        "cname": "深潜",
        "set": "xln",
        "number": 437896,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Opt",
        "cname": "抉择",
        "set": "xln",
        "number": 437908,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Run Aground",
        "cname": "搁浅",
        "set": "xln",
        "number": 437915,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Duress",
        "cname": "逼从",
        "set": "xln",
        "number": 437950,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Demolish",
        "cname": "毁坏",
        "set": "xln",
        "number": 437984,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Hijack",
        "cname": "劫持",
        "set": "xln",
        "number": 437993,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Rile",
        "cname": "惹怒",
        "set": "xln",
        "number": 438003,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Pounce",
        "cname": "猛扑",
        "set": "xln",
        "number": 438047,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "xln",
        "number": 438112,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "xln",
        "number": 438113,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "xln",
        "number": 438114,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "xln",
        "number": 438115,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "xln",
        "number": 438116,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "xln",
        "number": 438117,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "xln",
        "number": 438118,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "xln",
        "number": 438119,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "xln",
        "number": 438120,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "xln",
        "number": 438121,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "xln",
        "number": 438122,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "xln",
        "number": 438123,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "xln",
        "number": 438124,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "xln",
        "number": 438125,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "xln",
        "number": 438126,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "xln",
        "number": 438127,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "xln",
        "number": 438128,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "xln",
        "number": 438129,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "xln",
        "number": 438130,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "xln",
        "number": 438131,
        "color": [],
        "others": ""
    },
    {
        "name": "Negate",
        "cname": "失效",
        "set": "rix",
        "number": 441528,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Impale",
        "cname": "刺穿",
        "set": "rix",
        "number": 441560,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Recover",
        "cname": "复原",
        "set": "rix",
        "number": 441568,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Mutiny",
        "cname": "哗变",
        "set": "rix",
        "number": 441590,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Shatter",
        "cname": "粉碎",
        "set": "rix",
        "number": 441598,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "rix",
        "number": 441683,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "rix",
        "number": 441684,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "rix",
        "number": 441685,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "rix",
        "number": 441686,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "rix",
        "number": 441687,
        "color": [],
        "others": ""
    },
    {
        "name": "Charge",
        "cname": "冲锋",
        "set": "dom",
        "number": 445319,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Dub",
        "cname": "册封",
        "set": "dom",
        "number": 445324,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Seal Away",
        "cname": "摘离",
        "set": "dom",
        "number": 445340,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Divination",
        "cname": "卜卦",
        "set": "dom",
        "number": 445361,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Opt",
        "cname": "抉择",
        "set": "dom",
        "number": 445369,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Rescue",
        "cname": "拯救",
        "set": "dom",
        "number": 445372,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Syncopate",
        "cname": "切分",
        "set": "dom",
        "number": 445376,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Unwind",
        "cname": "倒流",
        "set": "dom",
        "number": 445381,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Cast Down",
        "cname": "湮灭",
        "set": "dom",
        "number": 445390,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Divest",
        "cname": "褫夺",
        "set": "dom",
        "number": 445396,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Jousting Lance",
        "cname": "骑枪",
        "set": "dom",
        "number": 445530,
        "color": [],
        "others": ""
    },
    {
        "name": "Short Sword",
        "cname": "短剑",
        "set": "dom",
        "number": 445538,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "dom",
        "number": 445559,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "dom",
        "number": 445560,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "dom",
        "number": 445561,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "dom",
        "number": 445562,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "dom",
        "number": 445563,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "dom",
        "number": 445564,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "dom",
        "number": 445565,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "dom",
        "number": 445566,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "dom",
        "number": 445567,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "dom",
        "number": 445568,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "dom",
        "number": 445569,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "dom",
        "number": 445570,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "dom",
        "number": 445571,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "dom",
        "number": 445572,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "dom",
        "number": 445573,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "dom",
        "number": 445574,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "dom",
        "number": 445575,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "dom",
        "number": 445576,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "dom",
        "number": 445577,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "dom",
        "number": 445578,
        "color": [],
        "others": ""
    },
    {
        "name": "Isolate",
        "cname": "孤立",
        "set": "m19",
        "number": 449682,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Take Vengeance",
        "cname": "报仇",
        "set": "m19",
        "number": 449705,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Cancel",
        "cname": "取消",
        "set": "m19",
        "number": 449713,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Disperse",
        "cname": "驱散",
        "set": "m19",
        "number": 449715,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Divination",
        "cname": "卜卦",
        "set": "m19",
        "number": 449716,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dwindle",
        "cname": "缩微",
        "set": "m19",
        "number": 449718,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Sift",
        "cname": "详查",
        "set": "m19",
        "number": 449737,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Duress",
        "cname": "逼从",
        "set": "m19",
        "number": 449759,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Murder",
        "cname": "谋杀",
        "set": "m19",
        "number": 449775,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Walking Corpse",
        "cname": "行尸",
        "set": "m19",
        "number": 449791,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Act of Treason",
        "cname": "叛行",
        "set": "m19",
        "number": 449792,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Dragon Egg",
        "cname": "龙卵",
        "set": "m19",
        "number": 449803,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Electrify",
        "cname": "电击",
        "set": "m19",
        "number": 449804,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Shock",
        "cname": "电震",
        "set": "m19",
        "number": 449821,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Smelt",
        "cname": "热熔",
        "set": "m19",
        "number": 449823,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Spit Flame",
        "cname": "吐焰",
        "set": "m19",
        "number": 449825,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Scapeshift",
        "cname": "变境",
        "set": "m19",
        "number": 449866,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "m19",
        "number": 449927,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "m19",
        "number": 449928,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "m19",
        "number": 449929,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "m19",
        "number": 449930,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "m19",
        "number": 449931,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "m19",
        "number": 449932,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "m19",
        "number": 449933,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "m19",
        "number": 449934,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "m19",
        "number": 449935,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "m19",
        "number": 449936,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "m19",
        "number": 449937,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "m19",
        "number": 449938,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "m19",
        "number": 449939,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "m19",
        "number": 449940,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "m19",
        "number": 449941,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "m19",
        "number": 449942,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "m19",
        "number": 449943,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "m19",
        "number": 449944,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "m19",
        "number": 449945,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "m19",
        "number": 449946,
        "color": [],
        "others": ""
    },
    {
        "name": "Demotion",
        "cname": "贬职",
        "set": "grn",
        "number": 455090,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Leapfrog",
        "cname": "跃蛙",
        "set": "grn",
        "number": 455123,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Dead Weight",
        "cname": "重负",
        "set": "grn",
        "number": 455148,
        "color": [
            "B"
        ],
        "others": ""
    },
    {
        "name": "Maniacal Rage",
        "cname": "狂愤",
        "set": "grn",
        "number": 455191,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Prey Upon",
        "cname": "捕食",
        "set": "grn",
        "number": 455224,
        "color": [
            "G"
        ],
        "others": ""
    },
    {
        "name": "Assure // Assemble",
        "cname": "保全",
        "set": "grn",
        "number": 455302,
        "color": [
            "G",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Assure // Assemble",
        "cname": "保佑",
        "set": "grn",
        "number": 455302,
        "color": [
            "G",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Connive // Concoct",
        "cname": "研药",
        "set": "grn",
        "number": 455303,
        "color": [
            "B",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Connive // Concoct",
        "cname": "研谋",
        "set": "grn",
        "number": 455303,
        "color": [
            "B",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Discovery // Dispersal",
        "cname": "揭散",
        "set": "grn",
        "number": 455304,
        "color": [
            "B",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Discovery // Dispersal",
        "cname": "揭晓",
        "set": "grn",
        "number": 455304,
        "color": [
            "B",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Expansion // Explosion",
        "cname": "迸裂",
        "set": "grn",
        "number": 455305,
        "color": [
            "R",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Expansion // Explosion",
        "cname": "迸增",
        "set": "grn",
        "number": 455305,
        "color": [
            "R",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Find // Finality",
        "cname": "究终",
        "set": "grn",
        "number": 455306,
        "color": [
            "B",
            "G"
        ],
        "others": "split"
    },
    {
        "name": "Find // Finality",
        "cname": "究探",
        "set": "grn",
        "number": 455306,
        "color": [
            "B",
            "G"
        ],
        "others": "split"
    },
    {
        "name": "Flower // Flourish",
        "cname": "滋长",
        "set": "grn",
        "number": 455307,
        "color": [
            "G",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Flower // Flourish",
        "cname": "滋蕾",
        "set": "grn",
        "number": 455307,
        "color": [
            "G",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Integrity // Intervention",
        "cname": "致善",
        "set": "grn",
        "number": 455308,
        "color": [
            "R",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Integrity // Intervention",
        "cname": "致全",
        "set": "grn",
        "number": 455308,
        "color": [
            "R",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Invert // Invent",
        "cname": "翻新",
        "set": "grn",
        "number": 455309,
        "color": [
            "R",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Invert // Invent",
        "cname": "翻转",
        "set": "grn",
        "number": 455309,
        "color": [
            "R",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Response // Resurgence",
        "cname": "回神",
        "set": "grn",
        "number": 455310,
        "color": [
            "R",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Response // Resurgence",
        "cname": "回击",
        "set": "grn",
        "number": 455310,
        "color": [
            "R",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Status // Statue",
        "cname": "立像",
        "set": "grn",
        "number": 455311,
        "color": [
            "B",
            "G"
        ],
        "others": "split"
    },
    {
        "name": "Status // Statue",
        "cname": "立威",
        "set": "grn",
        "number": 455311,
        "color": [
            "B",
            "G"
        ],
        "others": "split"
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "grn",
        "number": 455727,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "grn",
        "number": 455728,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "grn",
        "number": 455729,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "grn",
        "number": 455730,
        "color": [],
        "others": ""
    },
    {
        "name": "Pteramander",
        "cname": "翼蜥",
        "set": "rna",
        "number": 459522,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Quench",
        "cname": "熄咒",
        "set": "rna",
        "number": 459523,
        "color": [
            "U"
        ],
        "others": ""
    },
    {
        "name": "Act of Treason",
        "cname": "叛行",
        "set": "rna",
        "number": 459566,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Scorchmark",
        "cname": "烙印",
        "set": "rna",
        "number": 459588,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Absorb",
        "cname": "吸收",
        "set": "rna",
        "number": 459626,
        "color": [
            "U",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bedevil",
        "cname": "糟蹋",
        "set": "rna",
        "number": 459632,
        "color": [
            "B",
            "R"
        ],
        "others": ""
    },
    {
        "name": "Mortify",
        "cname": "羞愧",
        "set": "rna",
        "number": 459667,
        "color": [
            "B",
            "W"
        ],
        "others": ""
    },
    {
        "name": "Bedeck // Bedazzle",
        "cname": "扮炫",
        "set": "rna",
        "number": 459696,
        "color": [
            "B",
            "R"
        ],
        "others": "split"
    },
    {
        "name": "Bedeck // Bedazzle",
        "cname": "扮妆",
        "set": "rna",
        "number": 459696,
        "color": [
            "B",
            "R"
        ],
        "others": "split"
    },
    {
        "name": "Carnival // Carnage",
        "cname": "暴虐",
        "set": "rna",
        "number": 459697,
        "color": [
            "B",
            "R"
        ],
        "others": "split"
    },
    {
        "name": "Carnival // Carnage",
        "cname": "暴喜",
        "set": "rna",
        "number": 459697,
        "color": [
            "B",
            "R"
        ],
        "others": "split"
    },
    {
        "name": "Collision // Colossus",
        "cname": "蛮力",
        "set": "rna",
        "number": 459698,
        "color": [
            "G",
            "R"
        ],
        "others": "split"
    },
    {
        "name": "Collision // Colossus",
        "cname": "蛮掷",
        "set": "rna",
        "number": 459698,
        "color": [
            "G",
            "R"
        ],
        "others": "split"
    },
    {
        "name": "Consecrate // Consume",
        "cname": "尽吞",
        "set": "rna",
        "number": 459699,
        "color": [
            "B",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Consecrate // Consume",
        "cname": "尽礼",
        "set": "rna",
        "number": 459699,
        "color": [
            "B",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Depose // Deploy",
        "cname": "宣派",
        "set": "rna",
        "number": 459700,
        "color": [
            "U",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Depose // Deploy",
        "cname": "宣敕",
        "set": "rna",
        "number": 459700,
        "color": [
            "U",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Incubation // Incongruity",
        "cname": "存异",
        "set": "rna",
        "number": 459701,
        "color": [
            "G",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Incubation // Incongruity",
        "cname": "存育",
        "set": "rna",
        "number": 459701,
        "color": [
            "G",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Repudiate // Replicate",
        "cname": "复造",
        "set": "rna",
        "number": 459702,
        "color": [
            "G",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Repudiate // Replicate",
        "cname": "复除",
        "set": "rna",
        "number": 459702,
        "color": [
            "G",
            "U"
        ],
        "others": "split"
    },
    {
        "name": "Revival // Revenge",
        "cname": "再战",
        "set": "rna",
        "number": 459703,
        "color": [
            "B",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Revival // Revenge",
        "cname": "再生",
        "set": "rna",
        "number": 459703,
        "color": [
            "B",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Thrash // Threat",
        "cname": "威胁",
        "set": "rna",
        "number": 459704,
        "color": [
            "G",
            "R"
        ],
        "others": "split"
    },
    {
        "name": "Thrash // Threat",
        "cname": "威击",
        "set": "rna",
        "number": 459704,
        "color": [
            "G",
            "R"
        ],
        "others": "split"
    },
    {
        "name": "Warrant // Warden",
        "cname": "看护",
        "set": "rna",
        "number": 459705,
        "color": [
            "U",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Warrant // Warden",
        "cname": "看管",
        "set": "rna",
        "number": 459705,
        "color": [
            "U",
            "W"
        ],
        "others": "split"
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "rna",
        "number": 460107,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "rna",
        "number": 460108,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "rna",
        "number": 460110,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "rna",
        "number": 460111,
        "color": [],
        "others": ""
    },
    {
        "name": "Single Combat",
        "cname": "单挑",
        "set": "war",
        "number": 463333,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "The Wanderer",
        "cname": "飘萍",
        "set": "war",
        "number": 463340,
        "color": [
            "W"
        ],
        "others": ""
    },
    {
        "name": "Demolish",
        "cname": "毁坏",
        "set": "war",
        "number": 463426,
        "color": [
            "R"
        ],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "war",
        "number": 463553,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "war",
        "number": 463554,
        "color": [],
        "others": ""
    },
    {
        "name": "Plains",
        "cname": "平原",
        "set": "war",
        "number": 463555,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "war",
        "number": 463556,
        "color": [],
        "others": ""
    },
    {
        "name": "Island",
        "cname": "海岛",
        "set": "war",
        "number": 463558,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "war",
        "number": 463559,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "war",
        "number": 463560,
        "color": [],
        "others": ""
    },
    {
        "name": "Swamp",
        "cname": "沼泽",
        "set": "war",
        "number": 463561,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "war",
        "number": 463562,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "war",
        "number": 463563,
        "color": [],
        "others": ""
    },
    {
        "name": "Mountain",
        "cname": "山脉",
        "set": "war",
        "number": 463564,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "war",
        "number": 463566,
        "color": [],
        "others": ""
    },
    {
        "name": "Forest",
        "cname": "树林",
        "set": "war",
        "number": 463567,
        "color": [],
        "others": ""
    }
];

String.prototype.format = function (args) {
    if (arguments.length > 0) {
        var result = this;
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                var reg = new RegExp("({" + key + "})", "g");
                result = result.replace(reg, args[key]);
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] == undefined) {
                    return "";
                } else {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
        return result;
    } else {
        return this;
    }
}

function deletespan(content) {
    while (content.indexOf('<') != -1) {
        content = content.substring(0, content.indexOf('<')) + content.substring(content.indexOf('>') + 1, );
    }
    return content;
}

function isnotindict(txt1, txt2) {
    var leftstart = txt1.substring(0, txt1.indexOf(txt2)).lastIndexOf('[dict]');
    var leftend = txt1.substring(0, txt1.indexOf(txt2)).lastIndexOf('[/dict]');
    var rightstart = txt1.substring(txt1.indexOf(txt2), ).indexOf('[dict]');
    var rightend = txt1.substring(txt1.indexOf(txt2), ).indexOf('[/dict]');
    rightstart = rightstart==-1?99999:rightstart;
    return !(leftstart > leftend && rightend < rightstart);
    //return (txt1.substring(0, txt1.indexOf(txt2)).lastIndexOf('[/dict]') <= txt1.substring(0, txt1.indexOf(txt2)).lastIndexOf('[dict]') && txt1.substring(txt1.indexOf(txt2), ).indexOf('[dict]') >= txt1.substring(txt1.indexOf(txt2), ).indexOf('[/dict]'))
}

function replacewithoutdict(txt1, txt2, txt3) {
    while (txt1.indexOf(txt2) != -1) {
        var replaced = false;
        if (isnotindict(txt1, txt2)) {
            txt1 = txt1.replace(txt2, txt3);
            replaced = true;
        }
        else {
            txt1 = txt1.replace(txt2, "【内部占位符1】");
            replaced = true;
        }
        if (replaced === false)
            break;
    }
    txt1 = txt1.split("【内部占位符1】").join(txt2);
    return txt1;
}

function replacewithoutdictonetime(txt1, txt2, txt3) {
    while (txt1.indexOf(txt2) != -1) {
        if (isnotindict(txt1, txt2)) {
            txt1 = txt1.replace(txt2, txt3);
            break;
        }
        else {
            txt1 = txt1.replace(txt2, "【内部占位符1】");
        }
    }
    txt1 = txt1.split("【内部占位符1】").join(txt2);
    return txt1;
}

function press() {
    var content = document.getElementById('input').value;
    for (var i in database) {
        var data = database[i];
        var findthis = content.indexOf(data.cname);
        if (findthis != -1) {
            if (data.others === "transform"){
                data.pic1 = '[img]http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid={0}&type=card[/img]'.format(data.number[0]);
                data.pic2 = '[img]http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid={0}&type=card[/img]'.format(data.number[1]);
                data.name1 = data.name[0];
                data.name2 = data.name[1];
            } else {
                data.pic = '[img]http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid={0}&type=card[/img]'.format(data.number);
            }
            var color = 'black';
            switch(data.color.length){
                case 0:
                    color = 'burlywood';
                    break;
                case 1:
                    switch(data.color[0]){
                        case 'W':
                            color = 'silver';
                            break;
                        case 'U':
                            color = 'blue';
                            break;
                        case 'B':
                            color = 'black';
                            break;
                        case 'R':
                            color = 'red';
                            break;
                        case 'G':
                            color = 'green';
                            break;
                    }
                    break;
                default:
                    color = 'orange';
                    break;
            }
            content = replacewithoutdictonetime(content, data.cname, "【占位符】");
            content = replacewithoutdict(content, data.cname, "【占位符改二甲】");
            if (color === 'black') {
                content = replacewithoutdict(content, "【占位符改二甲】", "[dict][{0}][/dict]".format(data.cname));
            } else {
                content = replacewithoutdict(content, "【占位符改二甲】", "[color={0}][dict][{1}][/dict][/color]".format(color, data.cname));
            }
            if (data.others === "transform") {
                if (color === 'black') {
                    content = replacewithoutdict(content, "【占位符】", "[dict][{0}][table][tr][td][b]{1}[/b][/td][td][b]{2}[/b][/td][/tr][tr][td]{3}[/td][td]{4}[/td][/tr][/table][/dict]".format(data.cname,data.name1,data.name2,data.pic1,data.pic2));
                } else {
                    content = replacewithoutdict(content, "【占位符】", "[color={0}][dict][{1}][table][tr][td][b]{2}[/b][/td][td][b]{3}[/b][/td][/tr][tr][td]{4}[/td][td]{5}[/td][/tr][/table][/dict][/color]".format(color,data.cname,data.name1,data.name2,data.pic1,data.pic2));
                }
            } else {
                if (color === 'black') {
                    content = replacewithoutdict(content, "【占位符】", "[dict][{0}][table][tr][td][b]{1}[/b][/td][/tr][tr][td]{2}[/td][/tr][/table][/dict]".format(data.cname, data.name,data.pic));
                } else {
                    content = replacewithoutdict(content, "【占位符】", "[color={0}][dict][{1}][table][tr][td][b]{2}[/b][/td][/tr][tr][td]{3}[/td][/tr][/table][/dict][/color]".format(color,data.cname, data.name,data.pic));
                }
            }
            //console.log(content);
        }
    }
    var p = document.getElementById('output');
    p.value = content;
    return 0;
}
