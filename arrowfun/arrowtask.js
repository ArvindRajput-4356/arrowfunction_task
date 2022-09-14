let num=1234689;
let str=num.toString();
let column=(str)=>{
    let result=[str[0]];
    for(let x=1; x<str.length; x++){
            if(str[x-1]%2 ===0 && str[x]%2 ===0){
                result.push("|",str[x]);
            }
            else{
                result.push(str[x])
            }
        }
        return result.join('');
}
console.log(column(str));