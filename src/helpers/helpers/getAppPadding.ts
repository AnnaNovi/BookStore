export function getAppPadding(windowWidth: number): number{
  if (windowWidth <= 375) {
    return 11;
  } else if (windowWidth <= 450) {
    return 18;
  } else if (windowWidth <= 576) {
    return 30;
  } else if (windowWidth <= 768) {
    return 50;
  } else if (windowWidth <= 1200) {
    return 80;
  } else {
    return 120;
  }
}