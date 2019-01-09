import {config} from '../config.js'

const tips = {
    1:'抱歉, 出现了一个错误',
    1005:'appkey无效, 请前往www.7yue.pro申请',
    3000: '期刊不存在'
}

class HTTP{
    request(params){
        //url, data, method
        if(!params.method){
            params.method="GET"
        }
        wx.request({
            url:config.api_base_url + params.url,
            method:params.method,
            data:params.data,
            header:{
                'Content-Type': 'application/json',
                'appkey': config.appkey
            },
            success:(res)=>{
                //服务器返回的http状态码是数字number类型(如200)
                //不能使用字符串类型数据的方法startWith(),要进行数据类型转换
                //let code = console.log(typeof(res.statusCode))
                let code = res.statusCode.toString()               
                if(code.startsWith('2')){
                    //传了参数回调函数params.success才调用params.success(res.data)
                    params.success && params.success(res.data)
                }
                else {
                    let error_code = res.data.error_code
                    this._show_error(error_code)
                }
            },
            fail:(err)=>{
                this._show_error(1)
            }
        })
    }

    _show_error(error_code){
        if(!error_code){
            error_code = 1
        }
        wx.showToast({
            title:tips[error_code],
            icon:'none',
            duration:2000
        })
    }
}

export {HTTP}