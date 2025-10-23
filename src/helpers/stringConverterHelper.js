module.exports = (objectParams) => {
  for (let prop in objectParams) {
    // verifica e testa se a propriedade tem Id ou id na string.
    if (/Id|id/.test(prop)) {
      objectParams[prop] = Number(objectParams[prop]);
    }
    return objectParams;
  }
};