"use strict";

var database = [
    {
        "name": "黑暗贤者",
        "pic": "[img]./mon_201812/02/-659kbQ5-301iZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>奔腾</span>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>将另一个友方单位移至另一条兵线。",
        "color": "green"
    },
    {
        "name": "马格纳斯",
        "pic": "[img]./mon_201812/02/-659kbQ5-d61pZ21T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "树精卫士",
        "pic": "[img]./mon_201812/02/-659kbQ5-15s6Z20T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>钢铁树枝</span>\n树精卫士的友方近邻+2护甲。",
        "color": "green"
    },
    {
        "name": "全知骑士",
        "pic": "[img]./mon_201812/02/-659kbQ5-ah1rZ1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>洗礼</span>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>对一个单位进行3治疗。",
        "color": "green"
    },
    {
        "name": "魅惑魔女",
        "pic": "[img]./mon_201812/02/-659kbQ5-jyvjZ26T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>自然之助</span>\n魅惑魔女+2恢复。魅惑魔女的友方近邻+2恢复。",
        "color": "green"
    },
    {
        "name": "卓尔游侠",
        "pic": "[img]./mon_201812/02/-659kbQ5-7w0yZ23T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>精准灵气</span>\n所有兵线上的其他友方单位+1攻击。",
        "color": "green"
    },
    {
        "name": "冥界亚龙",
        "pic": "[img]./mon_201812/02/-659kbQ5-hoviZ1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>腐蚀皮肤</span>\n当一个单位对冥界亚龙造成战斗伤害时，修改该单位，使其-1攻击。",
        "color": "green"
    },
    {
        "name": "瑞克斯",
        "pic": "[img]./mon_201812/02/-659kbQ5-5lzzZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>不懈叛军</span>\n瑞克斯具有快速部署。",
        "color": "green"
    },
    {
        "name": "陈",
        "pic": "[img]./mon_201812/02/-659kbQ5-ev96Z20T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>神圣劝化</span>\n<span style='font-weight:bold;color:#ffffff;'>主动4：</span>控制一名敌方小兵。",
        "color": "green"
    },
    {
        "name": "亚巴顿",
        "pic": "[img]./mon_201812/02/-659kbQ5-31ytZ21T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>回光返照</span>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>完整治疗亚巴顿，并使其在本回合获得伤害免疫。",
        "color": "green"
    },
    {
        "name": "狼人",
        "pic": "[img]./mon_201812/02/-659kbQ5-dkkvZ21T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>野性驱使</span>\n狼人的友方近邻+2攻击。",
        "color": "green"
    },
    {
        "name": "梦者法夫涵",
        "pic": "[img]./mon_201812/02/-659kbQ5-1vrfZ20T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>兽群领袖</span>\n梦者法夫涵的友方近邻+1护甲。",
        "color": "green"
    },
    {
        "name": "玫叶神医",
        "pic": "[img]./mon_201812/02/-659kbQ5-gc4sZ22T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "遗迹卫士",
        "pic": "[img]./mon_201812/02/-659kbQ5-8yu6Z1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "玫叶墙",
        "pic": "[img]./mon_201812/02/-659kbQ5-10qeZ23T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "自私教士",
        "pic": "[img]./mon_201812/02/-659kbQ5-ehniZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "玫叶德鲁伊",
        "pic": "[img]./mon_201812/02/-659kbQ5-6piaZ21T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "暴走地狱熊怪",
        "pic": "[img]./mon_201812/02/-659kbQ5-kpqaZ22T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "野蛮灵狼",
        "pic": "[img]./mon_201812/02/-659kbQ5-d9g8Z1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "萨特决斗家",
        "pic": "[img]./mon_201812/02/-659kbQ5-f1b5Z20T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "雷肤兽领袖",
        "pic": "[img]./mon_201812/02/-659kbQ5-3eytZ1zT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "豺狼人殉道者",
        "pic": "[img]./mon_201812/02/-659kbQ5-d8psZ1zT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "雷肤兽群",
        "pic": "[img]./mon_201812/02/-659kbQ5-1f4pZ1yT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "评议团密使",
        "pic": "[img]./mon_201812/02/-659kbQ5-as3bZ1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "瑞文泰尔护卫队",
        "pic": "[img]./mon_201812/02/-659kbQ5-kg2eZ27T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "叛军诱饵",
        "pic": "[img]./mon_201812/02/-659kbQ5-clhtZ1yT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "打铁小魔铁匠",
        "pic": "[img]./mon_201812/02/-659kbQ5-1mobZ1yT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "潜行者先锋",
        "pic": "[img]./mon_201812/02/-659kbQ5-bg9mZ20T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "藐视权威",
        "pic": "[img]./mon_201812/02/-659kbQ5-cujiZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "窃取力量",
        "pic": "[img]./mon_201812/02/-659kbQ5-29fxZ1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "攻其不备",
        "pic": "[img]./mon_201812/02/-659kbQ5-ch7hZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "净化仪式",
        "pic": "[img]./mon_201812/02/-659kbQ5-2kyZ1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "恫吓",
        "pic": "[img]./mon_201812/02/-659kbQ5-95niZ1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "神圣旨意",
        "pic": "[img]./mon_201812/02/-659kbQ5-6f65Z1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "回春之魂",
        "pic": "[img]./mon_201812/02/-659kbQ5-iaidZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "魔霭福泽",
        "pic": "[img]./mon_201812/02/-659kbQ5-4q79Z1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "绕树",
        "pic": "[img]./mon_201812/02/-659kbQ5-fp8dZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "妙手回春",
        "pic": "[img]./mon_201812/02/-659kbQ5-ej01Z1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "全视者恩泽",
        "pic": "[img]./mon_201812/02/-659kbQ5-2stdZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "绽放防御",
        "pic": "[img]./mon_201812/02/-659kbQ5-cdl0Z1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "上帝之手",
        "pic": "[img]./mon_201812/02/-659kbQ5-8q2Z1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "狂风",
        "pic": "[img]./mon_201812/02/-659kbQ5-asyhZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "神圣干预",
        "pic": "[img]./mon_201812/02/-659kbQ5-dfqZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "五星连珠",
        "pic": "[img]./mon_201812/02/-659kbQ5-9i5wZ1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "铁树枝干守护",
        "pic": "[img]./mon_201812/02/-659kbQ5-j627Z1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "衰退诅咒",
        "pic": "[img]./mon_201812/02/-659kbQ5-6zitZ1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "武装叛军",
        "pic": "[img]./mon_201812/02/-659kbQ5-gqq7Z1zT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "喝斥",
        "pic": "[img]./mon_201812/02/-659kbQ5-4jotZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "捍卫弱者",
        "pic": "[img]./mon_201812/02/-659kbQ5-kgklZ1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "蝮蛇突袭",
        "pic": "[img]./mon_201812/02/-659kbQ5-8hc8Z1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "无光之盾",
        "pic": "[img]./mon_201812/02/-659kbQ5-i3t6Z1yT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "离子外壳",
        "pic": "[img]./mon_201812/02/-659kbQ5-5uloZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "授予力量",
        "pic": "[img]./mon_201812/02/-659kbQ5-ht44Z1yT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "鲁姆斯克的祝福",
        "pic": "[img]./mon_201812/02/-659kbQ5-il11Z1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "腐蚀迷雾",
        "pic": "[img]./mon_201812/02/-659kbQ5-6xycZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "青翠庇护",
        "pic": "[img]./mon_201812/02/-659kbQ5-jg29Z1zT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "命不该绝",
        "pic": "[img]./mon_201812/02/-659kbQ5-8s1kZ1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "癫狂之月祭坛",
        "pic": "[img]./mon_201812/02/-659kbQ5-i8qcZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "魔霭迷雾",
        "pic": "[img]./mon_201812/02/-659kbQ5-6wznZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "赛莉蒙妮的眷顾",
        "pic": "[img]./mon_201812/02/-659kbQ5-g6maZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "地主优势",
        "pic": "[img]./mon_201812/02/-659kbQ5-4053Z1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "梦者之路",
        "pic": "[img]./mon_201812/02/-659kbQ5-d9tdZ1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "秘密出土",
        "pic": "[img]./mon_201812/02/-659kbQ5-15gaZ1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "green"
    },
    {
        "name": "宙斯",
        "pic": "[img]./mon_201812/02/-659kbQ5-ky1xZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>静电场</span>\n打出一张<span style='font-weight:bold;color:#2f7492;'>蓝色法术</span>后，对宙斯的敌方近邻造成1透甲伤害。",
        "color": "blue"
    },
    {
        "name": "冰晶圣女",
        "pic": "[img]./mon_201812/02/-659kbQ5-anmsZ1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>奥术灵气</span>\n在各兵线上首次打出友方法术后，该兵线上的塔恢复2魔力。",
        "color": "blue"
    },
    {
        "name": "天怒法师",
        "pic": "[img]./mon_201812/02/-659kbQ5-l6xpZ21T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>震荡光弹</span>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>在本回合使一名英雄及其友方近邻-2护甲。",
        "color": "blue"
    },
    {
        "name": "普瑞蕾斯",
        "pic": "[img]./mon_201812/02/-659kbQ5-97xyZ1kT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>信仰使者</span>\ng:204部署阶段，召唤一名<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>至普瑞蕾斯的兵线。",
        "color": "blue"
    },
    {
        "name": "殁境神蚀者",
        "pic": "[img]./mon_201812/02/-659kbQ5-ix3eZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>精华灵气</span>\n打出一张<span style='font-weight:bold;color:#2f7492;'>蓝色卡牌</span>后，有50%几率恢复2魔力。",
        "color": "blue"
    },
    {
        "name": "食人魔魔法师",
        "pic": "[img]./mon_201812/02/-659kbQ5-7w3vZ1zT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>多重施法</span>\n打出一张<span style='font-weight:bold;color:#2f7492;'>蓝色法术</span>后，有25%几率将该卡牌的基础副本加入你的手牌。",
        "color": "blue"
    },
    {
        "name": "撼地者",
        "pic": "[img]./mon_201812/02/-659kbQ5-hn0wZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>沟壑</span>\n<span style='font-weight:bold;color:#ffffff;'>主动4：</span>在本回合晕眩撼地者的敌方近邻。",
        "color": "blue"
    },
    {
        "name": "卡娜",
        "pic": "[img]./mon_201812/02/-659kbQ5-5sewZ21T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>征服使者</span>\n将随机友方<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>部署至卡娜的兵线。",
        "color": "blue"
    },
    {
        "name": "露娜",
        "pic": "[img]./mon_201812/02/-659kbQ5-gwkmZ1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>月光</span>\n行动阶段前，对一个随机敌人造成1透甲伤害，并使你手牌和牌组中的三张随机<span style='font-weight:bold;color:#ffffff;'>月蚀</span>卡牌增加1能量。",
        "color": "blue"
    },
    {
        "name": "米波",
        "pic": "[img]./mon_201812/02/-659kbQ5-5atnZ1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>忽悠</span>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span> 将米波移至友方<span style='font-weight:bold;color:#ffffff;'>米波</span>的兵线，对新的敌方近邻造成2伤害。\n\n<span style='font-weight:bold;color:#ffffff;'>合则倒</span>\n米波具有灵魂束缚。（如果米波死亡，每条兵线上的所有其他友方米波也会死亡。）",
        "color": "blue"
    },
    {
        "name": "剧毒术士",
        "pic": "[img]./mon_201812/02/-659kbQ5-exz8Z1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>剧毒本性</span>\n每次部署阶段，召唤一名<span style='font-weight:bold;color:#ffffff;'>瘟疫守卫</span>至剧毒术士的兵线。",
        "color": "blue"
    },
    {
        "name": "智者吉姆伊",
        "pic": "[img]./mon_201812/02/-659kbQ5-4dxsZ1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>长者的智慧</span>\n<span style='font-weight:bold;color:#ffffff;'>主动4：</span>抽一张牌。",
        "color": "blue"
    },
    {
        "name": "巨魔占卜师",
        "pic": "[img]./mon_201812/02/-659kbQ5-ldntZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "萨特魔术师",
        "pic": "[img]./mon_201812/02/-659kbQ5-9o06Z1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "赛莉蒙妮的化身",
        "pic": "[img]./mon_201812/02/-659kbQ5-j9s9Z1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "不屈僵尸",
        "pic": "[img]./mon_201812/02/-659kbQ5-7fjnZ1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "瘟疫守卫",
        "pic": "[img]./mon_201812/02/-659kbQ5-gzqaZ1hT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "不惜代价",
        "pic": "[img]./mon_201812/02/-659kbQ5-flsrZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "疯狂低语",
        "pic": "[img]./mon_201812/02/-659kbQ5-5ks1Z1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "腹语术",
        "pic": "[img]./mon_201812/02/-659kbQ5-g1yxZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "雷霆风暴",
        "pic": "[img]./mon_201812/02/-659kbQ5-7f86Z1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "狡诈计谋",
        "pic": "[img]./mon_201812/02/-659kbQ5-kq7nZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "塔防炮火",
        "pic": "[img]./mon_201812/02/-659kbQ5-ccixZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "勒令",
        "pic": "[img]./mon_201812/02/-659kbQ5-3ufjZ1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "战场迷雾",
        "pic": "[img]./mon_201812/02/-659kbQ5-i8rbZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "遥控引爆",
        "pic": "[img]./mon_201812/02/-659kbQ5-5ztmZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "奥术突袭",
        "pic": "[img]./mon_201812/02/-659kbQ5-ffqdZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "误伤",
        "pic": "[img]./mon_201812/02/-659kbQ5-3bqxZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "拖延战术",
        "pic": "[img]./mon_201812/02/-659kbQ5-cgnjZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "次元传送门",
        "pic": "[img]./mon_201812/02/-659kbQ5-6muZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "达摩克斯霹雳",
        "pic": "[img]./mon_201812/02/-659kbQ5-9htzZ1iT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "闪电一击",
        "pic": "[img]./mon_201812/02/-659kbQ5-ixecZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "为时未晚",
        "pic": "[img]./mon_201812/02/-659kbQ5-7094Z1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "呼叫预备军",
        "pic": "[img]./mon_201812/02/-659kbQ5-gp3aZ1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "金钱之怒",
        "pic": "[img]./mon_201812/02/-659kbQ5-5kqoZ1zT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "弱肉强食",
        "pic": "[img]./mon_201812/02/-659kbQ5-f1ynZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "回音击",
        "pic": "[img]./mon_201812/02/-659kbQ5-5otbZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "恶魔启示",
        "pic": "[img]./mon_201812/02/-659kbQ5-fudsZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "灭绝",
        "pic": "[img]./mon_201812/02/-659kbQ5-6ovnZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "低空扫射",
        "pic": "[img]./mon_201812/02/-659kbQ5-g60hZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "先见之明",
        "pic": "[img]./mon_201812/02/-659kbQ5-5efpZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "自我破坏",
        "pic": "[img]./mon_201812/02/-659kbQ5-eviaZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "迷失时空",
        "pic": "[img]./mon_201812/02/-659kbQ5-2t7iZ1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "雷神之怒",
        "pic": "[img]./mon_201812/02/-659kbQ5-cf3iZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "冰封禁制",
        "pic": "[img]./mon_201812/02/-659kbQ5-xeiZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "星体禁锢",
        "pic": "[img]./mon_201812/02/-659kbQ5-bbhbZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "奔腾风暴",
        "pic": "[img]./mon_201812/02/-659kbQ5-lazhZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "…我也来一个",
        "pic": "[img]./mon_201812/02/-659kbQ5-apalZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "神秘之耀",
        "pic": "[img]./mon_201812/02/-659kbQ5-kwh6Z1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "月蚀",
        "pic": "[img]./mon_201812/02/-659kbQ5-8r3eZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "分则立",
        "pic": "[img]./mon_201812/02/-659kbQ5-i1crZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "播撒烈毒",
        "pic": "[img]./mon_201812/02/-659kbQ5-5zstZ1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "战场控制",
        "pic": "[img]./mon_201812/02/-659kbQ5-f8oxZ1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "瞭望塔",
        "pic": "[img]./mon_201812/02/-659kbQ5-71pjZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "困惑符文",
        "pic": "[img]./mon_201812/02/-659kbQ5-hs95Z1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "信使之巢",
        "pic": "[img]./mon_201812/02/-659kbQ5-5s8cZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "阿哈利姆圣所",
        "pic": "[img]./mon_201812/02/-659kbQ5-ew2fZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "咆哮意志",
        "pic": "[img]./mon_201812/02/-659kbQ5-2y4tZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "引燃",
        "pic": "[img]./mon_201812/02/-659kbQ5-cecbZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "烈焰",
        "pic": "[img]./mon_201812/02/-659kbQ5-1ieeZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "智者之路",
        "pic": "[img]./mon_201812/02/-659kbQ5-aw8hZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "破碎时间轴",
        "pic": "[img]./mon_201812/02/-659kbQ5-tzvZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "兵营",
        "pic": "[img]./mon_201812/02/-659kbQ5-ajfvZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "blue"
    },
    {
        "name": "熊战士",
        "pic": "[img]./mon_201812/02/-659kbQ5-7qidZ1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>怒意狂击</span>\n当熊战士对一个单位造成战斗伤害时，修改该单位，使其-1护甲。",
        "color": "red"
    },
    {
        "name": "军团指挥官",
        "pic": "[img]./mon_201812/02/-659kbQ5-jegwZ1zT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>勇气之霎</span>\n军团指挥官+2反伤。",
        "color": "red"
    },
    {
        "name": "斯温",
        "pic": "[img]./mon_201812/02/-659kbQ5-91s6Z1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>巨力挥舞</span>\n斯温+X顺势，X为其攻击的一半。",
        "color": "red"
    },
    {
        "name": "梅兹",
        "pic": "[img]./mon_201812/02/-659kbQ5-ifcdZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "帕格纳",
        "pic": "[img]./mon_201812/02/-659kbQ5-6ky8Z1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>幽冥爆轰</span>\n<span style='font-weight:bold;color:#ffffff;'>主动3：</span>惩处一个随机敌方强化。",
        "color": "red"
    },
    {
        "name": "钢背兽",
        "pic": "[img]./mon_201812/02/-659kbQ5-ft0pZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>酒馆醉拳</span>\n当阻挡其前的英雄死亡后，修改钢背兽，使其+2护甲。",
        "color": "red"
    },
    {
        "name": "兽王",
        "pic": "[img]./mon_201812/02/-659kbQ5-3x5kZ1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>野性呼唤</span>\n<span style='font-weight:bold;color:#ffffff;'>主动3：</span>召唤一头<span style='font-weight:bold;color:#ffffff;'>忠诚野兽</span>。",
        "color": "red"
    },
    {
        "name": "潮汐猎人",
        "pic": "[img]./mon_201812/02/-659kbQ5-dvfrZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>毁灭</span>\n<span style='font-weight:bold;color:#ffffff;'>主动4：</span>在本回合晕眩潮汐猎人的敌方近邻，其他敌人也有50%几率被晕眩。",
        "color": "red"
    },
    {
        "name": "伐木机",
        "pic": "[img]./mon_201812/02/-659kbQ5-4ez8Z1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>活性护甲</span>\n伐木机每有一个攻击者，便+1护甲。",
        "color": "red"
    },
    {
        "name": "半人马战行者",
        "pic": "[img]./mon_201812/02/-659kbQ5-dyksZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>反击</span>\n半人马战行者+2反伤。",
        "color": "red"
    },
    {
        "name": "斧王",
        "pic": "[img]./mon_201812/02/-659kbQ5-1qv9Z1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "勇者基弗",
        "pic": "[img]./mon_201812/02/-659kbQ5-axdvZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "忠诚野兽",
        "pic": "[img]./mon_201812/02/-659kbQ5-9gaaZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "红雾掠夺者",
        "pic": "[img]./mon_201812/02/-659kbQ5-knijZ1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "石堂城精英",
        "pic": "[img]./mon_201812/02/-659kbQ5-8zhlZ1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "食人魔士兵",
        "pic": "[img]./mon_201812/02/-659kbQ5-idysZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "地狱熊怪摧残者",
        "pic": "[img]./mon_201812/02/-659kbQ5-658aZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "被诅咒的萨特",
        "pic": "[img]./mon_201812/02/-659kbQ5-fnyrZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "古铜军团士兵",
        "pic": "[img]./mon_201812/02/-659kbQ5-3a3yZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "食人魔投尸手",
        "pic": "[img]./mon_201812/02/-659kbQ5-ch8lZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "断骨格斗士",
        "pic": "[img]./mon_201812/02/-659kbQ5-1gcuZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "基恩巨傀儡",
        "pic": "[img]./mon_201812/02/-659kbQ5-amj9Z1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "亡命佣兵",
        "pic": "[img]./mon_201812/02/-659kbQ5-jtrbZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "军团旗手",
        "pic": "[img]./mon_201812/02/-659kbQ5-84ceZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "叛乱煽动者",
        "pic": "[img]./mon_201812/02/-659kbQ5-hhvqZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "半人马猎者",
        "pic": "[img]./mon_201812/02/-659kbQ5-5dvlZ1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "打铁小魔武器大师",
        "pic": "[img]./mon_201812/02/-659kbQ5-ersvZ1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "胜利时刻",
        "pic": "[img]./mon_201812/02/-659kbQ5-dxqzZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "致残重击",
        "pic": "[img]./mon_201812/02/-659kbQ5-2f1mZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "粘稠鼻液",
        "pic": "[img]./mon_201812/02/-659kbQ5-ewuaZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "触发陷阱",
        "pic": "[img]./mon_201812/02/-659kbQ5-6kmaZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "特蕾丝汀的战旗",
        "pic": "[img]./mon_201812/02/-659kbQ5-jqvjZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "忍痛奋战",
        "pic": "[img]./mon_201812/02/-659kbQ5-b7y4Z1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "撕裂护甲",
        "pic": "[img]./mon_201812/02/-659kbQ5-2y3vZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "新命令",
        "pic": "[img]./mon_201812/02/-659kbQ5-g41oZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "冷不胜防",
        "pic": "[img]./mon_201812/02/-659kbQ5-90vuZ1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "怒火高涨",
        "pic": "[img]./mon_201812/02/-659kbQ5-pxbZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "一扫而空",
        "pic": "[img]./mon_201812/02/-659kbQ5-dshbZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "惹是生非",
        "pic": "[img]./mon_201812/02/-659kbQ5-2etaZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "决斗",
        "pic": "[img]./mon_201812/02/-659kbQ5-bpjpZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "神之力量",
        "pic": "[img]./mon_201812/02/-659kbQ5-kx7qZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "英勇意志",
        "pic": "[img]./mon_201812/02/-659kbQ5-8qhcZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "废话少说！",
        "pic": "[img]./mon_201812/02/-659kbQ5-hviaZ1iT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "洞察弱点",
        "pic": "[img]./mon_201812/02/-659kbQ5-665cZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "如箭在弦",
        "pic": "[img]./mon_201812/02/-659kbQ5-feprZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "粉碎防御！",
        "pic": "[img]./mon_201812/02/-659kbQ5-350uZ1hT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "全面拆除",
        "pic": "[img]./mon_201812/02/-659kbQ5-dt2mZ1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "战斗训练",
        "pic": "[img]./mon_201812/02/-659kbQ5-2270Z1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "防御架势",
        "pic": "[img]./mon_201812/02/-659kbQ5-b9rqZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "死亡回旋",
        "pic": "[img]./mon_201812/02/-659kbQ5-kr5fZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "原始咆哮",
        "pic": "[img]./mon_201812/02/-659kbQ5-8zr9Z1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "双刃剑",
        "pic": "[img]./mon_201812/02/-659kbQ5-j6z1Z1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "海妖外壳",
        "pic": "[img]./mon_201812/02/-659kbQ5-8emmZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "狂战士之吼",
        "pic": "[img]./mon_201812/02/-659kbQ5-huj7Z1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "激怒",
        "pic": "[img]./mon_201812/02/-659kbQ5-5ogrZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "一败涂地",
        "pic": "[img]./mon_201812/02/-659kbQ5-faapZ21T1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "战斗本能",
        "pic": "[img]./mon_201812/02/-659kbQ5-30gjZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "欧梅克斯竞技场",
        "pic": "[img]./mon_201812/02/-659kbQ5-2b53Z1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "铜墙铁壁",
        "pic": "[img]./mon_201812/02/-659kbQ5-e3u7Z1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "大乱斗",
        "pic": "[img]./mon_201812/02/-659kbQ5-1vd7Z1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "滚烫火油",
        "pic": "[img]./mon_201812/02/-659kbQ5-b00iZ1kT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "幽冥守卫",
        "pic": "[img]./mon_201812/02/-659kbQ5-kdbhZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "战争神殿",
        "pic": "[img]./mon_201812/02/-659kbQ5-8cljZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "勇者之路",
        "pic": "[img]./mon_201812/02/-659kbQ5-hbufZ1kT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "red"
    },
    {
        "name": "风暴之灵",
        "pic": "[img]./mon_201812/02/-659kbQ5-e3zZ1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>超负荷</span>\n在任意兵线上打出一张<span style='font-weight:bold;color:#736e80;'>黑色卡牌</span>后，使风暴之灵+2攻击，直至其下个战斗阶段结束为止。",
        "color": "black"
    },
    {
        "name": "莱恩",
        "pic": "[img]./mon_201812/02/-659kbQ5-9yakZ1jT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>死亡之指</span>\n<span style='font-weight:bold;color:#ffffff;'>主动4：</span>对一个单位造成8透甲伤害。",
        "color": "black"
    },
    {
        "name": "瘟疫法师",
        "pic": "[img]./mon_201812/02/-659kbQ5-j2m9Z1kT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>施虐之心</span>\ng:600敌方近邻死亡后，修改瘟疫法师，使其+1生命。",
        "color": "black"
    },
    {
        "name": "索尔拉可汗",
        "pic": "[img]./mon_201812/02/-659kbQ5-6m4lZ1dT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>好战者</span>\n索尔拉可汗攻击塔时，造成+4伤害。",
        "color": "black"
    },
    {
        "name": "狙击手",
        "pic": "[img]./mon_201812/02/-659kbQ5-fwxkZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>爆头</span>\n<span style='font-weight:bold;color:#ffffff;'>主动3：</span>对一个单位造成5伤害。",
        "color": "black"
    },
    {
        "name": "幻影刺客",
        "pic": "[img]./mon_201812/02/-659kbQ5-3i5qZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>杀戮高手</span>\n幻影刺客攻击英雄时，造成+4伤害。",
        "color": "black"
    },
    {
        "name": "巫妖",
        "pic": "[img]./mon_201812/02/-659kbQ5-d02aZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>献祭</span>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>惩处另一个友方单位并抽一张牌。如果该友方单位的攻击为6或以上，则多抽一张牌。",
        "color": "black"
    },
    {
        "name": "修补匠",
        "pic": "[img]./mon_201812/02/-659kbQ5-1jqtZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>激光</span>\n<span style='font-weight:bold;color:#ffffff;'>主动3：</span>对一个单位造成3伤害，并在本回合使其缴械。",
        "color": "black"
    },
    {
        "name": "赏金猎人",
        "pic": "[img]./mon_201812/02/-659kbQ5-am3qZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>忍术</span>\n行动阶段前，赏金猎人在本回合有50%几率+4攻击。",
        "color": "black"
    },
    {
        "name": "血魔",
        "pic": "[img]./mon_201812/02/-659kbQ5-jqyyZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>屠戮</span>\n当阻挡其前的单位死亡后，完整治疗血魔。",
        "color": "black"
    },
    {
        "name": "寒冬飞龙",
        "pic": "[img]./mon_201812/02/-659kbQ5-8t3wZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>严寒烧灼</span>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>将寒冬飞龙移至一个空白战斗位置，并使其在本回合+4攻击。",
        "color": "black"
    },
    {
        "name": "诈者德比",
        "pic": "[img]./mon_201812/02/-659kbQ5-ixiiZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "<span style='font-weight:bold;color:#ffffff;'>缜密策士</span>\n诈者德比攻击英雄或塔时，造成+2伤害。",
        "color": "black"
    },
    {
        "name": "高地人投石器",
        "pic": "[img]./mon_201812/02/-659kbQ5-dswsZ1kT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "刺客学徒",
        "pic": "[img]./mon_201812/02/-659kbQ5-2l7gZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "未经考验的士兵",
        "pic": "[img]./mon_201812/02/-659kbQ5-cetbZ1jT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "贪婪众生",
        "pic": "[img]./mon_201812/02/-659kbQ5-3xuZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "勾财黑鸦",
        "pic": "[img]./mon_201812/02/-659kbQ5-9294Z1jT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "战争猎犬",
        "pic": "[img]./mon_201812/02/-659kbQ5-iyw9Z1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "高地人破坏者",
        "pic": "[img]./mon_201812/02/-659kbQ5-7c2fZ1jT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "奈文摩尔的信徒",
        "pic": "[img]./mon_201812/02/-659kbQ5-gmbpZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "刺客暗影",
        "pic": "[img]./mon_201812/02/-659kbQ5-4lkoZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "囚尸岭绝命斗士",
        "pic": "[img]./mon_201812/02/-659kbQ5-dxhoZ1gT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "泰勒庄园巡检",
        "pic": "[img]./mon_201812/02/-659kbQ5-2p3wZ1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "幻纱姐妹会刺客",
        "pic": "[img]./mon_201812/02/-659kbQ5-c3jsZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "僵尸",
        "pic": "[img]./mon_201812/02/-659kbQ5-6haZ1jT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "球状闪电",
        "pic": "[img]./mon_201812/02/-659kbQ5-f94zZ1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "追踪术",
        "pic": "[img]./mon_201812/02/-659kbQ5-54rkZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "连带伤害",
        "pic": "[img]./mon_201812/02/-659kbQ5-ehi8Z1fT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "冲锋陷阵",
        "pic": "[img]./mon_201812/02/-659kbQ5-32hbZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "杀戮",
        "pic": "[img]./mon_201812/02/-659kbQ5-c62cZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "夜色掩护",
        "pic": "[img]./mon_201812/02/-659kbQ5-l9nxZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "穷追不舍",
        "pic": "[img]./mon_201812/02/-659kbQ5-90e5Z1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "联手突袭",
        "pic": "[img]./mon_201812/02/-659kbQ5-i0fmZ1jT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "逐一击破",
        "pic": "[img]./mon_201812/02/-659kbQ5-5p4wZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "杀戮阴谋",
        "pic": "[img]./mon_201812/02/-659kbQ5-5kl5Z1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "偷袭",
        "pic": "[img]./mon_201812/02/-659kbQ5-4f3xZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "发薪日",
        "pic": "[img]./mon_201812/02/-659kbQ5-4lh7Z1hT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "连环霜冻",
        "pic": "[img]./mon_201812/02/-659kbQ5-608qZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "肮脏勾当",
        "pic": "[img]./mon_201812/02/-659kbQ5-4et4Z1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "恩赐解脱",
        "pic": "[img]./mon_201812/02/-659kbQ5-4clxZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "奥术谴责",
        "pic": "[img]./mon_201812/02/-659kbQ5-6qzpZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "血之狂暴",
        "pic": "[img]./mon_201812/02/-659kbQ5-fxhcZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "法力吸取",
        "pic": "[img]./mon_201812/02/-659kbQ5-3n6wZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "竭心灵气",
        "pic": "[img]./mon_201812/02/-659kbQ5-crmnZ1kT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "腰射",
        "pic": "[img]./mon_201812/02/-659kbQ5-e8oZ1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "暗杀",
        "pic": "[img]./mon_201812/02/-659kbQ5-9jagZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "擦肩之矢",
        "pic": "[img]./mon_201812/02/-659kbQ5-iwl1Z1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "磁石爆破",
        "pic": "[img]./mon_201812/02/-659kbQ5-6o5aZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "寒冬诅咒",
        "pic": "[img]./mon_201812/02/-659kbQ5-gvg0Z1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "绝非巧合",
        "pic": "[img]./mon_201812/02/-659kbQ5-5c99Z1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "机械行军",
        "pic": "[img]./mon_201812/02/-659kbQ5-6i9aZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "蒸汽大炮",
        "pic": "[img]./mon_201812/02/-659kbQ5-kjfhZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "基恩炮塔",
        "pic": "[img]./mon_201812/02/-659kbQ5-91udZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "誓约",
        "pic": "[img]./mon_201812/02/-659kbQ5-lf35Z1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "攻城梯",
        "pic": "[img]./mon_201812/02/-659kbQ5-adqaZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "脱逃路线",
        "pic": "[img]./mon_201812/02/-659kbQ5-4283Z1iT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "铁雾金矿",
        "pic": "[img]./mon_201812/02/-659kbQ5-igpiZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "瑞文泰尔的资产",
        "pic": "[img]./mon_201812/02/-659kbQ5-cdwjZ1wT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "无人监控的火炮",
        "pic": "[img]./mon_201812/02/-659kbQ5-84t9Z1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "投石机",
        "pic": "[img]./mon_201812/02/-659kbQ5-2kc3Z1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "夙敌",
        "pic": "[img]./mon_201812/02/-659kbQ5-g0bxZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "泰勒庄园",
        "pic": "[img]./mon_201812/02/-659kbQ5-79maZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "诈者之路",
        "pic": "[img]./mon_201812/02/-659kbQ5-jibbZ1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "同归于尽",
        "pic": "[img]./mon_201812/02/-659kbQ5-aho9Z1gT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "black"
    },
    {
        "name": "妮塔莎的守护",
        "pic": "[img]./mon_201812/02/-659kbQ5-aeepZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "领袖号角",
        "pic": "[img]./mon_201812/02/-659kbQ5-l49wZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "基恩板甲",
        "pic": "[img]./mon_201812/02/-659kbQ5-aeg0Z1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "石堂城板甲",
        "pic": "[img]./mon_201812/02/-659kbQ5-kd9lZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "希瓦的守护",
        "pic": "[img]./mon_201812/02/-659kbQ5-8szeZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "天鹰之盾",
        "pic": "[img]./mon_201812/02/-659kbQ5-ii1wZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "王者之盾",
        "pic": "[img]./mon_201812/02/-659kbQ5-6i21Z1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "板甲",
        "pic": "[img]./mon_201812/02/-659kbQ5-krpqZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "炽天使护盾",
        "pic": "[img]./mon_201812/02/-659kbQ5-aniwZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "暴君王袍",
        "pic": "[img]./mon_201812/02/-659kbQ5-jxabZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "支配头盔",
        "pic": "[img]./mon_201812/02/-659kbQ5-7rrrZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "牺牲背心",
        "pic": "[img]./mon_201812/02/-659kbQ5-hlqxZ1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "鲁姆斯克法袍",
        "pic": "[img]./mon_201812/02/-659kbQ5-5lhyZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "锁子甲",
        "pic": "[img]./mon_201812/02/-659kbQ5-fdujZ1tT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "倒刺链甲",
        "pic": "[img]./mon_201812/02/-659kbQ5-37t4Z1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "皮革护甲",
        "pic": "[img]./mon_201812/02/-659kbQ5-cnkzZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "超维视界沙漏",
        "pic": "[img]./mon_201812/02/-659kbQ5-hdb9Z1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "英雄披风",
        "pic": "[img]./mon_201812/02/-659kbQ5-6o3xZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "亡者之书",
        "pic": "[img]./mon_201812/02/-659kbQ5-g47rZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "戮尽斗篷",
        "pic": "[img]./mon_201812/02/-659kbQ5-94hkZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "瑞斯托纹章",
        "pic": "[img]./mon_201812/02/-659kbQ5-148uZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "恐鳌之戒",
        "pic": "[img]./mon_201812/02/-659kbQ5-gk53Z1kT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "皮袄斗篷",
        "pic": "[img]./mon_201812/02/-659kbQ5-82t0Z1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "瑞文泰尔印戒",
        "pic": "[img]./mon_201812/02/-659kbQ5-3jfqZ1jT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "石堂城斗篷",
        "pic": "[img]./mon_201812/02/-659kbQ5-jgb4Z1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "相位鞋",
        "pic": "[img]./mon_201812/02/-659kbQ5-bk36Z1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "刺客面纱",
        "pic": "[img]./mon_201812/02/-659kbQ5-2aspZ1iT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "旅者斗篷",
        "pic": "[img]./mon_201812/02/-659kbQ5-dcegZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "封神之刃",
        "pic": "[img]./mon_201812/02/-659kbQ5-8mneZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "碧玉匕首",
        "pic": "[img]./mon_201812/02/-659kbQ5-jsrjZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "石堂城长枪",
        "pic": "[img]./mon_201812/02/-659kbQ5-7y90Z1qT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "大剑",
        "pic": "[img]./mon_201812/02/-659kbQ5-j5zjZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "盗猎刀",
        "pic": "[img]./mon_201812/02/-659kbQ5-axjdZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "折翼之锤",
        "pic": "[img]./mon_201812/02/-659kbQ5-37ueZ1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "红雾巨锤",
        "pic": "[img]./mon_201812/02/-659kbQ5-dafzZ1pT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "基恩火枪",
        "pic": "[img]./mon_201812/02/-659kbQ5-16ndZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "阔剑",
        "pic": "[img]./mon_201812/02/-659kbQ5-acysZ1nT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "守夜大剑",
        "pic": "[img]./mon_201812/02/-659kbQ5-l0pdZ1mT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "祛魔之槌",
        "pic": "[img]./mon_201812/02/-659kbQ5-8uzkZ1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "闪烁匕首",
        "pic": "[img]./mon_201812/02/-659kbQ5-iho6Z1uT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "短剑",
        "pic": "[img]./mon_201812/02/-659kbQ5-6oaaZ1sT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "商店契约",
        "pic": "[img]./mon_201812/02/-659kbQ5-h90eZ1xT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "金奖券",
        "pic": "[img]./mon_201812/02/-659kbQ5-6pl1Z1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "抹灭法球",
        "pic": "[img]./mon_201812/02/-659kbQ5-gmp5Z1rT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "回城卷轴",
        "pic": "[img]./mon_201812/02/-659kbQ5-4dsjZ1oT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "知识魔药",
        "pic": "[img]./mon_201812/02/-659kbQ5-dlq1Z1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "泉水烧瓶",
        "pic": "[img]./mon_201812/02/-659kbQ5-1xu8Z1lT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    },
    {
        "name": "治疗药膏",
        "pic": "[img]./mon_201812/02/-659kbQ5-ba5mZ1vT1kSem-oq.png.thumb_s.jpg[/img]",
        "others": "",
        "color": "colorless"
    }
]


String.prototype.format = function(args)
{
    if (arguments.length > 0)
    {
        var result = this;
        if (arguments.length == 1 && typeof (args) == "object")
        {
            for (var key in args)
            {
                var reg = new RegExp("({" + key + "})", "g");
                result = result.replace(reg, args[key]);
            }
        }
        else
        {
            for (var i = 0; i < arguments.length; i++)
            {
                if (arguments[i] == undefined)
                {
                    return "";
                }
                else
                {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
        return result;
    }
    else
    {
        return this;
    }
}

function deletespan(content) {
    while (content.indexOf('<') != -1) {
        content = content.substring(0,content.indexOf('<'))+content.substring(content.indexOf('>')+1,);
    }
    return content;
}

function replacewithoutdict(txt1, txt2, txt3){
    while (txt1.indexOf(txt2) != -1){
        var replaced = false;
        console.log(txt1.substring(0,txt1.indexOf(txt2)).lastIndexOf('[/dict]'), txt1.substring(0,txt1.indexOf(txt2)).lastIndexOf('[dict]'));
        console.log(txt1.substring(txt1.indexOf(txt2),).indexOf('[dict]'), txt1.substring(txt1.indexOf(txt2),).indexOf('[/dict]'));
        if (txt1.substring(0,txt1.indexOf(txt2)).lastIndexOf('[/dict]') >= txt1.substring(0,txt1.indexOf(txt2)).lastIndexOf('[dict]') && txt1.substring(txt1.indexOf(txt2),).indexOf('[dict]') <= txt1.substring(txt1.indexOf(txt2),).indexOf('[/dict]')){
            txt1 = txt1.replace(txt2, txt3, 1);
            replaced = true;
        }
        if (replaced === false)
            break;
    }
    return txt1;
}

function replacewithoutdictonetime(txt1, txt2, txt3){
        if (txt1.substring(0,txt1.indexOf(txt2)).lastIndexOf('[/dict]') >= txt1.substring(0,txt1.indexOf(txt2)).lastIndexOf('[dict]') && txt1.substring(txt1.indexOf(txt2),).indexOf('[dict]') <= txt1.substring(txt1.indexOf(txt2),).indexOf('[/dict]'))
            txt1 = txt1.replace(txt2, txt3, 1);
    return txt1;
}

function press(){
    var content = document.getElementById('input').value;
    for (var i in database){
        var data = database[i];
        var findthis = content.indexOf(data.name);
        if (findthis != 1){
            var color = data.color === 'colorless'?'orange':data.color;
            content = replacewithoutdictonetime(content, data.name, "【占位符】");
            content = replacewithoutdict(content, data.name, "【占位符改二甲】");
            if (color === 'black'){
                content = replacewithoutdict(content, "【占位符改二甲】", "[dict][{0}][/dict]".format(data.name));
            }
            else{
                content = replacewithoutdict(content, "【占位符改二甲】", "[color={0}][dict][{1}][/dict][/color]".format(color, data.name));
            }
            if (data.others != ''){
                if (color === 'black'){
                    content = replacewithoutdict(content, "【占位符】", "[dict][{0}]{1}\n{2}[/dict]".format(data.name, data.pic, deletespan(data.others)));
                }
                else{
                    content = replacewithoutdict(content, "【占位符】", "[color={0}][dict][{1}]{2}\n{3}[/dict][/color]".format(color, data.name, data.pic, deletespan(data.others)));
                }
            }
            else{
                if (color === 'black'){
                    content = replacewithoutdict(content, "【占位符】", "[dict][{0}]{1}[/dict]".format(data.name, data.pic));
                }
                else{
                    content = replacewithoutdict(content, "【占位符】", "[color={0}][dict][{1}]{2}[/dict][/color]".format(color, data.name, data.pic));
                }
            }
        }
    }
    var p = document.getElementById('output');
    p.value = content;
    return 0;
}
