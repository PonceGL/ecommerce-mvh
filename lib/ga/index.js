// registrar el pageview con su URL
export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// registrar los eventos específicos que suceden.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
