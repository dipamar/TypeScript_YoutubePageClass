// create a class VideoPage class. Here I am using private members and public methods
class VideoPage{
    private VideoId : string;
    private VideoTitle : string;
    private PublishDate : string;
    private  Duration : string;
    private VideoUrl : string;
    private About : string;
    private VideoCategory : string;
    private VideoSubcategory : string;
    private  OriginCountry : string;
    private ChannelId : string;
    private ChannelName: string;
    private ChannelInfo : string;
    private ViewCount: number = 0;
    private LikeCount: number = 0;
    private DislikeCount: number = 0;
    private ShareCount: number = 0;
    private SuscriptionCount: number = 0;
    private CommentsCount: number = 0;
    private RequiredViewerAge : number; 
    private IsAutoplayAvialable : boolean = false;
    private Is360DegreeSupported : boolean = false;
    private IsAnnotation : boolean = false;
    private IsReported : boolean = false;
    private IsTheatorModeSupported : boolean = false;
    private IsMuteVideo : boolean = false; 
    private Language : string = `NA`;
    private VideoSpeed: number = 0;
    private VideoQuality : string = `Unknown`;
    private Subtitle :string = `Unknown`;
    private AvailableVideoSpeed: number[];
    private AvailableVideoQuality : string[];
    private AvailableSubtitle :string[];
    //constructor to initialize members
    constructor(
        VideoId : string,
        VideoTitle : string,
        PublishDate : string,
        Duration : string,
        VideoUrl : string,
        RequiredViewerAge : number,
        About? : string,
        VideoCategory? : string,
        VideoSubcategory? : string,
        OriginCountry? : string,
        ){
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

// Setters
    incrementViewCount = ()=>{
        this.ViewCount += 1;
    }
    incrementLikeCount = ()=>{
        this.LikeCount += 1;
    }
    incrementDislikeCount = ()=>{
        this.DislikeCount += 1;
    }
    incrementShareCount = ()=>{
        this.ShareCount += 1;
    }
    incrementSubscriptionCount = ()=>{
        this.SuscriptionCount += 1;
    }
    incrementCommentCount = ()=>{
        this.CommentsCount += 1;
    }
    setRequiredViewerAge = (RequiredViewerAge : number)=>{
        this.RequiredViewerAge = RequiredViewerAge;
    }
    setAvailableVideoSpeed = (AvailableVideoSpeed : number[])=>{
        this.AvailableVideoSpeed = AvailableVideoSpeed;
    }
    setAvailableVideoQuality = (AvailableVideoQuality : string[])=>{
        this.AvailableVideoQuality = AvailableVideoQuality;
    }
    setAvailableSubtitle = (... AvailableSubtitle : string[])=>{
        this.AvailableSubtitle =  AvailableSubtitle;
        }
    //method with some optional parameters
    setChannelInfo = (ChannelId:string,ChannelName?:string,ChannelInfo?:string)=>{
        this.ChannelId = ChannelId;
        this.ChannelName = ChannelName;
        this.ChannelInfo = ChannelInfo;   
    }
    setVideoProperties = (IsAutoplayAvialable : boolean,Is360DegreeSupported : boolean,IsAnnotation : boolean,IsTheatorModeSupported : boolean,IsMuteVideo : boolean,Language : string,VideoSpeed : number,VideoQuality : string,AvailableSubtitle :string)=>{
        this.IsAutoplayAvialable = IsAutoplayAvialable;
        this.Is360DegreeSupported = Is360DegreeSupported;
        this.IsAnnotation = IsAnnotation;
        this.IsTheatorModeSupported = IsTheatorModeSupported ;
        this.IsMuteVideo = IsMuteVideo;
        this.Language = Language;
        this.VideoSpeed = VideoSpeed;
        this.VideoQuality = VideoQuality;
        this.Subtitle = AvailableSubtitle;
    }
    
// Getters
getViewCount = ()=>{
    return this.ViewCount;
}
getLikeCount = ()=>{
    return this.LikeCount;
}
getDislikeCount = ()=>{
    return this.DislikeCount;
}
getShareCount = ()=>{
    return this.ShareCount;
}
getSubscriptionCount = ()=>{
    return this.SuscriptionCount;
}
getCommentCount = ()=>{
    return this.CommentsCount;
}
getRequiredViewerAge = (RequiredViewerAge : number)=>{
    return this.RequiredViewerAge;
}
getAvailableVideoSpeed = ()=>{
    return this.AvailableVideoSpeed;
}
getAvailableVideoQuality = ()=>{
    return this.AvailableVideoQuality;
}
getAvailableSubtitle = ()=>{
    return this.AvailableSubtitle;
    }
getChannelInfo = ()=>{
    console.log(`Here's the channel information`);
    console.log(`channel id : ${this.ChannelId}`);
    console.log(`ChannelName : ${this.ChannelName}`);
    console.log(`ChannelInfo : ${this.ChannelInfo}`);
}
getVideoProperties = ()=>{
    console.log(`Here's the Video Properties`);
    console.log(`IsAutoplayAvialable : ${this.IsAutoplayAvialable}`);
    console.log(`Is360DegreeSupported : ${this.Is360DegreeSupported}`);
    console.log(`IsAnnotation : ${this.IsAnnotation}`);
    console.log(`IsTheatorModeSupported : ${this.IsTheatorModeSupported}`);
    console.log(`IsMuteVideo : ${this.IsMuteVideo}`);
    console.log(`Language : ${this.Language}`);
    console.log(`VideoSpeed : ${this.VideoSpeed}`);
    console.log(`VideoQuality : ${this.VideoQuality}`);
    console.log(`Subtitle : ${this.Subtitle}`);
}
getVideoBasicProperties = ()=>{
    console.log(`Here's the Video Basic Properties`);
    console.log(`VideoId : ${this.VideoId}`);
    console.log(`VideoTitle : ${this.VideoTitle}`);
    console.log(`VideoUrl : ${this.VideoUrl}`);
    console.log(`RequiredViewerAge : ${this.RequiredViewerAge}`);
    console.log(`PublishDate : ${this.PublishDate}`);
    console.log(`Duration : ${this.Duration}`);
    console.log(`About : ${this.About}`);
    console.log(`VideoCategory : ${this.VideoCategory}`);
    console.log(`VideoSubcategory : ${this.VideoSubcategory}`);
    console.log(`OriginCountry : ${this.OriginCountry}`);
}
}// end of class VideoPage
    
// Create object of VideoPage class
let VideoPageObj = new VideoPage(`ABC123##123`,`This is the Video Title`,`10 Dec 2018`,`1:30:02`,`https://www.youtube.com/somefolder/somevideo`,10,`This video is of indian bachelor comedy`,`Comedy`,`Subcategory1`,`India`);
VideoPageObj.getVideoBasicProperties();
VideoPageObj.setChannelInfo(`channel12543`);
VideoPageObj.getChannelInfo();
VideoPageObj.setVideoProperties(true,false,false,true,false,`English`,1,`HD`,`English`);
VideoPageObj.getVideoProperties();
console.log(`Current View Count : ${VideoPageObj.getViewCount()}`);
console.log(`Current Like Count : ${VideoPageObj.getLikeCount()}`);
console.log(`Let's increment Counters`);
VideoPageObj.incrementViewCount();
VideoPageObj.incrementLikeCount();
console.log(`Current View Count : ${VideoPageObj.getViewCount()}`);
console.log(`Current Like Count : ${VideoPageObj.getLikeCount()}`);
VideoPageObj.setRequiredViewerAge(15);
VideoPageObj.getVideoBasicProperties();
