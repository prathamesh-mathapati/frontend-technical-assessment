// logicNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const LogicNode = ({ id }) => (
  <BaseNode id={id} label="Logic" handles={[
    { type: 'target', position: Position.Left, id: `${id}-in` },
    { type: 'source', position: Position.Right, id: `${id}-true`, style: { top: '30%' } },
    { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '70%' } }
  ]}>
    <div>Boolean Logic</div>
  </BaseNode>
);
