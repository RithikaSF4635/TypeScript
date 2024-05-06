"use strict";
let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 10;
let OrderIdAutoIncrement = 100;
let CurrentUserId;
let CurrentUserEmail;
let CurrentUserMedicineName;
let CurrentUserMedicineId;
let CurrentOrderId;
let CurrentUser;
let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;
let NewUserConfirmPasswordStatus = false;
let NewUserPhoneNumberStatus = false;
class User {
    constructor(paramEmail, paramPassword, paramConfirmPassword, paramPhoneNumber, paramUserBalance) {
        UserIdAutoIncrement++;
        this.UserId = "UI" + UserIdAutoIncrement.toString();
        this.Email = paramEmail;
        this.Password = paramPassword;
        this.ConfirmPassword = paramConfirmPassword;
        this.PhoneNumber = paramPhoneNumber;
        this.UserBalance = paramUserBalance;
    }
}
let UserArrayList = new Array();
UserArrayList.push(new User("rithi@gmail.com", "12345", "12345", 9789011226, 150));
UserArrayList.push(new User("prathi@gmail.com", "12345", "12345", 9789012345, 100));
class MedicineInfo {
    constructor(paramMedicineName, paramMedicinePrice, paramMedicineCount, paramExpiryDate) {
        MedicineIdAutoIncrement++;
        this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
        this.ExpiryDate = paramExpiryDate;
    }
}
let MedicineList = new Array();
MedicineList.push(new MedicineInfo("Paracetomol", 5, 50, new Date(2024, 6, 12)));
MedicineList.push(new MedicineInfo("Colpal", 5, 60, new Date(2024, 10, 25)));
MedicineList.push(new MedicineInfo("Stepsil", 5, 70, new Date(2024, 11, 12)));
MedicineList.push(new MedicineInfo("Iodex", 5, 80, new Date(2024, 12, 12)));
MedicineList.push(new MedicineInfo("Acetherol", 5, 100, new Date(2025, 6, 12)));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Cancelled"] = "Cancelled";
    OrderStatus["Ordered"] = "Ordered";
})(OrderStatus || (OrderStatus = {}));
class Order {
    constructor(paramMedicineId, paramUserId, paramMedicineName, paramMedicineCount, paramOrderStatus) {
        OrderIdAutoIncrement++;
        this.OrderId = "OI" + OrderIdAutoIncrement.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.OrderStatus = paramOrderStatus;
    }
}
let OrderList = new Array();
OrderList.push(new Order("MID11", "UI1001", "Paracetomol", 3, OrderStatus.Ordered));
OrderList.push(new Order("MID12", "UI1001", "Stepsil", 2, OrderStatus.Ordered));
function newUser() {
    let newUser = document.getElementById('newUser');
    let existingUser = document.getElementById('existingUser');
    newUser.style.display = "block";
    existingUser.style.display = "none";
}
function signUp() {
    if (NewUserEmailStatus == true &&
        NewUserPasswordStatus == true &&
        //NewUserConfirmPasswordStatus == true &&
        NewUserPhoneNumberStatus == true) {
        let newUserEmail = document.getElementById('email').value;
        let newUserPassword = document.getElementById('password').value;
        let newUserConfirmPassword = document.getElementById('cpassword').value;
        let newUserPhoneNumber = document.getElementById('newUserPhonenumber').value;
        //let newUserBalance = 0;
        UserArrayList.push(new User(newUserEmail, newUserPassword, newUserConfirmPassword, +newUserPhoneNumber, 0));
        home();
    }
    else {
        alert("Please fill out the form fully.");
    }
}
function home() {
    CurrentUserId = "";
    CurrentUserEmail = "";
    let home = document.getElementById('home');
    home.style.display = "block";
    let newUser = document.getElementById('newUser');
    let existingUser = document.getElementById('existingUser');
    newUser.style.display = "none";
    existingUser.style.display = "none";
}
function checkEmail(paramEmail) {
    let newUserEmail = document.getElementById('email').value;
    let newUserEmailMessage = document.getElementById(paramEmail + "Message");
    let newUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (newUserEmailRegex.test(newUserEmail)) {
        NewUserEmailStatus = true;
        newUserEmailMessage.style.visibility = "hidden";
    }
    else {
        NewUserEmailStatus = false;
        newUserEmailMessage.innerHTML = "Please enter valid email";
        newUserEmailMessage.style.visibility = "visible";
        newUserEmailMessage.style.color = "tomato";
        newUserEmailMessage.style.marginLeft = "10px";
    }
}
//password validate
function checkPassword(paramPassword) {
    let newUserPassword = document.getElementById('password').value;
    let newUserPassMessage = document.getElementById(paramPassword + "Message");
    let newUserPasserRegex = /^\w{5,7}$/;
    if (newUserPasserRegex.test(newUserPassword)) {
        NewUserPasswordStatus = true;
        newUserPassMessage.style.visibility = "hidden";
    }
    else {
        NewUserPasswordStatus = false;
        newUserPassMessage.innerHTML = "Please enter valid password. Password should have atleast 5 letter atmost 7 letter";
        newUserPassMessage.style.visibility = "visible";
        newUserPassMessage.style.color = "tomato";
        newUserPassMessage.style.marginLeft = "10px";
    }
}
function checkPhoneNumber(paramPhone) {
    let newUserPhoneNumber = document.getElementById('newUserPhonenumber').value;
    let newUserPhoneNumberMessage = document.getElementById(paramPhone + "Message");
    let newUserPhoneNumberRegex = /^\d{10}$/;
    if (newUserPhoneNumberRegex.test(newUserPhoneNumber)) {
        NewUserPhoneNumberStatus = true;
        newUserPhoneNumberMessage.style.visibility = "hidden";
    }
    else {
        NewUserPhoneNumberStatus = false;
        newUserPhoneNumberMessage.innerHTML = "Please enter valid phone number";
        newUserPhoneNumberMessage.style.visibility = "visible";
        newUserPhoneNumberMessage.style.color = "tomato";
        newUserPhoneNumberMessage.style.marginLeft = "10px";
    }
}
function existingUser() {
    let existingUser = document.getElementById('existingUser');
    existingUser.style.display = "block";
    //let home=document.getElementById('home') as HTMLDivElement;
    let newUser = document.getElementById('newUser');
    newUser.style.display = "none";
    let availableUser = document.getElementById('availableUser');
    availableUser.innerHTML = "<h2>Available User</h2>";
    for (let i = 0; i < UserArrayList.length; i++) {
        availableUser.innerHTML += `User Email : ${UserArrayList[i].Email} | User Id : ${UserArrayList[i].UserId}<br>`;
    }
}
function SignIn() {
    let noExistingUserIdChecker = false;
    let existingUserId = document.getElementById("existingUserID");
    let existingUserIdRegex = /^UI\d{4}$/;
    if (existingUserIdRegex.test(existingUserId.value)) {
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].UserId == existingUserId.value) {
                CurrentUserId = UserArrayList[i].UserId;
                CurrentUserEmail = UserArrayList[i].Email;
                menuPage();
                return;
            }
            else {
                noExistingUserIdChecker = true;
            }
        }
        if (noExistingUserIdChecker) {
            alert("Enter Valid User Id");
        }
    }
    else {
        alert("Enter Valid User Id.");
    }
}
function menuPage() {
    let menubar = document.getElementById('menubar');
    menubar.style.display = "block";
    let medicineinfo = document.getElementById('medicineinfo');
    medicineinfo.style.display = "none";
    let purchase = document.getElementById('purchase');
    purchase.style.display = "none";
    let cancel = document.getElementById('cancel');
    cancel.style.display = "none";
    let topup = document.getElementById('topup');
    topup.style.display = "none";
    let existingUser = document.getElementById('existingUser');
    existingUser.style.display = "none";
    let home = document.getElementById('home');
    home.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let cancelDisplay = document.getElementById('cancelDisplay');
    cancelDisplay.style.display = "none";
}
function medicinedata() {
    let medicineinfo = document.getElementById('medicineinfo');
    medicineinfo.style.display = "block";
    let purchase = document.getElementById('purchase');
    purchase.style.display = "none";
    const tableBody = document.querySelector("#dataTable1 tbody");
    tableBody.innerHTML = "";
    MedicineList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.MedicineId}</td>
        <td>${item.MedicineName}</td>
        <td>${item.MedicinePrice}</td>
        <td>${item.MedicineCount}</td>
        <td>${item.ExpiryDate.toLocaleDateString()}</td>
        <td>
          
          <button onclick="edit('${item.MedicineId}')">Edit</button>
          <button onclick="demo('${item.MedicineId}')">DELETE</button>
        </td>
      `;
        tableBody.appendChild(row);
    });
}
let medname;
let medcount;
let medprice;
let meddate;
function Add() {
    let AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = 'block';
}
function addPush() {
    medname = document.getElementById("medname").value;
    medcount = parseInt(document.getElementById("medcount").value);
    medprice = parseInt(document.getElementById("medprice").value);
    meddate = new Date(document.getElementById("medprice").value);
    if (currentMedicineId == null) {
        MedicineList.push(new MedicineInfo(medname, medcount, medprice, meddate));
        medicinedata();
    }
    else {
        for (let i = 0; i < MedicineList.length; i++) {
            if (MedicineList[i].MedicineId == currentMedicineId) {
                MedicineList[i].MedicineName = medname;
                MedicineList[i].MedicinePrice = medprice;
                MedicineList[i].MedicineCount = medcount;
                MedicineList[i].ExpiryDate = MedicineList[i].ExpiryDate;
                medicinedata();
            }
        }
    }
    let AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = 'none';
}
function demo(item) {
    MedicineList = MedicineList.filter((items) => items.MedicineId !== item);
    medicinedata();
}
//edit Medicine
let emedname = document.getElementById("medname");
let emedcount = document.getElementById("medcount");
let emedprice = document.getElementById("medprice");
let emeddate = document.getElementById("meddate");
let currentMedicineId;
function edit(items) {
    let AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = "block";
    const item = MedicineList.find((item) => item.MedicineId === items);
    if (item) {
        currentMedicineId = item.MedicineId;
        emedname.value = item.MedicineName;
        emedcount.value = String(item.MedicineCount);
        emedprice.value = String(item.MedicinePrice);
        //emeddate.value = String(item.ExpiryDate);
    }
}
function purchase() {
    let medicineinfo = document.getElementById('medicineinfo');
    medicineinfo.style.display = "none";
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";
    MedicineList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.MedicineId}</td>
        <td>${item.MedicineName}</td>
        <td>${item.MedicinePrice}</td>
        <td>${item.MedicineCount}</td>
        <td>${item.ExpiryDate.toLocaleDateString()}</td>
        <td>
          <button onclick="add1('${item.MedicineId}')">Buy</button>
          
        </td>
      `;
        tableBody.appendChild(row);
    });
    let purchase = document.getElementById("purchase");
    purchase.style.display = "block";
}
let selectID;
function add1(item) {
    let purchasedetails = document.getElementById('purchasedetails');
    purchasedetails.style.display = "block";
    selectID = item;
}
function medicineListCheck() {
    let medicineInfo = document.getElementById('medicineInfo');
    let medicineList = document.getElementById('medicineList');
    let medicineName = medicineList[medicineList.selectedIndex].innerHTML;
    for (let i = 0; i < MedicineList.length; i++) {
        if (MedicineList[i].MedicineName == medicineName) {
            medicineInfo.innerHTML = `Medicine Id : ${MedicineList[i].MedicineId} --- Medicine Name : ${MedicineList[i].MedicineName} --- Medicine Count : ${MedicineList[i].MedicineCount} --- Medicine Price : ${MedicineList[i].MedicinePrice} `;
            displayRequiredCount();
        }
    }
}
function displayRequiredCount() {
    //let medicineInfo = document.getElementById('medicineInfo') as HTMLLabelElement;
    let requiredCount = document.getElementById('requiredCount');
    //medicineInfo.style.display = "none";
    requiredCount.style.display = "block";
}
function buyMedicine() {
    let proceed = true;
    let finalMedicineRequiredCount = 0;
    //let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
    let medicineRequiredCount = document.getElementById('medicineRequiredCount').value;
    //let medicineName = medicineList[medicineList.selectedIndex].innerHTML;
    let medicineRequiredCountRegex = /^\d{1,3}$/;
    if (medicineRequiredCountRegex.test(medicineRequiredCount) && +medicineRequiredCount > 0) {
        for (let i = 0; i < MedicineList.length; i++) {
            if (MedicineList[i].MedicineId == selectID) {
                if (MedicineList[i].MedicineCount > 0) {
                    if ((MedicineList[i].MedicineCount - +medicineRequiredCount) < 0) {
                        proceed = confirm(`We only have ${MedicineList[i].MedicineCount} ${MedicineList[i].MedicineName}. Do you want to buy ${MedicineList[i].MedicineCount} ${MedicineList[i].MedicineName}?`);
                        if (proceed) {
                            finalMedicineRequiredCount = MedicineList[i].MedicineCount;
                        }
                    }
                    else {
                        finalMedicineRequiredCount = +medicineRequiredCount;
                    }
                    if (proceed) {
                        MedicineList[i].MedicineCount = MedicineList[i].MedicineCount - finalMedicineRequiredCount;
                        OrderList.push(new Order(MedicineList[i].MedicineId, CurrentUserId, MedicineList[i].MedicineName, finalMedicineRequiredCount, OrderStatus.Ordered));
                        alert("Purchase Success.");
                    }
                }
                else if (MedicineList[i].MedicineCount <= 0) {
                    alert("Out of Stock, you can buy alternative medicine.");
                }
            }
        }
    }
    else {
        alert("Please enter valid Required Count");
    }
}
function Topup() {
    let topup = document.getElementById('topup');
    let currentBalance = document.getElementById('currentBalance');
    topup.style.display = "block";
    //currentBalance.style.display="block";
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserId == CurrentUserId) {
            currentBalance.innerHTML += UserArrayList[i].UserBalance.toString();
        }
    }
}
function recharge() {
    let topup = (document.getElementById('topup'));
    topup.style.display = "none";
    let recharge = document.getElementById('recharge');
    recharge.style.display = "block";
    let rechargebalance = (document.getElementById('rechargebalance'));
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserId == CurrentUserId) {
            let amount = (document.getElementById('amount'));
            UserArrayList[i].UserBalance += parseInt(amount.value);
            rechargebalance.innerHTML = UserArrayList[i].UserBalance.toString();
        }
    }
}
function showHistory() {
    let historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.style.display = "block";
    let historyDisplaytable = document.querySelector("#historyDisplay tbody");
    historyDisplaytable.innerHTML = "";
    OrderList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.MedicineId}</td>
        <td>${item.UserId}</td>
        <td>${item.MedicineName}</td>
        <td>${item.MedicineCount}</td>
        <td>${item.OrderStatus}</td>
        `;
        historyDisplaytable.appendChild(row);
    });
    let medicinedata = document.getElementById('medicinedata');
    medicinedata.style.display = "none";
    let purchase = document.getElementById('purchase');
    purchase.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
}
function ShowBalance() {
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "block";
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserId == CurrentUserId) {
            let currentBalance = document.getElementById('balance');
            currentBalance.innerHTML = `Your Available Balance is ${UserArrayList[i].UserBalance.toString()}`;
        }
    }
}
function cancel() {
    let purchase = document.getElementById("purchase");
    purchase.style.display = "none";
    let topup = (document.getElementById('topup'));
    topup.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let cancelDisplay = document.getElementById('cancelDisplay');
    cancelDisplay.style.display = "block";
    const tableBody = document.querySelector("#cancelDisplay tbody");
    tableBody.innerHTML = "";
    OrderList.forEach((item) => {
        if (item.UserId == CurrentUserId && item.OrderStatus == OrderStatus.Ordered) {
            CurrentOrderId = item.OrderId;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.UserId}</td>
                <td>${item.MedicineId}</td>
                <td>${item.MedicineCount}</td>
                <td>${item.MedicineName}</td>
                <td>${item.OrderStatus}</td>
                <td>
                <button onclick="Remove()">Cancel</button>
                </td>
            `;
            tableBody.appendChild(row);
        }
    });
}
function Remove() {
    OrderList.forEach((item) => {
        if (item.OrderId == CurrentOrderId) {
            item.OrderStatus = OrderStatus.Cancelled;
            MedicineList.forEach((items) => {
                if (items.MedicineId == item.MedicineId) {
                    items.MedicineCount += item.MedicineCount;
                }
            });
        }
    });
    cancel();
}
