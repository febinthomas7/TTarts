const test = async () => {
  let data = await fetch("scroll.json");
  let res = await data.json();
  Scroll(res);
};

test();
const Scroll = (res) => {
  let container = document.querySelector(".contain");

  let box = "";
  res.map((e) => {
    return (box += `<div  class="col-sm-6 col-md-3">
    <div class="movie--isloading">
      <div class="loading-image"></div>
       </div>
    </div>`);
  });

  container.innerHTML = box;
};
