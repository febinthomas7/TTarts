const func = async () => {
  let data = await fetch("concept.json");
  let res = await data.json();
  concept(res);
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
                <img
                  loading="lazy"
                  src=${e.url}
                  alt=${e.title}
                />
              </a>
            </div>`);
  });

  container.innerHTML = box;
};
