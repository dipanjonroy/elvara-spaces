export const generateTimeSlot = () => {
  const times = [];

  for (let time = 9; time <= 17; time++) {
    const hour12 = time % 12 === 0 ? 12 : time % 12;
    const ampm = time >= 12 ? "PM" : "AM";

    times.push({
      key: `${hour12}:00 ${ampm}`,
      value: `${time.toString().padStart(2, "0")}:00`,
    });

    times.push({
      key: `${hour12}:30 ${ampm}`,
      value: `${time.toString().padStart(2, "0")}:30`,
    });
  }
  return times;
};
