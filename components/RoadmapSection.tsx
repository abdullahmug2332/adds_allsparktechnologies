// components/RoadmapSection.tsx
import Image from "next/image";

export default function RoadmapSection() {


  return (
    <section className="w-full min-h-[75vh] bg-white">
      <div className=" h-full">
        <div className="grid h-full overflow-hidden  bg-gray-100 md:grid-cols-2">
          {/* Left: Form */}
          <div className="bg-[#181965] ">
            <div className="max-w-[95%] mx-auto lg:max-w-[70%]   h-full p-6 sm:p-8 md:p-10 my-5">
              <h2 className="heading font-bold leading-tight text-white sm:text-[36px]  xl:max-w-[75%]">
                Free Website Launch or Relaunch Roadmap
              </h2>
              <p className="mt-2 para text-white/80 xl:max-w-[70%]">
                Not sure how to get started? Let us map it out for you. In 20 minutes, we’ll show you
              </p>
              <form className="mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="text-white !mb-2 para">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-md border border-white mt-2 bg-transparent px-3 py-2 text-white placeholder-white/70 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="text-white !mb-2  para" >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      className="w-full rounded-md border border-white mt-2 bg-transparent px-3 py-2 text-white placeholder-white/70 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="text-white !mb-2  para">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-md border border-white mt-2 bg-transparent px-3 py-2 text-white placeholder-white/70 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="text-white !mb-2  para">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Companyname"
                      className="w-full mt-2 rounded-md border border-white bg-transparent px-3 py-2 text-white placeholder-white/70 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#FF8C3A] px-5 py-3  para font-semibold text-white shadow-sm transition hover:bg-[#ff7a18] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF8C3A] focus:ring-offset-[#14215E] sm:w-auto"
                >
                  Get Free Relaunch Roadmap →
                </button>
              </form>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative min-h-[75vh] w-full md:h-auto">
            <Image
              src="/images/a.png" // replace with your image: e.g., /magnifier-keyboard.jpg
              alt="Keyboard with magnifying glass"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
