"use strict";

function onPasteImage(event) {
  var image;
  for (var item of event.clipboardData.items) {
    if (item && item.type.startsWith("image")) {
      image = item; // 将第一个找到的图片作为背景
      break;
    }
  }
  if (!image) {
    return; // 没找到直接返回
  }

  var imageFile = image.getAsFile();
  if (!imageFile) {
    return; // QQ聊天直接右键复制时为null
  }

  var reader = new FileReader();
  reader.readAsDataURL(imageFile);
  reader.addEventListener("load", function () {
    window.backgroundimage.src = reader.result;
  })
}

window.addEventListener("paste", onPasteImage, false);