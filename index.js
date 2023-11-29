const One =()=>{
    document.getElementById('calcu').innerHTML += '1'
};
ll

const Two =()=>{
    document.getElementById('calcu').innerHTML += '2'
};

const Three =()=>{
    document.getElementById('calcu').innerHTML += '3'
};

const Four =()=>{
    document.getElementById('calcu').innerHTML += '4'
};

const Five =()=>{
    document.getElementById('calcu').innerHTML += '5'
};

const Six =()=>{
    document.getElementById('calcu').innerHTML += '6'
};

const Seven =()=>{
    document.getElementById('calcu').innerHTML += '7'
};

const Eight =()=>{
    document.getElementById('calcu').innerHTML += '8'
};

const Nine =()=>{
    document.getElementById('calcu').innerHTML += '9'
};

const Zero =()=>{
    document.getElementById('calcu').innerHTML += '0'
}

function equals(){
    
    if(document.getElementById("result").innerHTML = eval(document.getElementById("calcu").innerHTML)){
        document.getElementById("result").innerHTML = eval(document.getElementById("calcu").innerHTML)
    }else{
        document.getElementById("result").innerHTML = eval(document.getElementById("calcu").innerHTML)
    }
}

const clearScreen = () =>{
    document.getElementById('calcu').innerHTML=''
    document.getElementById('result').innerHTML=''
}

const Delete=()=>{
    document.getElementById('calcu').innerHTML= document.getElementById('calcu').innerHTML.toString().slice(0, -1)
}
