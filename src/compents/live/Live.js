import flvJs from 'flv.js';
import React from 'react';


class Live extends React.Component{

    initFlv = ($video) => {
        if ($video) {
            if (flvJs.isSupported()) {
                let flvPlayer = flvJs.createPlayer({
                    type: 'flv',
                    enableWorker: true,     //浏览器端开启flv.js的worker,多进程运行flv.js
                    isLive: true,           //直播模式
                    hasAudio: true,        //关闭音频
                    hasVideo: true,
                    // cors: true,
                    stashInitialSize: 128,
                    enableStashBuffer: false, //播放flv时，设置是否启用播放缓存，只在直播起作用。
                    // url: 'http://192.168.2.234/flv/323223618780001'
                    url:'http://127.0.0.1/flv?port=1935&app=live&stream=test'
                });
                flvPlayer.attachMediaElement($video);
                flvPlayer.load();
                flvPlayer.play();
                this.flvPlayer = flvPlayer;
            }
        }
    }

    componentWillUnmount() {
        if (this.flvPlayer) {
            this.flvPlayer.unload();
            this.flvPlayer.detachMediaElement();
        }
    }

    render() {
        return (
            <video
                // className={className}
                controls={true}
                ref={this.initFlv}
                autoPlay={true}
            />
        )
    }
}

export default Live;