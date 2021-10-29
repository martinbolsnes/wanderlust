const postsUrl = '';

async function getPosts() {
  try {
    const repsonse = await fetch(
      'https://api.martinbols.tech/wp-json/wp/v2/posts/?_embed&per_page=20'
    );
    const jsonFromServer = await repsonse.json();
    const postsResults = jsonFromServer;
    console.log(postsResults);

    document.querySelector('.loadingHome').classList.add('hide');

    for (let i = 0; i < postsResults.length; i++) {
      document.querySelector('.carousel__content').innerHTML += `
      <div class="card__container">
      <a href="blog.html?id=${postsResults[i].id}">
        <img class="cardHome" src="${postsResults[i]._embedded['wp:featuredmedia']['0'].media_details.sizes['1536x1536'].source_url}"/>
        <h3 class="cardTitleHome">${postsResults[i].title.rendered}</h3>        
        </a>
        </div>`;

      if (i === 9) {
        break;
      }
    }
  } catch {
    document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000);
  }
}

getPosts(postsUrl);

const gap = 10;
const carousel = document.querySelector('.carousel');
const content = document.querySelector('.carousel__content');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = 'flex';
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = 'none';
  }
});

prev.addEventListener('click', (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = 'none';
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = 'flex';
  }
});

let width = carousel.offsetWidth;
window.addEventListener('resize', (e) => (width = carousel.offsetWidth));
