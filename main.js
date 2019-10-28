/*
 * @Author: dx3906
 * @Date: 2019-10-28 13:16:54
 * @LastEditors: dx3906
 * @LastEditTime: 2019-10-28 19:59:20
 */
CanvasRenderingContext2D.prototype.wrapRollingText = function (text, x, y, maxWidth, lineHeight) {
    if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
        return;
    }

    var context = this;
    var canvas = context.canvas;

    if (typeof maxWidth == 'undefined') {
        maxWidth = (canvas && canvas.width) || 300;
    }
    if (typeof lineHeight == 'undefined') {
        lineHeight = (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) || parseInt(window
            .getComputedStyle(document.body).lineHeight);
    }

    // 字符分隔为数组
    var arrText = text.split('');
    var line = '';
    var textWidth = 0;
    var typex = x;
    var typey = y;
    var metrics = context.measureText(arrText[0]).width;
    typex -= metrics;
    var n = 0;
    animationPlaying = true;
    setTimeout(function () {
        var showText = setInterval(function () {
            if (typex + metrics - x >= maxWidth) {
                typex = x;
                typey += lineHeight;
            } else {
                typex += metrics;
            }
            console.log(arrText[n]);
            context.fillText(arrText[n], typex, typey);
            metrics = context.measureText(arrText[n]).width;
            n++;
            if (n >= arrText.length) {
                animationPlaying = false;
                clearInterval(showText);
            }
        }, 10);
    }, 0);
};

CanvasRenderingContext2D.prototype.wrapText = function (text, x, y, maxWidth, lineHeight) {
    if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
        return;
    }

    var context = this;
    var canvas = context.canvas;

    if (typeof maxWidth == 'undefined') {
        maxWidth = (canvas && canvas.width) || 300;
    }
    if (typeof lineHeight == 'undefined') {
        lineHeight = (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) || parseInt(window
            .getComputedStyle(document.body).lineHeight);
    }

    // 字符分隔为数组
    var arrText = text.split('');
    var line = '';

    for (var n = 0; n < arrText.length; n++) {
        var testLine = line + arrText[n];
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = arrText[n];
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
};

function getRGB(r, g, b) {
    return '#' + parseInt(r * 255).toString(16) + parseInt(g * 255).toString(16) + parseInt(b * 255).toString(16);
}

function Blocker() {
    this.block = false;
    this.a = 0;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.blocker = function (paras) {
        var a = paras.a != undefined ? paras.a : 1;
        var r = paras.r;
        var g = paras.g;
        var b = paras.b;
        var froma = paras.froma != undefined ? paras.froma : a;
        var fromr = paras.fromr != undefined ? paras.fromr : r;
        var fromg = paras.fromg != undefined ? paras.fromg : g;
        var fromb = paras.fromb != undefined ? paras.fromb : b;
        var fadetime = paras.fadetime ? paras.fadetime : 0;
        var block = paras.block ? paras.block : true;
        setTimeout(() => {
            if (block == false) {
                if (fadetime == 0) {
                    blctx.clearRect(0, 0, blc.width, blc.height);
                } else {
                    var leng = fadetime / 50;
                    var step = 1.0 / leng;
                    var opacity = 1.0;
                    animationPlaying = true;
                    setTimeout(function () {
                        var fading = setInterval(function () {
                            opacity -= step;
                            blc.style.opacity = opacity;
                            console.log(blc.style.opacity);
                            if (blc.style.opacity <= 0.0) {
                                animationPlaying = false;
                                blctx.clearRect(0, 0, blc.width, blc.height);
                                clearInterval(fading);
                            }
                        }, 50);
                    }, 0);
                    return 0;
                }
            } else if (fadetime == 0) {
                blctx.fillStyle = getRGB(r, g, b);
                blctx.globalAlpha = a;
                blctx.fillRect(0, 0, blc.width, blc.height);
            } else {
                // 淡入
                fadetime = fadetime * 1000;
                var leng = fadetime / 50;
                var aStep = (a - froma) / leng;
                var rStep = (r - fromr) / leng;
                var gStep = (g - fromg) / leng;
                var bStep = (b - fromb) / leng;
                var n = 0;
                console.log(leng, aStep, rStep, gStep, bStep);
                animationPlaying = true;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        blctx.fillStyle = getRGB(fromr + rStep * n, fromg + gStep * n, fromb + bStep * n);
                        blctx.globalAlpha = froma + aStep * n;
                        console.log(blctx.fillStyle, blctx.globalAlpha);
                        blctx.clearRect(0, 0, blc.width, blc.height);
                        blctx.fillRect(0, 0, blc.width, blc.height);
                        n++;
                        if (n >= leng) {
                            blctx.fillStyle = getRGB(r, g, b);
                            blctx.globalAlpha = a;
                            blctx.clearRect(0, 0, blc.width, blc.height);
                            blctx.fillRect(0, 0, blc.width, blc.height);
                            animationPlaying = false;
                            clearInterval(fading);
                        }
                    }, 50);
                }, 0);
            }
        }, animationDelayTime);
        animationDelayTime += fadetime;
    }
}

function Background() { // 背景类
    this.showImage = function (paras) {
        this.img = paras.image;
        bctx.drawImage(usedImages[this.img], 0, 0);
    }
}

