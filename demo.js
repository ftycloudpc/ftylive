const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    live: true,
    autoplay: true,
    hotkey:true,
    screenshot: true,
    contextmenu: [
        {
            text: '直播间公告',
            click: (player) => {
                document.getElementById('zdgg').click();
            },
        },
    ],
    video: {
        url: 'http://3389.iis7.net:32098/live/movie.flv',
        pic: 'bj.jpg',
    },
});