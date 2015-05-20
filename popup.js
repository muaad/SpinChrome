// The onClicked callback function.
function onClickHandler(info, tab) {
  // alert(JSON.stringify(info));
  if (info.mediaType == "image") {
    sendImage(info.menuItemId, info.srcUrl);
  } else if (info.selectionText != null) {
    if (info.linkUrl != null) {
      // Share link
      sendMessage(info.menuItemId, info.linkUrl);
    } else{
      sendMessage(info.menuItemId, info.selectionText);
    };
  };
};

function sendMessage(phone_number, text) {
  x = new XMLHttpRequest();
  x.onreadystatechange=function(){
   if (x.readyState==4){
    if (x.status==200 || window.location.href.indexOf("http")==-1){
     alert(x.responseText);
    }
    else{
     alert("An error has occured making the request")
    }
   }
  }
  var number=encodeURIComponent(phone_number)
  var msg=encodeURIComponent(text)
  var data="phone_number="+number+"&text="+msg

  var url = 'http://localhost:3001/send_message'

  x.open("POST", url, true)
  x.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  x.send(data)
}

function postData(data, url) {
  // body...
}

function getFriends() {
  // body...
}

function sendImage(phone_number, image_url) {
  x = new XMLHttpRequest();
  x.onreadystatechange=function(){
   if (x.readyState==4){
    if (x.status==200 || window.location.href.indexOf("http")==-1){
     alert(x.responseText);
    }
    else{
     alert("An error has occured making the request")
    }
   }
  }
  var number=encodeURIComponent(phone_number)
  var msg=encodeURIComponent(image_url)
  var data="phone_number="+number+"&image="+image_url

  var url = 'http://localhost:3001/send_image' //"https://app.ongair.im/api/v1/base/send?token=658b6fb4475bd2c58059f7dbd301f2b0"

  x.open("POST", url, true)
  x.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  x.send(data)
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  // var contexts = ["page","selection","link","editable","image","video",
  //                 "audio"];
  // for (var i = 0; i < contexts.length; i++) {
  //   var context = contexts[i];
  //   var title = "Test '" + context + "' menu item";
  //   var id = chrome.contextMenus.create({"title": title, "contexts":[context],
  //                                        "id": "context" + context});
  //   console.log("'" + context + "' item:" + id);
  // }

  // Create a parent item and two children.
  // chrome.contextMenus.create({"title": "Test parent item", "id": "parent"});
  // chrome.contextMenus.create(
  //     {"title": "Child 1", "parentId": "parent", "id": "child1"});
  // chrome.contextMenus.create(
  //     {"title": "Child 2", "parentId": "parent", "id": "child2"});
  // console.log("parent child1 child2");

  chrome.contextMenus.create({"title": "254772246761", "contexts":['selection', 'image', 'link'], "id": "254772246761"});
  chrome.contextMenus.create({"title": "254722778438", "contexts":['selection', 'image', 'link'], "id": "254722778438"});

  // Create some radio items.
  // chrome.contextMenus.create({"title": "Radio 1", "type": "radio",
  //                             "id": "radio1"});
  // chrome.contextMenus.create({"title": "Radio 2", "type": "radio",
  //                             "id": "radio2"});
  // console.log("radio1 radio2");

  // Create some checkbox items.
  // chrome.contextMenus.create(
  //     {"title": "Checkbox1", "type": "checkbox", "id": "checkbox1"});
  // chrome.contextMenus.create(
  //     {"title": "Checkbox2", "type": "checkbox", "id": "checkbox2"});
  // console.log("checkbox1 checkbox2");

  // Intentionally create an invalid item, to show off error checking in the
  // create callback.
  // console.log("About to try creating an invalid item - an error about " +
  //     "duplicate item child1 should show up");
  // chrome.contextMenus.create({"title": "Oops", "id": "child1"}, function() {
  //   if (chrome.extension.lastError) {
  //     console.log("Got expected error: " + chrome.extension.lastError.message);
  //   }
  // });
});
