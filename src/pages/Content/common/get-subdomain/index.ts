const NX_FRONTEND_HOST = 'app.actioner.com';

export const getSubdomain = () => {
  const parsedHost = window.location.host.split('.');
  if (parsedHost[0] === 'www' || parsedHost[0] === 'app') {
    // remove www from array
    parsedHost.shift();
  }

  const hostToBeChecked = parsedHost.slice(1);
  if (hostToBeChecked.join('.') === NX_FRONTEND_HOST) {
    const subdomain = parsedHost[0];
    if (subdomain) {
      return subdomain;
    }
    return '';
  }
  return '';
};
