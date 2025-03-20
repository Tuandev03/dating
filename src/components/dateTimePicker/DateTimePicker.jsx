import { useState } from "react";
import { DatePicker, TimePicker, Button } from "antd";
import "antd/dist/reset.css";

const foodOptions = [
  { id: 1, name: "Bún đậu mắm tôm", icon: "🍲" },
  { id: 2, name: "Phở", icon: "🍜" },
  { id: 3, name: "Bún Bò", icon: "🍜" },
  { id: 4, name: "Mì Quảng", icon: "🍜" },
  { id: 5, name: "Mỳ cay", icon: "🌶️" },
  { id: 6, name: "Xiên bẩn", icon: "😂" },
];

const drinkOptions = [
  { id: 1, name: "Coffee", icon: "☕" },
  { id: 2, name: "Boba Tea", icon: "🧋" },
  { id: 3, name: "Matcha Latte", icon: "🍵" },
  { id: 4, name: "Smoothie", icon: "🥤" },
];

export default function DateTimePicker() {
  const [dateTimes, setDateTimes] = useState([{ date: null, time: null }]);
  const [showFoodOptions, setShowFoodOptions] = useState(false);
  const [showDrinkOptions, setShowDrinkOptions] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  const handleAddOption = () => {
    setDateTimes([...dateTimes, { date: null, time: null }]);
  };

  const handleRemoveOption = (index) => {
    setDateTimes(dateTimes.filter((_, i) => i !== index));
  };

  const handleDateChange = (date, index) => {
    const newDateTimes = [...dateTimes];
    newDateTimes[index].date = date;
    setDateTimes(newDateTimes);
  };

  const handleTimeChange = (time, index) => {
    const newDateTimes = [...dateTimes];
    newDateTimes[index].time = time;
    setDateTimes(newDateTimes);
  };

  const handleFoodSelection = (food) => {
    setSelectedFoods((prev) =>
      prev.includes(food) ? prev.filter((f) => f !== food) : [...prev, food]
    );
  };

  const handleDrinkSelection = (drink) => {
    setSelectedDrinks((prev) =>
      prev.includes(drink) ? prev.filter((d) => d !== drink) : [...prev, drink]
    );
  };

  return (
    <div className="flex flex-col bgDiv items-center bg-white bg-opacity-40 p-6 rounded-xl shadow-pink-500 shadow-xl w-[400px]">
      {!showFoodOptions && !showDrinkOptions && (
        <>
          <h1 className="text-2xl font-bold text-pink-400">Pick a time...</h1>
          {dateTimes.map((dt, index) => (
            <div key={index} className="flex items-center gap-4 mt-4">
              <DatePicker onChange={(date) => handleDateChange(date, index)} />
              <TimePicker onChange={(time) => handleTimeChange(time, index)} />
              {index > 0 && (
                <Button danger onClick={() => handleRemoveOption(index)}>
                  ✖
                </Button>
              )}
            </div>
          ))}
          <button
            onClick={handleAddOption}
            className="text-pink-400 mt-4 underline"
          >
            + Add another option
          </button>
          {dateTimes.every((dt) => dt.date && dt.time) && (
            <button
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full"
              onClick={() => setShowFoodOptions(true)}
            >
              Confirm ♥
            </button>
          )}
        </>
      )}

      {showFoodOptions && !showDrinkOptions && (
        <>
          <h2 className="text-xl font-semibold text-pink-400">
            Pick your food
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {foodOptions.map((food) => (
              <div
                key={food.id}
                className={`px-4 py-2 text-white flex justify-center items-center rounded-lg cursor-pointer border-2 ${
                  selectedFoods.includes(food.name)
                    ? "bg-pink-500 border-white"
                    : "bg-gray-600 border-gray-400"
                }`}
                onClick={() => handleFoodSelection(food.name)}
              >
                {food.icon} {food.name}
              </div>
            ))}
          </div>
          {selectedFoods.length > 0 && (
            <button
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full"
              onClick={() => setShowDrinkOptions(true)}
            >
              Confirm ♥
            </button>
          )}
        </>
      )}

      {showDrinkOptions && !showFinalScreen && (
        <>
          <h2 className="text-xl font-semibold text-pink-400">
            Pick your drink
          </h2>
          <div className="grid  grid-cols-2 gap-4 mt-4">
            {drinkOptions.map((drink) => (
              <div
                key={drink.id}
                className={`px-4 py-2 rounded-lg text-white cursor-pointer border-2 ${
                  selectedDrinks.includes(drink.name)
                    ? "bg-pink-500 border-white"
                    : "bg-gray-800 border-gray-400"
                }`}
                onClick={() => handleDrinkSelection(drink.name)}
              >
                {drink.icon} {drink.name}
              </div>
            ))}
          </div>
          {selectedDrinks.length > 0 && (
            <button
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full"
              onClick={() => setShowFinalScreen(true)}
            >
              Confirm 🎉
            </button>
          )}
        </>
      )}

      {showFinalScreen && (
        <div className="text-center  z-50  text-white p-6 rounded-xl  w-[400px]">
          <h1 className="text-3xl font-bold text-pink-400 flex items-center justify-center gap-2">
            All Set! ❤️
          </h1>
          <hr className="border-pink-500 w-1/2 mx-auto my-2" />
          <p className="text-lg font-semibold mt-4">
            🎉 Can’t wait to see you!
          </p>
          <p className="mt-2 text-pink-500">Our date will be perfectly set.</p>
          <p className="mt-2 text-pink-500">
            I'll make it special to the best of my ability.
          </p>
        </div>
      )}
    </div>
  );
}
