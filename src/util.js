const addLeadingZero = (number, size) => {
  let stringValue = String(number);
  while (stringValue.length < (size || 2)) {
    stringValue = '0' + stringValue;
  }
  return stringValue;
};

export const convertToMinutesAndSeconds = totalSeconds => {
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;
  return `${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
};

const convertMinutesToSeconds = minutes => minutes * 60 * 1000;

export const getEndTime = minutes => new Date().getTime() + convertMinutesToSeconds(minutes);

export const getCurrentTime = endTime => Math.round((endTime - new Date().getTime()) / 1000);
