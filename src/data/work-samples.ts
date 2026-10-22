export type WorkSample = {
  slug: string; title: string; category: string; group: string; summary: string;
  context: string; role: string; audience: string; workflow: string[];
  capabilities: { title: string; description: string }[];
  boundaries: string; privacy: string; credit: string; relatedCase: string;
  images: { src: string; title: string; caption: string }[];
};
export const workSamples: WorkSample[] = [
  {
    slug: "one-pager-editor", title: "One-Pager Editor", category: "Partner Marketing", group: "Partner Content Studios",
    summary: "Turn an account brief into a branded, reviewable partner one-pager.",
    context: "Built around a co-branding service that collaborated with 10+ provider accounts in its first month. The brief captures practice specialty, patient familiarity, and where the material will be used; the editor brings that context into content, review, and delivery.",
    role: "Workflow and interface design, content structure, and implementation with coding assistance.",
    audience: "Partner marketing and commercial teams preparing co-branded materials.",
    workflow: ["Capture the account brief", "Edit content and brand assets", "Review and export"],
    capabilities: [
      { title: "Account-first briefing", description: "Keep account context, source notes, hypotheses, and reviewed materials together before developing the message." },
      { title: "Content and brand controls", description: "Edit copy and imagery within a structured layout. Reuse approved assets and adjust partner branding." },
      { title: "Review and delivery", description: "Capture review notes, manage project status, and export PDF or PNG deliverables with export snapshots." },
    ],
    boundaries: "The completed editor supports manual production. AI analysis requires separate configuration. PDF output is rendered artwork; it is not a fully accessible, selectable-text document. This portfolio shows a screenshot walkthrough, not access to the private editor.",
    privacy: "The visible account is a fictional demo clinic. No real partner URL, contact information, internal notes, or workspace records are included.",
    credit: "Interface design and development by Suri. Company branding appears as project context and does not imply an endorsement.",
    relatedCase: "partner-marketing",
    images: [{ src: "/images/work-samples/one-pager.png", title: "Account Brief", caption: "Actual editor interface with a fictional clinic. Account briefing, content/design, and review/delivery form one workflow." }],
  },
  {
    slug: "landing-page-editor", title: "Landing Page Editor", category: "Partner Marketing", group: "Partner Content Studios",
    summary: "Build a partner page from reusable modules, then preview and package the handoff.",
    context: "A partner page needs to carry a shared story while fitting a provider’s website. The editor connects the brief, modular content, responsive preview, and a scoped delivery package.",
    role: "Workflow and interface design, modular page structure, and implementation with coding assistance.",
    audience: "Marketing teams creating provider-facing and patient-facing partner pages.",
    workflow: ["Build the brief", "Arrange and edit modules", "Preview desktop and mobile", "Review and export a handoff"],
    capabilities: [
      { title: "Modular storytelling", description: "Edit and reorder content modules, with provider logos, colors, and shared branding defaults." },
      { title: "Responsive preview", description: "Desktop and mobile previews use the same content source as the exported page." },
      { title: "Provider-ready package", description: "Export scoped HTML/CSS, assets, a CTA manifest, and platform-specific installation guidance. Internal research and feedback stay outside the provider package." },
    ],
    boundaries: "Manual briefing, editing, preview, and exports are implemented. AI drafting needs separate configuration. Exports do not publish to a provider website or operate patient forms. This is a screenshot walkthrough; the company workspace remains private.",
    privacy: "The screenshot uses a fictional wellness practice and demonstration copy. No real provider records, patient data, internal research, or uploaded customer assets are bundled.",
    credit: "Interface design and development by Suri. Company branding is retained only as project context.",
    relatedCase: "partner-marketing",
    images: [{ src: "/images/work-samples/landing-page.png", title: "Content and Preview", caption: "Actual content editor and responsive page preview using a fictional practice and demonstration copy." }],
  },
  {
    slug: "sales-training-tool", title: "Sales Enablement Hub", category: "Sales Enablement", group: "Sales Enablement",
    summary: "Connect training, conversation practice, reusable tools, and follow-up in one workspace.",
    context: "Weekly sales training starts with barriers raised by the Sales & Marketing Director. I turn them into patient-needs-based talk tracks, scripts, and resources for 7–10 sales team members. This tool organizes preparation, practice, and follow-up.",
    role: "Sales problem diagnosis, training and resource development in partnership with the Sales & Marketing Director; workspace and interface implementation with coding assistance.",
    audience: "Sales teams and the marketing team preparing enablement resources.",
    workflow: ["Prepare a session", "Practice a conversation", "Apply a tool", "Review the next step"],
    capabilities: [
      { title: "Learning and practice", description: "A searchable training library and rule-based conversation practice connect materials to common sales situations." },
      { title: "Tools at the point of use", description: "Search and save scripts, copy reusable tools, and record personal practice notes." },
      { title: "Follow-up and review", description: "Track next actions, filter demonstration records, and capture questions, needs, and team-exchange notes in browser-local storage." },
    ],
    boundaries: "Completed as an interactive work sample, not an employee production rollout. Microsoft login, shared storage, and live multi-user collaboration are future extensions. Demonstration metrics are not achieved sales results. Only the overview screenshot is included here; internal training slides and scripts are excluded.",
    privacy: "The selected overview contains a generic practice scenario and empty/demo counters. Internal decks, employee records, tracker exports, and browser-local notes are not included.",
    credit: "Workspace interface design and development by Suri. Company training material remains separate from interface authorship.",
    relatedCase: "sales-enablement",
    images: [{ src: "/images/work-samples/sales-training.jpg", title: "Training Overview", caption: "Actual overview interface. The suggested session and conversation are a demonstration, not a confirmed booking or performance outcome." }],
  },
  {
    slug: "marketing-dashboard", title: "Marketing Performance Dashboard", category: "Marketing Analytics", group: "Marketing Intelligence",
    summary: "Bring reporting, budget scenarios, and campaign review into a decision-focused workspace.",
    context: "Marketing reporting needs to support the next decision. Growth Studio brings DTC, provider, and website views together with planning and activity review, while keeping observed data separate from assumptions.",
    role: "Planning workflows, interface refinements, chart presentation, filtering, and activity-review enhancements with coding assistance, built on an existing tracking foundation.",
    audience: "Marketing and commercial teams reviewing performance and planning activity.",
    workflow: ["Explore performance", "Test planning assumptions", "Log and connect activity", "Review evidence and next steps"],
    capabilities: [
      { title: "Explore the data", description: "DTC order filters, sortable tables, alternative chart views, and distinct DTC/provider/website views support exploration." },
      { title: "Plan with visible assumptions", description: "Trend projections and editable budget funnels separate modeled outcomes from historical reporting." },
      { title: "Close the review loop", description: "Browser-local campaign records and an Activity Studio connect content, campaign, review dates, learnings, and next steps. The import inbox is explicitly synthetic." },
    ],
    boundaries: "Completed portfolio demo. Live integrations and CRM attribution have not been verified. Records are browser-local; synthetic imports are not real HubSpot/GA4 connections. Forecasts are assumptions-based scenarios, not guarantees. Full finance ledgers and frozen monthly report exports remain outside this sample’s completed scope.",
    privacy: "All displayed orders, revenue, campaigns, activities, and budget assumptions come from synthetic demo data. No live source credentials or actual customer transactions are included.",
    credit: "Planning and interface enhancements by Suri with Codex. Original tracking foundation by Vic / supplied code.",
    relatedCase: "marketing-analytics",
    images: [
      { src: "/images/work-samples/dashboard-activity.jpg", title: "Activity Review", caption: "Synthetic activities demonstrate the capture → campaign → review workflow. No real marketing records are shown." },
      { src: "/images/work-samples/dashboard-orders.jpg", title: "Order Exploration", caption: "Synthetic order IDs, products, and revenue illustrate filtered reporting. These values are not company results." },
      { src: "/images/work-samples/dashboard-forecast.jpg", title: "Budget Scenarios", caption: "Illustrative inputs and modeled outputs make planning assumptions visible; they do not claim realized revenue." },
    ],
  },
];
