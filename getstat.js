document.addEventListener("DOMContentLoaded", function() {

    const savedEmail = localStorage.getItem('userEmail');

    if (savedEmail) {
        document.getElementById('email-address').innerText = savedEmail;
    }

    const sendlinkBtn = document.querySelector('#send-link-btn');
    const creatPasswordInstead = document.querySelector('#creat-password-instead');
    const gmailMessage = document.querySelector('.gmail');
    const messageAlert = document.getElementById('message-Alert');
    const img = document.querySelector('picture');
    const header = document.querySelector('header');

    console.log();

    if (sendlinkBtn) {
        sendlinkBtn.addEventListener('click', () => {

            gmailMessage.innerHTML = `We sent a sign-up link to <b>${savedEmail}</b>. Tap the link in the email to finish setting up your account.`;
            sendlinkBtn.innerText = "Resend Link";
            messageAlert.innerText = "Check your inbox";
            img.innerHTML = `<img alt="" src="email-img.png" style="width: 96px; height: 96px; object-fit: contain;">;`;
            sendlinkBtn.style.setProperty('margin-bottom' , '0');
            creatPasswordInstead.style.setProperty('display' , 'block');
            header.style.setProperty('margin-bottom' , '100px');

        });
    }

});