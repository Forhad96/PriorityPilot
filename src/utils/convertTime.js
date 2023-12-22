export function convertTime(time) {
  const [hours, minutes] = time.split(":");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const convertedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  return convertedTime;
}

