function classifyPhoneNumber(phoneNumber:string[]){
    let viettel:string[] = [];
    let mobifone:string[] = [];
    let vinaphone:string[] = [];
    let arr:any[] = [];
    for (let i of phoneNumber){
        if(i.substring(0,3)==='032'||
            i.substring(0,3)==='033'||
            i.substring(0,3)==='034'||
            i.substring(0,3)==='035'||
            i.substring(0,3)==='036'||
            i.substring(0,3)==='037'||
            i.substring(0,3)==='038'||
            i.substring(0,3)==='039') viettel.push(i)
        if(i.substring(0,3)==='070'||
            i.substring(0,3)==='076'||
            i.substring(0,3)==='077'||
            i.substring(0,3)==='078'||
            i.substring(0,3)==='079') mobifone.push(i)
        if(i.substring(0,3)==='081'||
            i.substring(0,3)==='082'||
            i.substring(0,3)==='083'||
            i.substring(0,3)==='084'||
            i.substring(0,3)==='085') vinaphone.push(i)
    }
    arr.push(viettel)
    arr.push(mobifone)
    arr.push(vinaphone)
    return arr;
}
console.log(classifyPhoneNumber(['0321456789','070123456789','081123456789','03315191651']))