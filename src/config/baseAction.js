import axi from 'axios';

import md5 from './md5.min'
// 外网测试环境：(阿里云测试)
// http://test.api.baishiapp.com		//接口
// http://test.www.baishiapp.com		//网页
// http://test.www.baishiapp.com:9090	//后台
// http://test.m.baishiapp.com         //H5页面
// 正式环境：
// http://api.baishiapp.com		//接口
// http://www.baishiapp.com		//网页
// http://www.baishiapp.com:9091		//后台
// http://m.baishiapp.com          H5页面

// 配置axios 读取数据和返回数据时，可以自定义一段代码
axi.interceptors.request.use(function(config){
	// 请求时显示loading 
	store.dispatch("showLoading");
	return config;
},function(error){
	return Promise.reject(error);
});

axi.interceptors.response.use(function(response){
	// 获取数据后隐藏loading
	store.dispatch("hideLoading");
	return response;
},function(error){
	return Promise.reject(error);
});

if (process.env.NODE_ENV == 'production') {
    var baseUrl = 'http://api.baishiapp.com';           //正式

    var getUrl = 'http://www.baishiapp.com';
} else if (process.env.NODE_ENV == 'test') {
    var baseUrl = 'http://test.api.baishiapp.com';      //测试

    var getUrl = 'http://test.www.baishiapp.com';
} else {
    var baseUrl = 'http://tan.api.baishiapp.com:8801';  //开发

    var getUrl = 'http://test.www.baishiapp.com';
}

var token = '';
// psot请求对象
var axios = axi.create({
    baseURL: baseUrl,
    timeout: 8000,
});
// get请求对象
var getaxios = axi.create({
    baseURL: getUrl,
    timeout: 8000,
});

// get请求获取数据
var getData = (params) => {
    return getaxios.get(params.url).then(response => {
        params.success && params.success(response.data);
        console.log(params.url);
        console.log(response);
    }).catch((error) => {
        params.fail && params.fail(error);
        console.log(error);
    });

}

/**
 * POST
 * @param {url,data,success,fail} refs  type:object
 */
// post请求获取数据
var postData = (refs) => {
    token = sessionStorage.getItem('token') || token;
    // 判断是否传参
    if (refs.data) {
        var data = new FormData(); // 创建FromData对象，
        var tempS = '';
        var tempArray = [];

        for (var key in refs.data) {
            data.append(key, refs.data[key]);
            tempArray.push(key);
        }
        tempArray.sort();
        for (let i = 0; i < tempArray.length; i++) {
            let key = tempArray[i];
            let value = refs.data[key];
            tempS += `${key}=${value}&`;
        }
        tempS = tempS.slice(0, -1);
        let m = 'da6b7a29b8939ee3ec8a4b7894cb5a8d';
        let singTemp = `${tempS}&key=${m}`;

        // 时间
        var t = Date.now();
        t = parseInt(t / 1000);
        data.append('signs', md5(singTemp));
        data.append('req_time', t);
    } else {
        
    }
    return axios({
        method: 'post',
        url: refs.url,
        data: data,
        headers: {
            version: 'v1.91.0',
            channel: 'h5',
            token: token,
        },
    }).then(res => {

        if (res.data.code == 1) {
            var istoken = res.data.msg.indexOf("Token is error") != -1;
            var isReq_time = res.data.msg.indexOf("req_time") != -1;
            var isSigns = res.data.msg.indexOf("Signs is empty") != -1;
            var isSignserror = res.data.msg.indexOf("Signs is error") != -1;
            if (istoken) {
                token = res.headers.token;
                sessionStorage.setItem('token', res.headers.token);
                // alert(res.data.msg);
            }
            if (isReq_time) {
                alert('不能重复下单');
            }
            if (isSigns) {
                alert(res.data.msg);
            }
            if (isSignserror) {
                alert(res.data.msg);
            }
            refs.fail && refs.fail(res.data.msg);
        } else {
            refs.success && refs.success(res.data);
        }

    }).catch(error => {
        refs.fail && refs.fail(error);

        console.log(error);
    });
}

export { postData, getData };
