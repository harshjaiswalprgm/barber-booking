// utils/generateSlots.js

function format12Hour(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes} ${period}`;
}

function generateSlots(open, close, duration, buffer) {

  const slots = [];

  let start = new Date(`1970-01-01T${open}:00`);
  let end = new Date(`1970-01-01T${close}:00`);

  while (start < end) {

    slots.push(format12Hour(start));

    start.setMinutes(start.getMinutes() + duration + buffer);

  }

  return slots;
}

module.exports = generateSlots;