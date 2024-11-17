import React from "react";
import { useNavigate } from "react-router-dom";
import personData from "../../public/index.js";
const Profilecard = () => {
  const navigate = useNavigate();
  const handleViewProfile = (lat, long, name) => {
    navigate(`/map?lat=${lat}&long=${long}&name=${encodeURIComponent(name)}`);
  };

  if (!personData || personData.length === 0) {
    return <div className="text-center p-4">Currently No Data is present</div>;
  }
  return (
    <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-1">
      {personData.map((person) => (
        <div
          key={person.id}
          className="card lg:card-side bg-base-100 shadow-xl"
        >
          <figure className="flex items-center justify-center w-full">
            <img
              src={person.photograph}
              alt={`Photo of ${person.name}`}
              className="rounded-xl h-48 w-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">{person.name}</h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Age:</span>
                {person.age}
              </p>
              <p>
                <span className="font-semibold">Location:</span>
                {person.location}
              </p>
              <p className="text-sm text-gray-600 line-clamp-3">
                {person.description}
              </p>
            </div>
            <div className="card-actions justify-end mt-4">
              <button
                className="btn btn-primary"
                onClick={() =>
                  handleViewProfile(
                    person.coordinates.latitude,
                    person.coordinates.longitude,
                    person.name
                  )
                }
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profilecard;
