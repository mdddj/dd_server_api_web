import DdTaokeSdk from "./index";
import {successResultHandle} from "./utils/ResultUtil";

let api  = DdTaokeSdk.getInstance()
api.host = 'https://itbug.shop'

// api.getBlogList(1,10).then(value => {
//     console.log(value)
// })
api.logout().then(value => {
    successResultHandle(value,data => {
        console.log(data)
    },message => {
        console.log(message)
    })
})