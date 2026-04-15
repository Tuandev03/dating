import { useState } from "react";
import FallingEffects from "./components/fallingEffects/FallingEffects";
import DateTimePicker from "./components/dateTimePicker/DateTimePicker";

const App = () => {
  const [noPosition, setNoPosition] = useState({ top: "auto", left: "auto" });
  const [isMoved, setIsMoved] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showPlaceSelection, setShowPlaceSelection] = useState(false);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedPlaces, setSelectedPlaces] = useState([]); // Không có giá trị mặc định
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [showFoodSelection, setShowFoodSelection] = useState(false);

  const moveNoButton = () => {
    setIsMoved(true);
    setNoPosition({
      top: Math.random() * 80 + "vh",
      left: Math.random() * 80 + "vw",
    });
  };

  const handleSelectFood = (food) => {
    setSelectedFoods((prev) =>
      prev.includes(food) ? prev.filter((f) => f !== food) : [...prev, food]
    );
  };

  const handleSelectPlace = (place) => {
    setSelectedPlaces((prev) =>
      prev.includes(place) ? prev.filter((p) => p !== place) : [...prev, place]
    );
  };

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-[#1a1a1a]">
      <FallingEffects />

      {showDateTimePicker && (
        <div className="absolute z-50 flex justify-center items-center w-full h-full">
          <DateTimePicker />
        </div>
      )}

      {showPlaceSelection && !showDateTimePicker && (
        <div className="absolute bgDiv z-40 border border-pink-200 w-[500px] p-6 bg-opacity-40 bg-white text-white shadow-pink-500 shadow-xl rounded-xl text-center">
          <h1 className="text-3xl font-bold text-pink-400">Pick a place...</h1>
          <p className="text-lg mt-2 text-gray-600 font-semibold">
            Where would you like to go?
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              "☕ Café",
              "🍽️ Restaurant",
              "📽️ Cinema",
              "🌳 Park",
              "🛍️ Mall",
              "🎊 Somewhere Else",
            ].map((place, index) => (
              <button
                key={index}
                className={`p-3 rounded-lg  text-white transition ${
                  selectedPlaces.includes(place)
                    ? "bg-pink-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-pink-500"
                }`}
                onClick={() => handleSelectPlace(place)}
              >
                {place}
              </button>
            ))}
          </div>

          {selectedPlaces.length > 0 && (
            <button
              className="mt-6 px-6 btn py-3 bg-pink-500 text-white rounded-full text-lg shadow-lg hover:scale-105 duration-200"
              onClick={() => setShowDateTimePicker(true)}
            >
              Continue ♥
            </button>
          )}
        </div>
      )}

      {showCard && !showPlaceSelection && !showDateTimePicker && (
        <div className="absolute z-40 border bgDiv border-pink-200 w-[400px] h-[350px] bg-white bg-opacity-40 shadow-pink-500 shadow-xl rounded-xl text-center">
          <h1 className="text-3xl font-bold">Yayy!!!</h1>
          <p className="text-lg mt-2 font-semibold mb-0 text-gray-600">
            Nice to meet u!!!
          </p>
          <p className="text-lg font-semibold mb-0 text-gray-600">
            I'll make it special, I promise!
          </p>
          <div className="flex justify-center">
            <iframe src="https://lottie.host/embed/495840e8-ed83-4320-8008-bc0d760ce72c/yI6M7pDXfd.lottie"></iframe>
          </div>
          <button
            className="mt-4 buttonChoose px-6 py-3 bg-pink-500 text-white rounded-full text-lg shadow-lg hover:scale-105 duration-200"
            onClick={() => setShowPlaceSelection(true)}
          >
            Let’s choose a place ♥
          </button>
        </div>
      )}

      {!showCard && !showPlaceSelection && !showDateTimePicker && (
        <div className="absolute flex justify-center items-center w-full">
          <div className="z-40 border bgDiv border-pink-200 w-[400px] h-[200px] bg-white bg-opacity-40 shadow-pink-500 shadow-xl rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-2xl text-pink-400 font-bold">Dear, bà xãaaa 💌</h1>
            <p className="text-lg mt-4 font-semibold text-gray-600">
              Will you go on a date with me?
            </p>
            <div className="flex justify-center items-center space-x-6 mt-4">
              <button
                className="py-2 px-6 bg-pink-400 rounded-lg text-white font-bold hover:scale-110 duration-200"
                onClick={() => setShowCard(true)}
              >
                Yes!
              </button>
              <button
                className={`py-2 px-6 bg-pink-400 rounded-lg text-white font-bold hover:scale-110 duration-200 ${
                  isMoved ? "absolute" : "relative"
                }`}
                style={{
                  top: isMoved ? noPosition.top : "auto",
                  left: isMoved ? noPosition.left : "auto",
                }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
