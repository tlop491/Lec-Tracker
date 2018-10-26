// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {


//     //Create new regular expression 
//     const regularExpression = new RegExp('bear', 'gi')
//     const matches = document.documentElement.innerHTML.match(regularExpression)

//     sendResponse({count: matches.length})
// })

//Create new regular expression 
const regularExpression = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(regularExpression)
chrome.runtime.sendMessage({
    url: window.location.href, 
    count: matches.length
})