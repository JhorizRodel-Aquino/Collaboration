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
