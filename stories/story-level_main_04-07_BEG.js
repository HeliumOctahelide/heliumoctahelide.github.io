var story = [
    [
        "bg_cher_2",
        "char_002_amiya_1",
        "char_002_amiya_7",
        "char_003_kalts_1",
        "char_002_amiya_6",
        "char_002_amiya_3"
    ],
    [
        "m_bat_qiechengimp_loop",
        "m_bat_qiechengimp_intro"
    ],
    [
        "background.showImage({screenadapt:'coverall', image:'bg_cher_2', width:1, height:1, fadetime:1});voice.playMusic({intro:'m_bat_qiechengimp_intro', key:'m_bat_qiechengimp_loop', volume:0.8, crossfade:1, delay:0.5});delay(1);playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'这里......倒下的都是些整合运动。'});",
        "playground.drawDialog({name:'阿米娅',text:'......这个，伤口流出的血液冻成了冰渣，其他部分却很完好。'});",
        "playground.drawDialog({name:'阿米娅',text:'确实是霜叶的技巧。'});",
        "playground.drawDialog({name:'阿米娅',text:'——那边的废墟，应该是爆炸导致的。'});",
        "playground.drawDialog({name:'阿米娅',text:'应该是陨星炸出来的没错。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'（霜叶......杰西卡......陨星......她们，一定还......）'});",
        "playground.drawCharacter({fadetime:0.6});playground.drawCharacter({widgetid:'1', name:'char_003_kalts_1', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:0, width:200, block:true});playground.drawDialog({name:'凯尔希',text:'阿米娅，各救援小队都已抵达罗德岛、'});",
        "playground.drawDialog({name:'凯尔希',text:'我们救出了除了陨星她们以外的所有侦查小队。'});",
        "playground.drawDialog({name:'凯尔希',text:'没有干员在任务中牺牲。但相应的——'});",
        "playground.drawDialog({name:'凯尔希',text:'所有人都有不同程度的冻伤。'});",
        "playground.drawDialog({name:'凯尔希',text:'你要重视这点。'});",
        "playground.drawCharacter({widgetid:'1', fadetime:0.5, block:true});playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'......冻伤？'});",
        "playground.drawCharacter({name:'char_002_amiya_6', focus:-1});playground.drawDialog({name:'凯尔希',text:'所有侦查小队都指出，分城中徘徊着一些特殊的整合运动成员。'});",
        "playground.drawDialog({name:'凯尔希',text:'他们有着特殊的作战方式，完全不像一般的整合运动成员那样盲目。'});",
        "playground.drawDialog({name:'凯尔希',text:'多加小心。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'我......我明白。'});",
        "playground.drawCharacter({name:'char_002_amiya_1', focus:-1});playground.drawDialog({name:'凯尔希',text:`Dr.${nickname}，你也明白吧？`});",
        "playground.Decision({options:[['明白']]});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'凯尔希',text:'那就好。'});",
        "playground.drawDialog({name:'凯尔希',text:'我也要去做一些事情了。'});",
        "playground.drawDialog({name:'凯尔希',text:`阿米娅，就算Dr.${nickname}很有用，也别太过依靠一个人。`});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({name:'char_002_amiya_1', focus:-1});playground.drawDialog({name:'凯尔希',text:'还有，注意戒指。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'我知道。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.2, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:0.2, block:true});playground.drawCharacter({name:'char_002_amiya_1', focus:-1});playground.drawDialog({name:'阿米娅',text:'其实凯尔希医生也很担心你的。'});",
        "playground.drawDialog({name:'阿米娅',text:'不知不觉中——'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'危险的野兽露出他们的利爪了。'});",
        "playground.Decision({options:[['整合运动在我们的背后。', '我们的退路......被切断了。', '这些感染者暴徒，似乎对我们有些想法呢。']]});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_002_amiya_3'});playground.drawDialog({name:'阿米娅',text:'嗯......他们非常想要阻止我们撤退呢。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'然而，我们来到这里的目的，从来都不是逃跑。'});",
        "playground.drawDialog({name:'阿米娅',text:'罗德岛，冲破他们的防线。'});",
        "playground.drawDialog({name:'阿米娅',text:'让我们把陨星她们救回来！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({fadetime:0});background.showImage({fadetime:0});playground.drawDialog({name:'凯尔希',text:'红，听得见吗？'});",
        "playground.drawDialog({name:'凯尔希',text:'啊啊，对。'});",
        "playground.drawDialog({name:'凯尔希',text:'没错。在贫民区东入口处会合。'});",
        "playground.drawDialog({name:'凯尔希',text:'嗯。就我们两个。'});",
        "playground.drawDialog({name:'凯尔希',text:'没问题的。'});",
        "playground.drawDialog({name:'凯尔希',text:'对付整合运动，我们两个已经足够了。'});"
    ]
];