function Playground() {
    this.drawCharacter = function (paras) { // 绘制人物
        // 参数处理
        var img = paras.image;
        var img2 = paras.image2;
        var fadetime = paras.fadetime ? paras.fadetime : 0;
        var block = paras.block;
        var focus = paras.focus;
        var place = paras.place ? paras.place : {
            "x": 500,
            "y": 200
        };
        fadetime *= 1000;
        setTimeout(() => {
            // 如果为淡出
            if (img == undefined) {
                var leng = fadetime / 50;
                var step = 1.0 / leng;
                var opacity = 1.0;
                animationPlaying = true;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        opacity -= step;
                        cc.style.opacity = opacity;
                        console.log(cc.style.opacity);
                        if (cc.style.opacity <= 0.0) {
                            animationPlaying = false;
                            cctx.clearRect(0, 0, cc.width, cc.height);
                            clearInterval(fading);
                        }
                    }, 50);
                }, 0);
                return 0;
            }

            // 如果为淡入
            if (fadetime != 0 && img != undefined) {
                cc.style.opacity = 0;
            }
            // 无论是否为淡入都绘制立绘1；
            cctx.drawImage(usedImages[img], place.x, place.y);
            // 设置焦点
            if (focus == 1) {
                // 这里放置一些代码
            }
            // 淡入淡出
            if (fadetime != 0 && img != undefined) {
                // 淡入
                var fadeStep = fadetime / 20;
                var opacity = 0.0;
                animationPlaying = true;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        opacity += 0.05;
                        cc.style.opacity = opacity;
                        console.log(cc.style.opacity);
                        if (cc.style.opacity >= 1.0) {
                            animationPlaying = false;
                            clearInterval(fading);
                        }
                    }, fadeStep);
                }, 0);
            }
            // 递归调用绘制后续立绘；
            if (img2 != undefined) {
                character({
                    "image": img2,
                    "fadetime": fadetime / 1000,
                    "focus": focus == 1 ? 0 : 1,
                    "place": {
                        "x": 900,
                        "y": 200
                    }
                })
            }

        }, animationDelayTime);
        animationDelayTime += fadetime;
    };
    this.drawDialog = function (paras) { // 绘制对话
        setTimeout(function () {
            var name = paras.name;
            var text = paras.text;
            tctx.font = "30px 黑体";
            tctx.fillStyle = "#000000";
            tctx.fillRect(310, 500, 820, 200);
            if (name) {
                tctx.fillStyle = '#888888';
                tctx.wrapText(name, 320, 510, 140, 40);
                tctx.fillStyle = "#FFFFFF";
                tctx.wrapRollingText(text, 480, 510, 620, 40);
            }
        }, animationDelayTime);
    };
}

// 初始化，载入图片
if (true) {
    bc = document.getElementById("backgroundcanvas");
    bctx = bc.getContext("2d");
    blc = document.getElementById("blockcanvas");
    blctx = blc.getContext("2d");
    cc = document.getElementById("charactercanvas");
    cctx = cc.getContext("2d");
    tc = document.getElementById("textcanvas");
    tctx = tc.getContext("2d");
    tctx.textAlign = 'start';
    tctx.textBaseline = "top";
    var animationPlaying = false;
    var animationDelayTime = 0;
    var background = new Background();
    var playground = new Playground();
    var blocker = new Blocker();
    var playto = 0;
    var usedImages = [
        "Kael.jpg",
        "saladelei.jpg",
        "image1.jpg"
    ];
    for (i in usedImages) {
        var thisImg = new Image();
        thisImg.src = usedImages[i];
        usedImages[i] = thisImg;
    }
    console.log("INITIAL FINISHED...")
}

function justclick() {
    if (animationPlaying) {
        return 0;
    }
    animationDelayTime = 0;
    if (playto == 0) {
        blocker.blocker({
            "r": 0,
            "g": 0,
            "b": 0
        })
        background.showImage({
            "image": 2
        });
        blocker.blocker({
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 0,
            "froma": 1,
            "fadetime": 3
        })
    } else if (playto == 1) {
        playground.drawCharacter({
            "image": 0,
            "fadetime": 1
        });
        playground.drawDialog({
            "name": "凯尔萨斯·逐日者",
            "text": "魔法，能量，我的人民陷入其中不能自拔……自从太阳之井被摧毁之后就是如此。欢迎来到未来。真遗憾，你们无法阻止什么，没有人可以阻止我了！Selama ashal'anore！！"
        });
    } else if (playto == 2) {
        playground.drawCharacter({
            "image": 0
        });
        playground.drawDialog({
            "name": "凯尔萨斯·逐日者",
            "text": "那么我们来看看你们如何面对亵渎者萨拉德雷？"
        });
    } else if (playto == 3) {
        playground.drawCharacter({
            "image": 1,
            "fadetime": 1
        });
        playground.drawDialog({
            "name": "亵渎者萨拉德雷",
            "text": "我来了！"
        });
    } else if (playto == 4) {
        playground.drawDialog({
            "name": "亵渎者萨拉德雷",
            "text": "原谅我，王子殿下……我失败了……"
        });
        playground.drawCharacter({
            "fadetime": 1
        });
    } else if (playto == 5) {
        playground.drawCharacter({
            "image": 0,
            "fadetime": 1
        });
        playground.drawDialog({
            "name": "凯尔萨斯·逐日者",
            "text": "你们击败了我最强大的顾问，可是没有人能战胜鲜血之锤。出来吧，萨古纳尔男爵！"
        });
    }
    playto += 1;
}