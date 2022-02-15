# Koinonia IT Website

The repository is used to host Koinonia's IT website. It is primarily meant to support staff and volunteers within Koinonia. This site uses the static site generator [Eleventy](https://11ty.dev/) and deploy to [Cloudflare Pages](https://pages.cloudflare.com/). We use [Liquid](https://shopify.github.io/liquid/) as the primary templating language.

## [Images](/images/)

We host various images on the site. This allows us to easily update our logo and banner image in many locations at once. Services that reference these images include

- [Microsoft Teams meeting invitations](ht  tps://docs.microsoft.com/en-us/microsoftteams/meeting-settings-in-teams#customize-meeting-invitations)
- [Microsoft Teams custom store](https://docs.microsoft.com/en-us/microsoftteams/customize-your-app-store)
- [Remote Desktop Web](https://rds-koinoniacf.msappproxy.net/RDWeb/)
- [Windows desktop background](https://it.kcf.org/img/BG_Windows.jpg)
- [Zoom landing page](https://koinoniacf.zoom.us/)

## [Public Key Infrastructure](/pki.liquid)

On this site, we host files related to Koinonia's PKI, including CRLs, root certificates, and our policy statement. Issuing Authority 1 automatically pushes its CRLs to this repository.

Our certificates point to pki.kcf.org/pki/ for CRLs, which redirect to this site.

## [Shortlink](/shortlink.liquid)

The shortlink page interfaces with Rebrandly's API to create short links on the koin.onl domain. This allows team members to easily create a short link without needing an account.

## [Zoom Landing](/zoom/)

We host our zoom landing, header, and footer on this site. This allows us to store and test all webpages in one location. These files must be manually updated on Zoom's website.
