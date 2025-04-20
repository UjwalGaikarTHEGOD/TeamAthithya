import React from 'react';

function Card() {
  return (
    <div className="bg-white text-gray-900 w-screen">
      {/* Header */}
      <header className="w-full border-b border-black-200">
        <nav
          aria-label="Primary Navigation"
          className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
        >
          <div className="flex items-center space-x-10">
            <a className="flex-shrink-0" href="#">
              <img
                alt="FERMATA logo in black Montserrat font"
                className="block"
                height="30"
                src="https://storage.googleapis.com/a1aa/image/2f0cd41a-fb70-4f42-8e17-be01ee2a7fe5.jpg"
                width="140"
              />
            </a>

            {/* Nav Items */}
            <ul className='flex flex-row gap-10 fontt-semibold'>
                <li><a href="/about">About</a></li>
                <li><a href="/detect">Detect</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        aria-label="AI Pest & Disease Detection"
        className="relative bg-cyan-900 bg-opacity-80 text-white"
      >
        <img
          alt="Greenhouse plants"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply"
          src="https://storage.googleapis.com/a1aa/image/202fb1bb-4a6e-4d95-e8d4-dc5aaf92d9a3.jpg"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <h1 className="text-4xl sm:text-5xl font-extrabold max-w-4xl leading-tight">
            AI Pest &amp; Disease Detection
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg font-normal">
            Design an AI-powered pest control system capable of analyzing real-time
            images from drones or mobile devices to accurately detect harmful pests.
            The solution should deliver early warnings and recommend eco-friendly
            measures to effectively prevent and manage pest infestations.
          </p>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            <div className="flex flex-col items-center">
              <i className="fas fa-bug text-4xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Real-Time Pest Detection</h3>
              <p className="text-sm max-w-xs">
                Utilizes AI and computer vision to analyze live images captured via drones or mobile devices, identifying harmful pests with high accuracy.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-virus text-4xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Early Warning Alerts</h3>
              <p className="text-sm max-w-xs">
                Sends immediate notifications to farmers upon detection of pest activity, allowing timely intervention to prevent crop damage.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <i className="far fa-clock text-4xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Eco-Friendly Recommendations</h3>
              <p className="text-sm max-w-xs">
                Provides tailored suggestions for organic or biological pest control methods to minimize chemical usage and protect the environment.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-leaf text-4xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Reduce Crop Loss</h3>
              <p className="text-sm max-w-xs">
                Don’t let a good plant go to waste! Increase your yield with Croptimus™ automated scouting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About & CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between text-gray-700 text-sm">
          <div className="max-w-3xl mb-6 md:mb-0">
            <p>
              Our solutions use image data captured from cameras to automate scouting, providing the earliest pest & disease detection and identification, track pests & pathogens over time so you can evaluate your mitigation efforts, and monitor plant growth.
            </p>
            <p className="mt-4">
              Pest detection for better harvests.
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-5 rounded-md transition"
            >
              Login
            </button>
            <button
              type="button"
              className="border border-gray-400 text-gray-700 font-medium py-2 px-5 rounded-md hover:bg-gray-100 transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
