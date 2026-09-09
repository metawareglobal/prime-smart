import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Scene: React.FC<{
  children: React.ReactNode;
  durationInFrames: number;
  background?: string;
}> = ({ children, durationInFrames, background }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 200 } });
  const exitStart = durationInFrames - 15;
  const exitOpacity = interpolate(
    frame,
    [exitStart, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const rise = interpolate(enter, [0, 1], [24, 0]);

  return (
    <AbsoluteFill
      style={{
        background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity: Math.min(enter, exitOpacity),
          transform: `translateY(${rise}px)`,
          width: "100%",
          padding: "0 72px",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
