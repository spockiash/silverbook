import { useState } from "preact/hooks";
import { Camera } from "lucide-preact";
interface Props {
  filmSpeeds: number[];
  apertures: string[];
  shutterSpeeds: string[];
}

export default function ExposureForm({ filmSpeeds, apertures, shutterSpeeds }: Props) {
  const [filmSpeed, setFilmSpeed] = useState(filmSpeeds[0]);
  const [aperture, setAperture] = useState(apertures[0]);
  const [shutterSpeed, setShutterSpeed] = useState(shutterSpeeds[0]);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log({ filmSpeed, aperture, shutterSpeed });
  };

  return (
    <form onSubmit={handleSubmit} class="bg-white shadow-md rounded-lg px-6 py-4">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">New Exposure</h2>
      <Camera className="w-6 h-6 text-gray-500" />
      {/* Film Speed Selection */}
      <label class="block text-gray-700 font-medium mb-2">Film Speed (ISO)</label>
      <select class="w-full p-2 border rounded mb-4" value={filmSpeed} onChange={(e) => setFilmSpeed(Number(e.currentTarget.value))}>
        {filmSpeeds.map((iso) => (
          <option value={iso}>{iso}</option>
        ))}
      </select>

      {/* Aperture Selection */}
      <label class="block text-gray-700 font-medium mb-2">Aperture</label>
      <select class="w-full p-2 border rounded mb-4" value={aperture} onChange={(e) => setAperture(e.currentTarget.value)}>
        {apertures.map((ap) => (
          <option value={ap}>{ap}</option>
        ))}
      </select>

      {/* Shutter Speed Selection */}
      <label class="block text-gray-700 font-medium mb-2">Shutter Speed</label>
      <select class="w-full p-2 border rounded mb-4" value={shutterSpeed} onChange={(e) => setShutterSpeed(e.currentTarget.value)}>
        {shutterSpeeds.map((ss) => (
          <option value={ss}>{ss}</option>
        ))}
      </select>

      {/* Submit Button */}
      <button type="submit" class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
        Save Exposure
      </button>
    </form>
  );
}
