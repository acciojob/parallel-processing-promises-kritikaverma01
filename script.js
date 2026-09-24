const output = document.getElementById("output");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const btn = document.getElementById("download-images-button");

const images = [
{ url: "https://picsum.photos/id/237/200/300" },
{ url: "https://picsum.photos/id/238/200/300" },
{ url: "https://picsum.photos/id/239/200/300" }
];

// Download one image
function downloadImage(url) {
return new Promise((resolve, reject) => {
const img = new Image();

```
img.onload = () => {
  resolve(img);
};

img.onerror = () => {
  reject("Failed to download image: " + url);
};

img.src = url;
```

});
}

// Download all images
function downloadImages() {
output.innerHTML = "";
error.innerHTML = "";

loading.style.display = "block";

const promises = images.map(image => downloadImage(image.url));

Promise.all(promises)
.then(downloadedImages => {
loading.style.display = "none";

```
  downloadedImages.forEach(img => {
    output.appendChild(img);
  });
})
.catch(err => {
  loading.style.display = "none";
  error.innerHTML = err;
});
```

}

btn.addEventListener("click", downloadImages);
