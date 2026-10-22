export type CaseStory = { company?: string; role: string; timeline: string; audience: string; sections: Record<string, string> };
export const caseStories: Record<string, CaseStory> = {
  "marketing-community": {
    company: "MKT Coffee Chat",
    role: "Co-founder & Host · Co-created with Jessie",
    timeline: "Weekly chats · Monthly themed conversations",
    audience: "Chinese-speaking marketers working in North America",
    sections: {
      context: "Marketing work raises questions that are hard to answer alone: how to demonstrate value, navigate a career pivot, or separate AI promise from daily reality. MKT Coffee Chat brings those questions into a shared conversation.",
      role: "I co-founded the community with Jessie. We alternate hosting, creating space for marketers to exchange practical experience and speak honestly about work.",
      strategy: "Combine a weekly conversation rhythm with monthly themed discussions. Use familiar platforms—Google Meet and Xiaohongshu—to connect the live conversation with the broader community. Topics start from the real questions marketers face at work.",
      execution: "Discussion topics have included AI in Marketing, Measuring Marketing Value, Brand vs ROI, Managing Up, Career Pivots, Inside the Role, and The First 90 Days. Hosting makes room for different roles, candid experiences, and lessons people can bring back to their own work.",
      results: "The community maintains weekly chats and monthly topical conversations, with roughly 12 participants per session on average. Members share what their roles actually involve, learn from one another’s experiences, and talk openly about difficult moments at work. The preview on this site illustrates the format; it is not a recording or a participant testimonial.",
      learning: "Useful peer learning includes both practical tactics and the context behind them. The community makes space for career uncertainty and work fatigue alongside marketing ideas, so the conversation can meet people where they are.",
    },
  },
  "marketing-analytics": {
    role: "Growth workflow design, reporting requirements, planning and interface enhancements; original tracking foundation by Vic",
    timeline: "Current role · Reporting and workflow development",
    audience: "Marketing, sales collaborators, and leadership",
    sections: {
      context: "Campaign activity, account requests, and reporting can live in separate places. Collecting data is only a starting point: the team needs to understand what changed, where to act, and what to learn next.",
      role: "Defined the decisions the reporting workspace should support and developed planning, filtering, and activity-review enhancements with coding assistance. The work builds on Vic’s original tracking foundation; I do not claim authorship of that foundation or unverified integrations.",
      strategy: "Organized the work around a repeatable loop: observe performance, diagnose a gap, choose a response, and review the outcome. The same approach informs structured account briefing and HubSpot lifecycle workflows.",
      execution: "Developed views across DTC, providers, and the website, along with campaign-linked activity records, review notes, and assumptions-based planning scenarios. Operational work also includes account scoring, follow-up campaigns, and six-month retest reminders. Demonstration imports remain separate from real account data.",
      results: "The portfolio walkthrough demonstrates filtering, planning, and a campaign-review loop with synthetic data. The business value being addressed is clearer prioritization and a repeatable operating process; no time savings, revenue uplift, or automated attribution is claimed without evidence.",
      learning: "A useful system connects information to the next decision. Standardize the repeated steps, keep assumptions visible, and use feedback from the people doing the work to improve the process.",
    },
  },
  "sales-enablement": {
    role: "Problem diagnosis, training development, and sales resources; partnered with the Sales & Marketing Director",
    timeline: "Weekly sales calls · Current role",
    audience: "7–10 sales team members serving healthcare providers",
    sections: {
      context: "Sales feedback revealed a recurring barrier: team members were unsure what to discuss with medically knowledgeable providers and worried that introducing SpectraCell would feel like a hard sell.",
      role: "The Sales & Marketing Director brings specific challenges into our weekly planning discussion. I break them into situations and barriers, develop the training and resources, and connect the response to the team’s product and customer context.",
      strategy: "I traced the conversation gap to difficulty connecting product knowledge with the needs of a provider’s patients. I reframed the conversation around helping the provider address those needs, with practical talking points from product, service, and co-branding perspectives.",
      execution: "Built a product talk-points presentation linking tests to patient needs, with sample scripts sales could use directly. Related support includes one-pagers, social post examples, and trackers. Training is part of the weekly all-sales call.",
      results: "Training reaches approximately 7–10 sales team members. After the product conversation session, sales requested the presentation and scripts for continued use. That is direct feedback on practical value; a separate sales lift has not been isolated.",
      learning: "The recurring process is to diagnose a concrete barrier, make the next action easier, and use feedback to refine the response. The accompanying tool walkthrough demonstrates how training and resources can be organized; its demo counters are not performance evidence.",
    },
  },
  "partner-marketing": {
    role: "Co-developed the service with the Sales & Marketing Director; account briefing and tailored content development",
    timeline: "First-month rollout · Current role",
    audience: "Provider practices, their patients, and strategic partner accounts",
    sections: {
      context: "Provider practices need education materials that fit their own patients and setting. A generic flyer can miss the context in which a provider needs to introduce a test.",
      role: "Proposed customized co-branded content in discussion with the Sales & Marketing Director and worked with sales to clarify the account’s needs before creating materials.",
      strategy: "The brief goes beyond adding a logo: print or digital, office display or direct patient distribution, practice specialty, patient familiarity with wellness testing, and new versus existing patients. These choices shape both message and format.",
      execution: "Created tailored provider materials and supported strategic-account co-branding through webinars, one-pagers, and e-blasts. The related editor walkthroughs show the briefing, content, review, and delivery workflow using demonstration accounts.",
      results: "More than 10 accounts collaborated through the service within its first month. Sales reported additional sales after sharing co-branded materials and patient maps; a revenue uplift attributable to these assets alone has not been established.",
      learning: "Customization is most useful when it reflects how the provider and patient will actually use the material. Continued collaboration with sales helps identify missing information and refine the resources.",
    },
  },
  "lifecycle-marketing": {
    role: "Funnel diagnosis, activation campaign design, content, tracking, and cross-functional follow-up",
    timeline: "Initial results within one month of campaign launch · Current role",
    audience: "New provider accounts; approximately 50–60 per month",
    sections: {
      context: "New providers could complete account setup and a pricing agreement without progressing to testing. The business needed to understand what prevented the next meaningful customer action.",
      role: "Analyzed the gap with sales and customer success, designed responses to the barriers, and coordinated campaign content and follow-up. Activation depended on the combined efforts of marketing, sales, customer success, and providers.",
      strategy: "Identified three likely barriers: limited urgency, discomfort recommending tests, and uncertainty about which patients could benefit. Addressed them with an incentive, ready-to-use education resources, and a patient-needs-to-test map.",
      execution: "Launched a 30-day first-order-and-sample-return incentive, packaged patient education resources, and created the patient map. Used web backend information, GA4 engagement, HubSpot scoring and tagging, and account-quality feedback from sales and customer success to guide follow-up. Lifecycle activity also includes six-month retest reminder emails.",
      results: "More than 15 accounts returned samples within the first month after launch, across a program serving approximately 50–60 new accounts per month. These are operational estimates and reflect the combined contribution of the campaign, sales follow-up, and customer support.",
      learning: "The transferable approach is to identify the stalled behavior, validate the barrier with customer-facing teams, test a targeted response, and track what happens next. The relevant milestone depends on the company’s own customer journey and business model.",
    },
  },
};
