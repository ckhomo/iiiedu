function checkTWId(id) {
    //1. Max length = 10
    //2. First:  is A~Z
    //3. Second: is 1,2
    //4. Third~: is 0~9
    //5. 檢查碼
    // let reg = false;
    let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    if (id.match(/^[A-Z][12][0-9]{8}$/)) {//正規表示式
        //第一個A~Z{1}, 第二個12{1}, 第三個[0~9]{8}, 大括號表長度(1: negligible)
        let c1 = id.charAt(0);
        let n12 = letters.indexOf(c1) + 10;// E-->4-->14
        let n1 = parseInt(n12 / 10);//1
        let n2 = n12 % 10;//4
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));
        //Get all digits, and generate sum by WIKI formula.
        let n_sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
        return n_sum % 10 == 0 ? true : false;
        // if (n_sum % 10 == 0) return true;
        // return false;
    }
}
function createTWId(area, gender) {//Default written in dropdown-list.
    //area: input index.
    //gender: 0(male), 1(female).
    let arr_letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'T', 'U', 'V', 'W', 'X', 'Z'];
    let id_result = arr_letter[area];
    //Male:false('1') Female:true('0')
    id_result += gender ? "2" : "1";
    //Generate random incompleted strings.(缺尾數)
    for (i = 0; i < 7; i++) {
        id_result += Math.floor(Math.random() * 10);
    }
    //Verify the strings using function above.(湊最後一位數字)
    for (j = 0; j < 10; j++) {
        if (checkTWId(id_result + j)) {
            // OK
            id_result += j;
            break;
        }
    }
    // Check input
    // document.body.appendChild(document.createTextNode(`${area},${gender} `));
    document.getElementById('id_ans').innerHTML = id_result;
}