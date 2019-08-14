var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '2JZY3ZtCUs4',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.pauseVideo();
}

var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {

    } else {

    }
}

function stopVideo() {
    player.stopVideo();
}

$(".fa-youtube").click(function() {
    if ($(".fa-youtube").hasClass("shrink")) {
        player.pauseVideo();
        $(".fa-youtube").removeClass("shrink");
        $(".iframe-col").css("height", "0");
        $(".iframe-col").css("padding-bottom", "0");
    } else {
        player.playVideo();
        $(".fa-youtube").addClass("shrink");
        $(".iframe-col").css("height", "500px");
        $(".iframe-col").css("padding", "50px 0");
    }
});