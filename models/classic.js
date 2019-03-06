import {HTTP} from '../util/http.js'

class ClassicModel extends HTTP{
    getLatest(sCallback){
        this.request({
            url:'classic/latest',
            success:(res)=>{
                sCallback(res)
            }
        })
    }

    getPrevious(index, sCallback){
        this.request({
            url:'classic/' + index + '/previous',
            success: (res)=>{
                sCallback(res)
            }
        })
    }

    isFirst(index){
        return index == 1 ? true : false
    }

    isLatest(index){
        
    }
}

export {ClassicModel}