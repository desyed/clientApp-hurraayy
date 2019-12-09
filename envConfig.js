module.exports = {
  debug: true,
  prefix: "/api/v1",
  //file path s3
  filePath: "https://ctr-imgs.s3-us-west-2.amazonaws.com/imgs/",

  // API Level Settings
  liveAPI: location.origin.includes("localhost")
    ? "http://localhost:1337"
    : "https://catchthereview.com",
  localAPI: "http://localhost:1337",
  // uploaded image path for service
  imgpath: "https://ctr-imgs.s3-us-west-2.amazonaws.com/imgs/ServiceImage/"
};
