chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.executeScript({
    code: 'document.body.innerHTML = document.body.innerHTML.replace( /(大理石|大泉\s*洋)/g,"大石泉").replace(/(だいりせき|おいしいみず)/g,"おおいしいずみ");document.title = document.title.replace( /(大理石|大泉\s*洋)/g,"大石泉").replace(/(だいりせき|おいしいみず)/g,"おおいしいずみ")'
  });
});
