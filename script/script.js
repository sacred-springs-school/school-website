// script.js
async function injectHTML(filePath, elemId) {
  const response = await fetch(filePath);
  console.log(response);
  const text = await response.text();
  document.getElementById(elemId).innerHTML = text;
}

document.getElementById("header-section").innerHTML = renderNavbar("about");
// injectHTML('./modules/header.html', 'header-section');
injectHTML('./modules/hero-section.html', 'hero-section');