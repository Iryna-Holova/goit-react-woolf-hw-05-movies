export const formatDate = dateString => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

export const formatTime = timeInMinutes => {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  const formattedTime = `${hours}h ${minutes}min`;
  return formattedTime;
};

export const formatLanguage = code => {
  const lang = new Intl.DisplayNames(['en'], { type: 'language' });
  return lang.of(code);
};
