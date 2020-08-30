import React from "react";
import { ReactComponent as OnlineSvg } from "../../assets/images/online.svg";
import { ReactComponent as DeliverSvg } from "../../assets/images/deliver.svg";
import { ReactComponent as ControlSvg } from "../../assets/images/control.svg";

export default function services() {
  return (
    <div>
      <div className="text-center mt-12 mb-5 font-light text-3xl">
        Our Service
        <div className="divide-y divide-gray-400 lg:px-64">
          <div className="text-center py-2"></div>
          <div className="text-center py-2"></div>
        </div>
      </div>
      {/* service */}
      <div className="flex flex-col lg:flex-row items-center justify-center mb-16">
        <div className="text-3xl font-light">
          <div>Full Online Course</div>
          <div className="text-sm w-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
            aliquam nesciunt est? Ratione velit suscipit, quae atque iure optio.
          </div>
        </div>
        <div>
          <OnlineSvg className="h-64" style={{ width: 400 }} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mb-16">
        <div>
          <DeliverSvg className="h-64" style={{ width: 400 }} />
        </div>
        <div className="text-3xl font-light">
          <div>Fast Deliver</div>
          <div className="text-sm w-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
            aliquam nesciunt est? Ratione velit suscipit, quae atque iure optio.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mb-16">
        <div className="text-3xl font-light">
          <div>Controll Your Progress</div>
          <div className="text-sm w-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
            aliquam nesciunt est? Ratione velit suscipit, quae atque iure optio.
          </div>
        </div>
        <div>
          <ControlSvg className="h-64" style={{ width: 400 }} />
        </div>
      </div>
    </div>
  );
}
