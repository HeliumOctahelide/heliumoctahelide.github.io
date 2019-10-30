/*
 * @Author: dx3906
 * @Date: 2019-10-28 13:16:54
 * @LastEditors: dx3906
 * @LastEditTime: 2019-10-29 22:54:26
 */

// 实现自动换行和打字效果
// 来源：https://www.zhangxinxu.com/wordpress/2018/02/canvas-text-break-line-letter-spacing-vertical/comment-page-1/

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
    animationPlaying += 1;
    console.log(arrText);
    setTimeout(function () {
        var showText = setInterval(function () {
            if (typex + metrics - x >= maxWidth) {
                typex = x;
                typey += lineHeight;
            } else {
                typex += metrics;
            }
            context.fillText(arrText[n], typex, typey);
            metrics = context.measureText(arrText[n]).width;
            n++;
            if (n >= arrText.length) {
                animationPlaying -= 1;
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

// 函数声明

function getRGB(r, g, b) { // 转化RGB为颜色代码
    return '#' + parseInt(r * 255).toString(16) + parseInt(g * 255).toString(16) + parseInt(b * 255).toString(16);
}

function delay(time) { // 延时
    animationDelayTime += time * 1000;
}

//类声明

function Audio() { // 声音类
    this.playMusic = function (paras) {
        console.log("播放音乐");
    };
    this.playSound = function (paras) {
        console.log("播放声音");
    };
    this.stopMusic = function (paras) {
        console.log("停止音乐");
    }
}

function Blocker() { // 遮罩类；showitem也放置在此类中
    this.block = true;
    this.blocker = function (paras) {
        var a = paras.a != undefined ? paras.a : 1;
        var r = paras.r;
        var g = paras.g;
        var b = paras.b;
        var froma = paras.afrom != undefined ? paras.afrom : 1 - a;
        var fromr = paras.rfrom != undefined ? paras.rfrom : r;
        var fromg = paras.gfrom != undefined ? paras.gfrom : g;
        var fromb = paras.bfrom != undefined ? paras.bfrom : b;
        var fadetime = paras.fadetime ? paras.fadetime : 0;
        this.block = paras.block != undefined ? paras.block : this.block;
        var block = this.block;
        fadetime *= 1000;
        //console.log(Date.now());
        setTimeout(() => {
            if (block == false) {
                if (fadetime == 0) {
                    blctx.clearRect(0, 0, blc.width, blc.height);
                } else {
                    var leng = fadetime / 20;
                    var step = 1.0 / leng;
                    var opacity = 1.0;
                    animationPlaying += 10;
                    setTimeout(function () {
                        var fading = setInterval(function () {
                            opacity -= step;
                            blc.style.opacity = opacity;
                            //console.log(blc.style.opacity);
                            if (blc.style.opacity <= 0.0) {
                                animationPlaying -= 10;
                                blctx.clearRect(0, 0, blc.width, blc.height);
                                clearInterval(fading);
                                //console.log(Date.now());
                            }
                        }, 20);
                    }, 0);
                    return 0;
                }
            } else if (fadetime == 0) {
                blctx.fillStyle = getRGB(r, g, b);
                blctx.globalAlpha = a;
                blctx.fillRect(0, 0, blc.width, blc.height);
            } else {
                // 淡入
                var leng = fadetime / 20;
                //console.log(a, froma);
                var aStep = (a - froma) / leng;
                var rStep = (r - fromr) / leng;
                var gStep = (g - fromg) / leng;
                var bStep = (b - fromb) / leng;
                var n = 0;
                //console.log(leng, aStep, rStep, gStep, bStep);
                animationPlaying += 100;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        blctx.fillStyle = getRGB(fromr + rStep * n, fromg + gStep * n, fromb + bStep * n);
                        blctx.globalAlpha = froma + aStep * n;
                        //console.log(blctx.fillStyle, blctx.globalAlpha);
                        blctx.clearRect(0, 0, blc.width, blc.height);
                        blctx.fillRect(0, 0, blc.width, blc.height);
                        n++;
                        if (n >= leng) {
                            blctx.fillStyle = getRGB(r, g, b);
                            blctx.globalAlpha = a;
                            blctx.clearRect(0, 0, blc.width, blc.height);
                            blctx.fillRect(0, 0, blc.width, blc.height);
                            animationPlaying -= 100;
                            clearInterval(fading);
                            //console.log(Date.now());
                        }
                    }, 20);
                }, 0);
            }
        }, animationDelayTime);
        animationDelayTime += fadetime;
        //console.log(animationDelayTime);
    };
    this.showItem = function (paras) {

    };
    this.hideItem = function (paras) {

    };
}

function Background() { // 背景类；相机震动
    this.showImage = function (paras) { // 绘制图片
        // 参数处理
        var img = paras.image;
        var fadetime = paras.fadetime ? paras.fadetime : 0;
        var block = paras.block;

        fadetime *= 1000;
        setTimeout(() => {

            // 如果为淡出
            if (img == undefined && fadetime != 0) {
                var leng = fadetime / 50;
                var step = 1.0 / leng;
                var opacity = 1.0;
                animationPlaying += 1234;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        opacity -= step;
                        bc.style.opacity = opacity;
                        if (bc.style.opacity <= 0.0) {
                            animationPlaying -= 1234;
                            bctx.clearRect(0, 0, 1440, 720);
                            clearInterval(fading);
                        }
                    }, 50);
                }, 0);
                animationDelayTime += fadetime;
                return 0;
            } else if (img == undefined && fadetime == 0) {
                ictx.clearRect(0, 0, ic.width, ic.height);
                return 0;
            }

            // 如果为淡入
            if (fadetime != 0 && img != undefined) {
                bc.style.opacity = 0;
            } else {
                bc.style.opacity = 1;
            }
            // 无论是否为淡入都绘制图片；
            bctx.drawImage(usedImages[img], 0, 0, 1440, 720);
            // 淡入淡出
            if (fadetime != 0 && img != undefined) {
                // 淡入
                var fadeStep = fadetime / 20;
                var opacity = 0.0;
                animationPlaying += 10000;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        opacity += 0.05;
                        bc.style.opacity = opacity;
                        if (bc.style.opacity >= 1.0) {
                            animationPlaying -= 10000;
                            clearInterval(fading);
                        }
                    }, fadeStep);
                }, 0);
            }
        }, animationDelayTime);
        animationDelayTime += fadetime;
    };
    this.cameraShake = function (paras) {

    };
}

