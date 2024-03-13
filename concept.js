let loader = document.querySelector(".loader");
const func = async () => {
  let data = await fetch("concept.json");
  let res = await data.json();
  loader.style.display = "flex";
  setTimeout(() => {
    concept(res);
    loader.style.display = "none";
  }, 2000);
};
func();

const concept = (res) => {
  let container = document.querySelector(".containerr");

  let box = "";
  res.map((e) => {
    return (box += `<div class="boxx" ${e.id}>
   
    <a
    href=${e.url}
    data-lightbox="models"
    data-title=${e.title}
  >
  <div class="boxShade"> ${e.title}</div>
  </a>
              <img
                  loading="lazy"
                  src=${e.url}
                  alt=${e.title}
                />
            </div>`);
  });

  container.innerHTML = box;
};
