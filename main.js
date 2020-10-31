/*
 * @Author: dx3906
 * @Date: 2019-10-28 13:16:54
 * @LastEditors: dx3906
 * @LastEditTime: 2020-11-01 01:52:27
 */

// 实现自动换行和打字效果
// 来源：https://www.zhangxinxu.com/wordpress/2018/02/canvas-text-break-line-letter-spacing-vertical/comment-page-1/

function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

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
    // richText[i].text : 单个字符
    // richText[i].style: fillStyle
    var richText = [];
    parseRichText(richText, text, [context.fillStyle]);

    var line = '';
    var textWidth = 0;
    var typex = x;
    var typey = y;
    var metrics = context.measureText(richText[0].text).width;
    typex -= metrics;
    var n = 0;
    animationPlaying += 1;
    //console.log(richText);
    setTimeout(function () {
        var showText = setInterval(function () {
            if (typex + metrics - x >= maxWidth) {
                typex = x;
                typey += lineHeight;
            } else {
                typex += metrics;
            }
            context.fillStyle = richText[n].style;
            context.fillText(richText[n].text, typex, typey);
            metrics = context.measureText(richText[n].text).width;
            n++;
            if (n >= richText.length) {
                animationPlaying -= 1;
                clearInterval(showText);
            }
        }, 20);
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
    if (time != undefined) {
        animationDelayTime += time * 1000;
        animationPlaying += 5;
        console.log("延缓 " + time * 1000);
        setTimeout(() => {
            animationPlaying -= 5;
            console.log("延缓结束 at " + animationDelayTime);
        }, animationDelayTime);
    }
}

//类声明

function Voice() { // 声音类
    this.audio = new Audio();
    this.sound = new Audio();
    this.soundPool = [];
    this.looping = NaN;
    this.volume = 1;
    this.soundvolume = 1;
    this.playMusic = function (paras) {
        var intro = paras.intro ? paras.intro : paras.key;
        var loop = paras.key;
        var crossfade = paras.crossfade;
        this.volume = paras.volume ? paras.volume : 1;
        var volume = this.volume;
        var delay = paras.delay;
        //animationPlaying += 2047;
        setTimeout(() => {
            this.audio.pause();
            this.audio = usedAudios[intro];
            this.looping = usedAudios[loop];
            this.audio.volume = this.volume;
            //animationPlaying -= 2047;
            this.audio.play();
            musicBeginning = true;
            console.log("MUSIC BEGIN...")
            this.audio.onended = function () {
                console.log("INTRO ENDED...");
                voice.audio = voice.looping;
                voice.audio.loop = "loop";
                voice.audio.volume = voice.volume;
                voice.audio.play();
            };
            //this.audio.volume = 0;
            var fading = setInterval(() => {
                this.audio.volume = this.audio.volume + 0.05 * volume > this.volume ? this.volume : this.audio.volume + 0.05 * volume;
                //console.log(this.audio.volume);
                if (this.audio.volume >= volume) {
                    this.audio.volume = volume;
                    console.log("MUSIC BEGIN END...")
                    clearInterval(fading);
                }
            }, crossfade * 50);
        }, delay * 1000 + animationDelayTime);
    };
    this.playSound = function (paras) {
        var key = paras.key;
        this.soundvolume = paras.volume ? paras.volume : 1;
        var volume = this.soundvolume;
        var loop = paras.loop ? "loop" : NaN;
        var delay = paras.delay ? paras.delay : 0;
        //animationPlaying += 4095;
        setTimeout(() => {
            //const origAudio = usedAudios[key];
            this.sound = usedAudios[key].cloneNode();
            //const newAudio = origAudio.cloneNode();
            //this.sound.play();
            this.sound.volume = volume;
            this.sound.loop = loop;
            //animationPlaying -= 4095;
            this.sound.play();
        }, delay * 1000 + animationDelayTime);
        console.log("播放声音 in " + animationDelayTime);
    };
    this.stopMusic = function (paras) {
        var fadetime = paras.fadetime ? paras.fadetime : 0.2;
        if (this.audio.paused) { // 如果没在播放音乐则不产生效应，防止奇怪的音乐中断
            return 0;
        }
        setTimeout(() => {
            this.audio.addEventListener('ended', function () {
                this.audio = this.looping;
                this.audio.play();
            });
            musicBeginning = false;
            console.log("开始停止音乐...")
            this.looping = NaN;
            var volume = this.audio.volume;
            var fading = setInterval(() => {
                if (musicBeginning) {
                    console.log("新的音乐开始，取消停止音乐...")
                    musicBeginning = false;
                    clearInterval(fading);
                }
                this.audio.volume = (this.audio.volume - 0.025 * volume < 0) ? 0 : this.audio.volume - 0.025 * volume;
                //console.log(this.audio.volume);
                if (this.audio.volume <= 0) {
                    this.audio.pause();
                    console.log("停止音乐...")
                    clearInterval(fading);
                }

            }, fadetime * 25);
        }, animationDelayTime);
    }

    this.stopSound = function (paras) {
        var fadetime = paras.fadetime ? paras.fadetime : 0.2;
        if (this.sound.paused) { // 如果没在播放音乐则不产生效应，防止奇怪的音乐中断
            return 0;
        }
        setTimeout(() => {
            this.sound.addEventListener('ended', function () {
                this.sound = this.looping;
                this.sound.play();
            });
            this.looping = NaN;
            var volume = this.sound.volume;
            var fading = setInterval(() => {
                this.sound.volume = (this.sound.volume - 0.025 * volume < 0) ? 0 : this.sound.volume - 0.025 * volume;
                //console.log(this.audio.volume);
                if (this.sound.volume <= 0) {
                    this.sound.pause();
                    clearInterval(fading);
                }
            }, fadetime * 25);
        }, animationDelayTime);
    }
}

function Blocker() { // 遮罩类；showitem也放置在此类中
    //this.block = true;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.blocker = function (paras) {
        var a = paras.a != undefined ? paras.a : 1;
        var r = paras.r != undefined ? paras.r : 0;
        var g = paras.g != undefined ? paras.g : 0;
        var b = paras.b != undefined ? paras.b : 0;
        var froma = paras.afrom != undefined ? paras.afrom : this.a;
        console.log(a, froma);
        var fromr = paras.rfrom != undefined ? paras.rfrom : this.r;
        var fromg = paras.gfrom != undefined ? paras.gfrom : this.g;
        var fromb = paras.bfrom != undefined ? paras.bfrom : this.b;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        var fadetime = paras.fadetime ? paras.fadetime : 0.2; // 为遮罩消失/产生设置最低0.2秒的过渡时间
        //var fadetime = paras.fadetime ? paras.fadetime : 0; // 是否有必要设置遮罩消失/产生的过渡时间？
        //this.block = paras.block != undefined ? paras.block : this.block;
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
                //blctx.globalAlpha = a;
                blc.style.opacity = a;
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
                        //blctx.globalAlpha = froma + aStep * n;
                        blc.style.opacity = froma + aStep * n;
                        //console.log(blctx.fillStyle, blctx.globalAlpha);
                        blctx.clearRect(0, 0, blc.width, blc.height);
                        blctx.fillRect(0, 0, blc.width, blc.height);
                        n++;
                        if (n >= leng) {
                            blctx.fillStyle = getRGB(r, g, b);
                            //blctx.globalAlpha = a;
                            blc.style.opacity = a;
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
        var img = paras.image;
        blctx.drawImage(usedImages[img], 361, 50);
    };
    this.hideItem = function (paras) {
        blctx.clearRect(0, 0, 1280, 720);
    };
}

function Background() { // 背景类；相机震动
    this.showImage = function (paras) { // 绘制图片
        // 参数处理
        var img = paras.image;
        if (img) {
            if (usedImages[img].height == 576 && usedImages[img].width == 1024) {
                usedImages[img].height = 720;
                usedImages[img].width = 1280;
            };
            if (usedImages[img].height == 844 && usedImages[img].width == 1500) {
                usedImages[img].height = 720;
                usedImages[img].width = 1280;
            };
        }
        var fadetime = paras.fadetime ? paras.fadetime : 0;
        var block = paras.block;

        fadetime *= 1000;
        setTimeout(() => {
            // 如果为淡出
            if (img == undefined && fadetime != 0) {
                var leng = fadetime / 50;
                var step = 1.0 / leng;
                var opacity = bc.style.opacity;
                animationPlaying += 1234;
                setTimeout(function () {
                    var fading = setInterval(function () {
                        opacity -= step;
                        bc.style.opacity = opacity;
                        if (bc.style.opacity <= 0.0) {
                            animationPlaying -= 1234;
                            bctx.clearRect(0, 0, 1280, 720);
                            clearInterval(fading);
                        }
                    }, 50);
                }, 0);
                animationDelayTime += fadetime;
                return 0;
            } else if (img == undefined && fadetime == 0) {
                bctx.clearRect(0, 0, bc.width, bc.height);
                return 0;
            } else {
                bctx.clearRect(0, 0, bc.width, bc.height);
            }

            // 如果为淡入
            if (fadetime != 0 && img != undefined) {
                bc.style.opacity = 0;
            } else {
                bc.style.opacity = 1;
            }
            // 无论是否为淡入都绘制图片；
            bctx.drawImage(usedImages[img], 0, 0, 1280, 720);
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
        var duration = paras.duration;
        var xStrength = paras.xstrength;
        var yStrength = paras.ystrength;
        var randomness = paras.randomness;
        var shakeStop = paras.stop || false;

        if (shakeStop) {
            return 0;
        }

        setTimeout(function () {
            var shakeDirection = 0;
            var shakeStep = 0;
            var shakex = 0;
            var shakey = 0;
            duration *= 1000;
            animationPlaying += 514;
            setTimeout(() => {
                var fading = setInterval(() => {
                    if (shakeStep % 10 == 0) {
                        shakeDirection += parseInt(Math.random() * 100 < randomness ? parseInt(Math.random() * 4) : 0);
                        shakeDirection++;
                    }
                    //console.log((-Math.abs(shakeStep % 10 - 5) + 5) / 5)
                    if (shakeDirection % 4 == 0) {
                        shakex = -(-Math.abs(shakeStep % 10 - 5) + 5) / 5 * xStrength;
                        shakey = 0;
                    } else if (shakeDirection % 4 == 1) {
                        shakex = 0;
                        shakey = (-Math.abs(shakeStep % 10 - 5) + 5) / 5 * yStrength;
                    } else if (shakeDirection % 4 == 2) {
                        shakex = (-Math.abs(shakeStep % 10 - 5) + 5) / 5 * xStrength;
                        shakey = 0;
                    } else if (shakeDirection % 4 == 3) {
                        shakex = 0;
                        shakey = -(-Math.abs(shakeStep % 10 - 5) + 5) / 5 * yStrength;
                    }
                    document.getElementById("playground").style.left = shakex + 'px';
                    document.getElementById("playground").style.top = shakey + 'px';
                    shakeStep++;
                    if (shakeStep * 10 >= duration || shakeStop) {
                        animationPlaying -= 514;
                        shakeStop = false;
                        document.getElementById("playground").style.left = '0px';
                        document.getElementById("playground").style.top = '0px';
                        clearInterval(fading);
                    }
                }, 10);
            }, 0);
        }, animationDelayTime);
        console.log("窗口震动 in " + animationDelayTime);
        //animationDelayTime += duration; //cameraShake不等待；
    };
    this.cameraEffect = function (para) {
        var effect = para.effect;
        var amount = para.amount;
        setTimeout(() => {
            if (amount == 1) {
                document.getElementById("playground").style.filter = "grayscale(100%)";
                console.log("Gray");
            } else {
                document.getElementById("playground").style.filter = "";
                console.log("Gray cancelled");
            }
        }, animationDelayTime);

    }
}

function Playground() { // 立绘和文本
    this.drawingImage = 0;
    this.img = '';
    this.img2 = '';
    this.tweeningImage = false;
    this.drawImage = function (paras) { // 绘制图片
        // 参数处理
        var img = paras.image;
        if (img) {
            if (usedImages[img].height == 576 && usedImages[img].width == 1024) {
                usedImages[img].height = 720;
                usedImages[img].width = 1280;
            };
            if (usedImages[img].height == 844 && usedImages[img].width == 1500) {
                usedImages[img].height = 720;
                usedImages[img].width = 1280;
            };
        }
        this.drawingImage = img;
        var fadetime = paras.fadetime ? paras.fadetime : 0;
        var x = paras.x ? paras.x : 0;
        var y = paras.y ? paras.y : 0;
        var xScale = paras.xscale ? paras.xscale : 1.0;
        var yScale = paras.yscale ? paras.yscale : 1.0;
        fadetime *= 1000;
        setTimeout(() => {
            this.tweeningImage = false;
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
                            this.drawingImage = 0;
                            clearInterval(fading);
                        }
                    }, 50);
                }, 0);
                animationDelayTime += fadetime;
                return 0;
            } else if (img == undefined && fadetime == 0) {
                console.log("清除画布");
                ictx.clearRect(0, 0, ic.width, ic.height);
                this.drawingImage = 0;
                return 0;
            }

            // 如果为淡入
            if (fadetime != 0 && img != undefined) {
                ic.style.opacity = 0;
            } else {
                ic.style.opacity = 1;
            }
            // 无论是否为淡入都绘制图片；
            ictx.drawImage(usedImages[img], x + 640 - xScale * usedImages[img].width / 2, y + 360 - yScale * usedImages[img].height / 2, xScale * usedImages[img].width, yScale * usedImages[img].height);
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
        console.log("paras.xfrom " + paras.xfrom);
        var xFrom = paras.xfrom != undefined ? paras.xfrom : 0;
        var yFrom = paras.yfrom != undefined ? paras.yfrom : 0;
        var xTo = paras.xto != undefined ? paras.xto : 0;
        var yTo = paras.yto != undefined ? paras.yto : 0;
        var xScaleFrom = paras.xscalefrom != undefined ? paras.xscalefrom : 1;
        var yScaleFrom = paras.yscalefrom != undefined ? paras.yscalefrom : 1;
        var xScaleTo = paras.xscaleto != undefined ? paras.xscaleto : 1;
        var yScaleTo = paras.yscaleto != undefined ? paras.yscaleto : 1;
        var duration = paras.duration < 0.05 ? 0.05 : paras.duration;
        var block = paras.block;
        duration *= 1000;
        // 变换图片
        setTimeout(() => {
            this.tweeningImage = true;
            var fadeStep = duration / 50;
            console.log("正在变换：" + img);
            console.log("fadeStep = " + fadeStep);
            var n = 0;
            setTimeout(function () {
                var fading = setInterval(function () {
                    ictx.clearRect(0, 0, ic.width, ic.height);
                    console.log(xFrom, xTo);
                    thisx = xFrom + (xTo - xFrom) * n / fadeStep;
                    thisy = yFrom + (yTo - yFrom) * n / fadeStep;
                    thisScalex = xScaleFrom + (xScaleTo - xScaleFrom) * n / fadeStep;
                    thisScaley = yScaleFrom + (yScaleTo - yScaleFrom) * n / fadeStep;
                    ictx.drawImage(usedImages[img], thisx + 640 - thisScalex * usedImages[img].width / 2, thisy + 360 - thisScaley * usedImages[img].height / 2, thisScalex * usedImages[img].width, thisScaley * usedImages[img].height);
                    if (n >= fadeStep || playground.tweeningImage == false) {
                        console.log("变换结束");
                        this.tweeningImage = false;
                        ictx.clearRect(0, 0, ic.width, ic.height);
                        clearInterval(fading);
                    }
                    n++;
                    //console.log("imageTweening...");
                }, 50);
            }, 0);
        }, animationDelayTime);
    };
    this.drawCharacter = function (paras) { // 绘制人物
        // 参数处理
        var img = paras.name;
        var img2 = paras.name2;
        var fadetime = paras.fadetime != undefined ? paras.fadetime : 0.2; // 为淡入/淡出设置一个默认的时间，而非直接消失或产生
        var block = paras.block;
        var focus = paras.focus;
        var place = {
            "x": img2 == undefined ? 0 : -200,
            "y": 0
        };
        var place2 = img2 != undefined ? {
            "x": 200,
            "y": 0
        } : NaN;

        if (this.img != undefined && img != undefined) { // 判断立绘是否有切换；如果未切换则取消淡入淡出时间
            if (this.img2 != undefined && img2 != undefined) {
                var keepingImg = (img[img.length - 2] == '_' ? this.img.slice(0, -1) == img.slice(0, -1) : this.img == img) & (img2[img2.length - 2] == '_' ? this.img2.slice(0, -1) == img2.slice(0, -1) : this.img2 == img2);
                //var keepingImg = ((this.img.slice(0, -1) == img.slice(0, -1) && img[img.length - 2] == '_') && (this.img2.slice(0, -1) == img2.slice(0, -1) && img2[img2.length - 2] == '_')) ? true : false;
            } else if (this.img2 == undefined && img2 == undefined) {
                var keepingImg = (img[img.length - 2] == '_' ? this.img.slice(0, -1) == img.slice(0, -1) : this.img == img);
            }
        }

        fadetime = keepingImg ? 0 : fadetime;
        console.log(keepingImg, img, this.img, img2, this.img2);
        this.img = img;
        this.img2 = img2;

        fadetime *= 1000;
        setTimeout(() => {
            // 如果为淡出
            if (img == undefined && fadetime != 0) {
                var leng = fadetime / 50;
                var step = 1.0 / leng;
                var opacity = cc.style.opacity;
                animationPlaying += 100000;
                console.log("开始淡出人物...", animationPlaying);
                setTimeout(function () {
                    var fading = setInterval(function () {
                        opacity -= step;
                        cc.style.opacity = opacity;
                        console.log("淡出人物中...", cc.style.opacity, animationPlaying);
                        if (cc.style.opacity <= 0.0) {
                            animationPlaying -= 100000;
                            console.log("淡出人物结束...", animationPlaying);
                            //cctx.clearRect(0, 0, cc.width, cc.height);
                            clearInterval(fading);
                        }
                    }, 50);
                }, 0);
                animationDelayTime += fadetime;
                return 0;
            } else if (img == undefined && fadetime == 0) {
                cctx.clearRect(0, 0, cc.width, cc.height);
                return 0;
                //} else if (!keepingImg) {
            } else if (true) { // 测试修改：无论如何都清除上一次绘制
                // 如果不是淡出，就先清除上一次绘制的人物
                cctx.clearRect(0, 0, cc.width, cc.height);
                // 并且清除画布中的图片
                //ictx.clearRect(0, 0, cc.width, cc.height);
                //this.tweeningImage = false;
                console.log("预清除上一次的绘制");
            }

            // 如果为淡入
            if (fadetime != 0 && img != undefined) {
                cc.style.opacity = 0;
            } else {
                cc.style.opacity = 1;
            }
            // 存在立绘2的情况下
            if (img2 != undefined) {
                // 设置焦点
                if (focus != undefined) {
                    if (focus == 2) { // 焦点为人物2的情况下则绘制并变暗人物1， 然后绘制人物2
                        cctx.drawImage(usedImages[img], place.x + 640 - 0.7 * usedImages[img].width / 2, place.y + 360 - 0.7 * usedImages[img].height / 2, 0.7 * usedImages[img].width, 0.7 * usedImages[img].height);
                        console.log(usedImages[img].width, usedImages[img].height);
                        var darkImg = cctx.getImageData(place.x + 640 - 0.7 * usedImages[img].width / 2, place.y + 360 - 0.7 * usedImages[img].height / 2, 0.7 * usedImages[img].width, 0.7 * usedImages[img].height);
                        var pixelLen = 0.7 * usedImages[img].width * 0.7 * usedImages[img].height;
                        for (var i = 0; i < pixelLen * 4; i++) {
                            if (i % 4 != 3) {
                                darkImg.data[i] = parseInt(darkImg.data[i] * 0.4);
                            }
                        }
                        cctx.putImageData(darkImg, place.x + 640 - 0.7 * usedImages[img].width / 2, place.y + 360 - 0.7 * usedImages[img].height / 2); //, place.x + usedImages[img].width, place.y + usedImages[img].height);
                        cctx.drawImage(usedImages[img2], place2.x + 640 - 0.7 * usedImages[img2].width / 2, place2.y + 360 - 0.7 * usedImages[img2].height / 2, 0.7 * usedImages[img2].width, 0.7 * usedImages[img2].height);
                    } else { // 焦点为人物1的情况下亦然
                        cctx.drawImage(usedImages[img2], place2.x + 640 - 0.7 * usedImages[img2].width / 2, place2.y + 360 - 0.7 * usedImages[img2].height / 2, 0.7 * usedImages[img2].width, 0.7 * usedImages[img2].height);
                        console.log(usedImages[img2].width, usedImages[img2].height);
                        var darkImg = cctx.getImageData(place2.x + 640 - 0.7 * usedImages[img2].width / 2, place2.y + 360 - 0.7 * usedImages[img2].height / 2, 0.7 * usedImages[img2].width, 0.7 * usedImages[img2].height);
                        var pixelLen = 0.7 * usedImages[img2].width * 0.7 * usedImages[img2].height;
                        for (var i = 0; i < pixelLen * 4; i++) {
                            if (i % 4 != 3) {
                                darkImg.data[i] = parseInt(darkImg.data[i] * 0.4);
                            }
                        }
                        cctx.putImageData(darkImg, place2.x + 640 - 0.7 * usedImages[img2].width / 2, place2.y + 360 - 0.7 * usedImages[img2].height / 2); //, place2.x + usedImages[img2].width, place2.y + usedImages[img2].height);
                        cctx.drawImage(usedImages[img], place.x + 640 - 0.7 * usedImages[img].width / 2, place.y + 360 - 0.7 * usedImages[img].height / 2, 0.7 * usedImages[img].width, 0.7 * usedImages[img].height);
                    }
                } else { // 没有焦点的情况下则全部绘制
                    cctx.drawImage(usedImages[img], place.x + 640 - 0.7 * usedImages[img].width / 2, place.y + 360 - 0.7 * usedImages[img].height / 2, 0.7 * usedImages[img].width, 0.7 * usedImages[img].height);
                    cctx.drawImage(usedImages[img2], place2.x + 640 - 0.7 * usedImages[img2].width / 2, place2.y + 360 - 0.7 * usedImages[img2].height / 2, 0.7 * usedImages[img2].width, 0.7 * usedImages[img2].height);
                }
            } else {
                // 不存在立绘2则直接绘制立绘1；
                console.log("绘制人物1", img, cc.style.opacity);
                cctx.drawImage(usedImages[img], place.x + 640 - 0.7 * usedImages[img].width / 2, place.y + 360 - 0.7 * usedImages[img].height / 2, 0.7 * usedImages[img].width, 0.7 * usedImages[img].height);
            }

            // 淡入
            if (fadetime != 0 && img != undefined) {
                console.log("人物淡入");
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
                            console.log("人物淡入结束", cc.style.opacity);
                            clearInterval(fading);
                        }
                    }, fadeStep);
                }, 0);
            }
        }, animationDelayTime);
        animationDelayTime += fadetime;
    };
    this.drawDialog = function (paras) { // 绘制对话
        console.log("绘制文本框 in " + animationDelayTime);
        setTimeout(function () {
            var name = paras.name;
            var text = paras.text;
            tctx.clearRect(0, 0, tc.width, tc.height);
            tc.style.opacity = 1;
            tctx.fillStyle = "#000000";
            var grad = tctx.createLinearGradient(0, 500, 0, 720);
            grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
            grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.8)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 1)');
            tctx.fillStyle = grad;
            tctx.fillRect(0, 500, 1280, 720);
            if (name) {
                tctx.font = "30px 思源黑体, 黑体";
                tctx.fillStyle = '#888888';
                tctx.wrapText(name, 330 - name.length * 30, 618, 1000, 30);
                tctx.font = "24px 思源黑体, 黑体";
                tctx.fillStyle = "#FFFFFF";
                tctx.wrapRollingText(text, 380, 620, 768, 30);
                document.getElementById("textbox").textContent += '[' + name + '] ' + text + '\n\n';
                document.getElementById("textbox").scrollTop = document.getElementById("textbox").scrollHeight;
            } else {
                tctx.font = "24px 思源黑体, 黑体";
                tctx.fillStyle = "#FFFFFF";
                tctx.wrapRollingText(text, 380, 620, 768, 30);
                document.getElementById("textbox").textContent += text + '\n\n';
                document.getElementById("textbox").scrollTop = document.getElementById("textbox").scrollHeight;
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
    };
    this.Decision = function (paras) {
        var options = paras.options;
        setTimeout(() => {
            globalOptions = options;
            // 这个函数只需要将选项显示在页面上；
            tc.style.opacity = 1;
            tctx.font = "30px 黑体";
            tctx.fillStyle = "#000000";
            tctx.clearRect(0, 0, tc.width, tc.height);
            if (options.length == 2) {
                tctx.fillRect(310, 300, 820, 50);
                tctx.fillStyle = "#FFFFFF";
                tctx.wrapText(options[1], 380, 310, 600, 40);
                optionsMount = 1;
            } else if (options.length == 3) {
                tctx.fillRect(310, 200, 820, 50);
                tctx.fillRect(310, 400, 820, 50);
                tctx.fillStyle = "#FFFFFF";
                tctx.wrapText(options[1], 380, 210, 820, 40);
                tctx.wrapText(options[2], 380, 410, 820, 40);
                optionsMount = 2;
            } else if (options.length == 4) {
                tctx.fillRect(310, 150, 820, 50);
                tctx.fillRect(310, 300, 820, 50);
                tctx.fillRect(310, 450, 820, 50);
                tctx.fillStyle = "#FFFFFF";
                tctx.wrapText(options[1], 380, 160, 600, 40);
                tctx.wrapText(options[2], 380, 310, 600, 40);
                tctx.wrapText(options[3], 380, 460, 600, 40);
                optionsMount = 3;
            }
            globalPredicates = options[0];
            console.log("生成选项 in " + animationDelayTime + ':\n' + options);
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
    tc = document.getElementById("textcanvas");
    tctx = tc.getContext("2d");
    ic = document.getElementById("imgcanvas");
    ictx = ic.getContext("2d");
    tctx.textAlign = 'start';
    tctx.textBaseline = "top";
    var animationPlaying = '还没好';
    var animationDelayTime = 0;
    var clearImg = false;
    var background = new Background();
    var playground = new Playground();
    var blocker = new Blocker();
    var voice = new Voice();
    var playto = 0;
    var nicknamepool = ['东北龙卷风跳跳猴', '猪叫', 'Ediart', 'zeg', '清蒸鲈鱼', 'Mr.quin', 'ywwuyi', '凯露', '奥尔加·伊兹卡', '黎笋', '彩崎优', '庞巨血口龙', '魔血提勃', '窃冠瓯柯', 'OG.Ana', '徐志雷', 'UMP45', '氧氟沙星'];
    var nickname = decodeURI(getQueryVariable("doctorname"));
    document.getElementById("inputname").value = nickname;
    var decisionValue = '0';
    var predicate = ['0'];
    var decising = false;
    var usedImagesFileName = story[0];
    var usedImages = {};
    var usedAudiosFileName = story[1];
    var usedAudios = {};
    var loadedImg = 0;
    var loadedAudio = 0;
    var optionsMount = 0;
    var musicBeginning = false;
    var globalOptions = [];
    var globalPredicates = [1];
    var CODING_URL = "https://heliumjt.coding.net/p/heliumjt/d/sarpadian_empire_resources/git/raw/master/";
    var GITHUB_URL = "";
    var LOCAL_URL = "file:///C:/Users/dx390/Desktop/sarpadian_empire/sarpadian_empire_resources/";
    var assetsResFrom = getQueryVariable("res");
    var usingDir;
    switch (assetsResFrom) {
        case "coding":
            usingDir = CODING_URL;
            break;
        case "github":
            usingDir = GITHUB_URL;
            break;
        case "local":
            usingDir = LOCAL_URL;
            break;
        default:
            throw new Error("错误：不正确的素材源设置！");
    }

    for (i in usedImagesFileName) {
        var thisImg = new Image();
        usedImages[usedImagesFileName[i]] = thisImg;
        usedImages[usedImagesFileName[i]].src = './resources/' + usedImagesFileName[i] + '.png';
        usedImages[usedImagesFileName[i]].crossOrigin = "*";
        usedImages[usedImagesFileName[i]].onload = function () {
            loadedImg += 1;
            document.getElementById("loadingimg").innerHTML = "加载图像：" + loadedImg + "/" + usedImagesFileName.length;
            if (loadedImg >= usedImagesFileName.length && loadedAudio >= usedAudiosFileName.length && animationPlaying == '还没好') {
                document.getElementById("loadingdiv").style.display = 'none';
                animationPlaying = 0;
                console.log("INITIAL FINISHED...");
            }
        };
    }

    for (i in usedAudiosFileName) {
        var thisAudio = new Audio();
        usedAudios[usedAudiosFileName[i]] = thisAudio;
        usedAudios[usedAudiosFileName[i]].src = usingDir + 'audio/' + usedAudiosFileName[i] + '.mp3';
        usedAudios[usedAudiosFileName[i]].oncanplaythrough = function () {
            loadedAudio += 1;
            document.getElementById("loadingaudio").innerHTML = "加载音频：" + loadedAudio + "/" + usedAudiosFileName.length;
            if (loadedImg >= usedImagesFileName.length && loadedAudio >= usedAudiosFileName.length && animationPlaying == '还没好') {
                document.getElementById("loadingdiv").style.display = 'none';
                animationPlaying = 0;
                console.log("INITIAL FINISHED...");
            }
        };
    }

}

function setname() {
    nickname = document.getElementById("inputname").value;
}

function showText() {
    document.getElementById("textbox").style.display = document.getElementById("textbox").style.display == 'inline' ? 'none' : 'inline';
}

function setRandomName() {
    nickname = nicknamepool[Math.floor((Math.random() * nicknamepool.length))];
    document.getElementById("inputname").value = nickname;
}

function clickme(event) {
    console.log(event);
    if (animationPlaying) {
        return 0;
    }
    console.log(playto);
    animationDelayTime = 0;
    if (playto >= story[2].length) {
        alert("本段剧情结束。");
        return 0;
    }
    // 判断分歧；Decision语句必然伴随分段，因此可以这样写
    if (story[2][playto].indexOf('Decision') != -1) {
        // 写入判断语句：点击到选框则修改decisionValue并继续，否则直接return 0
        if (optionsMount == 0) {
            console.log("条件分歧", story[2][playto]);
            eval(story[2][playto]);
            return 0;
            //decisionValue = prompt();
        } else {
            console.log("分歧选择");
            if (optionsMount == 1) {
                if ((event.offsetX >= 310 && event.offsetX <= 1130) && (event.offsetY >= 300 && event.offsetY <= 350)) {
                    decisionValue = globalPredicates[0];
                } else {
                    return 0;
                }
            } else if (optionsMount == 2) {
                if ((event.offsetX >= 310 && event.offsetX <= 1130) && (event.offsetY >= 200 && event.offsetY <= 250)) {
                    decisionValue = globalPredicates[0];
                } else if ((event.offsetX >= 310 && event.offsetX <= 1130) && (event.offsetY >= 400 && event.offsetY <= 450)) {
                    decisionValue = globalPredicates[1];
                } else {
                    return 0;
                }
            } else if (optionsMount == 3) {
                if ((event.offsetX >= 310 && event.offsetX <= 1130) && (event.offsetY >= 150 && event.offsetY <= 200)) {
                    decisionValue = globalPredicates[0];
                } else if ((event.offsetX >= 310 && event.offsetX <= 1130) && (event.offsetY >= 300 && event.offsetY <= 350)) {
                    decisionValue = globalPredicates[1];
                } else if ((event.offsetX >= 310 && event.offsetX <= 1130) && (event.offsetY >= 450 && event.offsetY <= 500)) {
                    decisionValue = globalPredicates[2];
                } else {
                    return 0;
                }
            };
            document.getElementById("textbox").textContent += '[' + nickname + '] ' + globalOptions[parseInt(decisionValue) - 1] + '\n\n';
            document.getElementById("textbox").scrollTop = document.getElementById("textbox").scrollHeight;
            optionsMount = 0;
            playto++;
            clickme();
            return 0;
        }
    };
    if (story[2][playto].indexOf('predicate') != -1) { // 剧情的分歧点，在此处直接执行下一步事件
        console.log(story[2][playto]);
        eval(story[2][playto]);
        playto++;
        clickme(); // 执行下一步事件；
        return 0; // 避免执行再下一步；
    };
    if (predicate.indexOf(decisionValue) != -1) { // 如果分歧不是玩家选择的选项就直接跳过
        console.log("进入分歧" + decisionValue, story[2][playto]);
        eval(story[2][playto]);
    } else {
        while (story[2][playto].indexOf('predicate') == -1) {
            playto++;
        }
        console.log("跳过未选择的分歧" + story[2][playto]);
        eval(story[2][playto]);
        playto++;
        clickme();
        return 0;
    }
    playto++;

}

// 提取格式信息并生成richText
//
// 当前支持的格式:
// <color=#123456>Text Content</color>
//
function parseRichText(richText, text, richStyleStack) {
    const start = text.indexOf('<color=#');
    if (start !== -1 &&
        text.length >= start + 14 && text[start + 14] === '>') {
        const color = text.substring(start + 8, start + 14);
        const end = text.indexOf('</color>', start + 15);
        if (end !== -1) {
            parseRichText(richText, text.substring(0, start), richStyleStack);
            richStyleStack.push(text.substring(start + 7, start + 14));
            parseRichText(richText, text.substring(start + 15, end), richStyleStack);
            richStyleStack.pop();
            parseRichText(richText, text.substring(end + 8), richStyleStack);
            return;
        }
    }

    for (const ch of text.split('')) {
        richText.push({
            text: ch,
            style: richStyleStack[richStyleStack.length - 1]
        });
    }
}