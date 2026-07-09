import { reliabilityRegistry } from './reliabilityRegistry';

export interface ReliabilityReportRow {
  model: string;
  owner: string;
  metric: string;
  target: string;
  status: string;
}

export function buildReliabilityReport() {
  const rows: ReliabilityReportRow[] = reliabilityRegistry.models.map((model) => ({
    model: model.name,
    owner: model.owner,
    metric: model.metric,
    target: model.target,
    status: model.status,
  }));

  return {
    title: reliabilityRegistry.repository,
    purpose: reliabilityRegistry.purpose,
    layers: reliabilityRegistry.layers,
    operatingPrinciples: reliabilityRegistry.operatingPrinciples,
    governanceQuestions: reliabilityRegistry.governanceQuestions,
    decisionRule: reliabilityRegistry.decisionRule,
    reportRows: rows,
  };
}

export function buildReliabilitySummary() {
  return {
    totalModels: reliabilityRegistry.models.length,
    activeModels: reliabilityRegistry.models.filter((model) => model.status === 'Active').length,
    improvingModels: reliabilityRegistry.models.filter((model) => model.status === 'Improving').length,
    atRiskModels: reliabilityRegistry.models.filter((model) => model.status === 'At Risk').length,
  };
}
