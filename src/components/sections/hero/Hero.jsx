import React from "react";
import shadow from "../../../assets/bg-shadow.png";
import heroImg from "../../../assets/banner-main.png";

const Hero = () => {
  return (
    <section className="container mx-auto relative min-h-140 overflow-hidden rounded-2xl bg-[#131313]">
      <img
        src={shadow}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full rounded-2xl object-cover"
      />
      <div className="relative z-10 flex min-h-140 flex-col items-center justify-center space-y-3 px-4 text-center">
        <img src={heroImg} alt="Dream 11 Cricket" className="mx-auto" />

        <h1 className="text-4xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <h3 className="text-2xl font-semibold text-gray-300">
          Beyond Boundaries Beyond Limits
        </h3>

        <div className="rounded-lg border border-[#E7FE29] p-2">
          <button className="rounded-lg bg-[#dfff00] px-8 py-4 font-bold text-black transition hover:bg-[#eaff5c]">
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
