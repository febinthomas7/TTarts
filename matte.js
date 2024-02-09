const func = async () => {
  let data = await fetch("matte.json");
  let res = await data.json();
  matte(res);
};
func();

const matte = (res) => {
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
