function playSound() {
  console.log("Playing sound...")
  chrome.offscreen.createDocument({
    url: chrome.runtime.getURL("playSound.html"),
    reasons: ["AUDIO_PLAYBACK"],
    justification: "navigate sound"
  })
  setTimeout(chrome.offscreen.closeDocument, 1000)
}

chrome.webNavigation.onBeforeNavigate.addListener(playSound)
