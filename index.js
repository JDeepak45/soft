let OTP = '';
function send(){
// otp
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    console.log(OTP);
    document.getElementById("code").value=OTP;

    var params={
        to_name:document.getElementById("to").value,
        from_name:document.getElementById("code").value,
    };
    const serviceid="service_pcju1pm";
    const templateid="template_v71925i";
    emailjs.send(serviceid,templateid,params)
    .then(
        res =>{
            document.getElementById("to").value()="";
            document.getElementById("code").value()="";
            console.log(res);
            alert("succes");

        }

    )
}