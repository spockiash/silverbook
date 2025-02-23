import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { filmSpeeds, apertures, shutterSpeeds } from "../data/exposureOptions.ts";
import ExposureForm from "../islands/ExposureForm.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="max-w-lg mx-auto py-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Log Exposure</h1>
      <ExposureForm filmSpeeds={filmSpeeds} apertures={apertures} shutterSpeeds={shutterSpeeds} />
    </div>

  );
}
