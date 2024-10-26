// import { apodTemplate } from './templates.mjs';

// async function setHeaderImage() {
//     document.querySelector(".changing-image > img").src = apodTemplate(data);
// }

import { headerTemplate, footerTemplate } from "./templates.mjs";

function setHeader(data) {
  const headerEl = document.querySelector("header");
  headerEl.innerHTML = headerTemplate(data);
}

function setFooter(data) {
  const footerEl = document.querySelector("footer");
  footerEl.innerHTML = footerTemplate(data);
}

export default function setHeaderFooter(apodData) {
  setHeader(apodData);
  setFooter(apodData);
}
