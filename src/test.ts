import DdTaokeSdk from "./index";

let api  = DdTaokeSdk.getInstance()
api.host = 'https://itbug.shop:9445'

api.getBlogList(1,10).then(value => {
    console.log(value)
})