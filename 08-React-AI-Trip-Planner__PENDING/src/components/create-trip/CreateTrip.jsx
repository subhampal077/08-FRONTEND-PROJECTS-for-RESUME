import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CreateTrip = () => {
  return (
    <div
      className="
     mt-10 px-5 sm:px-10 md:px-28"
    >
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences ⛺🏝🌄
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>

          {/* from npm google-places-autocomplete-package */}
          <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_API_KEY} />
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
