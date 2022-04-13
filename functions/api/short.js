export async function onRequest(context) {
    // Contents of context object
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data, // arbitrary space for passing data between middlewares
    } = context;

    // List of origins allowed to access API
    // First origin will be returned unless another match is found
    const allowedOrigins = [
        "http://it.kcf.org",
        "http://pki.kcf.org",
        "http://localhost:8080",
        "http://localhost:8081",
        "http://127.0.0.1:55873"
    ]

    // Check origin. If allowed, return in header. Otherwise return first origin in list.
    const checkOrigin = request => {
            const foundOrigin = allowedOrigins.find(allowedOrigin => allowedOrigin.includes(request.headers.get("Origin")))
            return foundOrigin ? foundOrigin : allowedOrigins[0]
        }
        // Function to return CORS headers
    const corsHeaders = origin => ({
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Origin": origin,
    })

    // concat CORS and application headers
    const applicationHeaders = {
        ...corsHeaders(checkOrigin(request)),
        "content-type": "application/json;charset=UTF-8"
    }

    if (request.method === "OPTIONS") {
        return new Response("OK", { headers: corsHeaders(checkOrigin(request)) })
    } else if (request.method === "POST") {
        let parm = await request.json()
        let responding = JSON.stringify({
            shortUrl: await short(parm.destination, parm.slashtag, parm.title, parm.description, parm.domain, request.headers.get("Origin"), env)
        })
        return new Response(responding, { headers: applicationHeaders })
    } else { return new Response("Bad request") }
}

async function short(destination, slashtag, title, description, domain, origin, env) {
    console.log(env.REBRANDLY_API_KEY)
        //set request headers
    var requestHeaders = new Headers()
    requestHeaders.append("Content-Type", "application/json")
    requestHeaders.append("apikey", "34e28c66b57f498cb35498afa8ad4244")
    requestHeaders.append("workspace", "3b8574d5e78b4f44afdb1ea195d0e115") //uses shared workspace for links

    //submit request
    let response = await (await fetch("https://api.rebrandly.com/v1/links", {
        headers: requestHeaders,
        method: "POST",
        body: JSON.stringify({
            "destination": destination,
            "slashtag": slashtag,
            "title": "WT-" + title,
            "description": description + "Created on " + origin + " at " + (new Date(Date.now())).toUTCString(),
            "domain": domain,
        })
    })).json()
    return (response.shortUrl)
}