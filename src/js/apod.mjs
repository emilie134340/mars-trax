const baseUrl = "https://api.nasa.gov/planetary/apod";
const apiKey = import.meta.env.API_KEY;

// get json object response from api call  (reused from nps)
export async function getJson(url) {
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey
      }
    };
    let data = {};
    const response = await fetch(baseUrl + url, options);
    if (response.ok) {
      data = await response.json();
    } else throw new Error("response not ok");
    return data;
  }
  
// getting the data from the json maybe
// i want to get just the image and the title back and i'm pretty sure this is getting the whole ur
export async function getApodData() {
    const apodData = await getJson(`${baseUrl}`);
    return apodData.data;
}