function Playground() { // 立绘和文本
    this.drawImage = function (paras) { // 绘制图片
        // 参数处理
        var img = paras.image;
        this.drawingImage = img;
        var fadetime = paras.fadetime ? paras.fadetime : 0;
        var x = paras.x;
        var y = paras.y;
        var xScale = paras.xscale ? paras.xscale : 1.0;
        var yScale = paras.yscale ? paras.yscale : 1.0;
        fadetime *= 1000;
        setTimeout(() => {
            clearImg = true;
            // 如果为淡出
            if (img == undefined && fadetime != 0) {
                var leng = fadetime / 50;
                var step = 1.0 / leng;
                var opacity = 1.0;
                animationPlaying += 1000;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        opacity -= step;
                        ic.style.opacity = opacity;
                        //console.log(cc.style.opacity);
                        if (ic.style.opacity <= 0.0) {
                            animationPlaying -= 1000;
                            ictx.clearRect(0, 0, ic.width, ic.height);
                            clearInterval(fading);
                        }
                    }, 50);
                }, 0);
                animationDelayTime += fadetime;
                return 0;
            } else if (img == undefined && fadetime == 0) {
                ictx.clearRect(0, 0, ic.width, ic.height);
                return 0;
            }

            // 如果为淡入
            if (fadetime != 0 && img != undefined) {
                ic.style.opacity = 0;
            } else {
                ic.style.opacity = 1;
            }
            // 无论是否为淡入都绘制图片；
            ictx.drawImage(usedImages[img], x, y, xScale * usedImages[img].width, yScale * usedImages[img].height);
            // 淡入淡出
            if (fadetime != 0 && img != undefined) {
                // 淡入
                var fadeStep = fadetime / 20;
                var opacity = 0.0;
                animationPlaying += 10000;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        opacity += 0.05;
                        ic.style.opacity = opacity;
                        //console.log(cc.style.opacity);
                        if (ic.style.opacity >= 1.0) {
                            animationPlaying -= 10000;
                            clearInterval(fading);
                        }
                    }, fadeStep);
                }, 0);
            }
        }, animationDelayTime);
        animationDelayTime += fadetime;
    };
    this.imageTween = function (paras) {
        var img = this.drawingImage;
        var xFrom = paras.xfrom;
        var yFrom = paras.yfrom;
        var xTo = paras.xto;
        var yTo = paras.yto;
        var xScaleFrom = paras.xscalefrom;
        var yScaleFrom = paras.yscalefrom;
        var xScaleTo = paras.xscaleto;
        var yScaleTo = paras.yscaleto;
        var duration = paras.duration;
        var block = paras.block;
        duration *= 1000;
        // 变换图片
        setTimeout(() => {
            clearImg = false;
            var fadeStep = duration / 50;
            var n = 0;
            setTimeout(function () {
                var fading = setInterval(function () {
                    ictx.clearRect(0, 0, ic.width, ic.height);
                    thisx = xFrom + (xTo - xFrom) * n / fadeStep;
                    thisy = yFrom + (yTo - yFrom) * n / fadeStep;
                    thisScalex = xScaleFrom + (xScaleTo - xScaleFrom) * n / fadeStep;
                    thisScaley = yScaleFrom + (yScaleTo - yScaleFrom) * n / fadeStep;
                    ictx.drawImage(usedImages[img], thisx, thisy, thisScalex * usedImages[img].width, thisScaley * usedImages[img].height);
                    //console.log(cc.style.opacity);
                    if (n >= fadeStep || clearImg == true) {
                        clearImg == false;
                        clearInterval(fading);
                    }
                    n++;
                }, 50);
            }, 0);
        }, animationDelayTime);
    };
    this.drawCharacter = function (paras) { // 绘制人物
        // 参数处理
        var img = paras.name;
        var img2 = paras.name2;
        var fadetime = paras.fadetime ? paras.fadetime : 0;
        var block = paras.block;
        var focus = paras.focus;
        var place = paras.place ? paras.place : {
            "x": 200,
            "y": 100
        };
        var removeLastImage = paras.keeping == undefined ? true : false;
        fadetime *= 1000;
        setTimeout(() => {

            // 如果为淡出
            if (img == undefined && fadetime != 0) {
                var leng = fadetime / 50;
                var step = 1.0 / leng;
                var opacity = 1.0;
                animationPlaying += 100000;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        opacity -= step;
                        cc.style.opacity = opacity;
                        //console.log(cc.style.opacity);
                        if (cc.style.opacity <= 0.0) {
                            animationPlaying -= 100000;
                            cctx.clearRect(0, 0, cc.width, cc.height);
                            clearInterval(fading);
                        }
                    }, 50);
                }, 0);
                animationDelayTime += fadetime;
                return 0;
            } else if (img == undefined && fadetime == 0) {
                cctx.clearRect(0, 0, cc.width, cc.height);
                return 0;
            } else if (removeLastImage) {
                // 如果不是淡出或者多重绘制，就先清除上一次绘制的人物
                cctx.clearRect(0, 0, cc.width, cc.height);
            }

            // 如果为淡入
            if (fadetime != 0 && img != undefined) {
                cc.style.opacity = 0;
            } else {
                cc.style.opacity = 1;
            }
            // 无论是否为淡入都绘制立绘1；
            cctx.drawImage(usedImages[img], place.x, place.y, 0.5 * usedImages[img].width, 0.5 * usedImages[img].height);
            // 设置焦点
            if (focus != undefined && focus != 1) {
                // 这里放置一些代码
                console.log(usedImages[img].width, usedImages[img].height);
                var darkImg = cctx.getImageData(place.x, place.y, usedImages[img].width, usedImages[img].height);
                var pixelLen = usedImages[img].width * usedImages[img].height;
                for (var i = 0; i < pixelLen * 4; i++) {
                    if (i % 4 != 3) {
                        darkImg.data[i] = parseInt(darkImg.data[i] * 0.4);
                    }
                }
                cctx.putImageData(darkImg, place.x, place.y); //, place.x + usedImages[img].width, place.y + usedImages[img].height);

            }
            // 淡入
            if (fadetime != 0 && img != undefined) {
                var fadeStep = fadetime / 20;
                var opacity = 0.0;
                animationPlaying += 10000000;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        opacity += 0.05;
                        cc.style.opacity = opacity;
                        //console.log(cc.style.opacity);
                        if (cc.style.opacity >= 1.0) {
                            animationPlaying -= 10000000;
                            clearInterval(fading);
                        }
                    }, fadeStep);
                }, 0);
            }
            // 递归调用绘制后续立绘；
            if (img2 != undefined) {
                this.drawCharacter({
                    "name": img2,
                    "fadetime": fadetime / 1000,
                    "focus": focus == 1 ? 0 : 1,
                    "place": {
                        "x": 700,
                        "y": 200
                    },
                    "keeping": 1
                })
            }

        }, animationDelayTime);
        animationDelayTime += fadetime;
    };
    this.drawDialog = function (paras) { // 绘制对话
        setTimeout(function () {
            var name = paras.name;
            var text = paras.text;
            tc.style.opacity = 1;
            tctx.font = "30px 黑体";
            tctx.fillStyle = "#000000";
            tctx.fillRect(310, 500, 820, 200);
            if (name) {
                tctx.fillStyle = '#888888';
                tctx.wrapText(name, 320, 510, 140, 40);
                tctx.fillStyle = "#FFFFFF";
                tctx.wrapRollingText(text, 480, 510, 620, 40);
            } else {
                tctx.fillStyle = "#FFFFFF";
                tctx.wrapRollingText(text, 480, 510, 620, 40);
            }
        }, animationDelayTime);
    };
    this.clearDialog = function () {
        //this.drawCharacter({
        //    "fadetime":1
        //});
        setTimeout(function () {
            tc.style.opacity = 0;
        }, animationDelayTime);
    }
}

