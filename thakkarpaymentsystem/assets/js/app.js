// var curr_bln = 1240;
// curr_bln = parseInt(curr_bln);

// function balance_transfer() {

//     var deposit = document.getElementById('deposit').value;
//     if (deposit == "") {
//     alert("Enter Amount");
//     return false;
//   }
//     deposit = parseInt(deposit);
//     document.getElementById('deposit-status').innerHTML = ("$") + deposit;
//     document.getElementById('balance-status').innerHTML  = deposit+curr_bln;
// }

// function withdraw_bln() {
//     var withdraw = document.getElementById('withdraw').value;
//     if (withdraw == "") {
//     alert("Enter Amount");
//     return false;
//   }
//     withdraw = parseInt(withdraw);
//     document.getElementById('withdraw-status').innerHTML = ("$") + withdraw;
//     document.getElementById('balance-status').innerHTML  = withdraw+curr_bln;
// }
function sendMoney(){
  var enterName = document.getElementById("enterName").value;
  var enterAmount = parseInt(document.getElementById("enterAmount").value);
var enterSName = document.getElementById("enterSName").value;
var findSenderBankAccount = enterSName + "BankBalance";
  var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
  if (enterAmount > enterSAmount) {
     alert("Insufficient Balance.")
  }
else {
     var findUserBankAccount = enterName + "BankBalance";
    
     var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
     var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
     document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
     document.getElementById(findUserBankAccount).innerHTML = finalAmount;
     alert(`Successful Transaction !!  
     $${enterAmount} is sent to ${enterName}@email.com.`)

     // transaction history 
     var createPTag = document.createElement("li");
     var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id ${enterSName}@email.com
to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
     createPTag.appendChild(textNode);
     var element = document.getElementById("transaction-history-body");
     element.insertBefore(createPTag, element.firstChild);
  }
}