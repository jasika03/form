let button= document.querySelector("#btn");

button.addEventListener("click", () => {
    let button= document.querySelector("#btn");
    let frname= document.querySelector("#fname").value; 
    let lsname= document.querySelector("#lname").value;
    let mail= document.querySelector("#email").value;
    let city= document.querySelector("#cty").value;
    let country= document.querySelector("#cntry").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let genderValue = gender ? gender.value : "";

    localStorage.setItem("firstname",frname);
    localStorage.setItem("lastname",lsname);
    localStorage.setItem("email",mail);
    localStorage.setItem("city",city);
    localStorage.setItem("country",country);
    localStorage.setItem("gender", genderValue);

    alert(`Name : ${frname}  ${lsname}
Email : ${mail}
City : ${city}
Country : ${country}                                                 
Gender : ${genderValue}`);
    
    displayStoredData();
});



function displayStoredData() {
    
    let frname = localStorage.getItem("firstname");
    let lsname = localStorage.getItem("lastname");
    let mail = localStorage.getItem("email");
    let city = localStorage.getItem("city");
    let country = localStorage.getItem("country");
    let gender = localStorage.getItem("gender");

    
    let displayContent = document.querySelector("#displayContent");
    displayContent.innerHTML = `
        <strong>First Name:</strong> ${frname || "Not provided"}<br>
        <strong>Last Name:</strong> ${lsname || "Not provided"}<br>
        <strong>Email:</strong> ${mail || "Not provided"}<br>
        <strong>City:</strong> ${city || "Not provided"}<br>
        <strong>Country:</strong> ${country || "Not provided"}<br>
        <strong>Gender:</strong> ${gender || "Not provided"}`;
}

document.addEventListener("DOMContentLoaded", displayStoredData);