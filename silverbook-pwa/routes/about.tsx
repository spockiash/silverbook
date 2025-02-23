export default function AboutPage() {
    return (
      <div class="max-w-4xl mx-auto py-12 px-6 bg-white shadow-lg rounded-lg">
        {/* Title Section */}
        <h1 class="text-4xl font-extrabold text-gray-900 border-b pb-4">
          Welcome to <span class="text-indigo-600">SilverBook</span>
        </h1>
  
        {/* Introduction */}
        <p class="mt-6 text-lg text-gray-700 leading-relaxed">
          <strong>SilverBook</strong> is designed for <strong>analog photography enthusiasts</strong> who take their craft seriously.
          When shooting on film, keeping notes on exposure, settings, and conditions is crucial.
          While traditional <strong>pen-and-paper notebooks</strong> are valuable, they can be cumbersome and difficult to manage.
        </p>
  
        <p class="mt-4 text-lg text-gray-700 leading-relaxed">
          This project is <strong>not a replacement</strong> for physical note-taking but rather a <strong>digital companion</strong>
          that enhances your workflow. With SilverBook, you can quickly and efficiently <strong>record, manage,
          and access</strong> your photography notes anytime.
        </p>
  
        {/* Features Section */}
        <h2 class="mt-10 text-3xl font-semibold text-gray-900 border-b pb-2">Key Features</h2>
        <ul class="mt-6 space-y-4 text-lg text-gray-700">
          <li class="flex items-center">
            ✅ <span class="ml-3"><strong>Record detailed exposure notes</strong> (shutter speed, aperture, environmental conditions, film stock ISO).</span>
          </li>
          <li class="flex items-center">
            ✅ <span class="ml-3"><strong>Manage and organize your preferred photography equipment.</strong></span>
          </li>
          <li class="flex items-center">
            ✅ <span class="ml-3"><strong>Export exposure data</strong> effortlessly for archiving or analysis.</span>
          </li>
        </ul>
  
        {/* Future Features */}
        <h3 class="mt-10 text-2xl font-semibold text-gray-900 border-b pb-2">Planned Features</h3>
        <ul class="mt-6 space-y-4 text-lg text-gray-700">
          <li class="flex items-center">
            🚀 <span class="ml-3"><strong>Film development tracking and management.</strong></span>
          </li>
          <li class="flex items-center">
            🚀 <span class="ml-3"><strong>Automated cross-device data synchronization</strong> (opt-in premium feature).</span>
          </li>
          <li class="flex items-center">
            🚀 <span class="ml-3"><strong>Custom label generator</strong> for organizing developed negatives.</span>
          </li>
        </ul>
  
        {/* Monetization Plans */}
        <h3 class="mt-10 text-2xl font-semibold text-gray-900 border-b pb-2">Monetization Strategy</h3>
        <p class="mt-6 text-lg text-gray-700 leading-relaxed">
          The <strong>core functionality of SilverBook will always be free.</strong> This includes all <strong>offline features</strong>, 
          ensuring you have full control over your data without restrictions.
        </p>
        <p class="mt-4 text-lg text-gray-700 leading-relaxed">
          However, future <strong>premium features</strong> will focus on <strong>data-sharing and cross-device synchronization</strong>. 
          This monetization model ensures that essential features remain free, while offering advanced tools 
          for those who need <strong>seamless cloud integration</strong>.
        </p>
        <p class="mt-4 text-lg text-gray-700 leading-relaxed">
          Importantly, our <strong>privacy commitment remains unchanged</strong> even for users who opt into online features.
        </p>
  
        {/* Privacy Section */}
        <h2 class="mt-10 text-3xl font-semibold text-gray-900 border-b pb-2">Privacy Commitment</h2>
  
        <p class="mt-6 text-lg text-gray-700 leading-relaxed">
          <strong>Your privacy is our top priority.</strong> By default, all your data is <strong>stored locally on your device</strong>,
          ensuring complete control over your information. Any future <strong>data-sharing features</strong> will be strictly <strong>opt-in</strong>,
          with explicit user consent required before activation.
        </p>
  
        <p class="mt-4 text-lg text-gray-700 leading-relaxed">
          As a <strong>Progressive Web App (PWA)</strong>, SilverBook is designed to work <strong>offline-first</strong>. Simply visit the application
          once, and it remains accessible from your browser without needing an internet connection.
        </p>
  
        {/* Additional Privacy Information */}
        <h3 class="mt-10 text-2xl font-semibold text-gray-900 border-b pb-2">Data Transparency</h3>
        <p class="mt-6 text-lg text-gray-700 leading-relaxed">
          If you opt into <strong>data-sharing for online features</strong>, you will always have full visibility into:
        </p>
        <ul class="mt-4 space-y-4 text-lg text-gray-700">
          <li class="flex items-center">
            🔍 <span class="ml-3"><strong>Exactly what data is being shared.</strong></span>
          </li>
          <li class="flex items-center">
            📅 <span class="ml-3"><strong>When the data was transmitted.</strong></span>
          </li>
          <li class="flex items-center">
            📂 <span class="ml-3"><strong>A log of all shared data</strong>, accessible in the app.</span>
          </li>
        </ul>
  
        <p class="mt-4 text-lg text-gray-700 leading-relaxed">
          No <strong>hidden telemetry</strong> will ever be implemented. Users will have the option to <strong>share crash and error logs</strong> 
          for debugging purposes, but this will be completely optional, and you will <strong>always see the data payload</strong> before it is sent.
        </p>
  
        <p class="mt-4 text-lg text-red-600 font-medium">
          ⚠️ <strong>Important:</strong> Since data is stored locally in your browser, clearing browser history or cache may delete your records.
        </p>
  
        {/* Call to Action */}
        <div class="mt-10">
          <a href="/" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-700 transition">
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  