function postToGoogle() {
    $('#success-btn').show();
    $('#submit-btn').hide();
    var field1 = $("#name").val();
    var field2 = $("#email").val();
    var field3 = $("#number").val();
    var field4 = $("#role option:selected").text();
    var field5 = $("#que1 option:selected").text();
    var field6 = $("#que2 option:selected").text();
    var field7 = $("#que3 option:selected").text();
    var field8 = $("#que4 option:selected").text();
    var field9 = $("#que5 option:selected").text();
    var field10 = $("#que6 option:selected").text();
    var field11 = $("#que7 option:selected").text();
    var field12 = $("#que8 option:selected").text();
    var field13 = $("#que9 option:selected").text();
    var field14 = $("#que10 option:selected").text();
    

if(field1 == ""){
alert('Please Fill Your Name');
document.getElementById("name").focus();
return false;
}
if(field2 == ""){
alert('Please Fill Your Email');
document.getElementById("email").focus();
return false;
}
if(field3 == "" || field3.length > 10 || field3.length < 10){
alert('Please Fill Your Mobile Number');
document.getElementById("number").focus();
return false;
}


// 5537704

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSc0sv0LRl8qmy8nok-703hwfYMqtSPt-alDbftVnGVnUnSmVg/formResponse?",
data: {"entry.1181298464": field1, "entry.1289061282": field2, "entry.600078665": field3, "entry.5537704": field4,  
        "entry.1939816635": field5, "entry.819260042": field6,  "entry.539887030": field7,  "entry.8002618": field8,
        "entry.1188242642": field9,  "entry.539997619": field10,  "entry.1927309329": field11,  "entry.1509251524": field12, 
        "entry.485494371": field13, "entry.945185264": field14},
        type: "POST",
        dataType: "xml",
        success: function(d)
{
},
error: function(x, y, z)
{

  $('#success-msg').show();
  $('#survey-form').hide();
  
}
    });
return false;
}