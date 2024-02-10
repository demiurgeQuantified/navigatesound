let playing = false

function playSound() {
  if (!playing) {
    playing = true
    chrome.offscreen.createDocument({
      url: chrome.runtime.getURL("playSound.html"),
      reasons: ["AUDIO_PLAYBACK"],
      justification: "navigate sound"
    })
    setTimeout(() => {
      chrome.offscreen.closeDocument()
      playing = false
    }, 1000)
  }
}

chrome.webNavigation.onBeforeNavigate.addListener(playSound)
