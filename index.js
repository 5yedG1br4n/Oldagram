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

const mainSectionEl = document.querySelector(".main-section");
let postsHolder = "";

for (let i = 0; i < posts.length; i++) {
  postsHolder += `
            <section class="post-container">
                <div class="post-header">
                    <img
                    src="${posts[i].avatar}"
                    alt="${posts[i].name}s image"
                    class="posters-profile-image"
                    />
                    <div class="header-content">
                        <h2 class="posters-name">${posts[i].name}</h2>
                        <h3 class="posters-location">${posts[i].location}</h3>
                    </div>
                </div>
                <img
                    src="${posts[i].post}"
                    alt="A self portrait by ${posts[i].name}"
                    class="posters-post"
                />
                <div class="post-information">
                    <div class="post-interactions">
                    <img
                        src="images/icon-heart.png"
                        alt="A heart icon for likes"
                        class="like-logo interaction-logo"
                    />
                    <img
                        src="images/icon-comment.png"
                        alt="A comment Icon"
                        class="comment-logo interaction-logo"
                    />
                    <img
                        src="images/icon-dm.png"
                        alt="A paper airplane"
                        class="dm-logo interaction-logo"
                    />
                    </div>
                    <h3 class="post-likes">${posts[i].likes} likes</h3>
                    <p class="post-decription">
                        <span class="bold">${posts[i].username}</span> ${posts[i].comment}
                    </p>
                </div>
            </section>
    `;
}

mainSectionEl.innerHTML = postsHolder;
