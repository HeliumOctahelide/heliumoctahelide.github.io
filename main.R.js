/*
 * @Author: dx3906
 * @Date: 2020-05-16 01:43:27
 * @LastEditors: dx3906
 * @LastEditTime: 2020-05-21 11:59:33
 */

// 初始化画布Div
var imgDiv = document.getElementById("img");
var charDiv1 = document.getElementById("char1");
var charDiv2 = document.getElementById("char2");
var blockDiv = document.getElementById("block");
var backgroundDiv = document.getElementById("background");

/*
 用一个链表储存从剧情txt中读取的内容；
 按照1.0版本的方式，用文本显示或分歧选择来作为链表的起止；
 当链表中的一个节点动画被执行完之后，再执行下一个节点的动画，直到链表结束
 当动画的block属性为false时，将此节点与下一个节点同时执行（这里可能需要调换next执行的顺序，也许需要将动画作为类来处理？）。注意到jQuery的动画机制为，同一个元素上的动画效果才会被按队列执行，不同元素
*/

/*
普通函数中，this指向window对象；
函数作为对象的属性，函数中的this指向调用函数的对象；
在构造函数中。此时this指向构造函数的实例对象；
在call和apply中，this指向第一个参数，即被扩展的作用域对象；
*/

function parseArgs(args) {
    var jsonArgs = '{';
    while (args.indexOf(' ') != -1) {
        args = args.replace(" ", "");
    }
    var cutArgs = args.substring(args.indexOf('(') + 1, args.indexOf(')')).split(',');
    for (var i in cutArgs) {
        jsonArgs += '"' + cutArgs[i].split('=')[0] + '":' + cutArgs[i].split('=')[1] + ',';
    }
    return JSON.parse(jsonArgs.substring(0, jsonArgs.length - 1) + '}');
}

function ActionNode(number, action, args) {
    this.number = number; // 当前节点的编号，用以标识节点
    this.action = action; // 当前节点的动作
    this.args = parseArgs(args);
    this.next = null; // 下一个节点
}

function ActionList() {
    this.head = new ActionNode(0, null, '{}');
    this.find = function (item) {
        var currNode = this.head;
        while (currNode.number != item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    this.insert = function (newActionNumber, newAction, newArgs, item) {
        var newNode = new ActionNode(newActionNumber, newAction, newArgs);
        var currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    };
    this.display = function () {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.number, currNode.next.action, currNode.next.args);
            currNode = currNode.next;
        }
    };
    this.findPrev = function (item) {
        var currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.number != item)) {
            currNode = currNode.next;
        }
        return currNode;
    };
    this.remove = function (item) {
        var prevNode = this.findPrev(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    };
}

function StoryData(story) {
    this.story = story;
    this.unreadStory = story;
    this.readStory = '';

    this.readNextLine = function () {
        var thisLine = this.unreadStory.substring(0, this.unreadStory.indexOf('\n'));
        this.unreadStory = this.unreadStory.substring(this.unreadStory.indexOf('\n') + 1);
        this.readStory += thisLine + '\n';
        return thisLine;
    }

    this.actionList = null;

    this.createNewActionList = function () {
        this.actionList = ActionList();
        var actionNum = 0;
        while (true) {
            
            var thisLine = this.readNextLine();

            if (thisLine[0] == '/') { // 注释行
                continue;
            } else if (thisLine)
            actionNum += 1;
            this.actionList.insert(actionNum, actionNum - 1)
        }
    }
}

function readNextLine(line) { // 读取下一行

}

function Character(args) {

}

function Blocker(args) {

}

function rollingText(args) {

}