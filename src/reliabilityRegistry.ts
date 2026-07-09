export type ReliabilityLayer = 'Targets' | 'Control' | 'Response' | 'Improvement' | 'Measurement';

export type ReliabilityStatus = 'Planned' | 'Active' | 'At Risk' | 'Improving';

export interface ReliabilityModel {
  name: string;
  owner: string;
  metric: string;
  target: string;
  status: ReliabilityStatus;
}

export interface ReliabilityLayerEntry {
  layer: ReliabilityLayer;
  question: string;
  artifact: string;
}

export interface ReliabilityRegistry {
  repository: string;
  purpose: string;
  layers: ReliabilityLayerEntry[];
  models: ReliabilityModel[];
  operatingPrinciples: string[];
  decisionRule: string;
  governanceQuestions: string[];
}

export const reliabilityRegistry: ReliabilityRegistry = {
  repository: 'SRE Reliability Models',
  purpose:
    'Provide a practical model for defining reliability objectives, governing error budgets, and improving service health.',
  layers: [
    {
      layer: 'Targets',
      question: 'What are we trying to protect?',
      artifact: 'SLO/SLI template',
    },
    {
      layer: 'Control',
      question: 'How do we manage tradeoffs?',
      artifact: 'Error budget governance',
    },
    {
      layer: 'Response',
      question: 'What happens when service health fails?',
      artifact: 'Incident template',
    },
    {
      layer: 'Improvement',
      question: 'What changes next?',
      artifact: 'Reliability review template',
    },
    {
      layer: 'Measurement',
      question: 'How do we know it improved?',
      artifact: 'KPI dashboard',
    },
  ],
  models: [
    {
      name: 'Availability model',
      owner: 'Service owner',
      metric: 'Uptime percentage',
      target: '99.9%',
      status: 'Active',
    },
    {
      name: 'MTTR reduction model',
      owner: 'Incident management',
      metric: 'Mean time to recover',
      target: 'Reduce by quarter',
      status: 'Improving',
    },
    {
      name: 'Reliability score model',
      owner: 'Reliability lead',
      metric: 'Composite score',
      target: 'Above threshold',
      status: 'Active',
    },
  ],
  operatingPrinciples: [
    'Reliability work should make service health visible.',
    'Tradeoffs should be explicit.',
    'Follow-up action should be unavoidable.',
    'Learning from incidents should feed the backlog.',
  ],
  governanceQuestions: [
    'What service health are we protecting?',
    'Which error budgets are burning down?',
    'What changed after the last incident review?',
    'Which services are at risk?',
    'What should the reliability backlog prioritize next?',
  ],
  decisionRule:
    'If a reliability target cannot be measured, reviewed, and acted on, it should not be treated as governed.',
};

export function getReliabilityOverview() {
  return {
    repository: reliabilityRegistry.repository,
    purpose: reliabilityRegistry.purpose,
    layerCount: reliabilityRegistry.layers.length,
    modelCount: reliabilityRegistry.models.length,
    activeModels: reliabilityRegistry.models.filter((model) => model.status === 'Active').length,
  };
}
