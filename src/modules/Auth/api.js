export const getIsAuthorized = (name, password) =>
  fetch(
    `https://loft-taxi.glitch.me/auth?` +
    `username=${name}` +
    `&password=${password}`
  ).then(
    response =>
      response.status !== 200 ? Promise.reject(response) : response.json()
  );