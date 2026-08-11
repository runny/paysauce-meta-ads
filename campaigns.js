/* THE SINGLE SOURCE FOR WHAT IS SHIPPING. Both delivery pages read this file and nothing else:
   the internal one at review/delivery.html and the external one at runny.github.io/paysauce-meta-ads.
   publish-delivery.py copies this file and the art into the repo clone and pushes, so the two can
   never say different things. Before 11 Aug 2026 they were two hand-maintained copies of the same
   JS and they drifted within a day.

   IA is CAMPAIGN first (Aaron, 11 Aug 2026), because that is how the account is structured and how
   Yash works: pick a campaign, see its ads, take the art and the words. Rounds were how the creative
   was MADE; campaigns are how it RUNS, and the delivery page is for running it.

   THE NUMBERING IS A LEDGER, NOT A LABEL. Campaign 1 is not something we are about to build: it is
   what ran from 5 to 11 August and answered its question. Numbering it that way keeps the sequence
   honest and puts each result next to the work that follows from it.

   Every campaign states the ONE question it answers. If a campaign cannot state its question in a
   sentence, it is two campaigns.

   ⚠ AN AD IS ARTWORK PLUS COPY PLUS DESTINATION, NOT ARTWORK (Aaron, 11 Aug 2026). Chef appears in
   campaign 1 and again in campaign 2 sharing only the PNG: different words, different conversion
   location, different ad set, and a learning history that starts from zero. So the BE code carries
   the CAMPAIGN as well as the job, or one filter on utm_content silently merges two different ads
   into one row. Codes read BE-{job}-{variant}-{campaign}-st.

   ⚠ Ad-level copy here is what Yash pastes. One primary text per ad: Meta's Advantage+ writes the
   variations, and on 5 to 11 Aug its versions ran 1.13% link CTR against our supplied line's 0.66%
   at the same CPM. Do not supply alternates. */

window.CAMPAIGNS = {
  updated: "2026-08-11",

  /* Shared by every LIVE campaign, so it is stated once and cannot drift per row. */
  standing: {
    destination: "Instant form only. Please do not attach a website URL to the ad itself: it changes the conversion location to \"website and instant form\" and splits delivery optimisation across a path that has produced no leads.",
    thankYouLink: "https://www.paysauce.com/au",
    adSet: "One cold ad set per campaign. Audience is your call: broad, or the lookalike. In the account's own history the open ad set bought leads at about $24 against about $36 for the targeted one.",
    budget: "$200 a day per campaign.",
    freeze: "Leave alone for 14 days. Any real edit (budget, audience, creative, optimisation) restarts Meta's learning from zero and voids the read.",
    naming: "Paste the exact filename as the ad name, including the ratio.",
    text: "One primary text per ad, as written. Advantage+ text generation stays ON: Meta writes the variations."
  },

  campaigns: [
    {
      id: "campaign-1",
      label: "Campaign 1",
      status: "concluded",
      statusLabel: "Ran 5 to 11 Aug · switching off",
      question: "Which cast connects?",
      detail: "The first live round: one composition, four cast members, run to find out whether who is in the picture changes anything.",
      result: "It does not. Chef ran 0.72% link CTR and framer 0.74% across the only two fair samples, and those are the same number. Salon and bookkeeper sit further apart but on 1,500 to 1,800 impressions each, where four clicks moves the rate. Read it alongside a setup that was faulty throughout: a website-and-form destination splitting the optimisation, square and 4:5 files serving into vertical placements, events split across two ad sets, and a learning reset on the Monday. None of that learning is worth keeping, which is why chef re-enters campaign 2 clean rather than being cited as a historic number.",
      note: "History. The art here is superseded; campaign 2 carries what replaces it.",
      ads: [
        { code: "BAI-01-01", key: "v1-chef", label: "Chef", approach: "Cast: head chef" },
        { code: "BAI-01-01", key: "v2-framer", label: "Framer", approach: "Cast: picture framer · paused day two" },
        { code: "BAI-01-02", key: "v2-salon", label: "Salon", approach: "Cast: salon owner" },
        { code: "BAI-01-03", key: "v3-bookkeeper", label: "Bookkeeper", approach: "Cast: bookkeeper" }
      ]
    },

    {
      id: "campaign-2",
      label: "Campaign 2",
      status: "build",
      statusLabel: "To build",
      question: "Which approach wins?",
      detail: "Three genuinely different ways of making the same point: a person on a brand field, a photographed scene with the product in the room, and a diagram with no photography at all. The answer tells us what KIND of ad to make next, which is a bigger question than which face or which headline.",
      caveat: "Each approach carries its own words, and its headline is set into the artwork, so this compares whole ads rather than isolating composition. Deliberate: holding the copy constant would mean re-rendering every piece to a shared headline. Read a win as \"this ad works\", not \"this composition works\".",
      ads: [
        {
          code: "BAI-01-01", key: "v1-chef", label: "Chef", dir: "creatives/campaign-2/",
          approach: "Person on a brand field",
          primary: "Pays, super, PAYG and payslips, handled in one pay run. Payroll that takes payday off your plate.",
          headline: "Payroll, sorted in one tap",
          desc: "Get started.",
          cta: "Learn more",
          note: "Same PNG as campaign 1, and nothing else: new copy, new destination, new ad set, learning from zero. Its first fair run."
        },
        {
          code: "SCN-01", key: "v1-desk", label: "The desk", dir: "creatives/campaign-2/",
          approach: "Photographed scene, product in the room",
          primary: "Staff, tax and super all sent at once. Nothing to transfer, nothing to upload.",
          headline: "Payday made simple.",
          desc: "Get started.",
          cta: "Learn more"
        },
        {
          code: "SCN-04", key: "v1-without-banking", label: "Without the banking", dir: "creatives/campaign-2/",
          approach: "Diagram, no photography",
          primary: "Press it once. The transfers happen on their own, to your staff, the ATO and every super fund.",
          headline: "Payday, without the banking.",
          desc: "Get started.",
          cta: "Learn more"
        }
      ]
    },

    {
      id: "campaign-3",
      label: "Campaign 3",
      status: "build",
      statusLabel: "To build",
      question: "Does naming the trade help?",
      detail: "One layout, held to the pixel, with only the room and the small line changing. The generic version runs alongside the two named ones as the comparator, so any gap between them is a fact about the audience rather than about the design.",
      ads: [
        {
          code: "SCN-01", key: "v3-in-full", label: "Generic", dir: "creatives/campaign-3/",
          approach: "Small business, unnamed",
          primary: "Staff, tax and super all sent at once. Nothing to transfer, nothing to upload.",
          headline: "Payday made simple.",
          desc: "Get started.",
          cta: "Learn more"
        },
        {
          code: "SCN-02", key: "v1-cafe", label: "Cafes", dir: "creatives/campaign-3/",
          approach: "Trade named: cafes",
          primary: "Everyone paid at once. Super and ATO done. No transfers, no bank files.",
          headline: "Payday made simple.",
          desc: "Get started.",
          cta: "Learn more"
        },
        {
          code: "SCN-02", key: "v2-shop", label: "Shops", dir: "creatives/campaign-3/",
          approach: "Trade named: shops",
          primary: "Everyone paid at once. Super and ATO done. No transfers, no bank files.",
          headline: "Payday made simple.",
          desc: "Get started.",
          cta: "Learn more"
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