// 初始化，载入图片
if (true) { // 只是为了折叠方便
    bc = document.getElementById("backgroundcanvas");
    bctx = bc.getContext("2d");
    blc = document.getElementById("blockcanvas");
    blctx = blc.getContext("2d");
    cc = document.getElementById("charactercanvas");
    cctx = cc.getContext("2d");
    ic = document.getElementById("charactercanvas");
    ictx = ic.getContext("2d");
    tc = document.getElementById("textcanvas");
    tctx = tc.getContext("2d");

    tctx.textAlign = 'start';
    tctx.textBaseline = "top";
    var animationPlaying = 0;
    var animationDelayTime = 0;
    var clearImg = false;
    var background = new Background();
    var playground = new Playground();
    var blocker = new Blocker();
    var audio = new Audio();
    var playto = 0;
    /*var usedImagesFileName = [
        "Kael.jpg",
        "saladelei.jpg",
        "image1.jpg",
        "sagunaer.jpg"
        "./background/Sprite/bg_cher_1.png",
        "./characters/char_130_doberm_ex.png",
        "./images/Sprite/avg_2_2.png"
    ];*/
    var usedImagesFileName = story[0];
    var usedImages = {};
    var usedMusics = [

    ];
    var resourceAmount = usedImagesFileName.length + usedMusics.length;
    var loadedResource = 0;

    for (i in usedImagesFileName) {
        var thisImg = new Image();
        thisImg.src = './resources/'+usedImagesFileName[i]+'.png';
        usedImages[usedImagesFileName[i]] = thisImg;
        usedImages[usedImagesFileName[i]].onload = function () {
            loadedResource += 1;
            document.getElementById("loading").innerHTML = "加载资源：" + loadedResource + "/" + resourceAmount;
        };
    }
    console.log("INITIAL FINISHED...");
}

