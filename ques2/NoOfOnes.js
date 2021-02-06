var arr =[0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1]
var max_sum=0;
var temp=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]=='1'){
        temp++;
    }else{
        if(temp>max_sum){
            max_sum=temp;
        }
        temp=0;
    }
    
}
console.log(max_sum);
    