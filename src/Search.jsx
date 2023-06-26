import React from "react";

const Search = () => {
  return (
    <>
      <div className="bg-[#F1F2F4] p-10">
        <div>
          {/* <iframe
          width="100%"
          height="40%"
          title="map"
          className="absolute inset-0"
          src="https://maps.google.com/maps?q=bml%20munj&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe> */}
        </div>
        <div className="flex justify-evenly">
          <div className="rounded-xl border bg-[#FFFEFE] w-16 h-16">
            <div className="px-2 py-2">
              <div className="font-nunito font-bold text-[#1E1E1E] text-sm">
                Mon
              </div>
              <div className="font-nunito font-bold text-[#1E1E1E] text-md text-center">
                12
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-[#FFFEFE] w-16 h-16">
            <div className="px-2 py-2">
              <div className="font-nunito font-bold text-[#1E1E1E] text-sm">
                Tues
              </div>
              <div className="font-nunito font-bold text-[#1E1E1E] text-md text-center">
                13
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-[#FFFEFE] w-16 h-16">
            <div className="px-2 py-2">
              <div className="font-nunito font-bold text-[#1E1E1E] text-sm">
                Wed
              </div>
              <div className="font-nunito font-bold text-[#1E1E1E] text-md text-center">
                14
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-[#1E1E1E] w-16 h-20">
            <div className="px-2 py-3">
              <div className="font-nunito font-bold text-[#FFFEFE] text-md text-center">
                Thurs
              </div>
              <div className="font-nunito font-bold text-[#FFFEFE] text-xl text-center">
                15
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-[#FFFEFE] w-16 h-16">
            <div className="px-2 py-2">
              <div className="font-nunito font-bold text-[#1E1E1E] text-sm">
                Fri
              </div>
              <div className="font-nunito font-bold text-[#1E1E1E] text-md text-center">
                16
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-[#FFFEFE] w-16 h-16">
            <div className="px-2 py-2">
              <div className="font-nunito font-bold text-[#1E1E1E] text-sm">
                Sat
              </div>
              <div className="font-nunito font-bold text-[#1E1E1E] text-md text-center">
                17
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-[#FFFEFE] w-16 h-16">
            <div className="px-2 py-2">
              <div className="font-nunito font-bold text-[#1E1E1E] text-sm">
                Sun
              </div>
              <div className="font-nunito font-bold text-[#1E1E1E] text-md text-center">
                18
              </div>
            </div>
          </div>
        </div>
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
              class="w-16 py-2 ml-2 text-sm font-bold font-nunito text-[#1E1E1E]"
            >
              AC
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
              class="w-20 py-2 ml-2 text-sm font-bold font-nunito text-[#1E1E1E]"
            >
              NON-AC
            </label>
          </div>
        </div>
        <div className="p-6 rounded-xl border bg-[#FFFEFE]">
          <div className="p-2 flex justify-center gap-4">
            <div className="rounded-xl bg-[#EDEBEB] p-2">
              <div className="text-xs font-nunito text-black">From</div>
              <input className="w-64 bg-[#EDEBEB] " placeholder="Shimla"></input>
            </div>
            <div className="rounded-xl bg-[#EDEBEB] p-2">
              <div className="text-xs font-nunito text-black">To</div>
              <input className="w-64 bg-[#EDEBEB] " placeholder="Chandigarh"></input>
            </div>
          </div>
        </div>
        <div className="p-2">
          <button className="bg-[#1E1E1E] text-[#FFFEFE] rounded-xl w-full p-3 font-nunito font-bold text-md">Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;
