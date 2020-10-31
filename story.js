/*
 * @Author: dx3906
 * @Date: 2020-10-28 18:07:11
 * @LastEditors: dx3906
 * @LastEditTime: 2020-10-31 21:02:02
 */
let assetsResourceFrom = "coding";
let doctorName = "博士";
let nicknamepool = ['不能', 'Ediart', 'zeg', 'Mr.quin', 'ywwuyi', '凯露', '奥尔加·伊兹卡', '黎笋', '彩崎优', '庞巨血口龙', '魔血提勃', '窃冠瓯柯', 'OG.Ana', 'UMP45', '来去之间'];

function start_story(story_file, story_name) {
    if (!$("#doctorname").get(0).value) {
        $("#doctorname").get(0).value = nicknamepool[Math.floor((Math.random() * nicknamepool.length))];
    }
    doctorName = $("#doctorname").get(0).value;
    window.open(`./canvas.html?story=${story_file}&res=${assetsResourceFrom}&doctorname=${doctorName}&storyname=${story_name}`, '_blank')
};

$(document).ready(function () {

    $(".story_info").hide();
    
    $("#storyinfo_on").click(function () {
        $(".story_info").show();
    });
    $("#storyinfo_off").click(function () {
        $(".story_info").hide();
    });

    $("#resource_coding").click(function () {
        assetsResourceFrom = "coding";
    });
    $("#resource_github").click(function () {
        assetsResourceFrom = "github";
    });
    $("#resource_local").click(function () {
        assetsResourceFrom = "local";
    });

    $("#randomname").click(function () {
        $("#doctorname").get(0).value = nicknamepool[Math.floor((Math.random() * nicknamepool.length))];
        console.log($("#doctorname").get(0).value);
    })


});