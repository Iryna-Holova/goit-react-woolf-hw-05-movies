export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const scrollToElementTop = target => {
  const elementRect = target.getBoundingClientRect();
  if (
    elementRect.top >= 0 &&
    elementRect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return;
  }
  window.scrollBy({
    top: elementRect.top - 8,
    behavior: 'smooth',
  });
};
