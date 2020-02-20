//不交房租,
//不生小孩,
//時間一到,
//自動登出。
//A simple model for reference.
// ________________________
// |                    ^ | 
// | totalDeposit         | 
// |________________INCOME|___________________________ ^
// |<--now                |<--retire         death-->| SPENT
// |____________________v_|__________________________| v
function calcLife(age, dea, out, ret) {
    // console.log(age, dea, out, ret);
    let ans_div = document.getElementById("ans_div");
    ans_div.removeAttribute("style", "display");
    //Summon the answer div.
    var m_inc = Number(generateIncome(age, dea, out, ret));
    var dep = Number(totalDeposit(age, ret, m_inc, out));
    document.getElementById('inc').innerHTML = m_inc;
    document.getElementById('wor').innerHTML = ret - age;
    document.getElementById('dep').innerHTML = dep;
}
function totalSpent(age, dea, out) {
    //Total spent from now to death.
    var t_spt = (dea - age) * out * 12;
    return t_spt;
}
function generateIncome(age, dea, out, ret) {
    //Income needed for your lifespan.
    var t_spt = totalSpent(age, dea, out);
    var m_inc = (t_spt / ((ret - age) * 12)).toFixed(4);
    return m_inc;
}
function totalDeposit(age, ret, m_inc, out) {
    //All money you saved when retire.
    var dep = (ret - age) * (m_inc - out) * 12;
    return dep;
}