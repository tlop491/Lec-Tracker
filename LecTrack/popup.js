document.addEventListener('DOMContentLoaded', function () {
   
   const backgroundPageWindow = chrome.extension.getBackgroundPage()
   Object.keys(backgroundPageWindow.bears).forEach(function (url)   {
       const div = document.createElement('div')
       div.textContent = `${url}: ${backgroundPageWindow.bears[url]}`
       document.body.appendChild(div)
   })
    // document.querySelector('button').addEventListener('click', onclick, false)

    // function onclick () {
    //     chrome.tabs.query({currentWindow: true, active: true},
    //         function (tabs) {
    //             chrome.tabs.sendMessage(tabs[0].id, 'Hi', setCount)
    //         })
    // }

    // function setCount (res) {
    //     const div = document.createElement('div')
    //     div.textContent = `${res.count}`
    //     document.body.appendChild(div)
    // }
}, false)