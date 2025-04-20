

function AboutPage() {
  return (
    <div className="bg-[#f8f9fa] text-[#1e293b] relative w-screen flex items-center justify-center">
      {/* About Page label */}
      <div className="absolute top-6 left-6 bg-[#22b8cf] text-white font-bold px-4 py-2 rounded-full text-sm">
        About Page
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left side */}
          <section className="lg:w-1/2 max-w-lg order-1 lg:order-1">
            <h1 className="font-extrabold text-[2.75rem] leading-[3.25rem] mb-6">
              Sustainability
              <br />
              Powered by
              <br />
              Intelligence
            </h1>
            <p className="text-sm leading-6 mb-10 max-w-md text-[#1e293b]">
              You can track the spread of pests or diseases over time and even
              <strong>
                discover where problems may exist
              </strong>
              within your growing area to foster a healthier, more sustainable ecosystem.
            </p>
            <button className="flex items-center gap-3 bg-white shadow-md rounded-full py-4 px-5 max-w-md w-full text-white font-semibold text-sm leading-5 hover:shadow-lg transition-shadow" type="button">
              <img alt="Target icon representing sustainability powered by intelligence" className="w-6 h-6 flex-shrink-0" height="24" src="https://storage.googleapis.com/a1aa/image/eb9885fe-caff-46e2-9cdb-15802c31628d.jpg" width="24" />
              Sustainability Powered by Intelligence
            </button>
            <ul className="mt-10 space-y-8 max-w-md">
              <li className="flex items-center gap-4 text-[#22b8cf] font-semibold text-sm leading-5">
                <img alt="Spray bottle icon representing reduce crop inputs by 25%" className="w-6 h-6 flex-shrink-0" height="24" src="https://storage.googleapis.com/a1aa/image/3497548b-7f3f-4a59-1397-4c7d59204a83.jpg" width="24" />
                <span className="text-[#1e293b] font-bold">
                  Reduce Crop Inputs by 25%
                </span>
              </li>
              <li className="flex items-center gap-4 text-[#22b8cf] font-semibold text-sm leading-5">
                <img alt="Leaf icon representing reduce crop loss by 30%" className="w-6 h-6 flex-shrink-0" height="24" src="https://storage.googleapis.com/a1aa/image/17acbd4d-2c5c-424e-0817-41b32d0bdefa.jpg" width="24" />
                <span className="text-[#1e293b] font-bold">
                  Reduce Crop Loss by 30%
                </span>
              </li>
              <li className="flex items-center gap-4 text-[#22b8cf] font-semibold text-sm leading-5">
                <img alt="Clock icon representing cut scouting time by 50%" className="w-6 h-6 flex-shrink-0" height="24" src="https://storage.googleapis.com/a1aa/image/d2ab18ad-0f81-4440-dda6-219dc8897c52.jpg" width="24" />
                <span className="text-[#1e293b] font-bold">
                  Cut Scouting Time by 50%
                </span>
              </li>
            </ul>
          </section>

          {/* Right side (Quote Box) */}
          <section className="bg-white rounded-xl shadow-lg p-10 max-w-lg lg:w-1/2 order-2 lg:order-2 flex flex-col justify-between">
            <div className="text-[#22b8cf] text-8xl font-extrabold leading-none mb-6 select-none">
              ““
            </div>
            <p className="text-[#1e293b] text-base leading-7 mb-5">
              It’s remarkable how much less time we spend on wandering the greenhouse, looking for problems that might or might not be there. It’s not that just that me and my guys spend less time on scouting now, what I also appreciate is the peace of mind the system gives me. It’s great to know someone is looking after my plants all times!
            </p>
            <p className="font-bold text-[#1e293b] mb-2">
              Tom Pelligrini
            </p>
            <p className="text-[#1e293b] text-sm leading-5">
              Flowering Mgr, Intelicanna
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
