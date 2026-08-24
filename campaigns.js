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
  updated: "2026-08-24",

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
      /* ⚠ THIS COPY IS WHAT IS LIVE IN THE ACCOUNT, pulled from Meta on 11 Aug 2026, not what we
         would write today. Campaign 1 is the record of what is running and about to be switched
         off, so it has to match Ads Manager: "10x easier" and "Try PaySauce for free" both ship in
         it, and both were replaced in later work. Do not tidy them here. */
      ads: [
        {
          code: "BAI-01-01", key: "v1-chef", slug: "chef", label: "Chef", dir: "creatives/campaign-1/",
          primary: "Pays, super, PAYG and payslips, handled in one pay run. Payroll that takes payday off your plate.",
          headline: "Payroll, sorted in one tap", desc: "Try PaySauce for free.", cta: "Learn more"
        },
        {
          code: "BAI-01-01", key: "v2-framer", slug: "framer", label: "Framer", dir: "creatives/campaign-1/",
          primary: "Payday, payments and filing handled, so it's off your mind by morning tea. Built for small business.",
          headline: "That's payroll sorted", desc: "Payroll made easy.", cta: "Learn more"
        },
        {
          code: "BAI-01-02", key: "v2-salon", slug: "salon", label: "Salon", dir: "creatives/campaign-1/",
          primary: "Pays, super, PAYG and payslips, handled in one pay run. Payroll that makes payday 10x easier.",
          headline: "Payroll, sorted in one tap", desc: "Try PaySauce for free.", cta: "Learn more"
        },
        {
          code: "BAI-01-03", key: "v3-bookkeeper", slug: "bookkeeper", label: "Bookkeeper", dir: "creatives/campaign-1/",
          primary: "Pays, super, PAYG and payslips, handled in one pay run. Payroll that makes payday 10x easier.",
          headline: "Payroll, sorted in one tap", desc: "Try PaySauce for free.", cta: "Learn more"
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
          code: "SCN-04", key: "v2-no-banking", slug: "banking", label: "Without the banking", dir: "creatives/campaign-2/",
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
          code: "SCN-01", key: "v3-smb", slug: "smb", label: "Small business", dir: "creatives/campaign-3/",
          primary: "Staff, tax and super all sent at once. Nothing to transfer, nothing to upload.",
          headline: "Payday made simple.", desc: "Get started.", cta: "Learn more"
        },
        {
          code: "SCN-02", key: "v2-cake", slug: "cake", label: "Cake shops", dir: "creatives/campaign-3/",
          primary: "Everyone paid at once. Super and ATO done. No transfers, no bank files.",
          headline: "Payday made simple.", desc: "Get started.", cta: "Learn more"
        },
        {
          code: "SCN-02", key: "v1-cafe", slug: "cafe", label: "Cafes", dir: "creatives/campaign-3/",
          primary: "Everyone paid at once. Super and ATO done. No transfers, no bank files.",
          headline: "Payday made simple.", desc: "Get started.", cta: "Learn more"
        }
      ]
    },

    {
      id: "campaign-4",
      name: "Campaign 4 \u00b7 Reason",
      ads: [
        {
          code: "BAI-04-01", key: "v1-run-stack", slug: "ninety", label: "Ninety minutes", dir: "creatives/campaign-4/",
          primary: "Weekly payroll across three systems took ninety minutes. Now it is one pay run: staff paid, the ATO filed, super sent to every fund.",
          headline: "One click does the pay run", desc: "Get started.", cta: "Learn more"
        },
        {
          code: "BAI-05-01", key: "v1-credential", slug: "expert", label: "Payroll expert", dir: "creatives/campaign-4/",
          primary: "Your setup call is one to one with a payroll expert or BAS agent, at a time you pick. Not a support queue.",
          headline: "Set up by a payroll expert", desc: "Get started.", cta: "Learn more"
        }
      ]
    },

    /* Split out of Campaign 4 on 24 Aug 2026: this ad runs in the Meta account as its own
       campaign, "C5 Clearing House" (Meta's own numbering, not ours), not inside C4. Filing it
       under campaign-4 here was leftover from how it was designed, not how it shipped.
       ⚠ Its live tagged URL was set from THIS page while the ad still lived under campaign-4, so
       the ad running today carries utm_content=BE-c4-clearing. The line below will read as
       BE-c5-clearing from now on. That is correct for anything relaunched from here; it will not
       match the URL already live until the ad itself is edited to match, which is Yash's call. */
    {
      id: "campaign-5",
      name: "Campaign 5 \u00b7 Clearing House",
      ads: [
        {
          code: "BAI-07-01", key: "v1-date-line", slug: "clearing", label: "Clearing house", dir: "creatives/campaign-5/",
          primary: "The ATO's free super clearing house closed on 1 July. Run the pay in PaySauce and one click does the rest: staff paid, the ATO filed, super sent to every fund.",
          headline: "The clearing house has closed", desc: "Get started.", cta: "Learn more",
          /* The only ad in the account that sends traffic to a page. The claim behind it is a news
             claim, and a reader told a government service closed still has to work out why that
             means talking to a payroll company. The page does that work, then books. */
          landing: "https://www.paysauce.com/au/super-clearing-house",
          destination: "Website, not instant form. Send traffic to the tagged URL below and leave the instant form off this one ad."
        }
      ]
    },

    /* New 24 Aug 2026. Same creative as SCN-04 v2-no-banking in Campaign 2, code and key both
       unchanged so no new render is needed, cloned the same way Campaign 1's chef ad was cloned
       into Campaign 2. Victoria is running that creative at a frequency of roughly 2.5; this
       campaign puts it in front of Queensland instead, in its own campaign with its own budget so
       it cannot pull spend away from the Victoria version. Keep both running side by side.
       Primary text rewritten to long form on Mel's advice (24 Aug 2026 call with Kelly): Meta's
       own text variants need more to work with on an open audience than a single short line. */
    {
      id: "campaign-6",
      name: "Campaign 6 \u00b7 Queensland",
      ads: [
        {
          code: "SCN-04", key: "v2-no-banking", slug: "banking", label: "Without the banking", dir: "creatives/campaign-6/",
          primary: "Finished the pay run, only to realise there's still the banking to do?\n\nBank files to upload. Staff payments to make. PAYG to send. Super to pay. Suddenly, \"payroll's done\" doesn't feel very done.\n\nWith PaySauce, you can skip that part.\n\nOnce your pay run looks right, press go and staff wages, PAYG and super are sent where they need to go. No bank files to upload. No second round of payday admin. No remembering there's still super to sort later.\n\nOne pay run. One press. Actually done.",
          headline: "Skip the banking bit.", desc: "Staff, PAYG and super handled.", cta: "Learn more"
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
