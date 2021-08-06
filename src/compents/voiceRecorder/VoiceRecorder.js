import React from "react";
import Recorder from 'js-audio-recorder';

// const record =
const record = new Recorder( {
    // An array of 255 Numbers
    // You can use this to visualize the audio stream
    // If you use react, check out react-wave-stream
    sampleBits: 16,                 // 采样位数，支持 8 或 16，默认是16
    sampleRate: 16000,              // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
    numChannels: 1,                 // 声道，支持 1 或 2， 默认是1
    onAnalysed: data => {
        console.log("recorder data",data)
    }
});

// navigator.mediaDevices.getUserMedia({audio: true})
//     .then(stream => record.initRecorder(stream))
//     .catch(err => console.log('Uh oh... unable to get stream...', err));
//

class VoiceRecorder extends React.Component{
    constructor(props) {
        super(props);
    }

    startRecord = () => {
        console.log("start")
        record && record.start().then(() => {});
    }

    stopRecord = () => {
        record && record.stop();
        console.log(record.duration);
    }

    playRecord = () => {
        record && record.play();
    }

    translate = () => {
        record && record.stop();
        this.sendVoice(record.getPCMBlob());
    }

    sendVoice = (data) => {
        let formData = new FormData();
        formData.append('a', data);

        // fetch(`http://127.0.0.1:3000/gen/voice?platform=${ this.state.platform }`, {
        fetch(`https://recorder.zhuyuntao.cn/gen/voice?platform=${ this.state.platform }`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(json => {
                // oReg.innerHTML = json.result;
                console.log(json.result)
                this.setState({
                    translating: false,
                    tranResult: json.result
                });
            });
    }

    render() {

        return(
            <div>
                <button onClick={this.startRecord}>开始录音</button>
                <button onClick={this.stopRecord}>停止录音</button>
                <button onClick={this.playRecord}>播放录音</button>
            </div>
        )
    }
}

export default VoiceRecorder;