# Slides Content

Content for MCP Gateway presentation (source: project files)

---

## Slide 1: Cover

**Title:** MCP Leading the AI  
**Subtitle:** Connecting Claude & co to French Public Data  
**Speaker:** Benoit Vinceneux  
**Role:** CPO Data & MCP at French Prime Minister's Digital Office

---

## Slide 2: The Problem

### LLMs Hallucinate on Public Data

> Ask an LLM about a French administrative procedure → you get outdated information.

> Ask about a law → it might have been amended 6 months ago.

**Same problem Context7 solved for technical docs, but for government data.**

The stakes are higher: wrong legal information can have real consequences for citizens.

---

## Slide 3: Building Blocks

### Tabular Data: Solved. Unstructured Data: Not Yet.

| Source | Content | LLM-ready? |
|--------|---------|------------|
| data.gouv.fr | 50k+ open datasets | ✅ (MCP) |
| Légifrance | All French laws & regulations | ❌ |
| service-public.fr | Administrative procedures | ❌ |
| CNIL | Data protection guidelines | ❌ |
| Conseil constitutionnel | Constitutional case law | ❌ |
| Travail-emploi | Labor law & employment | ❌ |
| Administration directories | State & local admin contacts | ❌ |

**Good news:** We've started vectorizing these sources on Hugging Face → MediaTech (9 datasets, 1.5M+ documents)

**The gap:** No unified MCP interface to query all of this from your IDE or AI agent.

---

## Slide 4: Architecture

### One Gateway for Unstructured Public Data

```
Claude / Cursor / Any MCP Client
           ↓
    ┌───────────────┐
    │  MCP Gateway  │
    └───────────────┘
           ↓
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│data.gouv│ │Légifrance│ │service- │ │  CNIL   │
│  MCP    │ │         │ │ public  │ │         │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Constit │ │travail- │ │annuaires│
│         │ │ emploi  │ │  admin  │
└─────────┘ └─────────┘ └─────────┘
```

**Key principles:**
- Mandatory sourcing: every response traceable to official text
- Real-time sync with legal updates
- Sovereign hosting (SecNumCloud)
- Open source

---

## Slide 5: Use Cases

### MCP Gateway works with any MCP-compatible client

| Tool | Use Case |
|------|----------|
| Claude Code / Cursor | Developer needs French legal context while coding a compliance feature |
| Claude Desktop | Citizen asks about administrative procedures |
| Custom agents | Automated legal research, policy monitoring |
| Chatbots | Public service assistants with authoritative sources |

**Example:** "What are the rules to create a non-profit association in France?"

Response includes:
- Step-by-step procedure (from service-public.fr)
- Legal basis: Loi 1901, Article 2 (from Légifrance)
- Last updated: January 2026
- Direct links to official sources

---

## Slide 6: The Opportunity

### First EU Country with Native MCP for Public Data

**What we're building:**
- Open source MCP Gateway
- Connected to France's sovereign AI infrastructure
- Extensible model for other EU countries

**Current status:**
- ✅ Sovereign inference operational: Albert API
- ✅ Vectorized datasets available: MediaTech on Hugging Face
- ✅ data.gouv MCP: in production
- 🔨 Légifrance integration: in discussion
- 🔨 Gateway architecture: designed

**CTA:** You see use cases for public data in what you're building? Let's talk.

---

## Slide 7: One More Thing

### Live Demo: MCP App on Real Estate Data

**DVF (Demandes de Valeurs Foncières)** — France's open real estate transaction database.

- Every property sale in France since 2019
- Query via MCP + interactive map visualization

**This is what public data + MCP can look like.**
