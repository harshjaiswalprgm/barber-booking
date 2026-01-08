// utils/generateSlots.js
function generateSlots(open, close, duration, buffer) {
  let slots = [];
  let start = new Date(`1970-01-01T${open}:00`);
  let end = new Date(`1970-01-01T${close}:00`);

  while (start < end) {
    slots.push(start.toTimeString().slice(0,5));
    start.setMinutes(start.getMinutes() + duration + buffer);
  }
  return slots;
}

module.exports = generateSlots;
