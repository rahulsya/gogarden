import React, { Component } from "react";

export default class DetailProduct extends Component {
  state = {
    detail: {
      id: 1,
      title: "How to Plant Tomato organically",
      imgUrl: ["O70hwncRDC8", "4PG6wLlVag4", "-qt_TCQxFrw"],
      price: 20,
      description:
        "Minimal techno is a minimalist subgenre of techno music. It ischaracterized by a stripped-down aesthetic that exploits",
      tools: ["organic soil", "tomato seed", "polybag", "guide book"],
    },
  };
  render() {
    const { detail } = this.state;
    return (
      <div className="container mx-auto px-5 mt-5 ">
        <div className="text-center text-2xl font-semibold text-green-500 mb-5">
          {detail.title}
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-4 px-5">
          <div className="row-div-1 lg:row-span-2 col-span-3 lg:col-span-2">
            <img
              src={`https://source.unsplash.com/${detail.imgUrl[0]}/1600x900`}
              alt=""
            />
          </div>
          <div className="row-span-1 col-span-3 lg:col-span-1">
            {" "}
            <img
              src={`https://source.unsplash.com/${detail.imgUrl[1]}/1600x900`}
              alt=""
            />
          </div>
          <div className="row-span-1 col-span-3 lg:col-span-1">
            {" "}
            <img
              src={`https://source.unsplash.com/${detail.imgUrl[2]}/1600x900`}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center px-5">
          <div className="font-semibold w-1/2 mb-5">
            <span>Description</span>
            <div className="font-light">{detail.description}</div>
          </div>

          <div className="font-semibold w-1/2 mb-4">
            <div className="mb-2">Tools you will get</div>
            {detail.tools.map((tool) => {
              return (
                <button className="bg-green-500 rounded-full px-3 py-1 text-lg font-semibold text-gray-100 mr-2">
                  {tool}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
