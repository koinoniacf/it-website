# Koinonia IT Website

[![Last Commit Badge](https://img.shields.io/github/last-commit/koinoniacf/it-website "Last Commit Badge")](/commits) [![Commit Activity Badge](https://img.shields.io/github/commit-activity/w/koinoniacf/it-website "Commit Activity Badge")](/graphs/commit-activity) [![Contributors Badge](https://img.shields.io/github/contributors/koinoniacf/it-website "Contributors Badge")](/graphs/contributors)
![Version Badge](https://img.shields.io/github/package-json/v/koinoniacf/it-website "Version Badge") ![Top Language Badge](https://img.shields.io/github/languages/top/koinoniacf/it-website "Top Language Badge") ![Languages Badge](https://img.shields.io/github/languages/count/koinoniacf/it-website "Languages Badge") ![Lines Badge](https://img.shields.io/tokei/lines/github/koinoniacf/it-website "Lines Badge") ![Code Size Badge](https://img.shields.io/github/languages/code-size/koinoniacf/it-website "Code Size Badge") ![Repo Size Badge](https://img.shields.io/github/repo-size/koinoniacf/it-website "Repo Size Badge")
![Uptime Badge](https://img.shields.io/uptimerobot/ratio/m790664910-4107e19fff4d8e6fed016dbb "Uptime Badge") [![Mozilla Observatory Badge](https://img.shields.io/mozilla-observatory/grade/it.kcf.org?publish "Mozilla Observatory Badge")](https://observatory.mozilla.org/analyze/it.kcf.org) [![Security Headers Badge](https://img.shields.io/security-headers?url=https%3A%2F%2Fit.kcf.org "Security Headers Badge")](https://securityheaders.com/?q=https%3A%2F%2Fit.kcf.org) [![HSTS Preload Badge](https://img.shields.io/hsts/preload/it.kcf.org "HSTS Preload Badge")](https://hstspreload.org/?domain=it.kcf.org)

The repository is used to host Koinonia's IT website. It is primarily meant to support staff and volunteers within Koinonia. This site uses the static site generator [Eleventy](https://11ty.dev/) and deploy to [Cloudflare Pages](https://pages.cloudflare.com/). We use [Liquid](https://shopify.github.io/liquid/) as the primary templating language.

## [Images](/images/)

We host various images on the site. This allows us to easily update our logo and banner image in many locations at once. Services that reference these images include

- [Microsoft Teams meeting invitations](https://docs.microsoft.com/en-us/microsoftteams/meeting-settings-in-teams#customize-meeting-invitations)
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
