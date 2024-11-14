import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const Budget = ({ budget, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-gray-700">Budget Range</label>
      <Slider
        range
        min={100}
        max={10000}
        step={50}
        value={budget}
        onChange={onChange}
        className="mb-4"
      />
      <div className="flex justify-between text-gray-700">
        <span>${budget[0]}</span>
        <span>${budget[1]}</span>
      </div>
    </div>
  );
};