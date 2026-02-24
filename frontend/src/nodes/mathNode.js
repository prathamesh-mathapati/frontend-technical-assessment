// mathNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const MathNode = ({ id }) => (
  <BaseNode id={id} label="Math" handles={[
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
