

function sendEmail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  const subject = encodeURIComponent("Portfolio Contact from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message: " + message
  );

  window.location.href =
    "mailto:sakthisiva8486@gmail.com=" + subject + "&body=" + body;
}

function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  const whatsappMessage = encodeURIComponent(
    "Hello Archana,\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Message: " + message
  );

  window.open(
    "https://wa.me/9791746164?text=" + whatsappMessage,
    "_blank"
  );
}
