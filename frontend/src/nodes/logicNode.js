// logicNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

const logicIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const LogicNode = ({ id }) => (
  <BaseNode id={id} label="Logic" icon={logicIcon} handles={[
    { type: 'target', position: Position.Left, id: `${id}-in` },
    { type: 'source', position: Position.Right, id: `${id}-true`, style: { top: '30%' } },
    { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '70%' } }
  ]}>
    <div style={{ color: '#64748b', fontSize: '0.75rem' }}>Boolean Logic Controller</div>
  </BaseNode>
);
