function changeWatch(style) {
  const img = document.getElementById("mainWatch");

  if (style === "green") {
    img.src = "images/watch-green.png";
  }
  if (style === "silver") {
    img.src = "images/watch-silver.png";
  }
  if (style === "gold") {
    img.src = "images/watch-gold.png";
  }
}
