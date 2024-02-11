const func = async () => {
  let data = await fetch("illustration.json");
  let res = await data.json();
  illustration(res);
};
func();

const illustration = (res) => {
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
