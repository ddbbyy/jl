require.config({
  paths:{
      "jquery":"jquery-1.10.1.min",
      'jquery-cookie':'jquery.cookie',
      "banner":"banner",
     " indext":"indext"
  }
  // },
  // shim:{
  //     // 设置依赖关系
  //     'jquery-cookie':['jquery'],
  //     // 某一个模块，不遵从ADM
  //     parabola:{
  //         exports:'_',
  //     },
  // }
})
require(['banner','indext'],function(banner,indext){
  banner.body(),
  indext.oul()
})