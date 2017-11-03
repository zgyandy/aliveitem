<template>
    <div class="video">
        <div class="desk">
            <div class="box">
                <canvas id="video-canvas"></canvas>
            </div>
            <!-- 镜头切换 -->
            <div class="shot">
                <div class="eye iconfont icon-shexiangtou" @click.stop="change"></div>
            </div>
            <!-- 弹幕 -->
            <div id="bullet">{{name}}{{msg}}</div>
            <!-- 控制台 -->
            <div class="control-desk">
                    <div class="move-desk">
                        <div class="center move">
                            <div class="item iconfont icon-shang"  @touchstart.stop="control_start_w" @touchend.stop="control_end_w" ></div>
                        </div>
                        <div class="around move">
                            <div class="item iconfont icon-svg-" @touchstart.stop="control_start_a" @touchend.stop="control_end_a"></div>
                            <div class="item iconfont icon-left-copy-copy" @touchstart.stop="control_start_d" @touchend.stop="control_end_d"></div>
                        </div>
                        <div class="move center">
                            <div class="item iconfont icon-xia" @touchstart.stop="control_start_s" @touchend.stop="control_end_s"></div>
                        </div>
                    </div>
                <div class="get">抓</div>
            </div>
        </div>
    </div>
</template>

<script>
import JSMpeg from "../../assets/js/jsmpeg.min.js"
import {register} from "@/serve/postdata.js"

let w,s,a,d;

export default {
    name: "videos",
    data() {
        return {
			address: 'xybingbing.oicp.net:9501',  // 视频流地址
            camera_type: 'main',            // 视口规格
            ws_url: '',                     // ws视频流地址
            poster_url : '',                // 
            player: {},                     // player对象
            up: false,                      // 是否抬起
            name:"kenan",
            msg:''
        };
    },
    mounted() {
        this.ws_url='ws://'+this.address+'/camera/'+this.camera_type;
        var canvas = document.getElementById("video-canvas");
        this.player = new JSMpeg.Player(this.ws_url, {
            canvas: canvas, 
            audio: false, 
            poster: this.poster_url, 
            pauseWhenHidden: false,
            disableGl: true,
            chunkSize: 512*1024,
            videoBufferSize: 512*1024,
        });

        var bullet = document.getElementById("bullet");
        bullet.style.position = bullet.offsetWidth*.01 + "rem";
        register({success:(res)=>{
            console.log(res);
        },fail:(res)=>{
            console.log(res)
        }})
    },
    methods: {
        change (){
            // 切换视角
            if(this.camera_type == 'main'){
            		this.camera_type = 'second';
            }else {
            		this.camera_type = 'main';
            }
            this.ws_url='ws://'+this.address+'/camera/'+this.camera_type;
            this.player.stop();
            this.player.source.socket.close();
            this.player.source.url = this.ws_url;
            this.player.source.start();
            this.player.source.shouldAttemptReconnect=false;
            	this.player.play();
        },
        // 向上
      control_start_w:function (e) {
      	w=setInterval(() => {
      		this.player.source.socket.send(JSON.stringify({"control":"w","state":1}));
      	},100);
      	e.preventDefault();
      	return false;
      },
      control_end_w:function (e) {
        window.clearInterval(w);
        this.player.source.socket.send(JSON.stringify({"control":"w","state":0}));
        e.preventDefault();
      	return false;
      },
       // 向下
      control_start_s:function (e) {
        s=setInterval(() => {
      		this.player.source.socket.send(JSON.stringify({"control":"s","state":1}));
      	},100);
      	e.preventDefault();
      	return false;
      },
      control_end_s:function (e) {
        window.clearInterval(s);
        this.player.source.socket.send(JSON.stringify({"control":"s","state":0}));
        e.preventDefault();
      	return false;
      },
       // 向左
      control_start_a:function (e) {
        a=setInterval(() => {
      		this.player.source.socket.send(JSON.stringify({"control":"a","state":1}));
      	},100);
      	e.preventDefault();
      	return false;
      },
      control_end_a:function (e){
        window.clearInterval(a);
        this.player.source.socket.send(JSON.stringify({"control":"a","state":0}));
        e.preventDefault();
      	return false;
      },
       // 向右
      control_start_d:function (e) {
        d=setInterval(() => {
      		this.player.source.socket.send(JSON.stringify({"control":"d","state":1}));
      	},100);
      	e.preventDefault();
      	return false;
      },
      control_end_d:function (e){
        window.clearInterval(d);
        this.player.source.socket.send(JSON.stringify({"control":"d","state":0}));
        e.preventDefault();
      	return false;
      },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .video {
        background-color: #ccc;
        overflow: hidden;
        width: 6.9rem;
        margin: 0 .3rem;
        .box {
            height: 9.2rem;
            width: 6.9rem;
            overflow: hidden;
            #video-canvas {
                height: 9.2rem;
                width: 6.9rem;
            }
        }
        .desk {
            position: relative;
            .shot {
                height: .8rem;
                width: .8rem;
                position: absolute;        
                right: -.1rem;
                top: 3.6rem;
                border-radius: .4rem;
                background-color: #ccc;
                .eye {
                    height: .5rem;
                    width: .5rem;
                    margin-left: .15rem;
                    margin-top: .15rem;
                    font-size: .45rem;
                    color: #0ff;
                }
            }
            #bullet {
                // height: .6rem;
                // width: 7rem;
                position: absolute;
                top: 2rem;
                left: 0;
                background-color: rgba(0,0,0,.3);
                font-size: .3rem;
                color: #fff;
                line-height: .6rem;
                text-align: center;
            }
            .control-desk {
                height: 1.8rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .move-desk {
                    height: 1.8rem;
                    width: 2.4rem;
                    background-color: #0ff;
                    .move {
                        height: .6rem;                        
                        display: flex;
                        .item {
                            height: .6rem;
                            width: .6rem;
                            text-align: center;
                            border-radius: .3rem;
                            background-color: #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;                            

                        }
                        .iconfont {
                            // height: .4rem;
                            // width: .4rem;
                            font-size: .4rem;
                        }
                    }
                    .center {
                        justify-content: center;
                    }
                    .around {
                        justify-content: space-around;
                    }
                }
            }
        }

    }

</style>
