// function merge(){

// }
// JS 变量的类型是由值决定的，弱类型
//m+n<=nums.length
const merge=(nums1,m,nums2,n)=>{ //箭头函数.es6
    //把nums2合并到nums1中
    //[1,2,3,0,0,0]
    //重新排序
    let current2= 0;//定义一个指针
    for(let i = nums1.length-n;i<=nums1.length-1;i++){
     nums1[i]=nums2[current2++];//nums2有个可遍历的东西
    }
    //console.log(nums1);
    return nums1.sort((a,b)=> b-a)
}

console.log(merge([1,2,3,0,0,0],3,[2,3,6],3));