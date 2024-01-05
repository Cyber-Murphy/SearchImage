const accessKey = "cDUwNnlK3xX795tba_bw-5jCcJRCmW3BEirzYT5wUv0";
const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchresults = document.querySelector(".search-results");
const showMore = document.getElementById("Show-more-button");
let inputData = "";
let pageNo = 1;

async function SearchImages() {
  inputData = inputE1.value;
  const url = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  if (pageNo === 1) {
    searchresults.innerHTML = "";
  }
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.herf = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchresults.appendChild(imageWrapper);
  });
  pageNo++
  if (pageNo>1) {
    showMore.style.display="block"
    
  }

}

formE1.addEventListener("submit", (event)=>{
event.preventDefault()
pageNo=1;
SearchImages()


})
showMore.addEventListener("click", ()=>{

SearchImages()


})

