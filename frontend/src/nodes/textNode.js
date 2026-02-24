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
      textAreaRef.current.style.width = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      textAreaRef.current.style.width = `${Math.max(150, Math.min(400, textAreaRef.current.scrollWidth))}px`;
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

  const textIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  );

  return (
    <BaseNode id={id} label="Text" icon={textIcon} handles={handles}>
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
            minHeight: '2.5rem',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            backgroundColor: '#fff',
            fontFamily: 'inherit',
            transition: 'width 0.1s, height 0.1s'
          }}
        />
      </label>
    </BaseNode>
  );
}
