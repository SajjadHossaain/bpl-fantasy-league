import React from 'react';
import bgShadow from '../../assets/bg-shadow.png'

const Newsletter = () => {
    return (
      <div className='container mx-auto relative'>
        <div className="t absolute -top-50 container mx-auto rounded-2xl border border-white/30 bg-white/15 shadow-2xl backdrop-blur-xl">
          <img
            src={bgShadow}
            alt=""
            className="h-full w-full object-cover absolute rounded-2xl -z-10"
          />
          <div className="m-30 flex flex-col place-items-center space-y-3">
            <h1 className="font-bold text-3xl">Subscribe to our Newsletter</h1>
            <p className="text-[#131313/70] font-semibold">
              Get the latest updates and news right in your inbox!
            </p>
            <form>
              <input
                type="text"
                placeholder="Enter your mail"
                className="p-3 mr-5"
              />
              <button className="font-bold bg-linear-to-r from-yellow-300 to-pink-600 py-2 px-4 rounded-2xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Newsletter;