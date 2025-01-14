function countLinks() {
  const links = document.querySelectorAll("a");
  document.getElementById(
    "result"
  ).textContent = `Número total de enlaces: ${links.length}`;
}

function secondLastLink() {
  const links = document.querySelectorAll("a");
  if (links.length >= 2) {
    document.getElementById(
      "result"
    ).textContent = `La dirección del penúltimo enlace es: ${
      links[links.length - 2].href
    }`;
  } else {
    document.getElementById("result").textContent =
      "No hay suficientes enlaces para mostrar el penúltimo.";
  }
}

function countTwitterLinks() {
  const links = document.querySelectorAll("a");
  const twitterLinks = Array.from(links).filter(
    (link) => link.href === "https://www.twitter.com/"
  );
  document.getElementById(
    "result"
  ).textContent = `Número de enlaces a Twitter: ${twitterLinks.length}`;
}

function linksInThirdParagraph() {
  const paragraphs = document.querySelectorAll("#información p");
  const thirdParagraph = paragraphs[2];
  if (thirdParagraph) {
    const links = thirdParagraph.querySelectorAll("a");
    document.getElementById(
      "result"
    ).textContent = `Número de enlaces en el tercer párrafo: ${links.length}`;
  } else {
    document.getElementById("result").textContent =
      "El tercer párrafo no existe.";
  }
}
