// APOD image template
export function apodTemplate(data) {
  return `
    <img src="${data.url}" alt="${data.title}" class="apod-image">
  `;
}

// Header template
export function headerTemplate(data) {
  return `
    <p>Something ${data.date}</p>
  `;
}

// Footer template
export function footerTemplate(data) {
  return `
    <p>Data provided by NASA</p>
  `;
}