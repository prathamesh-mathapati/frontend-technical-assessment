// baseNode.js

import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, label, icon, children, handles = [] }) => {
  return (
    <div className="custom-node-container">
      <div className="custom-node-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {icon && <span className="custom-node-icon">{icon}</span>}
          <span className="custom-node-label">{label}</span>
        </div>
        <div className="custom-node-more-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
          </svg>
        </div>
      </div>
      <div className="custom-node-body">{children}</div>
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-handle-${index}`}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          className={`custom-node-handle ${handle.className || ""}`}
          style={{
            ...handle.style,
          }}
        />
      ))}
    </div>
  );
};
