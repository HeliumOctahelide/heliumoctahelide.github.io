var story = [
    [
        "bg_cher_1",
        "char_013_riop",
        "char_130_doberm_ex",
        "char_002_amiya_7",
        "char_1502_crowns",
        "avg_1_1",
        "char_002_amiya_1",
        "char_002_amiya_2"
    ],
    [
        "m_dia_escape_loop",
        "m_dia_escape_intro",
        "m_dia_calamity_loop",
        "m_dia_calamity_intro",
        "d_sp_ballista"
    ],
    [
        "voice.playMusic({intro:'m_dia_escape_intro', key:'m_dia_escape_loop', volume:0.8, crossfade:1.5, delay:0.5});background.showImage({image:'bg_cher_1',fadetime:1,screenadapt:'coverall'});delay(1);playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'哈，哈......'});",
        "playground.drawDialog({name:'近卫干员',text:'整合运动还真是......精力旺盛！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'乌萨斯军警队长',text:'你们，是什么人？'});",
        "playground.drawDialog({name:'乌萨斯军警队长',text:'怎么会这个时候，出现在切尔诺伯格！'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'哈？怎，怎么回事——'});",
        "playground.drawCharacter({});playground.drawDialog({name:'乌萨斯军警队长',text:'间谍吗！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'（如果泄露了身份，被乌萨斯当局盯上，后果不堪设想！）'});",
        "playground.drawDialog({name:'杜宾',text:'（必要的话......！）'});",
        "playground.drawCharacter({});playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'先生。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'乌萨斯军警队长',text:'——小女孩？'});",
        "playground.drawDialog({name:'乌萨斯军警队长',text:'你......感染者？'});",
        "playground.drawDialog({name:'乌萨斯军警队长',text:'别动！放下武器！'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'（做好防护准备，一旦对方有敌对倾向......）'});",
        "blocker.blocker({a:0.3, r:0.95, g:0.95, b:0.95, fadetime:4, block:true});playground.drawDialog({name:'杜宾',text:'（烟雾？从哪里......）'});",
        "voice.playMusic({intro:'m_dia_calamity_intro', key:'m_dia_calamity_loop', volume:1, crossfade:1.5});playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0.3, r:0.95, g:0.95, b:0.95, fadetime:0.3, block:true});playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'先生，对我们抱有敌意的人究竟是谁，你应该很清楚！'});",
        "playground.drawDialog({name:'阿米娅',text:'杜宾！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'重装干员！敌袭！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'乌萨斯军警队长',text:'什，什么？！'});",
        "playground.drawCharacter({fadetime:0});playground.clearDialog();voice.playSound({key:'d_sp_ballista',volume:0.7});blocker.blocker({a:1, r:100, g:100, b:100, fadetime:0.1,block:true});blocker.blocker({a:0.3, r:0.95, g:0.95, b:0.95, fadetime:0.3, block:true});delay(1);playground.drawCharacter({name:'char_1502_crowns',fadetime:0.5});playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'......整合运动。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'阿米娅，小心......'});",
        "playground.drawDialog({name:'杜宾',text:'她和那些普通的感染者暴徒，不是一回事！'});",
        "blocker.blocker({a:1, r:0, g:0, b:0, block:true});playground.drawCharacter({fadetime:0});background.showImage({fadetime:0});blocker.blocker({a:0.3, r:0.95, g:0.95, b:0.95, fadetime:0.3, block:true});playground.drawImage({image:'avg_1_1',x:0, y:-50, xscale:1.2, yscale:1.2, fadetime:1});playground.imageTween({xfrom:0, yfrom:-50, xto:0, yto:0, xscalefrom:1.2, yscalefrom:1.2, xscaleto:1, yscaleto:1, duration:10, block:false});playground.drawDialog({name:'？？？',text:'哼，逃跑......'});",
        "playground.drawDialog({name:'？？？',text:'又能逃到哪里？'});",
        "playground.drawDialog({name:'？？？',text:'去，撕碎他们。'});",
        "playground.drawDialog({name:'整合运动成员',text:'——————'});",
        "blocker.blocker({a:1, r:0.95, g:0.95, b:0.95, fadetime:4, block:true});background.showImage({image:'bg_cher_1', width:1, height:1, screenadapt:'coverall'});playground.drawImage({});blocker.blocker({a:0.3, r:0.95, g:0.95, b:0.95, fadetime:0.3, block:true});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'就连手下的整合运动成员也是一副训练有素的样子......'});",
        "playground.drawDialog({name:'杜宾',text:'难道是，整合运动的头目吗？'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'雾气越来越浓了......想借助雾气发动奇袭吗？'});",
        "playground.drawDialog({name:'阿米娅',text:'军警先生，我们必须立刻撤离这个区域！'});",
        "playground.drawDialog({name:'阿米娅',text:'如果让封锁了我们的退路，我们就......'});",
        "playground.drawCharacter({});playground.drawDialog({name:'乌萨斯军警队长',text:'——'});",
        "playground.drawDialog({name:'乌萨斯军警队长',text:'你们这些感染者，都给我滚。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({});playground.drawDialog({name:'乌萨斯军警队长',text:'我得到的命令是防卫这条大街。'});",
        "playground.drawDialog({name:'乌萨斯军警队长',text:'感染兔子，我不管你们来这里有什么目的，想干什么。'});",
        "playground.drawDialog({name:'乌萨斯军警队长',text:'如果你们是来破坏我们的城市的，自然会有人惩罚你们。乌萨斯的愤怒是无休止的。'});",
        "playground.drawDialog({name:'乌萨斯军警队长',text:'如果不是，那这里发生的事情，和你没有关系。'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'——我知道了。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'乌萨斯军警队长',text:'每个乌萨斯人都知道，不把背脊朝向敌人。'});",
        "playground.drawDialog({name:'乌萨斯军警队长',text:'快滚！我们没空理你们。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'——'});",
        "playground.drawDialog({name:'阿米娅',text:'谢谢。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'杜宾！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'走！去第一汇合点！'});",
        "playground.drawDialog({name:'杜宾',text:'各小队！动作要快！快！'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.clearDialog();blocker.blocker({a:0.3, r:0.95, g:0.95, b:0.95, fadetime:0.3, block:true});playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawCharacter({});playground.drawDialog({name:'乌萨斯军警队长',text:'来啊！感染者混球！'});",
        "playground.drawDialog({name:'乌萨斯军警队长',text:'你们就这点本事吗？只会站在那里看着吗？'});",
        "playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'？？？',text:'切尔诺伯格人......'});",
        "playground.drawDialog({name:'？？？',text:'该死。'});"
    ]
];