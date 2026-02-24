// baseNode.js

import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, label, children, handles = [] }) => {
  return (
    <div className="custom-node-container">
      <div className="custom-node-header">
        <span className="custom-node-label">{label}</span>
        <div className="custom-node-icon">
          {/* Icons could be passed as props later */}
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
