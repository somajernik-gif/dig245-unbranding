
/* javascript */
let companyName = document.querySelector("h1");

companyName.addEventListener("mouseover", function () {
  this.innerText = "LinkedOut";
});

companyName.addEventListener("mouseout", function () {
  this.innerText = "LinkedIn";
});
let description = document.querySelector(".description");

description.addEventListener("mouseover", function () {
  this.innerText = "Compare yourself to professionals.";
});

description.addEventListener("mouseout", function () {
  this.innerText = "Connect with professionals.";
});

let post = document.querySelector(".post");
let postHeading = document.querySelector("h2");
let postText = document.querySelector(".postText");

post.addEventListener("mouseover", function () {
  postHeading.innerText = "Your reaction";
  postText.innerText = "“Am I the only one falling behind?”";
});

post.addEventListener("mouseout", function () {
  postHeading.innerText = "A connection’s update";
  postText.innerText = "“Excited to announce my next chapter!”";
});
let connectButton = document.querySelector("button");

connectButton.addEventListener("mouseover", function () {
  this.innerText = "Compare";
});

connectButton.addEventListener("mouseout", function () {
  this.innerText = "Connect";
});

connectButton.addEventListener("click", function () {
  postHeading.innerText = "Your reaction";
  postText.innerText = "“Am I the only one falling behind?”";
});

console.log("LinkedOut — Unbranding project");

console.log("My project explores how professional networking can turn into comparison. I kept LinkedIn's blue-and-white colors and recognizable page layout, but changed connection into comparison. Hovering reveals the worry behind a polished career announcement. My intention is to make viewers question whether seeing other people's achievements always makes them feel more connected.");

console.log("Design reference: LinkedIn company-page screenshot used for my Figma mock-up.");

console.log("Coding reference: Critical Web Design, Chapter 3.");