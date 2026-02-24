// fileNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

const fileIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
  </svg>
);

export const FileNode = ({ id }) => (
  <BaseNode id={id} label="File" icon={fileIcon} handles={[{ type: 'source', position: Position.Right, id: `${id}-file` }]}>
    <input type="file" style={{ fontSize: '0.75rem' }} />
  </BaseNode>
);
