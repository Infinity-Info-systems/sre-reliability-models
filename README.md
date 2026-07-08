# SRE Reliability Models

## Overview

This repository contains SRE reliability models for maturity, error budgets, availability, and incident management.

It focuses on SLO and SLI governance, reliability score modeling, and operational improvement workflows.
It is meant to help teams run reliability as a measurable operating practice rather than an ad hoc response function.
The repository should also be easy to reference from the parent MCGR page so the reliability library is visible as part of the larger ecosystem.

## Why It Matters

SRE programs need a consistent reliability model to guide decisions.

This repository helps teams define and manage:

- SLO and SLI governance
- error budget policies
- availability models
- MTTR reduction models
- reliability scorecards
- incident review practices
- service ownership clarity
- learning loops and improvement backlogs
- reliability reporting for leadership

## Where This Fits In The Ecosystem

- [MCGR Framework](../MCGR-Framework/README.md)
- [MCGR Public Page](../MCGR-Framework/README.md#featured-research-spotlight)
- [SLO-Driven Cloud Architecture](../slo-driven-cloud-architecture/README.md)
- [Predictive Reliability Models](../predictive-reliability-models/README.md)
- [Self-Healing Cloud Operations](../self-healing-cloud-operations/README.md)

## Content Model

This repository works best when the pages are used in three layers:

- operating model and governance pages
- analytical models and scorecards
- review templates and reporting artifacts

## How To Use This Repo

1. Read the framework overview.
2. Review the SRE operating model and SLO/SLI governance.
3. Use the scorecard and templates to assess current state.
4. Review maturity, incident, and error budget practices.
5. Track reliability progress over time using the dashboard and metrics.
6. Keep terminology consistent across models, scorecards, and templates.

## Core Content

- [SRE Reliability Operations Map](models/sre-reliability-operations-map.md)
- [Framework Overview](docs/framework-overview.md)
- [SRE Operating Model](docs/sre-operating-model.md)
- [SLO/SLI Governance](docs/slo-sli-governance.md)
- [Error Budget Governance](docs/error-budget-governance.md)
- [Reliability Maturity](docs/reliability-maturity.md)
- [Incident Management](docs/incident-management.md)

## Models

- [Availability Model](models/availability-model.md)
- [MTTR Reduction Model](models/mttr-reduction-model.md)
- [Reliability Score Model](models/reliability-score-model.md)
- [Reliability Maturity](docs/reliability-maturity.md)

## Scorecards and Dashboards

- [SRE Maturity Scorecard](scorecards/sre-maturity-scorecard.md)
- [Reliability KPI Dashboard](dashboards/reliability-kpi-dashboard.md)

## Templates

- [SLO/SLI Template](templates/slo-sli-template.md)
- [Reliability Review Template](templates/reliability-review-template.md)
- [Incident Postmortem Template](templates/incident-postmortem-template.md)

## References

- [Bibliography](references/bibliography.md)
- [Research Links](publications/research-links.md)
- [Impact Metrics](evidence/impact-metrics.md)

## Operating Principle

Reliability work should make service health visible, make tradeoffs explicit, and make follow-up action unavoidable.

## Quick View

| Reliability Area | What It Governs | Typical Artifact |
| --- | --- | --- |
| SLOs / SLIs | Service targets and signals | SLO/SLI template |
| Error budgets | Release pacing and escalation | Error budget governance |
| Incident management | Response and learning | Incident postmortem |
| Maturity | Improvement sequencing | SRE maturity scorecard |
| Reporting | Leadership visibility | KPI dashboard |

## Ecosystem Links

- [MCGR-Framework](../MCGR-Framework/README.md)
- [SLO-Driven Cloud Architecture](../slo-driven-cloud-architecture/README.md)
- [Predictive Reliability Models](../predictive-reliability-models/README.md)
- [Self-Healing Cloud Operations](../self-healing-cloud-operations/README.md)
