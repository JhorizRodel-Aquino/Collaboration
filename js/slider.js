var slider2 = tns({
  container: ".services__slider",
  items: 3,
  speed: 200,
  gutter: 20,
  slideBy: "1",
  rewind: true,
  containerControls: "#services__btn",
  prevButton: ".servicesPress__prev",
  nextButton: ".servicesPress__next",
  responsive: {
    1250: {
        items: 3,
    },
    200: {
        items: 1,
    },
  },
});
var slider3 = tns({
  container: ".services__slider2",
  items: 3,
  speed: 200,
  gutter: 20,
  slideBy: "1",
  rewind: true,
  containerControls: "#services__btn",
  prevButton: ".servicesPress__prev",
  nextButton: ".servicesPress__next",
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 1,
    },
  },
});
var homeService2__sldr = tns({
  container: ".homeService2__slider",
  items: 3,
  speed: 500,
  gutter: 30,
  slideBy: "1",
  containerControls: "#homeService2__ctrls",
  prevButton: ".homeService2__prev",
  nextButton: ".homeService2__next",
  rewind: true,
});

var homeBanner__sldr = tns({
  container: ".homeBanner__slider",
  items: 1,
  speed: 500,
  gutter: 0,
  slideBy: "1",
  axis: "vertical",
  controls: false,
  autoplay: true,
});
