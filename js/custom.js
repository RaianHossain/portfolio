
// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

function saySorry() {
	alert("Confidential!!! It's a client project. Let me know if you want to know more about the project.")
}

function onFormSubmit(event) {
	event.preventDefault(); 
  
	// Retrieve form values
	const name = event.target.name.value;
	const email = event.target.email.value;
	const message = event.target.message.value;
  
	// Use the values (for demonstration, logging them here)
	console.log("Name:", name);
	console.log("Email:", email);
	console.log("Message:", message);
  
	// Optional: Add your form submission logic here
	alert("Form submitted successfully!");
  }



  