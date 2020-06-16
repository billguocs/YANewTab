//添加千山为主页
var chrome_extension_button = document.getElementById("chrome_extension");
chrome_extension_button.style.display = "none";
var chrome_extension_tips = document.getElementById("chrome_extension_tips");
var str = "";
chrome_extension_tips.innerHTML = str;

//自定义弹层
var customize_confirm_label = document.getElementById("customizeConfirmModalLabel");
customize_confirm_label.innerHTML = "建议您打开新标签页，再进行自定义操作";

var customize_confirm_sub_label = document.getElementById("customizeConfirmModalSubLabel");
customize_confirm_sub_label.innerHTML = "新标签页的自定义数据可在同一谷歌账户下，跨设备同步";

var customize_confirm_buttons_div = document.getElementById("customizeConfirmModalButtonsDiv");
customize_confirm_buttons_div.getElementsByTagName("a")[0].style.display = "none";
customize_confirm_buttons_div.getElementsByTagName("a")[1].style.display = "inherit";

var port = chrome.runtime.connect();

window.addEventListener("message", function(event){
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);
