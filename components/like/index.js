// components/like/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        like:{
            type: Boolean,
            
        },
        count:{
            type:Number,
            
        }
    },

    /**
     * 组件的初始数据
     */
    data: {            
        yesSrc: 'images/like.png',
        noSrc: 'images/like@dis.png'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onLike:function(event){
            let like = this.properties.like
            let count = this.properties.count

            //like表示点击前的是否点赞状态
            count = like?count-1:count+1
            this.setData({
                count:count,
                like:!like //改变点击后的like是否点赞状态
            })

            //激活自定义组件的自定义事件
            let behavior = this.properties.like?'like':'cancel'
            this.triggerEvent('like',{
                behavior:behavior
            },{})

            
        }
    }
})
