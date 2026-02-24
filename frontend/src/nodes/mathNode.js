// mathNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

const mathIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const MathNode = ({ id }) => (
  <BaseNode id={id} label="Math" icon={mathIcon} handles={[
    { type: 'target', position: Position.Left, id: `${id}-a`, style: { top: '30%' } },
    { type: 'target', position: Position.Left, id: `${id}-b`, style: { top: '70%' } },
    { type: 'source', position: Position.Right, id: `${id}-res` }
  ]}>
    <select>
      <option value="add">Add</option>
      <option value="sub">Subtract</option>
      <option value="mul">Multiply</option>
      <option value="div">Divide</option>
    </select>
  </BaseNode>
);
