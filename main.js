// ARRAY

// var listUser = ["Một","Hai","Ba"];
// console.log(listUser[1],listUser.length);

// for(var i = 0; i < listUser.length; i++){
//     console.log("listUser"+ [i] + " là " + listUser[i]);
// }

// //thay đổi giá trị

// listUser[2] = "bro";
// console.log('mảng user', listUser);

// //thêm phần tử
// listUser.push('Meow');
// console.log(listUser);

// //xóa phần tử

// listUser.splice(0,1);
// console.log(listUser);

/*
Các bước thực hiện bài toán vòng lặp
    - xác định giá trị thay đổi
    - xác định điều kiện lặp
    - xử lý khối lệnh thực thi
    - thay đổi giác trị ở bước 1
    Ví dụ: in ra tên trong mảng kèm theo Hello
*/
// var index = 0;
// while(index <= listUser.length -1){
//     console.log("Hello", listUser[index]);
//     index++;
// }

//Bài tập 1: in số chẵn
var numArray = [2,7,4,3,5,6,10,29,32,40];

document.getElementById("btnBai1").onclick = function(){

   
    var num = "";

    for(var i = 0; i <= numArray.length; i++){
        if(numArray[i] % 2 == 0){
            num += numArray[i] + " ";
        }
    }


    document.getElementById("kQua1").innerHTML = num;
}

// //Bài 2: nhập 1 số, thêm số đó vào mảng và in ra
var chuoiBai2 = [2,7,4,3,5,6,10,29,32,40];
document.getElementById('btnBai2').onclick = function(){
    
    var number = document.getElementById('nhapSo2').value;

    var output = "";

    chuoiBai2.push(number);

    for(var i = 0; i < chuoiBai2.length; i++){
        var giaTri = chuoiBai2[i];
        output += giaTri + " ";
    }

   
    document.getElementById('kQua2').innerHTML = output;
}

//Bài 3: xóa phần tử trong mảng

document.getElementById('btnBai3').onclick = function(){
    
    var number = document.getElementById('nhapSo3').value*1;

    ketQua = "";
    var viTri = -1;
    for (var i = 0; i < numArray.length; i++){
        var giaTri = numArray[i];
        if(giaTri === number){
            viTri = i;
            break;
        }
    }
    if(viTri !== -1){

    numArray.splice(viTri,1);
    ketQua = ' [ ' + numArray.toString() + ' ] ';
    }
    else{
        ketQua = number + " không tìm thấy trong mảng";
    }   
    
    document.getElementById('kQua3').innerHTML = ketQua;
}
