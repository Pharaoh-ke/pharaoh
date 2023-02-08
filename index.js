
function sendMail() {
    var body = document.getElementById('message').value;
    var mailBody = body.replaceAll(" ","%20")
    var subject = document.getElementById('subject').value;
    var mailSubject = subject.replaceAll(" ", "%20")
    window.open (
        "mailto:pharaohkenya@gmail.com?subject=" + mailSubject + "&body=" + mailBody,target='_blank'
        )
}       