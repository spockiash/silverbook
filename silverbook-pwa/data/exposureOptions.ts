export const filmSpeeds = [50, 100, 200, 400, 800, 1600, 3200];

export const apertures = ["f/1.4", "f/2", "f/2.8", "f/4", "f/5.6", "f/8", "f/11", "f/16", "f/22"];

export const shutterSpeeds = [
  "1s", "1/2s", "1/4s", "1/8s", "1/15s", "1/30s", "1/60s", "1/125s", "1/250s", "1/500s", "1/1000s"
];

export interface ExposureEntry {
  id: string;
  filmSpeed: number;
  aperture: string;
  shutterSpeed: string;
  lens: string;
  camera: string;
  conditions: string;
  timestamp: string;
}