window.onload = async function load() {
    let ShortLinkForm = document.getElementById('ShortLink-Form')
    if (ShortLinkForm) {
        ShortLinkForm.addEventListener('submit', short)
        let destination = document.getElementById("destination")
        destination.value = "https://"
        destination.focus()
        document.getElementById("ShortUrlCopy").addEventListener("click", CopyShortLink)
    }
}

async function short(event) {
    event.preventDefault() // prevent default form submission. Handle only with this function.
    let data = new FormData(document.getElementById('ShortLink-Form')) //form data variable
    document.getElementById("ShortUrl").placeholder = "Loading..." // Set short url to loading text

    //set request headers
    let requestHeaders = new Headers()
    requestHeaders.append("X-My-Request-Header", "jPgJCdVrF6VK192Ey4hH")

    //submit request
    let response = await (await fetch("/api/short", {
        headers: requestHeaders,
        method: "POST",
        body: JSON.stringify({
            "destination": data.get("destination"),
            "slashtag": data.get("slashtag"),
            "title": data.get("title"),
            "description": data.get("description"),
            "domain": {
                "fullName": data.get("domain")
            },
        })
    })).json()
    document.getElementById("ShortUrl").placeholder = "https://" + response.shortUrl // show short link in form
    CopyShortLink()
}

function CopyShortLink() {
    navigator.clipboard.writeText(document.getElementById("ShortUrl").placeholder) //copy placeholder to clipboard on copy
    console.log("Copying")
}