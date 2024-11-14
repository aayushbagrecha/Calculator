import React, { useState } from 'react';
import { Location } from './Location';
import { DateRange } from './DateRange';
import { Budget } from './Budget';
import { Tags } from './Tags';

const PlanningPage = () => {
  const [planData, setPlanData] = useState({
    currentLocation: '',
    desiredDestination: '',
    startDate: new Date(),
    endDate: new Date(),
    budget: [0, 50000],
    tags: []
  });

  const handleCurrentLocationChange = (currentLocation) => {
    setPlanData(prev => ({ ...prev, currentLocation }));
  };

  const handleDesiredDestinationChange = (desiredDestination) => {
    setPlanData(prev => ({ ...prev, desiredDestination }));
  };

  const handleDateChange = (startDate, endDate) => {
    setPlanData(prev => ({ ...prev, startDate, endDate }));
  };

  const handleBudgetChange = (budget) => {
    setPlanData(prev => ({ ...prev, budget }));
  };

  const handleTagsChange = (tags) => {
    setPlanData(prev => ({ ...prev, tags }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted plan data:', planData);
  };

  return (
    <div className="relative flex h-screen bg-gray-100">
      {/* Background Image */}
      <img src="/planning-page-image.jpg" alt="Travel Background" className="w-full h-full object-cover" />

      {/* Black Overlay on Image */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Left Side: Form Section */}
      <div className="absolute w-2/5 top-[45%] left-[5%] transform -translate-y-1/2 p-10 bg-white shadow-lg rounded-lg overflow-y-auto z-10">
        <h1 className="text-4xl font-bold text-gray-700 mb-4 mt-[-2%]">Plan Your Trip</h1>
        <hr className="border-t-1 border-gray-300 mb-6" /> {/* Thin line break */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Location 
            currentLocation={planData.currentLocation} 
            desiredDestination={planData.desiredDestination}
            onCurrentLocationChange={handleCurrentLocationChange} 
            onDesiredDestinationChange={handleDesiredDestinationChange} 
          /> 
          <DateRange 
            startDate={planData.startDate} 
            endDate={planData.endDate} 
            onChange={handleDateChange} 
          />
          <Budget budget={planData.budget} onChange={handleBudgetChange} />
          <Tags tags={planData.tags} onChange={handleTagsChange} />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Submit Plan
          </button>
        </form>
      </div>

      {/* Right Side: Text Overlay on Image */}
      <div className="absolute right-0 w-3/5 h-full flex flex-col items-center justify-center p-10 text-white z-10">
        <h2 className="text-5xl font-serif text-center mb-[5%] ml-[10%]">Let's cook up some plans for you!</h2>
        <p className="text-2xl font-serif text-center mb-[10%] ml-[10%]">From dream destinations to curated itineraries, we’re here to bring your travel vision to life. Let’s get started!</p>
      </div>
    </div>
  );
};

export default PlanningPage;
