import {ADD_COUNTER,ADD_TO_CART} from "./mutations-type"
export default{
  addCart(context,payload) {
    return new Promise((resolve,reject)=>{
    // let oldProduct=null;
    //  for(let item of state.cartList) {
    //    if(item.iid===payload.iid){
    //      oldProduct=item;
    //    }
    //  }
    let oldProduct = context.state.cartList.find(item=>item.iid===payload.iid)
    //  2.判断oldProduct
    if(oldProduct){
      // oldProduct.count+=1
      context.commit(ADD_COUNTER,oldProduct);
      resolve('当前商品数量+1')
      
    }else{
      payload.count=1
      payload.checked=true;
      // state.cartList.push(payload)
      context.commit(ADD_TO_CART,payload);
      resolve('成功加入购物车')
    }
    })
   
  }
}