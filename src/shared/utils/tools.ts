const onBackToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const clearPathname = (pathname: string) => {
  if (!pathname) return "/";
  const segments = pathname.split("/");
  segments.splice(0, 1);

  console.log(pathname);
  return "/" + segments[1];
};

const redirectedPathName = (locale: string, pathname) => {
  if (!pathname) return "/";
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/");
};

const pathnameWithLocale = (locale: string, pathname: string) => {
  if (!pathname) return `/${locale}`;

  return `/${locale}${pathname}`;
};

const scrollToAnchor = (anchorName, offset?) => {
  if (!offset) {
    offset = 0;
  }
  if (anchorName) {
    // найти якорь
    let anchorElement = document.querySelector(`#${anchorName}`);
    // Если привязка, соответствующая идентификатору, существует, перейти к привязке
    const y = anchorElement.getBoundingClientRect().top + offset;
    if (anchorElement) {
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }
};

export {
  onBackToTop,
  redirectedPathName,
  clearPathname,
  pathnameWithLocale,
  scrollToAnchor,
};
