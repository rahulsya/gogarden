import React from "react";
import { ReactComponent as OnlineSvg } from "../../assets/images/online.svg";
import { ReactComponent as DeliverSvg } from "../../assets/images/deliver.svg";
import { ReactComponent as ControlSvg } from "../../assets/images/control.svg";
import Fade from "react-reveal/Fade";

export default function services() {
  return (
    <div>
      <div className="text-center font-semibold text-green-600 mt-12 mb-5 font-light text-3xl">
        <Fade>Our Service</Fade>
        <div className="divide-y divide-gray-400 lg:px-64">
          <div className="text-center py-2"></div>
          <div className="text-center py-2"></div>
        </div>
      </div>
      {/* service */}
      <div className="flex flex-col lg:flex-row items-center justify-center mb-16">
        <Fade left>
          <div className="text-3xl font-light">
            <div>We Teach Online</div>
            <div className="text-sm w-64">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
              aliquam nesciunt est? Ratione velit suscipit, quae atque iure
              optio.
            </div>
          </div>
        </Fade>
        <Fade right>
          <div>
            <OnlineSvg />
          </div>
        </Fade>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mb-16">
        <Fade left>
          <div className="hidden lg:block">
            <DeliverSvg />
          </div>
        </Fade>
        <Fade right>
          <div className="text-3xl font-light">
            <div>Deliver On Time</div>
            <div className="text-sm w-64">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
              aliquam nesciunt est? Ratione velit suscipit, quae atque iure
              optio.
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="block lg:hidden">
            <DeliverSvg />
          </div>
        </Fade>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mb-16">
        <Fade left>
          <div className="text-3xl font-light">
            <div>We Controll Your Progress</div>
            <div className="text-sm w-64">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
              aliquam nesciunt est? Ratione velit suscipit, quae atque iure
              optio.
            </div>
          </div>
        </Fade>
        <Fade right>
          <div>
            <ControlSvg />
          </div>
        </Fade>
      </div>
    </div>
  );
}
