/* THE SINGLE SOURCE FOR WHAT IS SHIPPING. Both delivery pages read this file and nothing else:
   the internal one at review/delivery.html and the external one at runny.github.io/paysauce-meta-ads.
   publish-delivery.py copies this file and the art into the repo clone and pushes, so the two can
   never say different things. Before 11 Aug 2026 they were two hand-maintained copies of the same
   JS and they drifted within a day.

   ⚠ NO COMMENTARY IN HERE (Aaron, 11 Aug 2026). Results, history, caveats and reasoning were added
   once and removed: the delivery page is where art and words are picked up, and analysis on it
   confuses the job. A campaign has a name and a list of ads. Performance lives on the performance
   pages; reasoning lives in conversation.

   THE TRACKING CODE IS THREE PARTS: BE-{campaign}-{slug}, e.g. BE-c2-chef.

   BE  so one filter isolates this inventory, which is the whole point of the convention.
   c2  because the same PNG in two campaigns is two different ads (different words, different
       destination, learning from zero), and without it one filter merges them into one row.
   chef  the creative, in a word.

   It was BE-bai-01-01-v1-chef-c2-st for about an hour on 11 Aug 2026: eight segments to say "chef,
   campaign 2". The job code and the variant belong on the delivery page, where you can see them
   next to the art; the format suffix said "static" when everything is static. A code that has to be
   typed or read in a report earns its length or loses it.

   ⚠ One primary text per ad. Meta's Advantage+ writes the variations, and on 5 to 11 Aug its
   versions ran 1.13% link CTR against our supplied line's 0.66% at the same CPM. Do not add
   alternates here. */

window.CAMPAIGNS = {
  updated: "2026-08-11",

  /* Stated once, rendered on every ad, so it cannot drift row to row. */
  standing: {
    destination: "Instant form only. Please do not attach a website URL to the ad itself: it changes the conversion location to \"website and instant form\" and splits delivery optimisation across a path that has produced no leads.",
    thankYouLink: "https://www.paysauce.com/au",
    adSet: "One cold ad set per campaign.",
    budget: "$200 a day per campaign.",
    freeze: "Leave alone for 14 days. Any real edit (budget, audience, creative, optimisation) restarts Meta's learning from zero.",
    naming: "Paste the exact filename as the ad name, including the ratio.",
    text: "One primary text per ad, as written. Advantage+ text generation stays ON: Meta writes the variations."
  },

  campaigns: [
    {
      id: "campaign-1",
      name: "Campaign 1 · Cast",
      ads: [
        {
          code: "BAI-01-01", key: "v1-chef", slug: "chef", label: "Chef", dir: "creatives/campaign-1/",
          primary: "Pays, super, PAYG and payslips, handled in one pay run. Payroll that takes payday off your plate.",
          headline: "Payroll, sorted in one tap", desc: "Get started.", cta: "Learn more"
        },
        {
          code: "BAI-01-01", key: "v2-framer", slug: "framer", label: "Framer", dir: "creatives/campaign-1/",
          primary: "Payday, payments and filing handled, so it's off your mind by morning tea. Built for small business.",
          headline: "That's payroll sorted", desc: "Get started.", cta: "Learn more"
        },
        {
          code: "BAI-01-02", key: "v2-salon", slug: "salon", label: "Salon", dir: "creatives/campaign-1/",
          primary: "Pays, super, PAYG and payslips, handled in one pay run. Done in one click.",
          headline: "Payroll, sorted in one tap", desc: "Get started.", cta: "Learn more"
        },
        {
          code: "BAI-01-03", key: "v3-bookkeeper", slug: "bookkeeper", label: "Bookkeeper", dir: "creatives/campaign-1/",
          primary: "Pays, super, PAYG and payslips, handled in one pay run. Done in one click.",
          headline: "Payroll, sorted in one tap", desc: "Get started.", cta: "Learn more"
        }
      ]
    },

    {
      id: "campaign-2",
      name: "Campaign 2 · Approach",
      ads: [
        {
          code: "BAI-01-01", key: "v1-chef", slug: "chef", label: "Chef", dir: "creatives/campaign-2/",
          primary: "Pays, super, PAYG and payslips, handled in one pay run. Payroll that takes payday off your plate.",
          headline: "Payroll, sorted in one tap", desc: "Get started.", cta: "Learn more"
        },
        {
          code: "SCN-01", key: "v1-desk", slug: "desk", label: "The desk", dir: "creatives/campaign-2/",
          primary: "Staff, tax and super all sent at once. Nothing to transfer, nothing to upload.",
          headline: "Payday made simple.", desc: "Get started.", cta: "Learn more"
        },
        {
          code: "SCN-04", key: "v1-without-banking", slug: "banking", label: "Without the banking", dir: "creatives/campaign-2/",
          primary: "Press it once. The transfers happen on their own, to your staff, the ATO and every super fund.",
          headline: "Payday, without the banking.", desc: "Get started.", cta: "Learn more"
        }
      ]
    },

    {
      id: "campaign-3",
      name: "Campaign 3 · Trade",
      ads: [
        {
          code: "SCN-01", key: "v3-in-full", slug: "generic", label: "Generic", dir: "creatives/campaign-3/",
          primary: "Staff, tax and super all sent at once. Nothing to transfer, nothing to upload.",
          headline: "Payday made simple.", desc: "Get started.", cta: "Learn more"
        },
        {
          code: "SCN-02", key: "v1-cafe", slug: "cafe", label: "Cafes", dir: "creatives/campaign-3/",
          primary: "Everyone paid at once. Super and ATO done. No transfers, no bank files.",
          headline: "Payday made simple.", desc: "Get started.", cta: "Learn more"
        },
        {
          code: "SCN-02", key: "v2-shop", slug: "shop", label: "Shops", dir: "creatives/campaign-3/",
          primary: "Everyone paid at once. Super and ATO done. No transfers, no bank files.",
          headline: "Payday made simple.", desc: "Get started.", cta: "Learn more"
        }
      ]
    }
  ],

  sizes: [
    { key: "1x1",  label: "1:1",  file: "1x1_1080x1080" },
    { key: "4x5",  label: "4:5",  file: "4x5_1080x1350" },
    { key: "9x16", label: "9:16", file: "9x16_1080x1920" }
  ]
};
