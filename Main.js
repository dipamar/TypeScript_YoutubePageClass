// create a class VideoPage class. Here I am using private members and public methods
var VideoPage = /** @class */ (function () {
    //constructor to initialize members
    function VideoPage(VideoId, VideoTitle, PublishDate, Duration, VideoUrl, RequiredViewerAge, About, VideoCategory, VideoSubcategory, OriginCountry) {
        var _this = this;
        this.ViewCount = 0;
        this.LikeCount = 0;
        this.DislikeCount = 0;
        this.ShareCount = 0;
        this.SuscriptionCount = 0;
        this.CommentsCount = 0;
        this.IsAutoplayAvialable = false;
        this.Is360DegreeSupported = false;
        this.IsAnnotation = false;
        this.IsReported = false;
        this.IsTheatorModeSupported = false;
        this.IsMuteVideo = false;
        this.Language = "NA";
        this.VideoSpeed = 0;
        this.VideoQuality = "Unknown";
        this.Subtitle = "Unknown";
        // Setters
        this.incrementViewCount = function () {
            _this.ViewCount += 1;
        };
        this.incrementLikeCount = function () {
            _this.LikeCount += 1;
        };
        this.incrementDislikeCount = function () {
            _this.DislikeCount += 1;
        };
        this.incrementShareCount = function () {
            _this.ShareCount += 1;
        };
        this.incrementSubscriptionCount = function () {
            _this.SuscriptionCount += 1;
        };
        this.incrementCommentCount = function () {
            _this.CommentsCount += 1;
        };
        this.setRequiredViewerAge = function (RequiredViewerAge) {
            _this.RequiredViewerAge = RequiredViewerAge;
        };
        this.setAvailableVideoSpeed = function (AvailableVideoSpeed) {
            _this.AvailableVideoSpeed = AvailableVideoSpeed;
        };
        this.setAvailableVideoQuality = function (AvailableVideoQuality) {
            _this.AvailableVideoQuality = AvailableVideoQuality;
        };
        this.setAvailableSubtitle = function () {
            var AvailableSubtitle = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                AvailableSubtitle[_i] = arguments[_i];
            }
            _this.AvailableSubtitle = AvailableSubtitle;
        };
        //method with some optional parameters
        this.setChannelInfo = function (ChannelId, ChannelName, ChannelInfo) {
            _this.ChannelId = ChannelId;
            _this.ChannelName = ChannelName;
            _this.ChannelInfo = ChannelInfo;
        };
        this.setVideoProperties = function (IsAutoplayAvialable, Is360DegreeSupported, IsAnnotation, IsTheatorModeSupported, IsMuteVideo, Language, VideoSpeed, VideoQuality, AvailableSubtitle) {
            _this.IsAutoplayAvialable = IsAutoplayAvialable;
            _this.Is360DegreeSupported = Is360DegreeSupported;
            _this.IsAnnotation = IsAnnotation;
            _this.IsTheatorModeSupported = IsTheatorModeSupported;
            _this.IsMuteVideo = IsMuteVideo;
            _this.Language = Language;
            _this.VideoSpeed = VideoSpeed;
            _this.VideoQuality = VideoQuality;
            _this.Subtitle = AvailableSubtitle;
        };
        // Getters
        this.getViewCount = function () {
            return _this.ViewCount;
        };
        this.getLikeCount = function () {
            return _this.LikeCount;
        };
        this.getDislikeCount = function () {
            return _this.DislikeCount;
        };
        this.getShareCount = function () {
            return _this.ShareCount;
        };
        this.getSubscriptionCount = function () {
            return _this.SuscriptionCount;
        };
        this.getCommentCount = function () {
            return _this.CommentsCount;
        };
        this.getRequiredViewerAge = function (RequiredViewerAge) {
            return _this.RequiredViewerAge;
        };
        this.getAvailableVideoSpeed = function () {
            return _this.AvailableVideoSpeed;
        };
        this.getAvailableVideoQuality = function () {
            return _this.AvailableVideoQuality;
        };
        this.getAvailableSubtitle = function () {
            return _this.AvailableSubtitle;
        };
        this.getChannelInfo = function () {
            console.log("Here's the channel information");
            console.log("channel id : " + _this.ChannelId);
            console.log("ChannelName : " + _this.ChannelName);
            console.log("ChannelInfo : " + _this.ChannelInfo);
        };
        this.getVideoProperties = function () {
            console.log("Here's the Video Properties");
            console.log("IsAutoplayAvialable : " + _this.IsAutoplayAvialable);
            console.log("Is360DegreeSupported : " + _this.Is360DegreeSupported);
            console.log("IsAnnotation : " + _this.IsAnnotation);
            console.log("IsTheatorModeSupported : " + _this.IsTheatorModeSupported);
            console.log("IsMuteVideo : " + _this.IsMuteVideo);
            console.log("Language : " + _this.Language);
            console.log("VideoSpeed : " + _this.VideoSpeed);
            console.log("VideoQuality : " + _this.VideoQuality);
            console.log("Subtitle : " + _this.Subtitle);
        };
        this.getVideoBasicProperties = function () {
            console.log("Here's the Video Basic Properties");
            console.log("VideoId : " + _this.VideoId);
            console.log("VideoTitle : " + _this.VideoTitle);
            console.log("VideoUrl : " + _this.VideoUrl);
            console.log("RequiredViewerAge : " + _this.RequiredViewerAge);
            console.log("PublishDate : " + _this.PublishDate);
            console.log("Duration : " + _this.Duration);
            console.log("About : " + _this.About);
            console.log("VideoCategory : " + _this.VideoCategory);
            console.log("VideoSubcategory : " + _this.VideoSubcategory);
            console.log("OriginCountry : " + _this.OriginCountry);
        };
        this.VideoId = VideoId;
        this.VideoTitle = VideoTitle;
        this.VideoUrl = VideoUrl;
        this.RequiredViewerAge = RequiredViewerAge;
        this.PublishDate = PublishDate;
        this.Duration = Duration;
        this.About = About;
        this.VideoCategory = VideoCategory;
        this.VideoSubcategory = VideoSubcategory;
        this.OriginCountry = OriginCountry;
    }
    return VideoPage;
}()); // end of class VideoPage
// Create object of VideoPage class
var VideoPageObj = new VideoPage("ABC123##123", "This is the Video Title", "10 Dec 2018", "1:30:02", "https://www.youtube.com/somefolder/somevideo", 10, "This video is of indian bachelor comedy", "Comedy", "Subcategory1", "India");
VideoPageObj.getVideoBasicProperties();
VideoPageObj.setChannelInfo("channel12543");
VideoPageObj.getChannelInfo();
VideoPageObj.setVideoProperties(true, false, false, true, false, "English", 1, "HD", "English");
VideoPageObj.getVideoProperties();
console.log("Current View Count : " + VideoPageObj.getViewCount());
console.log("Current Like Count : " + VideoPageObj.getLikeCount());
console.log("Let's increment Counters");
VideoPageObj.incrementViewCount();
VideoPageObj.incrementLikeCount();
console.log("Current View Count : " + VideoPageObj.getViewCount());
console.log("Current Like Count : " + VideoPageObj.getLikeCount());
VideoPageObj.setRequiredViewerAge(15);
VideoPageObj.getVideoBasicProperties();
