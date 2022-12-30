export const phoneNumberBuilder = (number) => {
    //Filter only numbers from the input
  let cleaned = ('' + number).replace(/\D/g, '');
  
  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  };
}