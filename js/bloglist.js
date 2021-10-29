const postsUrl = "https://wanderlust-api-123.herokuapp.com/blogposts";

async function getPosts(postsUrl) {
  try {
    const repsonse = await fetch(postsUrl);
    const jsonFromServer = await repsonse.json();
    const postsResults = jsonFromServer;
    console.log(postsResults);

    //document.querySelector(".loading").classList.add("hide");

    for (let i = 0; i < postsResults.length; i++) {
      document.querySelector(".blogList__section").innerHTML += `
      <div class="card__containerBlog">
      <a href="blog.html?id=${postsResults[i].id}">
        <img class="cardBlog" src="${postsResults[i].image_url}"/>
      </a>
        <h3 class="cardTitleBlog">${postsResults[i].title}</h3>
        </div>`;

      if (i === 9) {
        break;
      }
    }
  } catch (error) {
    document.querySelector(".alert").innerHTML = showAlertTouser(
      "An error occured (Cannot load content)",
      "error"
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}

getPosts(postsUrl);

const viewMoreBtn = document.getElementById("viewMoreBtn");
const viewMoreDiv = document.querySelector(".viewMoreDiv");

viewMoreBtn.onclick = function () {
  getPosts(postsUrl + "&page=2");
  /* viewMoreDiv.innerHTML = ` <div class="loading">
  <img
      src="https://flevix.com/wp-content/uploads/2019/07/Ajax-Preloader.gif"
      alt="Loading Gif"/>
</div>`; */
  setTimeout(function () {
    viewMoreDiv.innerHTML = ``;
  }, 1000);
  viewMoreBtn.style.display = "none";
};