function clickme() {
    if (animationPlaying) {
        return 0;
    };
    console.log(playto);
    animationDelayTime = 0;
    eval(story[1][playto]);
    playto ++;
}

/*
function clickme() {
    if (animationPlaying) {
        return 0;
    };
    console.log(playto);
    animationDelayTime = 0;
    if (playto == 0) {
        blocker.blocker({
            "r": 0,
            "g": 0,
            "b": 0
        });
        background.showImage({
            "image": "./background/Sprite/bg_cher_1.png",
        });
        blocker.blocker({
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 0,
            "afrom": 1,
            "fadetime": 1
        });
        playground.drawCharacter({
            "name": "./characters/char_130_doberm_ex.png",
            "fadetime": 1
        });
        playground.drawDialog({
            "name": "杜宾",
            "text": "可恶......"
        });
    };
    if (playto == 1) {
        playground.drawDialog({
            "name": "杜宾",
            "text": "这里，究竟怎么了？"
        });
    };
    if (playto == 2) {
        blocker.blocker({
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1,
            "fadetime": 0.6
        });
        playground.drawCharacter({
            "fadetime": 0
        });
        playground.drawImage({
            "image": "./images/Sprite/avg_2_2.png",
            "x": 0,
            "y": 0,
            "xscale": 1,
            "yscale": 1,
            "fadetime": 0,
        });
        blocker.blocker({
            "a": 0,
            "fadetime": 0.6,
            "block": false
        });
        playground.imageTween({
            "xfrom": 0,
            "yfrom": 0,
            "xto": 0,
            "yto": -20,
            "xscalefrom": 1,
            "yscalefrom": 1,
            "xscaleto": 1.1,
            "yscaleto": 1.1,
            "duration": 15
        });
        playground.drawDialog({
            "name": "整合运动成员",
            "text": "这边的屋子，也都给我搜干净！"
        });
    };
    if (playto == 3) {
        playground.drawDialog({
            "name": "女性",
            "text": "放开他......不！你们......"
        });
    };
    if (playto == 4) {
        playground.drawDialog({
            "name": "整合运动成员",
            "text": "反抗？太迟了！可恨的切尔诺伯格人！"
        });
    };
    playto += 1;
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
            "image": "image1.jpg"
        });
        delay(1);
        blocker.blocker({
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 0,
            "afrom": 1,
            "fadetime": 1
        })
    } else if (playto == 1) {
        playground.drawCharacter({
            "image": "Kael.jpg",
            "fadetime": 1
        });
        playground.drawDialog({
            "name": "凯尔萨斯·逐日者",
            "text": "魔法，能量，我的人民陷入其中不能自拔……自从太阳之井被摧毁之后就是如此。欢迎来到未来。真遗憾，你们无法阻止什么，没有人可以阻止我了！Selama ashal'anore！！"
        });
    } else if (playto == 2) {
        playground.drawCharacter({
            "image": "Kael.jpg"
        });
        playground.drawDialog({
            "name": "凯尔萨斯·逐日者",
            "text": "那么我们来看看你们如何面对亵渎者萨拉德雷？"
        });
    } else if (playto == 3) {
        playground.drawCharacter({
            "image": "saladelei.jpg",
            "fadetime": 1
        });
        playground.drawDialog({
            "name": "亵渎者萨拉德雷",
            "text": "我来了！"
        });
    } else if (playto == 4) {
        playground.clearDialog();
        blocker.blocker({
            "a": 0.3,
            "r": 1,
            "g": 0.4,
            "b": 0.4,
            "afrom": 0,
            "rfrom": 0,
            "gfrom": 0,
            "bfrom": 0,
            "fadetime": 0.1
        });
        blocker.blocker({
            "a": 0.1,
            "r": 1,
            "g": 0.4,
            "b": 0.1,
            "afrom": 1,
            "rfrom": 1,
            "gfrom": 0.4,
            "bfrom": 0.4,
            "fadetime": 0.2
        });
        blocker.blocker({
            "a": 0.1,
            "r": 0,
            "g": 0,
            "b": 0,
            "afrom": 0.8,
            "rfrom": 1,
            "gfrom": 1,
            "bfrom": 1,
            "fadetime": 0.3
        });
        blocker.blocker({
            "a": 1,
            "r": 0,
            "g": 0,
            "b": 0,
            "afrom": 0,
            "rfrom": 0,
            "gfrom": 0,
            "bfrom": 0,
            "fadetime": 0.3
        });
        blocker.blocker({
            "a": 0,
            "fadetime": 3
        })
        playground.drawDialog({
            "name": "亵渎者萨拉德雷",
            "text": "原谅我，王子殿下……我失败了……"
        });
        playground.drawCharacter({
            "fadetime": 1
        });
    } else if (playto == 5) {
        playground.drawCharacter({
            "image": "Kael.jpg",
            "fadetime": 1
        });
        playground.drawDialog({
            "name": "凯尔萨斯·逐日者",
            "text": "你们击败了我最强大的顾问，可是没有人能战胜鲜血之锤。出来吧，萨古纳尔男爵！"
        });
    } else if (playto == 6) {
        playground.drawCharacter({
            "image": "sagunaer.jpg",
            "fadetime": 1
        });
        playground.drawDialog({
            "name": "萨古纳尔男爵",
            "text": "血债血偿！"
        });
    } else if (playto == 7) {
        playground.drawCharacter({
            "image": "Kael.jpg",
            "image2": "sagunaer.jpg",
            "focus": 1
        });
        playground.drawDialog({
            "name": "凯尔萨斯·逐日者",
            "text": "等一下，你他妈的怎么这么大？"
        });
    } else if (playto == 8) {
        playground.drawCharacter({
            "image": "Kael.jpg",
            "image2": "sagunaer.jpg",
            "focus": 2
        });
        playground.drawDialog({
            "name": "萨古纳尔男爵",
            "text": "因为保存这张图片的时候是按原始尺寸保存的。"
        });
    } else if (playto == 9) {
        playground.drawCharacter({
            "fadetime": 3
        });
        playground.drawDialog({
            "text": "展示结束。"
        });
    }
    playto += 1;
}*/