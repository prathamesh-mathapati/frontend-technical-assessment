// integrationNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

const integrationIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const IntegrationNode = ({ id }) => (
  <BaseNode id={id} label="Integration" icon={integrationIcon} handles={[{ type: 'target', position: Position.Left, id: `${id}-data` }]}>
    <select>
      <option value="slack">Slack</option>
      <option value="webhook">Webhook</option>
      <option value="email">Email</option>
    </select>
  </BaseNode>
);
