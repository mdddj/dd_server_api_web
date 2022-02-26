import DdTaokeSdk from "./index";

let api  = DdTaokeSdk.getInstance()
api.host = 'http://localhost'

api.getVersionList({page: 1,pageSize: 12}).then(value => console.log(value))