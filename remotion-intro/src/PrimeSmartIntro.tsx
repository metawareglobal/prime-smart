import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Bunting } from "./Bunting";
import { Scene } from "./Scene";

const frauncesFamily = "Georgia, 'Times New Roman', serif";
const workSansFamily =
  "'Helvetica Neue', Helvetica, Arial, sans-serif";

const MAROON = "#6E1327";
const MAROON_DEEP = "#4A0D1A";
const GOLD = "#C99A2E";
const CREAM = "#FBF6F3";
const INK = "#2B1B1E";

const headline: React.CSSProperties = {
  fontFamily: frauncesFamily,
  fontWeight: 600,
  color: CREAM,
  lineHeight: 1.08,
  letterSpacing: "-0.01em",
};

const body: React.CSSProperties = {
  fontFamily: workSansFamily,
  fontWeight: 500,
  color: CREAM,
};

const eyebrow: React.CSSProperties = {
  fontFamily: workSansFamily,
  fontWeight: 600,
  color: GOLD,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
};

const FRAME = {
  hook: 90,
  services: 180,
  location: 180,
  delivery: 180,
  tagline: 120,
  closing: 150,
};

export const PrimeSmartIntro: React.FC = () => {
  let cursor = 0;
  const seq = (dur: number) => {
    const from = cursor;
    cursor += dur;
    return { from, dur };
  };

  const hook = seq(FRAME.hook);
  const services = seq(FRAME.services);
  const location = seq(FRAME.location);
  const delivery = seq(FRAME.delivery);
  const tagline = seq(FRAME.tagline);
  const closing = seq(FRAME.closing);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(155deg, ${MAROON_DEEP}, ${MAROON})`,
      }}
    >
      <AbsoluteFill style={{ justifyContent: "space-between" }}>
        <Bunting opacity={0.45} />
        <Bunting opacity={0.45} flip />
      </AbsoluteFill>

      <Sequence from={hook.from} durationInFrames={hook.dur}>
        <Scene durationInFrames={hook.dur}>
          <div style={eyebrow}>Prime Smart Flags &middot; Dubai</div>
          <div style={{ ...headline, fontSize: 96, marginTop: 22 }}>
            Custom Flags.
            <br />
            Printed in Dubai.
          </div>
        </Scene>
      </Sequence>

      <Sequence from={services.from} durationInFrames={services.dur}>
        <Scene durationInFrames={services.dur}>
          <div style={eyebrow}>What We Print</div>
          <div style={{ ...headline, fontSize: 68, marginTop: 22 }}>
            Sail &middot; Table &middot; Car Flags
          </div>
          <div style={{ ...body, fontSize: 40, marginTop: 26, color: GOLD }}>
            Signage &middot; Uniforms &middot; Corporate Gifts
          </div>
        </Scene>
      </Sequence>

      <Sequence from={location.from} durationInFrames={location.dur}>
        <Scene durationInFrames={location.dur}>
          <div style={eyebrow}>Right Here in Dubai</div>
          <div style={{ ...headline, fontSize: 66, marginTop: 22 }}>
            Al Khabaisi Workshop
          </div>
          <div style={{ ...body, fontSize: 38, marginTop: 26, opacity: 0.92 }}>
            Send your artwork, get a proof
            <br />
            the same day.
          </div>
        </Scene>
      </Sequence>

      <Sequence from={delivery.from} durationInFrames={delivery.dur}>
        <Scene durationInFrames={delivery.dur}>
          <div style={eyebrow}>We Deliver Across the UAE</div>
          <div
            style={{
              ...body,
              fontSize: 44,
              marginTop: 26,
              color: CREAM,
              lineHeight: 1.6,
            }}
          >
            Dubai &middot; Abu Dhabi &middot; Sharjah
            <br />
            Ajman &middot; Al Ain &middot; RAK
            <br />
            Fujairah &middot; UAQ
          </div>
        </Scene>
      </Sequence>

      <Sequence from={tagline.from} durationInFrames={tagline.dur}>
        <Scene durationInFrames={tagline.dur}>
          <div style={{ ...headline, fontSize: 74, color: GOLD }}>
            New here?
          </div>
          <div style={{ ...headline, fontSize: 74, marginTop: 6 }}>
            Tell us what you&rsquo;re flying.
          </div>
        </Scene>
      </Sequence>

      <Sequence from={closing.from} durationInFrames={closing.dur}>
        <Scene
          durationInFrames={closing.dur}
          background={`linear-gradient(155deg, ${CREAM}, ${CREAM})`}
        >
          <div
            style={{
              ...headline,
              fontSize: 88,
              color: MAROON,
              letterSpacing: "-0.01em",
            }}
          >
            Prime Smart Flags
          </div>
          <div
            style={{
              ...body,
              fontSize: 42,
              color: INK,
              marginTop: 30,
              fontWeight: 600,
            }}
          >
            Message us on WhatsApp
            <br />
            for a free quote
          </div>
          <div
            style={{
              ...body,
              fontSize: 30,
              color: MAROON,
              marginTop: 26,
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            primesmart.ae
          </div>
        </Scene>
      </Sequence>
    </AbsoluteFill>
  );
};
