const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

// Storing the DOM elements in the variables

let avatar = document.querySelector(".avatar-vangogh");
let userFullName = document.querySelector(".user-full-name");
let locationText = document.querySelector(".location-text");
let likeCount = document.querySelector(".like-count");
let usernameCaption = document.querySelector(".username-caption");

// Interactive elements (Image: double click, like: increase like count, comment: add a comment)
let postImage = document.querySelector(".post-image");
let like = document.querySelector(".like");
let comment = document.querySelector(".comment");

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].name);
}
