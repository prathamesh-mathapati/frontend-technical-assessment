// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-value` }
  ];

  const outputIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" /><polyline points="14 17 9 12 14 7" /><line x1="9" y1="12" x2="21" y2="12" />
    </svg>
  );

  return (
    <BaseNode id={id} label="Output" icon={outputIcon} handles={handles}>
      <label>
        Name:
        <input type="text" value={currName} onChange={handleNameChange} />
      </label>
      <label>
        Type:
        <select value={outputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
}
