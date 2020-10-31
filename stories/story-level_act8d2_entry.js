var story = [
    [
        "bg_rhodescom",
        "avg_book1",
        "bg_black",
        "avg_book2"
    ],
    [
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro"
    ],
    [
        "playground.clearDialog();delay(1);blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.clearDialog();voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.6, crossfade:1, delay:0.5});background.showImage({image:'bg_rhodescom',screenadapt:'coverall',fadetime:1,block:true});delay(2, black=true);blocker.blocker({a:0, r:0,g:0, b:0, fadetime:2, block:true});playground.drawDialog({name:'PRTS',text:'1097年4月1日。第二季度文献调查，第122条记录。'});",
        "playground.clearDialog();playground.Decision({options:[['1'], '......（呵欠）']});",
        "predicate = ['1'];",
        "playground.Decision({options:[['1', '2'], '我想休息一下。', '接下来......']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'PRTS',text:'您刚开始工作，现在还不能休息。'});",
        "predicate = ['1', '2'];",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});background.showImage({});delay(1);playground.drawCharacter({fadetime:0});playground.drawImage({image:'avg_book1',x:0, y:0, xscale:1.1, yscale:1.1, fadetime:0});blocker.blocker({a:0, fadetime:1, block:false});playground.imageTween({xscalefrom:1.1, yscalefrom:1.1, xscaleto:1, yscaleto:1, duration:15, block:false});playground.drawDialog({name:'PRTS',text:'接下来，这是第122本出土的典籍，也是这批中最后的一本。'});",
        "playground.drawDialog({name:'PRTS',text:'终于，在这批出土书籍里有一本看上去正经的古书了，而不是前面一百多本被意外埋到土里的财经杂志。'});",
        "playground.drawDialog({name:'PRTS',text:'根据提供者描述，这本书出土地点靠近米诺斯数个城邦移动轨迹。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:3, block:true});playground.drawImage({});background.showImage({image:'bg_black',screenadapt:'coverall',block:true});blocker.blocker({a:0, fadetime:1, block:true});playground.drawDialog({name:'PRTS',text:'现在解开固定条，扫描当中的内容。开始扫描......'});",
        "playground.drawDialog({name:'PRTS',text:'......'});",
        "playground.drawDialog({name:'PRTS',text:'总体上来说，是一本讲述古国“阿加门”的历史故事的书籍。'});",
        "playground.drawDialog({name:'PRTS',text:'书中有诸多修改的痕迹，其中比较值得注意的是，这一页。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});background.showImage({});playground.drawCharacter({fadetime:0});playground.drawImage({image:'avg_book2',x:0, y:0, xscale:1, yscale:1, fadetime:0});blocker.blocker({a:0, fadetime:2, block:false});playground.drawDialog({name:'PRTS',text:'这一页左边写着的是......“这是阿加门！！！” 阿加门是史料记载中的一个古国。'});",
        "playground.drawDialog({name:'PRTS',text:'而右边，看上去是一个古人留下的，用于隐藏特殊信息的图形纹章，用现代扫描技术甚至可以读出隐藏的信息。'});",
        "playground.clearDialog();playground.Decision({options:[['1'], '哇，古代人怎么可能会这么懂？']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'PRTS',text:'据说现在的一部分编码技术也是来自于古代的研究。'});",
        "playground.drawDialog({name:'PRTS',text:'古人也喜欢通过研究编码技术，来传递信息，用于分享战况、领主们的八卦新闻、超市优惠卷和游戏攻略秘籍等。'});",
        "playground.clearDialog();playground.Decision({options:[['1'], '认真的吗？！']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'PRTS',text:'博士可以自行判断。'});",
        "playground.drawDialog({name:'PRTS',text:'至少，这与现代源石技艺的发展进程也有着异曲同工之妙。'});",
        "playground.drawDialog({name:'PRTS',text:'第一批次时代制式法杖的设计师们是一批出来创业的系统软件工程师。'});",
        "playground.drawDialog({name:'PRTS',text:'顺带一提，电子抽水马桶和城际终端彩票刮刮乐也是他们基于古代编码技术的发明。'});",
        "playground.clearDialog();playground.Decision({options:[['1'], '......']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'PRTS',text:'总之，我已经将所有信息传递至数据库。大致记载着古阿加门王国，一个关于执行正义的惩罚者的故事。'});",
        "playground.drawDialog({name:'PRTS',text:'接下来剩余的信息需要博士扫描这个纹章来解开了。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:3, block:true});playground.drawDialog({name:'PRTS',text:'您一定会有所发现的。'});",
        "playground.drawCharacter({fadetiem:1});playground.clearDialog();delay(0.5);playground.clearDialog();blocker.blocker({fadetime:1,block:true});"
    ]
];