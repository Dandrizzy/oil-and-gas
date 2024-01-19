const myEmail = 'EngrJMEsquivel@outlook.com';
export const handleMail = () => {
  const mailToLink = `mailto:${myEmail}`;
  window.location.href = mailToLink;
};

const myNumber = '+12253959708';
export const handleCall = () => {
  const telToLink = `tel:${myNumber}`;
  window.location.href = telToLink;
};
