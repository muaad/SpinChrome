// The onClicked callback function.
function onClickHandler(info, tab) {
  // alert(JSON.stringify(info));
  if (info.mediaType == "image") {
    sendImage(info.menuItemId, info.srcUrl);
  } else if (info.selectionText != null) {
    if (info.linkUrl != null) {
      // Share link
      alert(JSON.stringify(info));
      sendMessage(info.menuItemId, info.linkUrl);
    } else{
      sendMessage(info.menuItemId, info.selectionText);
    };
  };
};

function postX(data, url) {
  $.ajax({
    type: "POST",
    url: url,
    dataType: 'json',
    data: data,
    success: function(data, textStatus, jqXhr) {
      console.log(data);
    },
    error: function (request, status, error) {
      console.log(request.responseText);
    }
  });
}

function getX(url) {
  $.ajax({
    type: "GET",
    url: url,
    dataType: 'json',
    success: function(data, textStatus, jqXhr) {
      console.log(data);
    },
    error: function (request, status, error) {
      console.log(request.responseText);
    }
  });
}

function sendMessage(phone_number, text) {
  var data = { phone_number: phone_number, text: text};
  postX(data, "http://localhost:3001/send_message");
}

function getFriends() {
  // body...
}

function sendImage(phone_number, image_url) {
  var data = { phone_number: phone_number, image: image_url};
  postX(data, "http://localhost:3001/send_image");
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "254772246761", "contexts":['selection', 'image', 'link'], "id": "254772246761"});
  chrome.contextMenus.create({"title": "254722778438", "contexts":['selection', 'image', 'link'], "id": "254722778438"});
});
