var story = [
    [
        "bg_infirmary",
        "char_263_skadi_2",
        "char_003_kalts_1",
        "ac1_ex6"
    ],
    [
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro"
    ],
    [
        "background.showImage({image:'bg_infirmary', fadetime:1});delay(1);voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.8, crossfade:1.5});delay(1);playground.drawCharacter({name:'char_263_skadi_2'});playground.drawDialog({name:'斯卡蒂',text:'站住，凯尔希。'});",
        "playground.drawCharacter({});playground.clearDialog();playground.drawCharacter({name:'char_003_kalts_1',fadetime:1});delay(2);playground.drawDialog({name:'凯尔希',text:'你回来了。'});",
        "playground.drawDialog({name:'凯尔希',text:'现在你是想通了，还是怎么？'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'斯卡蒂',text:'你想要这个对吧，拿去。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'你私自出动了。'});",
        "playground.drawDialog({name:'凯尔希',text:'我不干涉干员的私事，也不会过问他们做了些什么，只要他们没有损害罗德岛的利益。'});",
        "playground.drawDialog({name:'凯尔希',text:'希望你的行为不要有失你在罗德岛的身份，斯卡蒂。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'斯卡蒂',text:'冷嘲热讽就免了。规矩我很清楚，一物换一物。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'你想要从我这里换到什么？'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'斯卡蒂',text:'信息。'});",
        "playground.drawImage({image:'ac1_ex6',x:-100, y:0, xscale:1.2, yscale:1.2, fadetime:1});playground.imageTween({xfrom:-100, yfrom:0, xto:0, yto:0, xscalefrom:1.2, yscalefrom:1.2, xscaleto:1.2, yscaleto:1.2, duration:10, block:false});playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'我所拥有的信息的价值，真有这么轻贱？'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'斯卡蒂',text:'我可以立刻就把这块石头捏成碎片，你不想这样。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'但我知道你假称任务，去了卡西米尔的滴水村，还和其他干员发生了冲突。'});",
        "playground.drawDialog({name:'凯尔希',text:'那个孩子无论是在滴水村还是在罗德岛，都替你保守了秘密。但我绝没有向你发布过任何类似的任务。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'嗯？血已经注满了融芯。这不是你的血，你不敢在大地上流血。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'斯卡蒂',text:'是格拉尼的。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'你已经做了这种事。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'斯卡蒂',text:'我会回报她，这不用你提醒。'});",
        "playground.drawDialog({name:'斯卡蒂',text:'我知道你需要这东西，钥匙、核心、记忆块，随便它是什么。我必须弄到手。'});",
        "playground.drawDialog({name:'斯卡蒂',text:'“颅腔”，“火肺”，“黄烟”，我全都解决了。'});",
        "playground.drawDialog({name:'斯卡蒂',text:'否则，这东西早已落到他们手上了。而和他们交易的绝不会是你，因为你给不出他们要的东西，你不会做那种事。'});",
        "playground.drawDialog({name:'斯卡蒂',text:'你需要这块“石头”，我需要知道我想知道的东西。'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.drawImage({fadetime:0});blocker.blocker({a:0, fadetime:0.6, block:false});delay(1);playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'你和你的种群让我感到可笑，我并不依赖任何一个零件去拼凑出大地的全貌。'});",
        "playground.drawDialog({name:'凯尔希',text:'你与罗德岛由契约相连，你与我也当如是。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'斯卡蒂',text:'一物换一物。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:2});playground.drawDialog({name:'凯尔希',text:'难得看见你恼怒的样子。只有在这种时候，你才会一改平常的慵懒和颓废。'});",
        "playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'你想知道幽灵鲨身上源石神经剂的来源。'});",
        "playground.drawCharacter({name:'char_263_skadi_2'});playground.drawDialog({name:'斯卡蒂',text:'——你是怎么知道的？'});",
        "playground.drawCharacter({name:'char_003_kalts_1'});delay(0.3);playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.drawDialog({name:'凯尔希',text:'（阿戈尔语）“深海猎人血脉相连”。'});",
        "background.showImage({fadetime:0});blocker.blocker({a:0, fadetime:0.6, block:false});playground.drawDialog({name:'凯尔希',text:'我无所不知。'});",
        "playground.drawCharacter({name:'char_263_skadi_2'});playground.drawDialog({name:'斯卡蒂',text:'......告诉我。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:2});background.showImage({image:'bg_infirmary', fadetime:1});playground.drawDialog({name:'凯尔希',text:'可以。只要你听我的命令，我甚至会主动帮助你。前提是，你必须听从命令。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_003_kalts_1',focus:1});playground.drawDialog({name:'斯卡蒂',text:'我只相信可信之人。'});",
        "playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'我言而有信。'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({fadetime:3,block:true});playground.drawImage({});"
    ]
];