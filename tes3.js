function cek_kata(string){

    if(typeof string !== 'string'){
        console.log("Parameter Harus string!");
        return false;
    } else{
        let strToArr = string.split(' ');
        let arrInt = [];

        for(var a = 0; a < strToArr.length; a++){
            if(!isNaN(parseInt(strToArr[a]))) {
                arrInt.push(parseInt(strToArr[a]));
            }
        }

        let result = strToArr.length - arrInt.length + "/" + strToArr.length;

        console.log(result);
        return true;
    }
}

cek_kata("ini adalah sebuah kata");

cek_kata('2 pasang sandal hilang');

cek_kata(33);