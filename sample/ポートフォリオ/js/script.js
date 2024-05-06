$(function () {
  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 300);
    return false;
  });
});

let mainItem = document.querySelector(".mv-container");
let title = document.querySelector(".title");
let slide = document.querySelector(".slide");
let worksItem = [...document.querySelectorAll(".works-item")];
console.log(worksItem);

let setItemActive = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } 
    //一度activeにしたらもどさないようにこめんとあうとした
    // else {
    //   entry.target.classList.remove("active");
    // }
  });
};

let options = {
  rootMargin: "5px",
  threshold: 0.3,
};

let observer = new IntersectionObserver(setItemActive, options);

observer.observe(mainItem);
observer.observe(title);
observer.observe(slide);
i = 0;
while (i < worksItem.length) {
  observer.observe(worksItem[i]);
  i++;
}

//
const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const DELAY = 100;
const $target1 = $(".slide");
const $target2 = $(".sentence");
