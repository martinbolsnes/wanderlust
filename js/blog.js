const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getPosts(postId) {
  try {
    const response = await fetch(
      "https://wanderlust-api-123.herokuapp.com/blogposts/" + postId
    );
    const jsonResults = await response.json();
    const postsArray = jsonResults;
    console.log(postsArray);

    document.title = postsArray.title + " - Wanderlust";

    document.querySelector(".blog__heading").innerHTML = `${postsArray.title}`;

    document.querySelector(".blogHero").style.backgroundImage = `
    url('${postsArray.image_url}')`;

    document.querySelector(
      ".modal03"
    ).style.backgroundImage = `url('${postsArray.image_url}')`;

    document.querySelector(
      ".wpContent-text"
    ).innerHTML = `${postsArray.description}`;
  } catch {
    /* document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    ); */
  } finally {
    /* setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000); */
  }
}

getPosts(id);
