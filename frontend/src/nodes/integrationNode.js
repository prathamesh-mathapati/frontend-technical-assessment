// integrationNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const IntegrationNode = ({ id }) => (
  <BaseNode id={id} label="Integration" handles={[{ type: 'target', position: Position.Left, id: `${id}-data` }]}>
    <select>
      <option value="slack">Slack</option>
      <option value="webhook">Webhook</option>
      <option value="email">Email</option>
    </select>
  </BaseNode>
);
