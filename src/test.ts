import DdTaokeSdk from './index';

let api = DdTaokeSdk.getInstance();
api.host = 'https://itbug.shop:9445';

api.getBlogsByTagId(7, { page: 1, pageSize: 20 }).then((value) => {
  console.log(value);
});
