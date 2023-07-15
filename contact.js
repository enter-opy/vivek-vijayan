function formHandle() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vivekvijayan6282@gmail.com",
        Password : "D660A9F1CB4C5A0A721D2F86285576345374",
        To : "vivekvijayan6282@gmail.com",
        From : document.getElementById("mail").value,
        Subject : "Message from " + document.getElementById("name").value,
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}