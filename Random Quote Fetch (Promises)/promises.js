let quotearea = document.getElementById('quotearea');

let quote = async () => {
  let data = await fetch("https://dummyjson.com/quotes/random");
  let res = await data.json();
  console.log(res.quote);
  quotearea.innerHTML = res.quote;
};

quote();
