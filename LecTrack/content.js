// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {


//     //Create new regular expression 
//     const regularExpression = new RegExp('bear', 'gi')
//     const matches = document.documentElement.innerHTML.match(regularExpression)

//     sendResponse({count: matches.length})
// })

//Create new regular expression 
const isLectureRecordingIdentifier = new RegExp('mediastore.auckland.ac.nz', 'gi')
const matches = window.location.href.match(isLectureRecordingIdentifier)



chrome.runtime.sendMessage({

    var urlMediastore = window.location.href

for (int i = 0; i < urlMediastore.length; i++)  {
    if(isUpperCase(input.charAt(i))
    {
        console.log(input.charAt(i))
    }
}

    url: window.location.href, 
    count: matches.length
})