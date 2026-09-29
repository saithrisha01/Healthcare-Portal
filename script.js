// Doctor selection based on Department

const doctorList = {

    "Cardiology": "Dr. David",

    "Neurology": "Dr. Michael",

    "Dermatology": "Dr. Sarah",

    "Orthopedics": "Dr. Robert",

    "Pediatrics": "Dr. Emily",

    "General Medicine": "Dr. James"

};



// Automatically select doctor

document.getElementById("department")
.addEventListener("change", function(){


    let department = this.value;

    let doctorBox = document.getElementById("doctor");


    doctorBox.innerHTML = "";


    if(department !== "")
    {

        let option = document.createElement("option");

        option.value = doctorList[department];

        option.textContent = doctorList[department];

        doctorBox.appendChild(option);

    }


});




// Patient Registration

document.getElementById("registrationForm")
.addEventListener("submit", function(event){


event.preventDefault();



// Create patient ID

let patientID = "A" + Math.floor(100 + Math.random() * 900);



let patient = {


    id: patientID,


    name: document.getElementById("name").value,


    email: document.getElementById("email").value,


    mobile: document.getElementById("mobile").value,


    dob: document.getElementById("dob").value,


    gender: document.getElementById("gender").value,


    blood: document.getElementById("blood").value,


    department: document.getElementById("department").value,


    doctor: document.getElementById("doctor").value,


    date: document.getElementById("date").value,


    time: document.getElementById("time").value,


    address: document.getElementById("address").value,


    symptoms: document.getElementById("symptoms").value,


    status: "Confirmed"


};




// Get existing patients

let patients = JSON.parse(localStorage.getItem("patients")) || [];




// Add new patient

patients.push(patient);




// Save patients

localStorage.setItem(
    "patients",
    JSON.stringify(patients)
);




alert(
    "Patient Registered Successfully!\nAppointment ID: " + patientID
);




// Clear form

document.getElementById("registrationForm").reset();



});