type TimeSlot = {
  key: string;
  value: string;
};

export const generateTimeSlot = (bookedTimeSlots?: string[]): TimeSlot[] => {
  const times: TimeSlot[] = [];

  for (let time = 9; time <= 17; time++) {
    const hour12 = time % 12 === 0 ? 12 : time % 12;
    const ampm = time >= 12 ? "PM" : "AM";
    const hour = time.toString().padStart(2, "0");

    const slot1 = `${hour}:00`;
    const slot2 = `${hour}:30`;

    if (!bookedTimeSlots?.includes(slot1)) {
      times.push({
        key: `${hour12}:00 ${ampm}`,
        value: slot1,
      });
    }

    if (!bookedTimeSlots?.includes(slot2)) {
      times.push({
        key: `${hour12}:30 ${ampm}`,
        value: slot2,
      });
    }
  }

  return times;
};
