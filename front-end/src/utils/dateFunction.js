function adicionaZero(numero) {
  const FUNC_NUMBER = 9;
  if (numero <= FUNC_NUMBER) return `0${numero}`;
  return numero;
}

const formatDate = (newDate) => {
  const date = new Date(newDate);
  const formatedDate = `${adicionaZero(date.getDate())}/${adicionaZero(
    date.getMonth() + 1,
  )}/${date.getFullYear()}`;
  return formatedDate;
};

export default formatDate;
