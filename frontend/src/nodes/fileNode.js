// fileNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const FileNode = ({ id }) => (
  <BaseNode id={id} label="File" handles={[{ type: 'source', position: Position.Right, id: `${id}-file` }]}>
    <input type="file" />
  </BaseNode>
);
