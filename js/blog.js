const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getPosts(postId) {
  try {
    const response = await fetch(
      'https://api.martinbols.tech/wp-json/wp/v2/posts/' + postId + '?_embed'
    );
    const jsonResults = await response.json();
    const postsArray = jsonResults;
    console.log(postsArray);

    document.title = postsArray.title.rendered + ' - Wanderlust';

    document.querySelector(
      '.blog__heading'
    ).innerHTML = `${postsArray.title.rendered}`;

    document.querySelector('.blogHero').style.backgroundImage = `
    url('${postsArray._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}')`;

    document.querySelector(
      '.modal03'
    ).style.backgroundImage = `url('${postsArray._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}')`;

    document.querySelector(
      '.wpContent'
    ).innerHTML = `${postsArray.content.rendered}`;
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
