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
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 1,
    },
  },
});


var homeBanner__sldr = tns({
  container: ".homeBanner__slider",
  items: 1,
  speed: 500,
  gutter: 0,
  slideBy: "1",
  axis: "vertical",
  // responsive: {
  //   1250: {
  //     items: 3,
  //   },
  //   200: {
  //     items: 1,
  //   },
  // },
});

