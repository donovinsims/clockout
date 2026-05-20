---
created: 2026-05-17T17:48:05 (UTC -05:00)
tags: []
source: https://www.latecheckout.agency/ai-field-guide
author: Ed Landon
---

# The Field Guide to Building Products with AI

> ## Excerpt
> A step-by-step playbook for building an AI-native organization.

---
## Chapter I

## Everything Changed and Nobody Changed How They Work

You didn’t miss a meeting. There was no company-wide email. No one pulled you into a conference room and said, “Hey, the way you’ve worked for the last decade is becoming obsolete.”

But it’s happening.

Between late 2025 and early 2026, a series of quiet capability jumps rewired what’s possible for anyone who builds, designs, or ships technology.

Given that you’re reading this, you’ve probably caught on. But if you need a definitive statement to tell you that this is no longer theory anymore, and that all of this is real, treat this guide as that statement.

A product manager can now describe a feature in plain English and have a working prototype – not a wireframe, not a mockup, a functioning application – by the end of the afternoon. A designer can generate, test, and iterate on three different concepts before a single user interview. An engineer can ship in hours what used to take a sprint.

None of this is new information. But what’s new is that few have adapted the way they work because of it.

And yet, if you work at a company of any meaningful size, you probably feel a strange dissonance. You know things are moving fast. You see the tweets, the demos, the endless LinkedIn posts. But your day-to-day hasn’t changed that much. Your standups are the same length. Your planning meetings still take half a day. Your backlog is still a spreadsheet someone maintains by hand.

You’re not behind because you’re slow. You’re behind because you haven’t been given a field manual on what to do first.

This is that guide.

## The capability jumps that matter

Not everything that happened in the last eighteen months matters equally. The hype cycle generates a new “everything just changed” moment every week. Most of them don’t change anything. But there are a few shifts that fundamentally altered the landscape, and if you understand these, you’ll see why everything downstream is moving.

1. Computers got hands.

It’s no longer just a chat. You tell AI to do something and it does it: writes the code, deploys the page, sends the message, runs the test. Your output got amplified in a way that doesn’t have a clean analogy, because we’ve never had this before.

2. Spinning up agents became trivial.

What used to require an engineering team to configure now takes a paragraph of instructions and a few minutes. Agents are extensions of us – they take goals, break them into steps, execute, handle errors, and return results.

3. Context windows exploded.

A year ago, you could feed AI about 8,000 words before it started forgetting. Today, you feed it an entire codebase. An entire quarter’s worth of meeting transcripts. The practical implication: AI goes from a tool you consult to a colleague who’s read every document you’ve ever written.

4. Running AI locally is real.

Apple Silicon machines now run serious AI models locally. No cloud. No API. No data leaving your machine. The quality tradeoff is real but shrinking fast. Local models now handle 80% of daily tasks. Cloud models handle the other 20% where you need maximum intelligence. The hybrid approach – local for speed and privacy, cloud for heavy reasoning – is becoming the standard setup for serious practitioners.

## The systems thinking shift

These four shifts add up to something bigger than any one of them.

The ability to spin up hundreds of capable agents means we need to train what they do – and that forces us to become systems thinkers whether we want to or not.

Once you “get it,” you realize it’s not about thinking in tasks but instead about thinking up the system capable of producing that task, repeatedly.

Instead of “I need to review this design,” it becomes “I need a system that reviews designs against our standards, flags issues, and suggests fixes.”

Instead of one deliverable, a pipeline.

Instead of doing the work, designing how the work gets done.

Take a second to breathe that in. I never _just_ do the thing I was asked to do. I make the thing that can consistently produce the thing and optimize it over time until it’s completely automated. That’s a different mindset entirely that isn’t taught often. Thinking through this lens is a theme you’ll see repeatedly in this guide.

## The gap nobody talks about

