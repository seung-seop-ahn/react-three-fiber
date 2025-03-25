import { EffectComposer, Bloom, BrightnessContrast, DotScreen, Glitch, Grid, HueSaturation, Pixelation, Sepia } from '@react-three/postprocessing'

export const PostProcessor = () => {
  return (
    <EffectComposer
      disableNormalPass
    >
      {/* <Bloom 
        intensity={1.5}
        mipmapBlur
        luminanceThreshold={1}
        luminanceSmoothing={0.02}
      /> */}
      {/* <BrightnessContrast
        brightness={-0.2}
        contrast={-0.8}
      /> */}
      {/* <DotScreen
        angle={Math.PI / 6}
        scale={1}
      /> */}
      {/* <Glitch
        delay={[1.5, 3.5]}
        duration={[0.5, 1]}
        strength={[0.01, 1]}
        ratio={0.5}
      /> */}
      {/* <Grid scale={0.1} lineWidth={0.1} /> */}
      {/* <HueSaturation
        hue={Math.PI / 2}
        saturation={0.4}
      /> */}
      {/* <Pixelation
        granularity={1}
      /> */}
      <Sepia
        intensity={0.5}
      />
    </EffectComposer>
  )
}