import { getData } from '../config/baseAction'
// 示例
var show_page = (params) => getData({
    url: `/m/shareact/my_page.html?act_id=${activity_id}&h5_openid=${params.h5_openid}`,
    success: params.success,
    fail: params.fail,
});

export {
    show_page
}