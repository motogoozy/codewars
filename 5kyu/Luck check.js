// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c

function luckCheck(ticket) {
  const nums = '0123456789'.split('');
  
  if (ticket === '' || ticket.split('').some((char) => !nums.includes(char))) {
    return false;
  }
  
  const calcSum = str => str.split('').reduce((acc, char) => acc += parseInt(char), 0)
    
  const isEven = ticket.length % 2 === 0;
  
  const a = isEven ? ticket.slice(0, ticket.length / 2) : ticket.slice(0, Math.floor(ticket.length / 2));
  const b = isEven ? ticket.slice(Math.floor(ticket.length / 2)) : ticket.slice(Math.ceil(ticket.length / 2));
  
  return calcSum(a) === calcSum(b);
}
