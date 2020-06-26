function idCard(){
  
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    var address = document.getElementById("address").value;
      
    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;
      
    var numberArray = [];
    numberArray.push(age, phoneNumber);
    var i;
      for (i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
          document.getElementById("postAge").innerHTML = "Age: " + age;
        }
        else if (numberArray[i] > 100) {
          document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
        }
      }
  }