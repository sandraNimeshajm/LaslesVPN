const date = () => {
  const dateFooter = new Date().getFullYear();
  document.querySelector('.year').innerHTML = dateFooter;
}

export default date;