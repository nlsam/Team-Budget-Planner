var myData = [
    {"Id" : 0, "dealName" : "TV Project", "dealDescribe" : "Build 45 TVs", "vendorName" : "Samsung", "cost" : 14000},
    {"Id" : 1, "dealName" : "Laptop Project", "dealDescribe" : "Build 45 laptops", "vendorName" : "Dell", "cost" : 7000},
    {"Id" : 2, "dealName" : "iPhone Project", "dealDescribe" : "Build 45 iPhones", "vendorName" : "Apple", "cost" : 745000},
]


var currentDealId = myData.length;
  

localStorage.setItem("myData", "test")

var myDataTest = localStorage.getItem("myData")

function addDeal() {
    var newId = document.getElementById("addid").value;
    var newName = document.getElementById("adddealname").value;
    var newDescription = document.getElementById("adddescription").value;
    var newVendor = document.getElementById("addvendor").value;
  
     myData.push({"Id": newId, "dealName" : newName, "dealDescribe" : newDescription, "vendorName" : newVendor, "cost" : 0});
    showTable();
    
 }

function editDeal(){
    var newId = document.getElementById("editid").value;
    var newName = document.getElementById("editdealname").value;
    var newDescription = document.getElementById("editdescription").value;
    var newVendor = document.getElementById("editvendor").value;
    myData[newId].dealName=newName;
    myData[newId].dealDescribe=newDescription;
    myData[newId].vendorName=newVendor;
    showTable();
}

function deleteDeal(){
    var newId = document.getElementById("id").value;

    for( var i = 0; i < myData.length; i++){ 
    
        if ( myData[i].Id === newId) { 
            myData.splice(i, 1); 
        }
     }
    document.getElementById("taskList").deleteRow(newId+1); 
}

function editCost(){
    var newId = document.getElementById("task").value;
    var newCost = document.getElementById("cost").value;
    myData[newId].cost=newCost;
    showTable();
}
function showTable(){
    for (var i=0; i< myData.length; i++){
    var newRow = document.getElementById("taskList").insertRow(i+1);
    var newID = newRow.insertCell(0);
    var newName = newRow.insertCell(1);
    var newDescription = newRow.insertCell(2);
    var newVendor = newRow.insertCell(3);
    var newCost=newRow.insertCell(4);
    newID.innerHTML=myData[i].Id ;
    newName.innerHTML=myData[i].dealName ;
    newDescription.innerHTML=myData[i].dealDescribe ;
    newVendor.innerHTML=myData[i].vendorName ;
    newCost.innerHTML=myData[i].cost ;
}
}
