let playing = false

function playSound(details) {
  if (details.url == "about:blank"
    || details.url.startsWith("https://accounts.youtube.com/RotateCookiesPage?")
    || details.url.startsWith("https://www.google.com/recaptcha/")) return

  if (playing) return
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

chrome.webNavigation.onBeforeNavigate.addListener(playSound)
