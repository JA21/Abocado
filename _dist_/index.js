/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

/* const { clearConfigCache } = require("prettier"); */

const baseurl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app')



const formatPrice = (price) => {
  //intl
  // 1 format money
  //2 format date
  const newPrice= new window.Intl.NumberFormat('es', {
    style: 'currency',
    currency: 'COP'

  }).format(price)
  return newPrice
}


//web api
//Conecte to server
async function fetchData() {
  const response = await fetch(`${baseurl}/api/avo`),
    data = await response.json(),
    allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    image.src = `${baseurl}${item.image}`;
    image.className = "bg-green-300 drop-shadow-2xl bg-gradient-to-tl block margin-image  rounded-full h-32 w-32 shadow-2xl ";
    // create title
    const title = document.createElement("h2");
    title.textContent = item.name;
    title.className = 'text-2xl text-red-600';

    // create price
    const price = document.createElement("div");
    price.className = "text-xl"
    price.textContent = formatPrice(item.price);

    const container = document.createElement("div");
    container.className = "flex items-center p-1 space-y-4 margin-image"
    container.append(image, title, price);

    allItems.push(container);
  });

  appNode.append(...allItems)
}

fetchData();
console.log('Happy hacking :)')

