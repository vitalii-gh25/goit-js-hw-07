const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "48px 24px";
gallery.style.listStyle = "none";
gallery.style.padding = "";
gallery.style.margin = "100px 156px";

const imgs = gallery.querySelectorAll("li img");

imgs.forEach((img) => {
  img.style.width = "100%";
  img.style.height = "300px";
  img.style.display = "block";
  img.style.objectFit = "cover";
});

const items = gallery.querySelectorAll("li");
items.forEach((li) => {
  li.style.flex = "1 1 calc((100% - 72px) / 3)";
});
