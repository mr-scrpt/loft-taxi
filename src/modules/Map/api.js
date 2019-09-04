const BASE_URL = `https://loft-taxi.glitch.me`;

export const getAddressList = () =>
  fetch(`${BASE_URL}/addressList`
  ).then(
    res =>
      res.status !== 200 ? Promise.reject(res) : res.json()
  );

export const getCoordsPoint = (from, to) =>
  fetch(
    `https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`
  ).then(
    res =>
      res.status !== 200 ? Promise.reject(res) : res.json()
  );