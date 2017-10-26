import { postData } from '../config/baseAction'
// 示例
var register = (params) => postData({
    url: '/v1/member/register',
    data: {
        nickname: params.nickname,
        phone: params.phone,
        code: params.code,
        password: params.password,
    },
    success: params.success,
    fail: params.fail,

});

export {
    register,
}