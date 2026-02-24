// noteNode.js
import { BaseNode } from './baseNode';

export const NoteNode = ({ id }) => (
  <BaseNode id={id} label="Note">
    <textarea placeholder="Add a note..." style={{ border: 'none', background: 'transparent' }} />
  </BaseNode>
);
