import React from "react";

export const Bunting: React.FC<{ flip?: boolean; opacity?: number }> = ({
  flip = false,
  opacity = 0.55,
}) => {
  const triangles = Array.from({ length: 14 }, (_, i) => i * 80);
  return (
    <svg
      viewBox="0 0 1080 40"
      width="100%"
      height={40}
      style={{
        display: "block",
        transform: flip ? "rotate(180deg)" : undefined,
      }}
    >
      <g fill="#C99A2E" opacity={opacity}>
        {triangles.map((x) => (
          <polygon key={x} points={`${x},0 ${x + 36},0 ${x + 18},34`} />
        ))}
      </g>
    </svg>
  );
};
