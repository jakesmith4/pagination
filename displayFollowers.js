const container = document.querySelector('.container');

const display = (followers) => {
  // console.log(followers);
  const newFollowers = followers
    .map((follower) => {
      const {
        login: userName,
        avatar_url: imageUrl,
        html_url: userPage,
      } = follower;

      return `<article class="card">
    <img src="${imageUrl}" alt="${userName}"/>
    <h4>${userName}</h4>
    <a href="${userPage}" class="btn">View Profile</a>
    </article>`;
    })
    .join('');
  container.innerHTML = newFollowers;
};

export default display;
