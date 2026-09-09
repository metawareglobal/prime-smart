import { Composition } from "remotion";
import { PrimeSmartIntro } from "./PrimeSmartIntro";

export const MyComposition = () => {
  return (
    <Composition
      id="PrimeSmartIntro"
      component={PrimeSmartIntro}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
