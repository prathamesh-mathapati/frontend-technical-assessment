// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // Auto-resize logic
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // Variable detection logic
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)];
    const newVars = [...new Set(matches.map(match => match[1]))];
    setVariables(newVars);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-output` },
    ...variables.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${v}`,
      style: { top: `${(i + 1) * (100 / (variables.length + 1))}%` }
    }))
  ];

  return (
    <BaseNode id={id} label="Text" handles={handles}>
      <label>
        Text:
        <textarea 
          ref={textAreaRef}
          value={currText} 
          onChange={handleTextChange} 
          rows={1}
          style={{ 
            resize: 'none',
            overflow: 'hidden',
            minHeight: '20px'
          }}
        />
      </label>
    </BaseNode>
  );
}
