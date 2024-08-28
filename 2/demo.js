const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    live: true,
    autoplay: true,
    hotkey:true,
    screenshot: true,
    contextmenu: [
        {
            text: 'HTTPS用户黑屏怎么办？',
            click: (player) => {
                qghllq();
            },
        },
        {
            text: '完整节目单（JQ弹窗）',
            click: (player) => {
                document.getElementById('wzjmd').click();
            },
        },
                {
            text: '完整节目单（Layer弹窗）',
            click: (player) => {
                wzjmdlayer();
            },
        },
        {
            text: '这个封面图的图片',
            click: (player) => {
                wykfmt();
            },
        },
            {
            text: '第三方聊天功能',
            click: (player) => {
                lsjljm();
            },
        },
    ],
    video: {
        url: 'https://clive.happytoon.top/live/movie.flv',
        pic: 'jx.png',
    },
});