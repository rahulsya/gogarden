import React from "react";

export default function Featuredproduct() {
  return (
    <div>
      <div className="text-center mt-12 mb-5 font-light text-3xl">
        Featured Product
        <div className="divide-y divide-gray-400 lg:px-64">
          <div className="text-center py-2"></div>
          <div className="text-center py-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <div className="bg-white px-1 py-1 rounded-lg">
            <img
              src="https://source.unsplash.com/s3dj8nsjX9Y/1600x900"
              alt="img-1"
              className="rounded-lg"
            />
          </div>
          <div className="text-md font-semibold capitalize px-2 text-green-700">
            How to Plant organically
          </div>
        </div>

        <div>
          <div className="bg-white px-1 py-1 rounded-lg">
            <img
              src="https://source.unsplash.com/4LiUI-Y2mI8/1600x900"
              alt="img-1"
              className="rounded-lg"
            />
          </div>
          <div className="text-md font-semibold capitalize px-2 text-green-700">
            How to Plant hydrophonic
          </div>
        </div>

        <div>
          <div className="bg-white px-1 py-1 rounded-lg">
            <img
              src="https://source.unsplash.com/rRPVlpT90Kg/1600x900"
              alt="img-1"
              className="rounded-lg"
            />
          </div>
          <div className="text-md font-semibold capitalize px-2 text-green-700">
            How to growing microgreens
          </div>
        </div>

        <div>
          <div className="bg-white px-1 py-1 rounded-lg">
            <img
              src="https://source.unsplash.com/BduDcrySLKM/1600x900"
              alt="img-1"
              className="rounded-lg"
            />
          </div>
          <div className="text-md font-semibold capitalize px-2 text-green-700">
            How to Make good soil
          </div>
        </div>
      </div>
    </div>
  );
}
