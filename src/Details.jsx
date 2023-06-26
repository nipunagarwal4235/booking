import React from "react";

const Details = () => {
  return (
    <>
      <div>
        <div className="p-10">
          <h1 className="font-bold text-black font-nunito text-2xl">
            Passenger Details
          </h1>
          <h4 className="font-bold text-gray-600 font-nunito text-md">
            Please fill in the details of the passenger
          </h4>
          <p className="text-[#C59D3F] font-nunito text-sm pt-2">
            {" "}
            Passenger-1 | Seat: A3{" "}
          </p>
          <div className="py-2 flex space-x-4">
            <div class="flex items-center pl-4 border border-gray-200 bg-[#FFFEFE] rounded-xl">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-[#1E1E1E]"
              />
              <label
                for="bordered-radio-1"
                class="w-16 py-2 ml-2 text-sm font-semibold font-nunito text-[#1E1E1E]"
              >
                Male
              </label>
            </div>
            <div class="flex items-center pl-4 border border-gray-200 bg-[#FFFEFE] rounded-xl">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-[#1E1E1E]"
              />
              <label
                for="bordered-radio-1"
                class="w-20 py-2 ml-2 text-sm font-semibold font-nunito text-[#1E1E1E]"
              >
                Female
              </label>
            </div>
          </div>

          <label
            for="FullName"
            class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-4 focus-within:border-black"
          >
            <input
              type="text"
              id="FullName"
              placeholder="Full Name"
              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span class="absolute start-0 top-2 -translate-y-1/2 text-xs text-black font-nunito font-bold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Full Name
            </span>
          </label>
          <label
            for="FullName"
            class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-4 focus-within:border-black"
          >
            <input
              type="text"
              id="FullName"
              placeholder="Full Name"
              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span class="absolute start-0 top-2 -translate-y-1/2 text-xs text-black font-nunito font-bold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Age (in years)
            </span>
          </label>

          <h1 className="font-bold text-black font-nunito text-2xl pt-8">
            Contact Details
          </h1>
          <h4 className="font-bold text-gray-600 font-nunito text-md">
            Details will be sent to this email address and phone number
          </h4>
          <label
            for="FullName"
            class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-4 focus-within:border-black"
          >
            <input
              type="text"
              id="FullName"
              placeholder="Full Name"
              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span class="absolute start-0 top-2 -translate-y-1/2 text-xs text-black font-nunito font-bold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Email
            </span>
          </label>
          <label
            for="FullName"
            class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-4 focus-within:border-black"
          >
            <input
              type="text"
              id="FullName"
              placeholder="Full Name"
              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span class="absolute start-0 top-2 -translate-y-1/2 text-xs text-black font-nunito font-bold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Phone Number
            </span>
          </label>
          <h1 className="font-bold text-black font-nunito text-2xl pt-8">
            Coupon Codes
          </h1>
          <h4 className="font-bold text-gray-600 font-nunito text-md">
            Apply coupon codes to get discounts
          </h4>

          <div class="flex pt-4">
            <div class="flex items-center h-5">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                value=""
                class="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black "
              />
            </div>
            <div class="ml-2 text-sm">
              <label
                for="helper-checkbox"
                class=" text-black font-nunito font-semibold text-md"
              >
                WELCOME
              </label>
              <p
                id="helper-checkbox-text"
                class="text-xs font-normal text-gray-500 font-nunito"
              >
                10% off on your first order
              </p>
            </div>
          </div>
          <h1 className="font-bold text-black font-nunito text-2xl pt-8">
            Fare Summary
          </h1>
          <div className="p-2">
          <button className="bg-[#1E1E1E] text-[#FFFEFE] rounded-xl w-full p-3 font-nunito font-bold text-md">Proceed to Pay</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Details;
