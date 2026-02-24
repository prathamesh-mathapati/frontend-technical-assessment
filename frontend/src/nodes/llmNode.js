// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const LLMNode = ({ id }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100/3}%` } },
    { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200/3}%` } },
    { type: 'source', position: Position.Right, id: `${id}-response` },
  ];

  const llmIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );

  return (
    <BaseNode id={id} label="LLM" icon={llmIcon} handles={handles}>
      <div style={{ padding: '4px 0', borderTop: '1px solid #f1f5f9', marginTop: '8px' }}>
        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}
