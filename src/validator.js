//El objeto validator posee dos métodos:
const validator = {

  //1. método isValid xa validar el número de tarjeta (typeof string)
  isValid: (cardNumber) => {

    //Aplicando el algoritmo de Luhn
    //1.1. Obtener un arreglo con los #s de la tarjeta
    let cardNumberArray = Array.from(cardNumber).map(x => parseInt(x));

    //1.2. Invertir el orden del array
    cardNumberArray = cardNumberArray.reverse();

    const newCardArray = cardNumberArray
    
    .map((currElement, index) => {
      //1.3. Números de posición par se multiplican x2
      if (index % 2 === 1) {
        if (currElement * 2 >= 10) {
          return(currElement = currElement * 2 - 9);
        } else {
          return(currElement = currElement * 2);
        }
      } else return currElement
    })

    .reduce((acumulator, currElement) => {
      //1.4. Obtener suma de los números del array
      return acumulator + currElement;
    });

    //1.5. Verificar si la suma es divisible por 10
    return newCardArray % 10 === 0;
  },

  //2. Método maskify
  maskify: (cardNumber) => {
    let mask = "";

    //enmascarar todos los dígitos a excepción de los cuatro últimos
    for (let i = 0; i < cardNumber.length; i++){
      if (i <= cardNumber.length - 5){
        mask += "#";
      } else {
        mask += cardNumber[i];
      }
    }
    return mask;
  }
};

export default validator;
