var userArray=new Array();//定义用户数组
var timer;
var outUser;
var randomNumber;
var user;
var number = 0;

var ifStart = false;

function inPerson(){
    $('#successUser').html('');
    var inUser=document.getElementById('User').value.split(/[\n\s+,，；;]/g);
    let a = document.getElementById('randomNumber').value;
    console.log('value ', +a);
    if(+a == 0)
        randomNumber = 1;
    else 
        randomNumber = a;
    let k=0;
    user = "";
    for (i=0;i<inUser.length;i++) {
        if(inUser[i] != ""){
            userArray[k++]=inUser[i];
            user+='<tr><td>'+inUser[i]+'</td></tr>';
        }
    };
    $('#tableuser').html(user);
}

function startRun() {
    // console.log(userArray);
    // console.log(!ifStart);
    // console.log(userArray != null);
    if(!ifStart && userArray != null && userArray.length != 0){
        ifStart = true;
        outUser=shuffle(userArray);
        // console.log("test", outUser);
        timer=setInterval("randomShow()",10);
    }else if(userArray == null || userArray.length == 0 ){
        alert("请先填入参与抽奖人员名单！");
    }else{
        alert("您已开始抽奖");
    }
}

function shuffle(arr) {
    //著名的洗牌算法，原理就是遍历数组元素，将当前元素与随机抽取的一个剩余元素进行交换。
    for (let i=arr.length-1; i>=0; i--) {
        let rIndex = Math.floor(Math.random()*(i+1));
        // 打印交换值
        // console.log(i, rIndex);
        let temp = arr[rIndex];
        arr[rIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function randomShow(){
    pcount = userArray.length - 1;
    num = Math.floor(Math.random() * pcount);
    html=userArray[num];
    $('#randomUser').html(html)
}

function stop(){
    if(ifStart){
        ifStart = false;
        let html='';
        clearInterval(timer);
        $('#randomUser').html('');
        // console.log('randomUser ', randomNumber);
        for(i=0;i<randomNumber;i++){
            number ++;
            html+='<br><span class="badge badge-success suc-item">第'+number+'名-----'+outUser[i]+'</span><br>'
            console.log("before", userArray);
            userArray.splice(userArray.indexOf(outUser[i]),1);
            console.log("after", userArray);
        }
        $('#successUser').append(html);
        user = "";
        for (i=0;i<userArray.length;i++) {
            user+='<tr><td>'+userArray[i]+'</td></tr>';
        };
        $('#tableuser').html(user);
    }else{
        alert("请先开始抽奖");
    }
}
 