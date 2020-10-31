var story = [
    [
        "bg_sunnytown_2",
        "char_348_ceylon_7",
        "avg_npc_020",
        "char_340_shwaz_2",
        "char_348_ceylon_4",
        "char_348_ceylon_8"
    ],
    [
        "m_bat_fesmetal_loop",
        "m_bat_fesmetal_intro",
        "d_gen_soldiersrun"
    ],
    [
        "playground.clearDialog();delay(1);voice.playMusic({intro:'m_bat_fesmetal_intro', key:'m_bat_fesmetal_loop', volume:0.8, crossfade:1.5});background.showImage({image:'bg_sunnytown_2',screenadapt:'coverall', fadetime:1,block:true});playground.drawCharacter({name:'char_348_ceylon_7'});playground.drawDialog({name:'锡兰',text:'快！博士！我们往沙滩那边走！'});",
        "playground.drawDialog({name:'锡兰',text:'沙滩上有大量游客聚集，混进人群里面他们就追不上我们了！'});",
        "playground.drawCharacter({name:'avg_npc_020'});playground.drawDialog({name:'保镖',text:'站住！'});",
        "playground.drawCharacter({name:'char_348_ceylon_7'});playground.drawDialog({name:'锡兰',text:'就凭你们！'});",
        "voice.playSound({key:'d_gen_soldiersrun',volume:0.5});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.drawCharacter({});blocker.blocker({a:0, fadetime:1, block:false});playground.drawCharacter({name:'char_340_shwaz_2',fadetime:1,block:true});delay(1);playground.drawDialog({name:'黑',text:'......'});",
        "playground.Decision({options:[['1'], '欸，你是——']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_340_shwaz_2',name2:'char_348_ceylon_4',focus:2});playground.drawDialog({name:'锡兰',text:'黑！太好了你终于来了！'});",
        "playground.drawDialog({name:'锡兰',text:'还好有你在，克洛宁这是怎么了！？'});",
        "playground.drawDialog({name:'锡兰',text:'博士，她就是我之前跟你说......'});",
        "playground.drawCharacter({name:'char_340_shwaz_2',name2:'char_348_ceylon_4',focus:1});playground.drawDialog({name:'黑',text:'小姐，老爷不在城里，你得听克洛宁的。'});",
        "playground.drawCharacter({name:'char_340_shwaz_2',name2:'char_348_ceylon_8',focus:2});playground.drawDialog({name:'锡兰',text:'黑？你在说什么？'});",
        "playground.drawCharacter({name:'char_340_shwaz_2',name2:'char_348_ceylon_8',focus:1});playground.drawDialog({name:'黑',text:'快跟我回去找克洛宁，把这些人都交给他。'});",
        "playground.drawDialog({name:'黑',text:'我不想对小姐动手。'});",
        "playground.drawCharacter({name:'char_340_shwaz_2',name2:'char_348_ceylon_8',focus:2});playground.drawDialog({name:'锡兰',text:'......黑？'});",
        "delay(0.3);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];