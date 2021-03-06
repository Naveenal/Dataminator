var gcvisionapi = require(__dirname + '/../node_modules/gc-vision-api/src/gc-vision-api');

var VisionApi = gcvisionapi.VisionApi;
var Feature= gcvisionapi.Feature;
var Image = gcvisionapi.Image;

var client = VisionApi.init(
    {
      keyFileName: process.env.GOOGLE_APPLICATION_CREDENTIALS
    });

module.exports = {
  visionImage: function(imageURL,feature, callback){
    var request = client.request();
    var imageGS = Image.bucket(imageURL);

  request
  .image(imageGS)
  .feature(Feature[feature], 2)
  .subscribe(function(result){
    console.log(result)
    var err = null;
    callback(err, result);
  });
  }
}
