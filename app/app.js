//js的入口函数
export const app = function(num) {
   alter('我是入口函数');
   if(num >= 0 && num <= 10) {
      alter('在0~10范围');
   }else {
      alter('不存在');
   }

}