This is the gap that [Aaron Levie](https://x.com/levie/status/1967036306888044887), CEO of Box, puts bluntly:

“The effective use of agents is creating one of the widest spreads in output productivity we’ve seen on a per role basis.”

The widest spread. Per role basis.

That means two product managers sitting next to each other – same title, same salary, same years of experience – are now producing at wildly different levels. Not 10% different. Five to ten times different. And the gap is widening every month.

The uncomfortable truth is that this gap is invisible in most organizations. Nobody’s measuring it. Performance reviews haven’t caught up. The PM who ships three prototypes a week and the PM who writes one PRD a month get the same rating because the system doesn’t know how to evaluate what changed.

But the market will figure it out. It always does.

The people who are two years ahead right now? They’re not smarter than you. They’re not younger. They’re not more technical. They just started earlier. They set things up. They built habits. They’re compounding.

This guide exists so you can compress their two years into two months.

> My clients expect 2026 speed and most of the industry is still working at 2023 speed, and I can’t explain to either side what happened.

That sentence is the real state of things for a lot of leaders right now. The people moving fast can’t articulate why it feels so different, because the shift was a feeling before it was a framework. And the people who haven’t caught on don’t know what they’re missing, because from their perspective nothing changed. They’re still doing good work. They’re just doing it at a pace that used to be fine and now isn’t.

## Why this guide, why now

Every week, someone publishes a “Complete Guide to AI” that’s obsolete by the time you finish reading it. Most are tool reviews disguised as strategy.

This is different for three reasons.

1. A framework that won’t change.

It’s structured around a ladder that won’t change even as the tools do. Individual leverage → Organizational coordination → Strategic differentiation. That’s the sequence, regardless of whether you’re using Claude or GPT or whatever ships next quarter.

2. Practical to the point of being opinionated.

We’ll tell you exactly what to set up, in what order, and why. Not “consider these options.” Here’s the stack. Here’s the config. Here’s what to do Monday morning.

3. Honest about what AI can’t do.

We touch upon design craft. There’s a chapter on strategic differentiation. There’s a chapter on why moving fast isn’t the same as moving right. The people selling you AI want you to think it solves everything but the truth is it doesn’t. It solves the execution bottleneck. It makes the judgment bottleneck the only one that matters. That’s a very different challenge, and most organizations aren’t ready for it.

## Chapter II

## The Playbook

**I saved my product thinking in a markdown file and watch AI apply it without me.**

Not perfectly. Maybe 80%. But 80% of my judgment, running on autopilot while I sleep, is enough to change how I think about everything.

The part nobody prepares you for isn’t that AI can generate things. We all know that. It’s that your hard-won intuition, the stuff you spent a decade building and thought was uniquely yours, can be written down in a markdown file, handed to a machine, and reused by anyone.

Once that sinks in, you start looking at your other work differently. If product feedback is a system, what else is? Design review? Competitive analysis? User onboarding? The more you look, the more you find.

And eventually you realize there’s a bigger pattern underneath all of it, a loop that connects every part of how products get built.

This loop always existed: signal, hypothesis, build, test, learn. Pre-AI, it was too slow to feel like a loop. Now so much of it can be automated that it closes itself.

## The loop that runs itself

Let me show you what the loop looks like.

Signal

Bets

Test (labs)

Feedback

Context Layer

COMPANY.mdCUSTOMERS.mdLESSONS.mdGUARDRAILS.md

The product loop: signal in, feedback out, context in the center.

It starts with signal. Something a customer says, a pattern in the data, a complaint that shows up three times in a week.

That signal passes through a hypothesis gate: what do we believe this means, and what’s the fastest way to test it?

From there, you make a product bet. Not a big one. A small, testable bet on what you think the customer needs. An encoded skill turns that bet into a prototype, branded and functional, in minutes instead of weeks. The prototype goes into a lab where real users interact with it. They leave feedback. AI aggregates the feedback, spots the patterns, and the signal feeds back into the top of the loop.

This is not new thinking. Product people have drawn versions of this loop on whiteboards for decades. What’s new is that the loop can actually run.

The loop was always there. Now it actually runs.

### What makes something a system?

If a process has repeatable inputs, clear steps, and measurable outputs, it can be written down and run in a loop.

The list of things that qualify is longer than most people expect. Design review, competitive analysis, stakeholder reporting, QA, onboarding, content strategy. These don’t disappear. They change shape. The person who used to spend a week on competitive analysis now spends an afternoon reviewing what the system surfaces and deciding what matters. The work shifts from doing to directing.

### What a PM actually does now

A product manager traditionally sits between the customer and the team, translating what users want into something a team can build. But if feedback loops close themselves, if a product adapts based on what users actually do, the distance between customer and product shrinks. The PM becomes the person closest to signal.

Our hot take: product managers will eventually look a lot closer to community managers. That instinct for what matters, that ability to hear something small and know it’s big – that’s judgment. AI can’t do that.

## The three layers

One of the main learnings we’ve had implementing AI in organizations is that the sequence matters. And most leaders get it wrong.

Companies hear “AI transformation” and immediately think big. Enterprise rollouts. Vendor evaluations. Steering committees. A Chief AI Officer who reports to the CTO who reports to the CEO who reports to the board. Six months of planning. A pilot program. A case study. A second pilot program.

Meanwhile, one person on the product team – usually the youngest, often the most junior – is quietly doing the work of three people using tools they set up on their own time.

The productivity isn’t in the strategy. It’s in the individual. And it always starts there. To navigate the change management, there needs to be a bottoms-up movement.

## Layer 1: Individual leverage

How to 10x your own productivity.

This is where it begins. One person. One setup. Dramatic results.

The first layer is about removing friction from your own work. Compressing the time between thinking and output. Making every role – PM, designer, engineer, strategist – 2x to 10x more effective.

Here’s what this looks like in practice:

**A product manager** who used to spend four hours writing a PRD now describes the feature verbally and has a structured document in twenty minutes – pre-populated with edge cases, acceptance criteria, and technical considerations pulled from the codebase.

**A designer** who used to spend a day creating three mockup variations now generates thirty in an hour, each consistent with the design system, each production-ready enough to put in front of a user.

**An engineer** who used to spend a sprint building a feature now has an agent that reads the spec, writes the code across multiple files, runs the tests, and opens a pull request – while the engineer reviews the approach and handles the architectural decisions that actually require human judgment.

The judgment bookendsAfter AI

Time

Tasks

Your effort concentrates at the edges. AI handles the middle.

This isn’t future tense. This is present state. The tools exist. The workflows are proven. The only variable is whether you’ve set them up.

And this is the critical insight that most organizations miss: you cannot skip this layer.

You cannot jump to “organizational AI” without first having individuals who know how to use the tools. The adoption must be bottom-up before it can be top-down. The people have to feel the leverage before the process can be redesigned around it.

Think of it like this: If nobody on the team has felt the speed, nobody will believe the process needs to change.

### The judgment bookends

Every piece of work now has two bookends. Human judgment at the beginning: what should we point AI at, what’s the right hypothesis, what’s worth building? AI handles the middle: the building, the drafting, the execution, the assembly. Human judgment at the end: is this good enough, does it feel right, what needs to change before it ships?

The beginning and the end are where humans live now. AI ate the middle.

This is one of the most powerful mental models for understanding AI. It shows the exact relationship where humans are needed most, and where AI is best suited. And the middle collapsing didn’t just save time. It opened the door for a hundred thousand new competitors who can build that same middle just as fast as you can. So that last 10 to 20% of polish – the taste, the craft, the decisions about what stays and what gets cut – that’s no longer a luxury you get to when there’s time. It’s the only thing that separates your work from everyone else’s.

### The compound example: a weekly summary that learns

You’re a product manager. Every Friday, you write a weekly summary of what your team shipped, what’s blocked, and what’s coming next. You’ve built a skill for this – it reads the week’s meeting notes, pull request summaries, and Slack highlights, then generates a structured update.

Input Sources

Process & Output

Weekly Summary Report

First Draft

Automated weekly summary pipeline.

Week 1, the skill produces a decent first draft. You edit it – you always remove the technical details from the “shipped” section because your audience is executives, not engineers. You always add customer quotes when they’re available. You flag anything related to compliance as “high priority” even when the original data doesn’t mark it.

The system logs every edit you make, and updates its own context layer with lessons learned along with your preferences.

System-Maintained Execution

After compounding

Weekly Review & Edits

Product Manager

Direct Skills Application

Weekly Review & Edits

Product Manager

Updating

Improves  
Subsequent  
Summaries

The self-updating knowledge loop: compounding preferences in lessons.md.

After six weeks of edits, the skill has learned your editorial judgment. The draft it produces on Week 7 needs almost no editing. By Week 12, you’re scanning the output and hitting send.

You walk in Friday morning, coffee in hand, and the system has already done two hours of work. Not busywork. Real, judgment-informed, context-aware work that you now review instead of produce.

lessons.md

```
<span># Weekly Product Update — Lessons Learned</span>
<span>Auto-generated from 6 weeks of edits. 47 corrections logged, 12 patterns identified.</span>

<span>## Editorial Preferences</span>
<span>-</span> Always remove technical implementation details from the <span>"shipped"</span> section.
  Audience is executives, not engineers.
<span>-</span> Add customer quotes when available. Direct voice &gt; paraphrased summary.
<span>-</span> Flag anything compliance-related as <span>"high priority"</span> even when source
  data doesn't mark it.
<span>-</span> When mentioning a metric, always include the comparison period.
  Raw numbers alone get ignored by leadership.

<span>## Tone</span>
<span>-</span> No jargon. If an engineer wrote it, rewrite it for an ops lead.
<span>-</span> Keep bullet points to one line. If it needs two, it's two bullets.
<span>-</span> Never use <span>"leverage,"</span> <span>"synergy,"</span> or <span>"align on."</span> Say what you mean.
<span>-</span> Lead with confidence. No hedging language (<span>"we think,"</span> <span>"it seems"</span>).
<span>-</span> Keep the total update under 400 words. If it's longer, cut.

<span>## Structure</span>
<span>-</span> Lead with what shipped, then what's next, then blockers.
<span>-</span> Customer quotes go in a callout box, not inline.
<span>-</span> Metrics always include comparison to last period.
<span>-</span> Group blockers by owner, not by project.
<span>-</span> End with one clear ask. Never more than one.

<span>## Audience-Specific Rules</span>
<span>-</span> For <span>exec-team</span>: no technical details, focus on business impact.
<span>-</span> For <span>eng-leads</span>: include PR links and deployment notes.
<span>-</span> For <span>client-facing</span>: frame everything as customer value delivered.
<span>-</span> Never send the same update to all three audiences.

<span>## Learned from Corrections</span>
<span>-</span> <span>Week 2:</span> stopped including NPS scores after user removed them 3x.
  Reason: <span>"leadership doesn't trust the sample size yet."</span>
<span>-</span> <span>Week 3:</span> started separating <span>"shipped"</span> from <span>"deployed but not released"</span>
  after user added the distinction manually twice.
<span>-</span> <span>Week 4:</span> started bolding action items after user manually bolded
  them in every edit.
<span>-</span> <span>Week 5:</span> moved <span>"hiring"</span> section to the end. User relocated it every time.
<span>-</span> <span>Week 6:</span> added compliance flag icon next to regulated items.
  User had been manually adding warning emoji.
<span>-</span> <span>Week 7:</span> draft required zero edits for the first time.

<span>## Auto-Improvements Pending Review</span>
<span>-</span> Detected pattern: user always moves <span>"design updates"</span> above
  <span>"engineering updates."</span> Proposing reorder. <span>[awaiting approval]</span>
<span>-</span> Detected pattern: customer quotes longer than 2 sentences get
  trimmed. Auto-truncating to 2 sentences. <span>[approved week 6]</span>
<span>-</span> Detected pattern: blockers older than 2 weeks get de-emphasized.
  Moving to <span>"ongoing"</span> section. <span>[approved week 7]</span>
```

## Layer 2: Organizational Coordination

Here’s where it gets interesting – and where most companies risk stalling.

You have ten people on your product team. Six of them are now individually productive with AI. They’re generating more, shipping faster, thinking bigger.

And the output is chaos.

More PRDs than anyone can review. More prototypes than anyone can test. More code shipped than QA can validate. More ideas generated in a brainstorm than anyone can prioritize. The standup that used to be a 15-minute status check is now a 45-minute negotiation about which of the seventeen things that got built yesterday should actually go to production.

George Sivulka, founder of Hebbia and author of [one of the most important essays of 2026](http://hebbia.com/blog/productive-individuals-dont-make-productive-firms), called this out directly:

“Productive individuals do not make productive firms.”

He’s right. And the reason is coordination.

The coordination layer is the largest unseen cost in every technology organization. It’s the meetings. The notes. The docs. The status updates. The Slack threads. The “hey, did you see my comment on that ticket?” The “I thought you were handling that.” The “wait, which version are we talking about?”

This is the largest language workload inside enterprises. And AI is unusually good at structuring this mess.

But – and this is the part nobody wants to hear – AI can’t fix coordination if the process it’s coordinating is broken. You can’t automate a sprint planning meeting that shouldn’t exist. You can’t use AI to write better status updates if status updates are the wrong mechanism.

This is the jet engine on the rowboat problem. Your team got fast. Your process didn’t.

The organizations that figure this out share three characteristics:

1. Shared memory, not tribal memory.

Everything that matters – decisions, context, customer feedback, the reason that feature was killed six months ago – lives in a searchable, structured system. Not in someone’s head. Not in a Slack thread from February. In a place that any person (or any AI) can access, instantly.

2. The coordination layer is automated, not managed.

Meeting notes are generated, structured, and distributed without a human doing it. Action items are extracted and tracked automatically. When someone asks “what did we decide about the pricing page?” – the system answers in seconds, with the source, the date, and the context.

3. Gains are reusable and compounding.

When one person on your team figures out a better way to write user stories, that improvement doesn’t stay trapped in their personal workflow. It becomes a skill – a reusable, documented, evolving process – that the entire team benefits from. The organization learns, not just the individual.

## Layer 3: Strategic Differentiation

When everyone’s fast, what makes you different?

This is the layer that is furthest from everybody’s mind but it’s coming faster than anyone expects.

Here’s the question that will define the next two years: In a world where anyone can build anything, what’s the advantage that matters?

If your competitor can prototype as fast as you, ship as fast as you, generate as many ideas as you – what’s left?

Three things.

1. Judgment.

Knowing which of the thirty prototypes to kill and which to bet on. This is taste. This is experience. This is the accumulated instinct that comes from watching users interact with products for years. AI generates options. Humans choose. The quality of the choosing becomes the entire game.

2. Signal.

The ability to find the one insight in a mountain of data that changes the trajectory of the product. AI generates noise at an exponential rate. The people and organizations that can cut through it – who know where to look, what to ignore, what to amplify – will compound their advantage.

3. Relationships.

AI cannot sit across from your most important customer and read the micro-expression that tells you they hate the new feature but are too polite to say it. AI cannot build the trust that makes a partner choose you over a technically identical competitor. The human layer of business – empathy, presence, the ability to make someone feel heard – becomes more valuable precisely because everything else gets automated.

The companies that win won’t be the ones that adopted AI first. They’ll be the ones that asked the hardest question first: now that we’re fast, where do we actually need to go?

## TL;DR the sequence matters

You can’t skip a layer. We’ve watched teams try.

Companies that jump to Layer 3 without Layer 1 end up with leadership asking “what’s our AI differentiation?” while their team still uses ChatGPT to rewrite emails.

Companies that jump to Layer 2 without Layer 1 buy expensive “enterprise AI” platforms that nobody uses because nobody has the individual fluency to know what the platform should do.

And companies that stay at Layer 1 forever – where every individual is productive but nothing compounds – end up with the chaos described above. Fast individuals rowing in different directions. A lot of motion. No progress.

The sequence is the playbook. Individual leverage first. Organizational coordination second. Strategic differentiation third.

Now let’s get specific.

## Chapter III

## 10x Starts Here

If you read one chapter of this guide and close it, make it this one.

Everything that follows – the organizational coordination, the knowledge layer, the strategic questions – depends on you having the individual foundation in place. This chapter is that foundation. Specific tools. Specific configurations. In the order you should set them up.

No “consider your options.” No “it depends on your use case.” Here’s the stack. Here’s why. Here’s what to do today.

## The core setup

You need three things. Not twelve. Not whichever thirty tools launched on Product Hunt this week. Three.

1. A reasoning partner.

This is the AI you think with. The one you have open all day, in a tab or a desktop app, that you talk to about your work. This guide uses Claude as the reference throughout – it’s what we use daily and know best. If you’re on GPT, Gemini, or something else, the principles are the same; the specific features (CLAUDE.md, MCP, Projects) have equivalents in every major platform. Use what your company provides or what you’re most comfortable with.

That said, we recommend [Claude](https://claude.com/pricing) (claude.ai or the desktop app). Not because it’s objectively better at everything – it’s not – but because it’s the best at the kind of work knowledge workers actually do: writing, analysis, strategy, synthesis, reviewing documents, drafting plans, thinking through trade-offs.

If your company has a Claude Team or Enterprise subscription, use that. If you’re on your own, Claude Pro is $20/month. It’s the single highest-ROI subscription in technology right now.

What to do with it: Open it at the start of every workday. Before you write a PRD, talk through the product problem with Claude first. Before you prepare for a meeting, give it the context and ask it to identify the three things most likely to come up. Before you write an email that matters, draft it with Claude and ask it to find the weak points in your argument. The habit matters more than the technique. Make it reflexive.

2. A research engine.

This is the AI that goes and finds things for you. Different job than the reasoning partner. Use [Perplexity](https://perplexity.ai/) (perplexity.ai). It’s a search engine rebuilt around AI – you ask a question in natural language, it searches the web, reads the sources, synthesizes an answer, and cites everything. No more opening ten tabs and skimming.

The Pro tier $20/month is worth it for the deeper research mode, which runs multiple searches, follows threads, and produces structured reports. The free tier is fine for quick lookups.

3. An operator.

This is the AI that does things – writes code, builds prototypes, automates tasks, works across your files. If you’re technical (or learning), use [Claude Code](https://anthropic.com/product/claude-code) – Anthropic’s command-line agent. It reads your entire project, understands the architecture, and executes multi-step tasks. It’s the tool that turned “I have an idea” into “I have a working prototype” in the time it takes to eat lunch.

If you’re not technical, this is the layer where the most change is happening. Tools like [Cursor](https://cursor.com/), [Replit Agent](https://replit.com/products/agent), and others are making it possible for product managers and designers to build working software without writing code. The category is moving fast, but the principle is stable: you should have a tool that can execute, not just advise.

Total cost: $40–60/month. Total impact: 5–10x your output.

## The file that changes everything

Here’s something most people don’t know, and it’s one of the highest-leverage things you’ll learn in this entire guide.

You can give your AI a permanent instruction set.

In Claude, it’s called a “CLAUDE.md” file – a markdown document that sits in your project directory and is automatically loaded every time you start a session. It contains everything: who you are, how you work, what you’re building, what decisions have been made, what to never do, what to always do.

Think of it as hiring an employee and handing them a 30-page onboarding doc on their first day. Except this employee reads it instantly, remembers it perfectly, and follows it precisely.

This is the single biggest differentiator between people who say “AI is useful sometimes” and people who say “AI is my most productive collaborator.” The difference isn’t the model. It’s the context.

Here’s what goes in the file:

**Who you are and what you’re building.** Not your life story. The context that shapes every response. “I’m a product manager at a healthcare SaaS company. We build patient scheduling software for large hospital systems. Our users are front-desk staff, not doctors.”

**Your tech stack and decisions.** What’s been decided, so AI doesn’t waste time suggesting alternatives. “We use React, TypeScript, and PostgreSQL. Don’t suggest switching to Vue.”

**Your communication preferences.** How you want AI to talk to you. “Be concise. Lead with the recommendation. Give me the reasoning only if I ask.”

**Your workflow rules.** The things that should always happen. “When I share a meeting transcript, extract action items, decisions made, and open questions.”

**What not to do.** The guardrails. “Never commit code without running tests. Never suggest we change the database schema without flagging it as a major decision.”

This file evolves. You add to it every week as you learn what works. It’s a living document – your working relationship with AI, encoded as text. And because it’s text, it’s shareable. When someone on your team asks “how do you get such good results from Claude?” – you send them your file.

## MCP: Giving AI hands

There’s one more piece of the setup that separates the hobbyist from the practitioner. It’s called [MCP](https://anthropic.com/news/model-context-protocol) – Model Context Protocol – and it’s the reason some people’s AI can do things yours can’t.

MCP is a standard (released by Anthropic, now adopted broadly) that lets AI connect to external tools and data sources. Think of it as USB ports for AI. Without MCP, your AI can only work with what you paste into the chat. With MCP, your AI can reach into your database, your design files, your Google Drive, your CRM, your calendar – anything that has an MCP connector.

The practical impact is enormous. Instead of copying a table from your database, pasting it into Claude, and asking a question – you just ask the question. Claude queries the database directly, through MCP, and answers based on live data.

This is what people mean when they talk about AI moving from “chat” to “work.” MCP is the plumbing that makes it possible.

## The Monday morning sequence

You’ve read enough theory. Here’s exactly what to do when you sit down Monday morning:

1. Sign up for Claude Pro.

$20/month if you don’t have it. If your company has a Team plan, use that instead.

2. Create your CLAUDE.md file.

Start with three sections: who you are, what you’re building, and how you like to communicate. Five paragraphs is enough to start.

3. Take your first real task.

Not a toy problem, a real thing on your plate today – and work through it with Claude.

4. Notice what happens.

Not just the time saved. Notice the quality. Notice where it drifts and needs correction. That correction is data – add it to your CLAUDE.md file.

5. Do it again tomorrow.

And the day after. The compound effect kicks in around week two.

Total investment: $40/month, one hour of setup, one week of building the habit. Total return: the rest of your career.

## Chapter IV

## Your Job Is a Bundle of Functions

There’s a running joke that there’s no time for real work during work hours. It all gets done early in the morning or late at night.

Think about what that means.

The hours you protect, the ones where you actually think and solve problems nobody else sees – those are the judgment hours. Everything in between is function work: repeatable, pattern-based, and now automatable.

Every role is a mix of the two. The ratio between them determines how much of your job survives the next eighteen months.

Your ratioAfter AI

Time

Tasks

Judgment bookends every workflow. Function work fills the middle.

## Function work vs. judgment work

A function is any task that follows a pattern. It might be complex, it might require expertise, and it might take years of training to learn. But if you could write down the steps, if someone with the right instructions could reproduce your output, it’s a function. Reviewing a design against brand guidelines is a function. Translating a strategy doc into a project plan is a function. Writing a status update is a function. These aren’t trivial tasks. They require skill. But they follow a pattern, and patterns are exactly what AI is built to handle.

Judgment is different. Judgment is knowing which design direction to pursue when both options are good. It’s sensing that a client is losing confidence before they say anything. It’s deciding to kill a feature that tested well because it doesn’t fit the product’s identity. Judgment can’t be reduced to steps because it depends on context, taste, and experience that shifts with every situation. You can’t write a checklist for it.

Every role has a ratio. Some roles are 80% function, 20% judgment. Some are the reverse. A junior designer might be 90% function work, following templates and executing briefs. A design director might be 30% function, 70% judgment, spending most of their time making decisions that shape the entire product.

The point isn’t that one is better than the other. The point is that the function percentage of your role is now under pressure in a way it wasn’t twelve months ago.

## Figure out your ratio

So what does this mean for you personally? Figure out your ratio.

Look at your last week and sort your tasks into two buckets: the ones that followed a pattern and the ones that required you to make a call nobody else could have made.

Be honest. Most people overestimate how much judgment their day contains because it feels better to believe everything you do is irreplaceable. It’s not. And that’s okay, because once you see the ratio clearly, you can start shifting it. Drop the functions. Automate them, delegate them to AI, or stop doing them entirely. Spend that time on the judgment work – the stuff that compounds, the stuff that actually moves the needle.

## Hiring for judgment

For companies, it means hiring changes. If you’re hiring for functions, you’re hiring for work that AI handles within the year. Hire for judgment instead. Hire the person who makes the room smarter, who spots the problem before it becomes a crisis, who knows when to say no. These people were always valuable but now they’re the only ones who are irreplaceable.

This has a hard implication for junior roles. If entry-level work was mostly function work – and it was – then the traditional career ladder has a gap in its first rung. The path from junior to senior used to run through years of function work that built intuition over time. That path is compressing. Junior people now need to develop judgment faster, with less repetition to learn from. The organizations that figure out how to grow judgment in their junior people – through mentorship, exposure to decisions, and real responsibility early – will have a talent advantage that compounds for years.

> The two hours of real work you protect every day, the ones before or after the meetings? That’s your judgment time. AI just made the other six hours optional.

April Session Ended

### See how AI-native teams actually work.

60 minutes. Live demo. Leave with a concrete plan for your team.

## Chapter V

## The Death of Prompt Engineering

The term “prompt engineering” was useful for about eighteen months. It described a real skill.

The ability to communicate clearly with language models to get good results. Prompting well meant being specific, providing context, using examples, iterating on phrasing. But calling it “engineering” always overstated the case. Prompting is communication. Important, yes. But temporary in its current form.

Here’s what replaced it: _skills._

![Neo downloading a new skill](https://www.latecheckout.agency/_next/image?url=https%3A%2F%2Flrjaskssucebsfmpsngx.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2Fai-field-guide%2Fillustrations%2Fneo.gif&w=1080&q=75)

Neo downloading a new skill.

## What a skill actually is

A skill is a reusable, documented, evolving set of instructions that tells AI how to do a specific job. Not a single prompt. Not a clever one-liner. A complete workflow – with context, steps, decision logic, output format, and guardrails – that you build once and improve over time.

Think of the difference this way:

A prompt: “Write me a competitive analysis of Slack vs. Teams.”

A skill: “When I say ‘competitive analysis,’ follow this process: (1) Identify the two products being compared. (2) Research both using Perplexity – look at pricing, feature set, recent launches, and market positioning. (3) Structure the analysis as: Executive Summary, Feature Comparison Table, Pricing Comparison, Strategic Positioning, Recommendation. (4) In the recommendation, always consider our context – we’re a 200-person healthcare company with strict HIPAA requirements. (5) Flag any areas where the information is uncertain or rapidly changing. (6) Save the output to our competitive-intel folder with today’s date.”

The prompt gets you one output. The skill gets you a process – repeatable, improvable, shareable across your team.

## Why this matters more than it sounds

Skills are how tacit knowledge becomes organizational knowledge.

Right now, the best people on your team carry enormous amounts of context in their heads. The senior PM who knows exactly what questions to ask in a customer interview. The lead designer who can look at a mockup and instantly identify the three things that feel “off.” The architect who knows which parts of the codebase are fragile and which are safe to refactor.

That knowledge is locked in their heads. When they leave – or when they’re just busy, or on vacation, or in a different time zone – it’s gone.

Skills extract that knowledge and make it executable.

The senior PM writes a skill for customer interviews: here’s the framework, here’s what to listen for, here’s how to score responses, here’s what a good interview summary looks like. Now anyone on the team (or any AI agent) can run a customer interview prep that’s 80% as good as the senior PM’s.

This is what process engineering means in the AI era. Not flowcharts. Not documentation nobody reads. Living instructions that AI executes and improves over time.

![LCA Skills Marketplace](https://www.latecheckout.agency/_next/image?url=https%3A%2F%2Flrjaskssucebsfmpsngx.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2Fai-field-guide%2Fillustrations%2Flca-skills-screenshot.png&w=3840&q=75)

A skill marketplace every employee can browse, load, and contribute to.

## The three levels of skill maturity

**L1: Personal shortcut.** You have a set of instructions in your CLAUDE.md that handles a recurring task. “When I paste a meeting transcript, extract action items.” It’s useful. It saves you time. It’s yours.

**L2: Team standard.** You’ve shared the skill with your team. It lives in a shared repository. Everyone on the product team uses the same customer-interview skill, the same competitive-analysis skill, the same sprint-summary skill. Consistency goes up. Training time goes down.

**L3: Organizational asset.** The skill is maintained, versioned, and improved. It has a feedback loop – when someone finds an edge case, they update the skill. When the market changes, the skill adapts. It’s treated like code: reviewed, tested, and deployed. The institution gets smarter every time someone uses it.

Most people are at Level 1. Almost nobody has reached Level 3 – but the ones who do will have an unfair advantage that compounds every single day.

## How to build your first skill

Start with the task you do most often that follows a pattern. Not creative work – patterned work. The weekly status report. The design review checklist. The customer interview debrief. The competitive update. The sprint summary.

Here’s what a skill actually looks like. These are real – you can install them right now and start using them today.

```
<span># UI Polish Pass</span>

Run a structured two-phase visual audit across any codebase — then apply approved fixes.
Phase 1 audits and waits for scope approval. Phase 2 implements. Never touches logic, only style.

<span>## Process</span>

<span>1.</span> <span>Identify the project.</span> Read $ARGUMENTS or ask which project.
   Read the project's claude.md and client's claude.md to understand what NOT to change.
<span>2.</span> <span>Scan the codebase.</span> Find all CSS/module files, token files, globals, and component files.
<span>3.</span> <span>Run the audit.</span> For each of the 10 categories below, scan relevant files.
   Output: <span>[CATEGORY] File: path/to/file — Line: XX</span>
   <span>Problem: &lt;what's wrong&gt; | Fix: &lt;what to do&gt; | Priority: HIGH / MEDIUM / LOW</span>
<span>4.</span> <span>Present the full audit report</span> grouped by priority. Do not write any code yet.
<span>5.</span> <span>Wait for approval.</span> Ask which priorities to implement.
<span>6.</span> <span>Token consolidation first.</span> Add/update token files before touching component files.
<span>7.</span> <span>Apply approved fixes.</span> State the file and reason, make the edit, note cascading files.
<span>8.</span> <span>Verify visually.</span> Use preview_screenshot, preview_inspect, and preview_snapshot.
<span>9.</span> <span>Reduced-motion check.</span> Confirm all new animations follow the guard pattern.
<span>10.</span> <span>Report skipped items.</span> Report what was intentionally left out and why.

<span>## Audit Categories</span>

<span>1.</span> <span>Design Tokens</span> — Hardcoded hex values, magic pixel sizes, arbitrary z-index,
   ad-hoc box-shadow, off-scale spacing. Flag if no central token file exists <span>(HIGH)</span>.
<span>2.</span> <span>Typography</span> — Body font below 16px, line-height outside 1.4–1.8, unconstrained
   line lengths (optimal: 60–75ch), headings missing text-wrap: balance.
<span>3.</span> <span>Color &amp; Contrast</span> — Text below WCAG AA (4.5:1 normal, 3:1 large text),
   too-light placeholders, inconsistent accent color usage.
<span>4.</span> <span>Spacing &amp; Layout</span> — Values not on 4px scale, broken concentric border-radius,
   touch targets below 44×44px, text containers without max-width.
<span>5.</span> <span>Transitions &amp; Animations</span> — transition: all (performance antipattern),
   durations above 400ms, no easing function, animating width/height/margin.
<span>6.</span> <span>Accessibility &amp; Motion</span> — No prefers-reduced-motion guard,
   missing :focus-visible, missing cursor: pointer on clickable non-buttons.
<span>7.</span> <span>Loading &amp; Feedback</span> — Full-page spinners where skeletons work,
   buttons with no loading/disabled state during async actions.
<span>8.</span> <span>Micro-interactions</span> — Clickable elements with no hover feedback,
   dropdowns/modals that appear instantly with no animation.
<span>9.</span> <span>Shadows &amp; Depth</span> — Single-layer flat shadows, no elevation differentiation,
   missing hover shadow deepening on interactive cards.
<span>10.</span> <span>Scrolling &amp; Page-Level</span> — Missing scroll-behavior: smooth,
   unstyled scrollbars, sticky headers with no backdrop-filter: blur().

<span>## Guardrails</span>

<span>-</span> Check project philosophy first. Flat/brutalist designs should not receive
  hover lifts, deep shadows, or scroll-linked entrances.
<span>-</span> CSS Modules keyframe scoping — critical gotcha. Always define @keyframes
  locally inside the same .module.css file that references them.
<span>-</span> animation-fill-mode: both on all entrance animations.
<span>-</span> Opacity-only card cascades. Prefer pure opacity: 0 → 1 over opacity + translateY.
<span>-</span> Hover states on dense list items. Background color change only.
<span>-</span> Reduced-motion pattern — always provide a fallback, not just a guard.
<span>-</span> Transition scope — always specific, never <span>all</span>.

<span>## Rules</span>

<span>-</span> Only change visual/style code — never component logic, props, or data flow
<span>-</span> Always read project claude.md before auditing
<span>-</span> Present the full audit and wait for scope approval before writing any code
<span>-</span> Token changes always go before component changes
<span>-</span> Animate only <span>transform</span> and <span>opacity</span> — never width, height, top, left, or margin
<span>-</span> Specify exact transition properties — never transition: all
<span>-</span> @keyframes must be defined locally in each .module.css file
<span>-</span> All new animations require a prefers-reduced-motion: reduce fallback
<span>-</span> Mark philosophy conflicts as <span>SKIP — [reason]</span> in the audit

<span>## Verification</span>

<span>1.</span> preview_screenshot the main surface — share with the user
<span>2.</span> preview_inspect computed styles on changed elements
<span>3.</span> Spot-check animations via getComputedStyle(el).animationName
<span>4.</span> Toggle macOS Reduce Motion — confirm animation fallbacks fire
<span>5.</span> Tab through the page — confirm :focus-visible rings appear
```

Encode your quality bar

```
<span># Frontend Handover</span>

Prepare this frontend codebase for a development team who will connect it to a real backend. The goal: any competent developer or AI agent can open this project and know exactly what it does, how it's structured, what needs wiring, and what the backend must provide — without asking a single question.

Work through all phases <span>in order</span>. Complete each phase fully before moving to the next. After each phase, output a brief summary of what was done. If <span>$ARGUMENTS</span> contains <span>--skip &lt;N&gt;</span>, skip that phase and note it in the final summary. If <span>$ARGUMENTS</span> contains <span>--only &lt;N&gt;</span>, run only that phase (useful for re-running a single phase after fixes).

<span>Before starting:</span> Recommend the user commit or stash any uncommitted changes first, so the entire handover can be reverted cleanly if needed. If there are no uncommitted changes, proceed immediately.

<span>---</span>

<span>## PHASE 0 — CONTEXT CHECK</span>

Before touching anything:

<span>1.</span> Check if a <span>CLAUDE.md</span> exists at the project root. If so, read it — it may contain decisions and conventions to preserve.
<span>2.</span> Check if <span>.claude/docs/</span> exists and already contains <span>architecture.md</span>, <span>wiring-guide.md</span>, or <span>api-contracts.md</span>. If any exist, <span>stop and ask</span> whether to overwrite or update them before proceeding.
<span>3.</span> Detect the framework (Next.js, Vite, Remix, CRA, etc.) and note it — some later phases are framework-specific.
<span>4.</span> <span>Monorepo check:</span> If the project root contains a <span>turbo.json</span>, <span>nx.json</span>, <span>pnpm-workspace.yaml</span>, or a <span>packages/</span>/<span>apps/</span> directory, ask the user which package or app to target. Scope all subsequent phases to that package.
<span>5.</span> Report: what exists, what will be created, what will be extended.

<span>---</span>

<span>## PHASE 1 — MAP THE CODEBASE → <span>architecture.md</span></span>

<span>Goal:</span> Understand everything before touching anything. Do not make any edits in this phase.

<span>Important:</span> If the project has fewer than ~30 component/page files, you may read them directly. For larger projects, launch a single Explore subagent with a broad sweep mandate to map the entire codebase. Do not read 30+ files sequentially in the main context — it floods the window. The agent should return a comprehensive map covering all items below; use that map to write <span>architecture.md</span>.

Have the agent identify and catalogue:
<span>-</span> Every page/route
<span>-</span> Every component (stateful vs presentational, and whether it contains dummy data)
<span>-</span> Every place data is hardcoded, mocked, or faked (arrays, objects, constants, dummy JSON)
<span>-</span> Every fake loading state (setTimeout, hardcoded <span>isLoading: true</span>, skeleton screens with no real trigger)
<span>-</span> Every place an API call should exist but doesn't
<span>-</span> Every environment variable referenced or that should be referenced
<span>-</span> The state management approach (local state, context, Zustand, Redux, URL params, etc.)
<span>-</span> Third-party packages in use (from <span>package.json</span>)

Then produce <span>.claude/docs/architecture.md</span> with these sections:
<span>-</span> <span>Project Overview</span> — what the app does, key user flows, current status
<span>-</span> <span>Tech Stack</span> — framework, styling, state management, routing, key libraries + versions
<span>-</span> <span>Directory Structure</span> — annotated tree showing what each folder/file does
<span>-</span> <span>Component Map</span> — every component, its purpose, its props (if discernible), and whether it contains dummy data
<span>-</span> <span>State Management Summary</span> — how state flows through the app, what's local vs shared vs URL
<span>-</span> <span>Route Map</span> — every route/page, what it renders, what data it needs
<span>-</span> <span>All Dummy Data Locations</span> — exhaustive list of every file and line range where fake/mocked data lives
<span>-</span> <span>All Fake Loading State Locations</span> — every fake loading trigger

Output a summary of everything discovered before moving to Phase 2.

<span>---</span>

<span>## PHASE 2 — WIRING GUIDE + API CONTRACTS</span>

<span>Goal:</span> Give the integrating developer a complete integration specification.

Create <span>.claude/docs/</span> if it doesn't exist. Produce two files:

<span>### File 1: <span>.claude/docs/wiring-guide.md</span></span>

<span>-</span> <span>Introduction</span> — what this file is and how to use it
<span>-</span> <span>Integration Checklist</span> — <span>- [ ]</span> checkbox per integration task, grouped by page/feature. Each item: what needs wiring, which file and component, what the current dummy impl does, what the real impl should do, any dependencies (e.g. "auth must be wired first")
<span>-</span> <span>Environment Variables Required</span> — every env var needed, with description and example value
<span>-</span> <span>State Management Notes</span> — anything backend wiring will affect in terms of state architecture
<span>-</span> <span>Error States</span> — note anywhere error state UI exists or should exist but doesn't
<span>-</span> <span>Known Gaps</span> — anything intentionally left out of the frontend

Note: for Next.js projects, <span>robots.txt</span> belongs in <span>public/</span>. For Vite/Remix/static sites, it belongs at project root. Record this in the deployment notes section.

<span>### File 2: <span>.claude/docs/api-contracts.md</span></span>

<span>-</span> <span>Introduction</span> — what this document is, how it was derived from the frontend
<span>-</span> <span>Data Models</span> — every TypeScript interface or data shape used in the app (derive from dummy data if no types exist), as TypeScript interfaces with comments on each field
<span>-</span> <span>Required Endpoints</span> — for every integration point: suggested endpoint name, purpose, request shape, expected response shape, current dummy data it replaces (with example), pagination/filtering the UI already supports, auth requirements
<span>-</span> <span>Authentication &amp; Authorisation</span> — what the frontend expects (JWT in header, cookie-based, etc.)
<span>-</span> <span>Real-time / WebSocket Requirements</span> — any UI suggesting real-time data

Output a summary of both files before moving to Phase 3.
```

Ship a codebase any dev can pick up

```
<span># Flowviz</span>

Generate a self-contained interactive HTML/CSS visualization that maps product specs into navigable, visual flows.

<span>## When to Use</span>

<span>-</span> When Paul provides a product spec and wants to see the user flows mapped out visually
<span>-</span> When Paul asks to "build a viz", "visualize this flow", "show me the states", or "map out the flow"
<span>-</span> When Paul wants to communicate design flows to stakeholders or developers
<span>-</span> When Paul needs an interactive prototype to walk through states and transitions

<span>## Default: Step-Through Walkthrough</span>

Unless Paul specifies otherwise, build a <span>step-through walkthrough</span>:
<span>-</span> Forward/back navigation controls
<span>-</span> State counter ("Step 3 of 8")
<span>-</span> Each step shows the screen state with annotations
<span>-</span> Copyable text sections so Paul can paste content into Figma
<span>-</span> Phone-frame viewport (375px width)
<span>-</span> Animated transitions between states

<span>## Other Formats (when specified)</span>

<span>Comparison view:</span> Side-by-side or tabbed view of design options.
<span>-</span> Tab bar to switch between options (mobile) or side-by-side columns (desktop)
<span>-</span> Each option rendered in its own phone frame
<span>-</span> Shared annotation area highlighting differences between options
<span>-</span> Pros/cons summary for each option
<span>-</span> Use color-coded borders to distinguish options (e.g. blue vs green)

<span>Flow diagram:</span> Interactive flow showing paths through an experience.
<span>-</span> Clickable flow nodes arranged vertically or as a tree
<span>-</span> Clicking a node expands it to show the screen state in a phone frame
<span>-</span> Multiple paths visualized with color coding
<span>-</span> Current path highlighted, others dimmed
<span>-</span> Breadcrumb trail showing the selected path

<span>## Step 0 — Check for Client Design System</span>

If a client context is loaded (a client CLAUDE.md is available from the current session), determine the client name and attempt:

<span></span>`
Read: Clients/{client-name}/design-system/design-system.md
<span></span>`

<span>-</span> <span>If found:</span> Load it as the primary style reference. Use its CSS token names and component patterns for all generated HTML. Reference the client's CSS file (<span>{client-slug}.css</span>) instead of generic inline styles.
<span>-</span> <span>If not found:</span> Proceed with generic styling. At the end of the output, append:

<span></span>`
💡 No design system found for {Client}.
   Run /design-system to create one — future visualizations will automatically use it.
<span></span>`

<span>---</span>

<span>## Process</span>

<span>1.</span> Read the spec or concept being visualized (from <span>$ARGUMENTS</span> or ask Paul)
<span>2.</span> Read the project's claude.md for design decisions and constraints
<span>3.</span> Read the client's claude.md for brand/tone constraints
<span>4.</span> Check <span>_Shared/visualization-base/</span> for reusable CSS patterns (skip if the directory doesn't exist)
<span>5.</span> Create <span>Build/{viz-name}/</span> folder within the project
<span>6.</span> Generate the HTML file (single file with embedded CSS/JS when possible)
<span>7.</span> If the file exceeds ~500 lines, split into index.html + styles.css
<span>8.</span> Open the result in the browser: <span>open Build/{viz-name}/index.html</span>

<span>## Output Structure</span>

<span></span>`
Build/{viz-name}/
├── index.html      # The visualization (main file)
├── styles.css      # Only if HTML file exceeds ~500 lines
<span></span>`

<span>## Technical Guidelines</span>

<span>-</span> <span>Single file preferred.</span> Inline CSS and minimal JS in one HTML file when possible.
<span>-</span> <span>No build tools.</span> Must open directly in browser via file:// protocol.
<span>-</span> <span>Mobile-first.</span> Design for 375px phone viewport, wrapped in a phone frame for desktop viewing.
<span>-</span> <span>Interaction over static.</span> Include state transitions, click interactions, scroll behaviors.
<span>-</span> <span>Copyable text.</span> Mark text sections that Paul will copy into Figma with a visual indicator (subtle border, click-to-copy).
<span>-</span> <span>CSS transitions</span> for state changes: <span>transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)</span>
<span>-</span> <span>Data attributes</span> for state management: <span>[data-state="triage"]</span>, <span>[data-step="3"]</span>
<span>-</span> <span>No external dependencies.</span> No CDN links, no Google Fonts URLs, no framework imports.

<span>## Reference Patterns</span>

<span>### Phone Frame</span>

<span></span>`css
.phone-frame {
  width: 375px;
  height: 812px;
  border-radius: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #fff;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  border: 8px solid #1a1a1a;
  position: relative;
}
<span></span>`

<span>### Step-Through Walkthrough Structure</span>

<span></span>`html
&lt;div class="walkthrough"&gt;
  &lt;div class="phone-frame"&gt;
    &lt;div class="screen" data-step="1"&gt; ... &lt;/div&gt;
    &lt;div class="screen" data-step="2"&gt; ... &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="controls"&gt;
    &lt;button class="prev"&gt;Back&lt;/button&gt;
    &lt;span class="step-counter"&gt;Step 1 of 8&lt;/span&gt;
    &lt;button class="next"&gt;Next&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="annotations"&gt;
    &lt;div class="annotation" data-step="1"&gt;
      &lt;h3&gt;State description&lt;/h3&gt;
      &lt;p&gt;What's happening and why&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
<span></span>`

<span>### State Management (Vanilla JS)</span>

<span></span>`javascript
let currentStep = 1;
const totalSteps = document.querySelectorAll('.screen').length;

function goToStep(n) {
  if (n &lt; 1 || n &gt; totalSteps) return;
  document.querySelectorAll('.screen, .annotation').forEach(el =&gt; {
    el.classList.toggle('active', parseInt(el.dataset.step) === n);
  });
  currentStep = n;
  updateCounter();
}

// Keyboard navigation
document.addEventListener('keydown', (e) =&gt; {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goToStep(currentStep + 1);
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goToStep(currentStep - 1);
});
<span></span>`

<span>### CSS State Transitions</span>

<span></span>`css
.screen {
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.screen.active {
  display: block;
  opacity: 1;
}
<span></span>`

<span>### Copyable Text Sections</span>

<span></span>`css
.copyable {
  position: relative;
  border-left: 3px solid #e5e5e5;
  padding-left: 12px;
  cursor: pointer;
}
.copyable:hover {
  border-left-color: #3b82f6;
  background: #f8fafc;
}
.copyable::after {
  content: 'Click to copy';
  position: absolute;
  right: 8px;
  top: 4px;
  font-size: 11px;
  color: #94a3b8;
  opacity: 0;
  transition: opacity 0.2s;
}
.copyable:hover::after { opacity: 1; }
.copyable.copied::after {
  content: 'Copied!';
  opacity: 1;
  color: var(--success, #22c55e);
}
<span></span>`

<span>### Copy-to-Clipboard JS</span>

<span></span>`javascript
document.querySelectorAll('.copyable').forEach(el =&gt; {
  el.addEventListener('click', () =&gt; {
    navigator.clipboard.writeText(el.innerText).then(() =&gt; {
      el.classList.add('copied');
      setTimeout(() =&gt; el.classList.remove('copied'), 1500);
    });
  });
});
<span></span>`

<span>### Responsive Layout</span>

<span></span>`css
.walkthrough {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}
@media (min-width: 768px) {
  .walkthrough {
    grid-template-columns: 375px 1fr;
  }
}
<span></span>`

<span>### Color Variables</span>

Use the project's design tokens if they exist. Fall back to these defaults:

<span></span>`css
:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --text: #1a1a1a;
  --text-secondary: #64748b;
  --border: #e2e8f0;
  --accent: #3b82f6;
  --accent-light: #eff6ff;
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
}
<span></span>`

<span>## Rules</span>

<span>-</span> This is a design communication tool, not production code
<span>-</span> Fidelity should be high enough to communicate intent clearly
<span>-</span> Always use real content from the spec, not lorem ipsum or placeholder text
<span>-</span> Include enough real content that Paul can copy it into Figma
<span>-</span> Respect all brand constraints from the client claude.md (no em dashes, correct terminology, etc.)
<span>-</span> Keep the HTML clean enough that Paul can inspect elements to grab content
```

Turn specs into interactive flow visualizations

The skill doesn’t need to be perfect on day one. Write it, use it, notice where it breaks, fix it. The iteration is the value. A skill that’s been through ten revision cycles is worth ten times more than a clever prompt someone wrote once and never updated.

## What this means for your career

Your value used to be what you could do. Your hands. Your hours. Your output.

Your value is now what you can encode. Your judgment. Your pattern recognition. Your hard-won knowledge about what works and what doesn’t – captured in a format that scales beyond you.

The PM who can build a library of skills for product discovery, competitive analysis, user research synthesis, and go-to-market planning isn’t just productive. They’re leveraged. They’ve turned their decade of experience into a reusable asset. They’ve made their own expertise compound.

This is the new source code. Not Python. Not JavaScript. The instructions that tell AI how to do your job, written by the person who actually knows how.

## Chapter VI

## Set It Up Once. Watch It Get Smarter.

Most people think of AI as a static tool. You open it. You ask a question. You get an answer. You close it.

That’s Level 1. And it’s where 95% of professionals are stuck.

The leap – the one that separates people who “use AI” from people who run AI systems – is understanding that the best setups improve themselves. They learn from usage. They accumulate context. They get better every week without you touching them.

This isn’t science fiction. It’s the difference between a notebook and a garden. A notebook holds what you put in it. A garden grows.

## The three levels of AI systems

**Static:** You ask, it answers. Each conversation starts from zero. This is ChatGPT in a browser with no memory, no context, no history. It’s useful. It’s also a treadmill – you run every day but never move forward.

**Configured:** You’ve given AI persistent context – a CLAUDE.md file, project files, a knowledge base. Each conversation starts from a foundation. This is dramatically better. But the foundation only changes when you change it.

**Compound:** The system updates itself. When you correct AI’s output, the correction gets captured. When you make a decision, the decision gets logged. When a new pattern emerges from your work, the system notices and adapts. You don’t maintain it. It maintains itself. And every interaction makes the next one better.

## How compound systems work in practice

You’re a product manager. Every Friday, you write a weekly summary of what your team shipped, what’s blocked, and what’s coming next. You’ve built a skill for this – it reads the week’s meeting notes, pull request summaries, and Slack highlights, then generates a structured update.

In a static system, you’d paste in the raw material every Friday and prompt from scratch.

In a configured system, the skill knows your format, your audience, your priorities. It generates a good first draft that you edit.

In a compound system, the skill logs every edit you make. It notices that you always remove the technical details from the “shipped” section (your audience is executives, not engineers). It notices that you always add customer quotes when they’re available. It notices that you flag anything related to compliance as “high priority” even when the original data didn’t mark it as such.

After six weeks of edits, the skill has learned your editorial judgment. The draft it produces on Week 7 needs almost no editing. By Week 12, you’re scanning the output and hitting send.

You didn’t teach it. You just used it. The system taught itself.

## The building blocks

Three patterns make compound systems possible:

1. Persistent memory.

The system remembers what happened across sessions. Not just what you said today – what you said last month. What decisions were made in Q1. What the customer said in that interview three weeks ago.

2. Feedback capture.

When you correct the system – editing an output, rejecting a suggestion, saying “no, that’s wrong because...” – that correction is stored, categorized, and applied to future outputs. Keep a running file of lessons learned. What worked. What didn’t. What to do differently next time.

3. Automated pipelines.

Things that run without you initiating them. A nightly job that processes your meeting transcripts and updates the project context. A weekly scan that identifies patterns in customer feedback and surfaces anomalies. A daily briefing that pulls together everything that changed since yesterday. The key insight: the system should be doing work while you’re not using it.

## The overnight advantage

Imagine you’re a product lead responsible for a complex feature launch. It’s Thursday night. You close your laptop. You go home. You sleep.

While you sleep: Your research agent scans industry news and competitor updates. Your analytics pipeline processes yesterday’s user data and surfaces an anomaly. Your meeting prep agent reads tomorrow’s calendar and prepares talking points. Your weekly report skill generates a first draft of Monday’s executive update.

You walk in Friday morning, coffee in hand, and the system has already done two hours of work. Not busywork. Real, judgment-informed, context-aware work that you now review instead of produce.

## Why this matters now

The compounding is real, and it’s merciless. A person with a compound system is 20% better than you in month one. In month six, they’re 200% better. By month twelve, you can’t close the gap without building your own.

The good news: you don’t need to build everything at once. Start with one compound loop: Pick a recurring task. Build a skill for it. Add a feedback capture step. Review the feedback monthly and update the skill.

That’s it. One loop. Let it compound. Add another loop when the first one is running smoothly.

## Chapter VII

## Your Company’s Brain Is Leaking

Here’s a question that should terrify every product leader: if your best PM quit tomorrow, how much context walks out the door with them?

Not their skills. Not their relationships. Their context. The reason Feature X was killed in Q2. The customer who said she’d churn if the onboarding flow didn’t change. The architectural constraint that means the checkout can’t be refactored until after the migration. The unwritten rule that the VP of Sales needs 48 hours’ notice before any pricing changes.

That context isn’t in a document. It’s in someone’s head. And when it leaves, it’s gone.

This is the problem that no amount of individual AI productivity can solve. You can make every person on your team 10x faster, but if the organizational memory is scattered across Slack threads, Google Docs, one-on-ones that nobody transcribed, and the heads of people who were “in the room” – you have a fast team running on fragmented information.

## The largest language workload in your company

Consider the volume of language your organization produces every week: meeting transcripts, Slack messages, documents, status updates, customer feedback, decision records (if they exist at all).

This is the largest language workload inside enterprises. It’s also the most wasted. 90% of it is written once, read by a few people, and never surfaced again.

AI is unusually good at structuring this mess. It can process transcripts, extract decisions, tag themes, surface patterns, and make everything searchable in minutes. The technology isn’t the bottleneck. The practice is.

## What a knowledge layer looks like

A knowledge layer is simpler than it sounds. It’s a central, searchable repository where organizational context lives – structured so that any person (or any AI agent) can find what they need in seconds.

Three principles:

1. Text-first, not tool-first.

The most durable format for knowledge is plain text. Specifically, markdown. Not Notion databases. Not Confluence pages. Not Google Docs with complex formatting that breaks when you export them. Markdown files in a folder structure that any tool can read, any AI can process, and any developer can search.

2. Capture is automated, not manual.

If capturing knowledge requires human effort – someone taking notes, someone filing documents, someone tagging content – it won’t happen. People are busy. They’ll do it for a week, then stop. The rule is simple: if a human has to remember to do it, it’s already broken.

3. Retrieval is semantic, not hierarchical.

You shouldn’t need to know where something is filed to find it. You should be able to ask “what did we decide about the pricing model?” and get the answer – with the source, the date, the participants, and the context.

## Context is the defensible moat

[Tomasz Tunguz](https://x.com/ttunguz/status/1990168391135760499), a partner at one of the most respected enterprise VC firms, said it plainly: “A generic LLM is a commodity. Your business context is what makes your application defensible.”

The AI model you use is a commodity – Claude, GPT, Gemini, they’re all good and getting better. What makes your AI useful is the context it has access to.

Two companies using the same AI model with different context get wildly different results. The company whose AI can access every customer conversation, every product decision, every competitive insight from the last three years will get answers that feel like they came from a ten-year veteran of the company. The company whose AI starts from zero every session will get generic answers that could apply to any company in their industry.

_The knowledge layer is the competitive advantage. Not the model. The memory._

## The “who was in the room” problem

There’s a phrase that gets used in every organization, and it should be treated as a red flag: “You had to be in the room to understand.”

This means the decision, the context, the nuance of why something was decided – it all lives in the heads of the people who were physically present for a conversation. If you weren’t there, you’re operating on secondhand information at best, or completely blind at worst.

This is how organizations lose institutional memory. People leave. People get promoted. People switch teams. Every transition is a context hemorrhage.

_Memory beats intelligence. A less capable team with shared, searchable memory will outperform a more talented team that relies on who happened to be in the room._

## How to start

You don’t need a six-month project. You need one decision and one habit.

**The decision:** Pick a repository format. A folder of markdown files, organized by project, with consistent naming. The decision matters less than making it.

**The habit:** Start with meeting transcripts. Use an AI transcription tool ([Granola](https://granola.ai/), [Otter](https://otter.ai/), [Fireflies](https://fireflies.ai/), or the built-in transcription in Zoom/Teams). After every meeting, have the AI structure the transcript into: decisions made, action items, open questions, key context. File it. Make it searchable.

That’s it. One habit. Start there. In three months, you’ll have a searchable archive of every decision your team made. Then expand: customer feedback. Competitive intel. Design decisions. Code architecture decisions. Layer by layer, your organizational brain fills in.

## Chapter VIII

## Agile Is Dead. Here’s What Replaces It.

Your team is using AI. Everyone’s tinkering. Someone on your product team has a Claude subscription. A designer figured out how to generate components. An engineer ships twice as fast with copilot.

None of it compounds.

Everyone’s in single-player mode. Nobody can tell you if they’re doing it right. Nobody can show you the results. You know AI is powerful. You just can’t prove it yet.

What agile managed (and what replaced it)After AI

Time

Tasks

The middle was process. AI collapsed it.

## The bottleneck moved

Agile was built on an assumption that’s no longer true: building is the bottleneck. The entire framework – sprints, story points, backlogs, grooming – exists to manage the scarce resource of engineering time.

Engineering time is no longer scarce.

When a PM can build a working prototype before lunch, you don’t need a two-week sprint to ship it. When an agent can QA overnight, you don’t need a manual testing cycle. When AI can generate ten feature variations, you don’t need a six-person estimation meeting to pick one.

The scaffolding that once held everything together is now the thing slowing everything down.

Think about what happens when someone on your team gets good with AI. They can write a PRD in minutes. Spin up a prototype overnight. Generate ten variations of a feature before standup.

Then what?

They drop it into a sprint. It sits in a backlog. It gets story-pointed. It waits for design review, then engineering review, then QA. Two weeks later, it ships to a staging environment nobody checks.

You put a Ferrari engine into a Honda chassis. And the harder your team pushes, the more friction they feel. Not from each other. From the system around them.

**Signal is the scarce resource.** What is scarce is signal. Knowing what your customer actually needs. Understanding which of the ten things you could build this week would move the business forward. Having a clear enough picture of the problem that you’re not just building fast, you’re building right.

Without signal, speed is dangerous. A team that can ship ten features a week without knowing which ones matter will ship ten features nobody asked for. That’s not velocity. That’s waste with a better name.

This is the judgment bookends again, showing up in a different context. The beginning judgment is choosing what to build – the signal work. The end judgment is validating whether it worked, closing the loop with real users. Agile lived in the middle, managing the execution between those two ends. That middle just collapsed.

## The new trap

Teams that get good with AI hit a different problem. They build too much.

Prototypes everywhere. Fifty-six variations of a feature. A new concept every morning. The output is staggering. And none of it gets in front of a real user.

Speed without signal is just more noise.

The product teams that succeed don’t use AI to build more. They use it to learn faster. The prototype isn’t the deliverable. The customer reaction is.

## What replaces Agile

The honest answer is: the replacement is still emerging. But the patterns are clear.

1. The loop replaces the sprint.

Talk to users. Build fast. Get signal. Repeat. No sprint planning. No estimation meetings. No two-week wait to learn if you were right.

The future product manager doesn’t write PRDs. They run a community. They have office hours. They know their power users by name. They pick up the faintest signal – the offhand complaint, the workaround nobody mentioned, the feature request buried in a support ticket – and they turn it into a bet. Then AI builds it overnight. The next morning, they’re back with users, watching them try it. That’s the loop. Continuous. Not batched.

Instead of “how many points is this story” it’s “how confident are we in this hypothesis.” Instead of “can we fit this in the sprint” it’s “do we have direct access to the users who would tell us if this matters.” Instead of “what’s the priority order of the backlog” it’s “which of these bets gives us the fastest path to learning something real.”

2. Roles blend.

The line between PM, designer, and engineer dissolves. Everyone builds. Everyone tests. The differentiator isn’t your title – it’s your judgment. AI fills in the skill gaps that used to require hiring a specialist.

3. The gate gets tighter, not looser.

In a world where anyone can build anything, the standard for what makes it to production goes up. Products need to feel cohesive. Every feature needs to earn its place. Building fast is easy. Curating ruthlessly is the new skill.

In a world where anyone can spin up a competitor over a weekend, your product’s identity becomes everything. Every feature needs to ladder up to it. Every addition needs to earn its place. Feature bloat isn’t just a UX problem anymore – it’s an existential one. The moment your product stops feeling cohesive, your customers will find one that does.

4. Labs become core.

Every product company needs a place where unproven ideas get tested with real users. Not innovation theater. Not a “skunkworks” that leadership tours once a quarter. A core function. Tightly connected to a community that wants to try new things. The lab is where the loop runs fastest.

5. Direct community is infrastructure.

Direct Community is the feedback channel. The people who test your prototypes, who tell you what’s working, who give you the signal that feeds back into the loop. This isn’t a focus group you assemble quarterly. It’s an ongoing relationship with the people closest to your product. They’re in a Slack channel, a Discord, a WhatsApp group – whatever works. The point is that when you ship something to labs, you have a direct line to the people who will use it.

![Character.AI Labs](https://www.latecheckout.agency/_next/image?url=https%3A%2F%2Flrjaskssucebsfmpsngx.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2Fai-field-guide%2Fillustrations%2Fcharacter-ai-labs-screenshot.jpg&w=3840&q=75)

character.ai labs – Prototypes shipped directly to users for real-time feedback.

## Where teams get stuck

We’ve seen the same pattern five times now. Different industries, same story.

S1 Resistance.

“AI is hype.” Some team members refuse to engage. Others are afraid.

S2 Tinkering.

Individuals adopt AI tools on their own. Personal subscriptions. Isolated experiments. No shared context. No compounding.

S3 “Are we doing it right?”

The team is using AI but can’t tell if it’s working. Nobody knows what good looks like.

S4 Fast but stuck.

The team is moving fast. But they’re hitting a wall they can’t name. The wall is the process – it wasn’t designed for this speed.

S5 The new way.

Roles blended. Process rebuilt. Community connected. Signal flowing. Building and learning at the same speed.

Most teams are somewhere between Stage 2 and Stage 3. The ones who think they’re at Stage 4 are usually at Stage 3. Almost nobody has reached Stage 5.

## Chapter IX

## The Harness That Lets You Go Full Speed.

Every AI conversation in an enterprise eventually hits the same wall.

Someone on the team gets excited. They start using Claude or GPT for real work. They paste in a customer list to segment it. They upload a financial model to check the formulas. They feed in a draft contract to find the gaps.

Then someone from legal or IT walks by. And the conversation changes.

“Where does that data go?” “Who can see your prompts?” “Is that HIPAA-compliant?”

The excitement dies. The tool gets banned. Or worse – it goes underground. Shadow AI.

The harness is how you avoid this. Not by slowing down. By setting up the guardrails that let you go full speed with confidence.

## What a harness actually is

A harness is the governance layer between your team and the AI tools they use. It answers four questions:

1. What data can go where?

The most practical framework: a simple three-tier classification.

Green-tierPublic or non-sensitive data. Use any AI tool.

Yellow-tierInternal or business-sensitive data. Enterprise AI tools only, zero data retention.

Red-tierRegulated or customer data. Local AI or HIPAA/FedRAMP-certified tools only.

2. What can AI do without approval?

Some actions are safe for AI to take autonomously. Drafting a document. Summarizing a meeting. Others require a human checkpoint. Sending an email to a customer. Publishing content externally. Making a code change that touches payment processing. The harness defines the boundary.

3. How do you audit what happened?

When AI generates a recommendation that influences a business decision, there should be a trail. Enterprise AI plans from Anthropic and OpenAI include audit logging. Use it.

4. How do you keep the harness from becoming a bottleneck?

The best harnesses are self-service. The data classification is simple enough that anyone can apply it without asking permission. The approved tool list is published and updated quarterly.

> The model is what thinks. The harness is what it thinks about.

A model without a harness is a general-purpose tool answering general-purpose questions. A model with a harness understands your brand, knows your product history, references your design system, builds on your existing features, and tests with your actual users. The difference in output quality isn’t incremental. It’s the difference between “this is a decent first draft” and “this looks like it came from someone who’s been on the team for two years.”

[Rohit’s](https://x.com/rohit4verse/status/2033945654377283643) data shows this: 64% performance improvement from changing the environment alone, not the model. Two companies use the exact same AI and get wildly different results based on the harness they’ve built.

## The enterprise AI landscape (what to actually buy)

Anthropic – [Claude Team](https://claude.com/pricing)$25/user/mo · SOC 2Yellow-tier

Local – [Ollama](https://ollama.com/)Free · on-deviceRed-tier

## What your legal team will ask

_“Does the AI learn from our data?”_ Enterprise plans explicitly do not use customer data for model training. Zero data retention. Contractually guaranteed.

_“Where is the data processed?”_ Cloud AI uses US or EU data centers with SOC 2 compliance. For data residency requirements, use local AI.

_“What about HIPAA?”_ Both Claude Enterprise and ChatGPT Enterprise offer HIPAA-eligible configurations with BAAs.

_“Can we ban personal AI use?”_ You can try. You’ll fail. Provide approved enterprise tools that are better than the personal alternatives.

_“What happens if AI makes a mistake?”_ Same thing that happens when a human makes a mistake – the process catches it. AI errors are a quality problem, not a security problem.

A note on this, because the guide has been bullish up to this point: AI gets things wrong. Confidently, frequently, and without warning. It will cite sources that don’t exist. It will present fabricated data with the same tone as verified facts. It will write code that passes tests and fails in production. The harness isn’t just governance – it’s quality control. Every AI output that touches a customer, a contract, or a decision needs a human checkpoint. Not because AI is bad at its job. Because it doesn’t know when it’s wrong, and you do.

April Session Ended

### Most teams have the tools. Few changed how they work.

60 minutes. Real workflows. See what top teams do differently.

## Chapter X

## Design, Craft, and Signal in a World Drowning in AI Slop.

Open any AI image generator and type “modern SaaS landing page.”

You’ll get something that looks fine. Clean layout. Hero section with a headline. Feature cards with icons. A gradient somewhere. A call-to-action button in a pleasant shade of blue.

It looks like everything else.

This is AI slop. Not bad, exactly. Just undifferentiated. Generic. A product that could belong to any company, in any industry, solving any problem. It has the surface features of good design without any of the meaning.

Where design happens nowAfter AI

Time

Tasks

Taste is the moat. Generation is the commodity.

## The taste gap is widening

AI didn’t make design less important. It made it more important.

When every competitor can generate a functional, decent-looking product in a weekend, the products that feel different – that have personality, coherence, intentionality – stand out more than ever. The bar for “good enough” dropped to zero. The bar for “this is special” stayed exactly where it was.

Taste is the ability to look at thirty AI-generated variations and know – instantly, instinctively – which one is right. Not which one is prettiest. Which one means something. This can’t be automated.

## How to use AI without producing garbage

AI is the opening move, not the final move. Generate options. Explore directions. But never ship variation #17 as-is. The generation is raw material. The curation – the choosing, editing, refining, and discarding – that’s where the design happens.

Start with the constraints, not the canvas. Before you generate anything, define what you won’t do. Constraints are taste codified.

Build a design system and enforce it. A design system is a harness for design the way governance is a harness for data.

Invest in motion. The single highest-leverage design investment for any product team in 2026.

Hire taste. The designer’s job in 2026 isn’t pushing pixels. It’s setting the constraints, defining the voice, and saying “no” to the thirty variations that are technically fine but spiritually empty.

## The curation economy

Everyone can build now. The hard part is knowing what to keep.

The curator doesn’t make everything. The curator chooses. Which features make the cut. Which design direction captures the brand. Which message resonates with the audience. Which ten ideas out of a hundred are worth pursuing.

This is taste at the organizational level. The organizations that build curation into their process will produce products that feel intentional in a sea of AI-generated noise.

## Chapter XI

## The Strategic Question Every 10x Team Eventually Hits.

You’ve done it. Your team is individually productive with AI. Your knowledge layer is capturing context.

Your process has been rebuilt for speed. You’re shipping daily. Prototyping before lunch. Getting user feedback before dinner.

And then someone in a leadership meeting asks the question that stops the room:

“We’re moving faster than ever. Are we moving to the right place?”

This is Layer 3 of the playbook.

## The noise problem at scale

The a16z thesis nailed this: “Generating anything is no longer the problem. The problem, for any serious organization today, is generating and selecting the right thing.”

When your team could only build one thing per sprint, prioritization was forced by scarcity. Remove the constraint and chaos follows. More speed doesn’t solve this. It makes it worse.

## The three things that still matter

**Signal.** The ability to find the insight that everyone else missed. Not more data – better interpretation of the data you have.

**Relationships.** The trust that makes a customer choose you over a technically identical competitor. The community that gives you feedback the market research firm can’t buy.

**Judgment.** The accumulated wisdom to know what to build, what to kill, and what to wait on. AI can simulate reasoning. It cannot simulate judgment. Judgment requires lived experience, emotional intelligence, and the courage to be wrong. It’s the most human capability in the stack, and it’s becoming the most valuable.

## Chapter XII

## Roles Blend. Backlogs Disappear.

The org chart is dissolving. Titles stay, but the work underneath them is converging.

## The new org chart

The traditional technology team has clear swim lanes. Product managers write requirements. Designers make mockups. Engineers write code. Each role has its own tools, its own rituals, its own handoffs.

The handoffs are the problem. Every handoff is a translation layer. At each stage, context is lost, nuance is flattened, and time is wasted waiting for the next person in the chain.

In the AI-native organization, the handoffs collapse. The PM doesn’t write a PRD and throw it over the wall. They describe the feature, the AI generates a working prototype, and the PM refines it in real time.

This doesn’t eliminate designers or engineers. It eliminates the gap between them. The roles don’t disappear. They converge.

### A hair short of an entrepreneur

[Ran Aroussi](https://x.com/aroussi/status/2033893670949179594) wrote about how product organizations should restructure around this new reality. He described the best people in this new model as “a hair short of being an entrepreneur.” That’s the profile. These aren’t employees in the traditional sense. They’re people with the judgment, the taste, and the drive to build something on their own. The only reason they’re at your company instead of running their own thing is that your environment makes them more effective than they’d be solo.

That’s a high bar, and most companies aren’t meeting it.

The company’s value proposition to its own people flips. In the old model, the company provided the work and the employee provided the labor. In the new model, the strongest people can generate their own work. The company’s job is to provide the environment – the harness – that makes these people more effective together than they’d be alone. Shared infrastructure, shared context, shared customers, shared reputation. That’s the value prop now.

### The four types of judgment

[@yrechtman](https://99d.substack.com/p/there-will-only-be-four-jobs) breaks it into four categories. The framing isn’t perfect and the labels are intentionally provocative, but it’s pointing at something real.

1. Product engineers.

High-velocity generalists who think about the product and build it at the same time.

2. Infrastructure and security.

The people who stitch everything together and make it stable, secure, and robust.

3. _People_ people.

Sales, customer experience, community management. The human interface between the company and the world.

4. Grown-ups.

Legal, finance, compliance. The governors on an accelerating organization.

These aren’t job titles. They’re latent traits that have always cut across titles and departments. Everything else was function work dressed up in a title, and function work is what AI handles.

## Process engineering: the new core competency

In a world where software is a commodity (AI generates it), the value is in the process – the encoded expertise, the workflow design, the system that ensures the right actions happen at the right time.

Process engineering is what happens when you take tacit institutional knowledge and turn it into executable systems. Skills files. Automated pipelines. Decision frameworks. Quality gates.

It’s the industrialization of judgment.

The person who can walk into a chaotic organization and say “here’s how your work should flow” – and then build the systems that make it flow – will be the most valuable person in the building.

## What talent will care about

[Aaron Levie’s](https://x.com/levie/status/2021653900617826731) prediction is already coming true: “We’re entering a period where talent will care about a company’s agentic stack since it drives their productivity and is a signal to where the company’s going.”

The harness isn’t just a tool for better AI output. It’s the company’s retention strategy. If the harness is good – if the skills library is rich, if the labs are easy to use, if the feedback loops are tight – then your best people have a reason to stay. They’re more effective inside your environment than outside it. But if the environment inside is slower and clunkier than what someone could build on their own weekend, the leverage equation tips.

In interviews, candidates will ask:

“What’s your AI stack?”“Do you have a knowledge layer?”“What does your skills library look like?”“How autonomous are your agents?”

Companies that can’t answer those questions will lose top talent to companies that can. Not because the talent is techy. Because the talent is productive, and they won’t go back.

## The 90-day window

The companies that figure this out first will define the next decade. The window is open now, but it won’t stay open – every month the early movers compound and the gap gets harder to close. Smaller teams. Higher output. Deeper customer relationships. Margins that make their competitors sick.

The companies that don’t will wonder what happened. They’ll be the ones still running estimation meetings while their competitors ship daily.

## Chapter XIII

## The Capability Curve for the Next 18 Months

Everything in this guide describes the world as it exists today. It’s already moving.

## Unprompted AI

The most important shift coming: AI that acts without being asked.

Right now, even the most sophisticated AI setups are prompt-driven. You ask a question. You initiate a task. The human decides when AI works and what it works on.

That’s a bottleneck. You – your awareness, your memory, your attention – are the weakest link in the system.

Unprompted AI watches. Continuously. Across everything. It detects that a key customer’s engagement dropped 40% over three weeks. It flags that a competitor just filed a patent that overlaps with your roadmap. It notices that a production system’s error rate crept up 2% since last Tuesday’s deployment.

Nobody asked. Nobody prompted. The system saw, assessed, and surfaced.

## Computer use goes mainstream

The ability for AI to operate software – clicking, typing, navigating, browsing – is moving from demo to daily driver.

Research that used to take an afternoon takes minutes. Administrative tasks disappear. Cross-application workflows become seamless.

This is the moment when AI stops being a feature inside applications and becomes a layer on top of all applications.

## The capability curve

Every six months, the models get meaningfully better. Not incrementally. Meaningfully. This creates an unusual planning challenge: the things you assume AI can’t do today, it might do well in six months.

The practical implication: build your systems for the capabilities of next year’s models, not this year’s. The investments you make in process engineering and organizational memory will compound regardless of which specific model is running under the hood.

## What this means for you

If you’ve read this far, you’re already ahead. Not because this guide contains secret information – most of it is available to anyone paying attention. But because you’ve taken the time to build a mental model of how the pieces fit together.

Most people are still arguing about which chatbot is better.

The window is open. Not forever – maybe two years, maybe less.

## Chapter XIV

## Build Something People Would Miss

If your product disappeared tomorrow and your users just switched to something else, you don’t have a product. You have a function, and functions get replaced.

AI made building cheap, which means anyone can ship a beautiful interface with smart features in a weekend. The floor rose. Everything that competed on price, speed, convenience, or “a better UI” is now table stakes. What survives is belonging: the identity someone feels using your product, the community they’d lose, the sense that a human hand shaped the thing they love. Or a structural moat so deep it doesn’t matter.

You can have both, and the best products do. But you need at least one, because the middle – competent and convenient and replaceable – is exactly where AI eats everything alive.

The same pattern that ate the middle of your workflow is eating the middle of the market.

The middle of the marketPre-AI

Time

Tasks

The same pattern that ate the middle of your workflow is eating the middle of the market.

## Belonging as a moat

Belonging isn’t a feature. It’s a relationship. It’s the reason someone picks your product over a functionally identical alternative. It’s the coffee shop you go to even though the one across the street is closer. It’s the tool you recommend to friends because you feel like the people who made it get you.

Belonging comes from a few things. A maker who’s visible and opinionated. A community that people want to be part of. A point of view that the product embodies – not just in marketing but in the decisions about what gets built and what doesn’t. The product feels like it was made by a person, not a committee. And that feeling, in a world flooded with AI-generated products that all look competent and none look human, becomes the scarcest thing.

The whole guide comes back to this. You learned to build the loop. You learned to separate judgment from function. You learned to replace Agile with signal-driven product development. You learned to build a harness. You learned that this world is built for builders. All of that makes you faster, more capable, more leveraged than ever before.

But faster at what? More capable of building what?

Build something people would miss.

April Session Ended

## How AI-Native Product & Design Teams Work

Most product and design teams have the tools. Very few have changed how they actually work. In 60 minutes, we’ll show you the gap and exactly how to close it.

Name

Team size (product + design)

What’s your biggest challenge with AI adoption right now?

Next session coming soon. Stay tuned.

Ideas by ![Ed Landon](https://www.latecheckout.agency/_next/image?url=https%3A%2F%2Flrjaskssucebsfmpsngx.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2Fai-field-guide%2Favatars%2Fed-landon.png&w=96&q=75) [Ed Landon](https://www.linkedin.com/in/edwong530/) & ![Theo Tabah](https://www.latecheckout.agency/_next/image?url=https%3A%2F%2Flrjaskssucebsfmpsngx.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2Fai-field-guide%2Favatars%2Ftheo-tabah.jpg&w=96&q=75) [Theo Tabah](https://www.linkedin.com/in/theotabah/). Creative direction by Collin Briggs. With special help from Veronica & Solichan. Development by Tim, Renaldy & Tony.

[LCA](https://www.latecheckout.agency/) – The Design Firm for the AI Age. LCA defines, designs, and builds AI-native products and AI-native organizations. If you need any help, [we’d love to hear from you](https://www.latecheckout.agency/contact-us).
