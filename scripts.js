//================================change document to Alaeddin
const Alaeddin = document;
//================================login part default display none
Alaeddin.getElementById("loginFroms").style.display = "none";

//=====================Functions hide or show password for users
function changeTypePasswordOne() {
    //styles for input register password
    Alaeddin.getElementById('userPasswordLoginPartOne').style.textAlign = "left";
    Alaeddin.getElementById('userPasswordLoginPartOne').style.paddingLeft = "40px";

    //variable password one for input
    let passwordOne = Alaeddin.getElementById("userPasswordLoginPartOne");

    //condition show or hide password
    if (passwordOne.type === "password") {
        Alaeddin.getElementById('eyeShowPassword').classList.remove("fa-eye-slash");
        Alaeddin.getElementById('eyeShowPassword').classList.add("fa-eye");
        Alaeddin.getElementById('userPasswordLoginPartOne').type = "text";
    } else {
        Alaeddin.getElementById('eyeShowPassword').classList.remove("fa-eye");
        Alaeddin.getElementById('eyeShowPassword').classList.add("fa-eye-slash");
        Alaeddin.getElementById('userPasswordLoginPartOne').type = "password";
    }
}

function changeTypePasswordTwo() {
    //styles for input register password
    Alaeddin.getElementById('userPasswordLoginPartTwo').style.textAlign = "left";
    Alaeddin.getElementById('userPasswordLoginPartTwo').style.paddingLeft = "40px";

    //variable password one for input
    let passwordOne = Alaeddin.getElementById("userPasswordLoginPartTwo");

    //condition show or hide password
    if (passwordOne.type === "password") {
        Alaeddin.getElementById('eyeShowPasswordConfirm').classList.remove("fa-eye-slash");
        Alaeddin.getElementById('eyeShowPasswordConfirm').classList.add("fa-eye");
        Alaeddin.getElementById('userPasswordLoginPartTwo').type = "text";
    } else {
        Alaeddin.getElementById('eyeShowPasswordConfirm').classList.remove("fa-eye");
        Alaeddin.getElementById('eyeShowPasswordConfirm').classList.add("fa-eye-slash");
        Alaeddin.getElementById('userPasswordLoginPartTwo').type = "password";
    }
}

//==============Function change page to login or register for users
function changePageToLogin() {

    Alaeddin.getElementById("registerFrom").style.display = "none";
    Alaeddin.getElementById("loginFroms").style.display = "block";

}

function changePageToRegister() {
    Alaeddin.getElementById("registerFrom").style.display = "block";
    Alaeddin.getElementById("loginFroms").style.display = "none";
}

//=================== validated data for input register/login  page
function validateUserName() {
    let UserName = Alaeddin.getElementById("userNameLoginPart").value.length
    //If else run this  scope
    if (UserName > 15) {
        Alaeddin.getElementById("userNameLoginPart").classList.add('is-invalid');
        Alaeddin.getElementById("userNameLoginPart").classList.add('animate__animated');
        Alaeddin.getElementById("userNameLoginPart").classList.add('animate__shakeX');
        Alaeddin.getElementById("userNameLoginPartError").innerHTML = "تعداد نام کاربری شما مجاز نمیباشد";
        Alaeddin.getElementById("registerForm").type = 'button';
    }
    //If true run this scope
    else {
        Alaeddin.getElementById("userNameLoginPart").classList.remove('animate__animated');
        Alaeddin.getElementById("userNameLoginPart").classList.remove('animate__shakeX');
        Alaeddin.getElementById("userNameLoginPart").classList.remove('is-invalid');
        Alaeddin.getElementById("userNameLoginPartError").innerHTML = ""
        Alaeddin.getElementById("registerForm").type = 'submit';
    }
}

//==========================Function Validated Email onKeyPress
function ValidateEmail() {
    //If email true run this scope
    if(Alaeddin.getElementById("userEmailLoginPart").value.match("@gmail.com")
        || Alaeddin.getElementById("userEmailLoginPart").value.match("@yahoo.com")
        || Alaeddin.getElementById("userEmailLoginPart").value.match("@outlook.com")
        || Alaeddin.getElementById("userEmailLoginPart").value.match("@outlook.de")){
        console.log('true');
        Alaeddin.getElementById("userEmailLoginPart").classList.remove('animate__animated');
        Alaeddin.getElementById("userEmailLoginPart").classList.remove('animate__shakeX');
        Alaeddin.getElementById("userEmailLoginPart").classList.remove('is-invalid');
        Alaeddin.getElementById("userEmailLoginPartError").innerHTML = ""
        Alaeddin.getElementById("registerForm").type = 'submit';
    }
    //If email false run this scope
    else{
        console.log('false');
        Alaeddin.getElementById("userEmailLoginPart").classList.add('is-invalid');
        Alaeddin.getElementById("userEmailLoginPart").classList.add('animate__animated');
        Alaeddin.getElementById("userEmailLoginPart").classList.add('animate__shakeX');
        Alaeddin.getElementById("userEmailLoginPartError").innerHTML = "پست الکترونیکی شما مجاز نیست"
        Alaeddin.getElementById("registerForm").type = 'button';
    }
}

//=================================Function Validated Password
Alaeddin.getElementById('userPasswordLoginPartErrorOne').style.display="none";
function ValidatePassword(){
    if(Alaeddin.getElementById("userPasswordLoginPartOne").value.length < 8){
        Alaeddin.getElementById("userPasswordLoginPartErrorOne").classList.add('text-warning');
        Alaeddin.getElementById("userPasswordLoginPartErrorOne").classList.remove('text-success');
        Alaeddin.getElementById('userPasswordLoginPartErrorOne').style.display="block";
        Alaeddin.getElementById("userPasswordLoginPartOne").classList.add('is-invalid');
        Alaeddin.getElementById("userPasswordLoginPartOne").classList.add('animate__animated');
        Alaeddin.getElementById("userPasswordLoginPartOne").classList.add('animate__shakeX');
        Alaeddin.getElementById("eyeShowPassword").classList.add('animate__animated');
        Alaeddin.getElementById("eyeShowPassword").classList.add('animate__shakeX');
    }else{
        Alaeddin.getElementById("userPasswordLoginPartErrorOne").classList.remove('text-warning');
        Alaeddin.getElementById("userPasswordLoginPartErrorOne").classList.add('text-success');
        Alaeddin.getElementById('userPasswordLoginPartErrorOne').style.display="none";
        Alaeddin.getElementById("userPasswordLoginPartOne").classList.remove('is-invalid');
        Alaeddin.getElementById("userPasswordLoginPartOne").classList.remove('animate__animated');
        Alaeddin.getElementById("userPasswordLoginPartOne").classList.remove('animate__shakeX');
        Alaeddin.getElementById("eyeShowPassword").classList.remove('animate__animated');
        Alaeddin.getElementById("eyeShowPassword").classList.remove('animate__shakeX');
    }

}

//==========================================Confirm Password
function ConfirmPassword(){
    let PasswordOne = Alaeddin.getElementById('userPasswordLoginPartOne').value;
    let PasswordTwo = Alaeddin.getElementById('userPasswordLoginPartTwo').value;

    if(PasswordOne === PasswordTwo ){
        Alaeddin.getElementById("userPasswordLoginPartTwo").classList.remove('is-invalid');
        Alaeddin.getElementById("userPasswordLoginPartTwo").classList.remove('animate__animated');
        Alaeddin.getElementById("userPasswordLoginPartTwo").classList.remove('animate__shakeX');
        Alaeddin.getElementById("eyeShowPasswordConfirm").classList.remove('animate__animated');
        Alaeddin.getElementById("eyeShowPasswordConfirm").classList.remove('animate__shakeX');
        Alaeddin.getElementById("userEmailLoginPartErrorConfirm").innerHTML = " ";
    }else{
        Alaeddin.getElementById("userEmailLoginPartErrorConfirm").innerHTML = "رمز عبور مطابقت ندارد";
        Alaeddin.getElementById("userPasswordLoginPartTwo").classList.add('is-invalid');
        Alaeddin.getElementById("userPasswordLoginPartTwo").classList.add('animate__animated');
        Alaeddin.getElementById("userPasswordLoginPartTwo").classList.add('animate__shakeX');
        Alaeddin.getElementById("eyeShowPasswordConfirm").classList.add('animate__animated');
        Alaeddin.getElementById("eyeShowPasswordConfirm").classList.add('animate__shakeX');
    }

}

// =======================================Validated User Login

// user name part
function validatedUserLogin(){
    if(Alaeddin.getElementById('userNamePart').value.length){
        let UserName = Alaeddin.getElementById("userNamePart").value.length
        //If else run this  scope
        if (UserName > 15) {
            Alaeddin.getElementById("userNamePart").classList.add('is-invalid');
            Alaeddin.getElementById("userNamePart").classList.add('animate__animated');
            Alaeddin.getElementById("userNamePart").classList.add('animate__shakeX');
            Alaeddin.getElementById("userNamePartError").innerHTML = "تعداد نام کاربری شما مجاز نمیباشد";
            Alaeddin.getElementById("ButtonLoginForm").type = 'button';
        }
        //If true run this scope
        else {
            Alaeddin.getElementById("userNamePart").classList.remove('animate__animated');
            Alaeddin.getElementById("userNamePart").classList.remove('animate__shakeX');
            Alaeddin.getElementById("userNamePart").classList.remove('is-invalid');
            Alaeddin.getElementById("userNamePartError").innerHTML = ""
            Alaeddin.getElementById("ButtonLoginForm").type = 'submit';
        }
    }
}

//password part
Alaeddin.getElementById('userPasswordLoginError').style.display="none";
function validateUserLoginPassword(){
    if(Alaeddin.getElementById("userPasswordLoginPart").value.length < 8)
    {
        Alaeddin.getElementById("userPasswordLoginError").classList.add('text-warning');
        Alaeddin.getElementById("userPasswordLoginError").classList.remove('text-success');
        Alaeddin.getElementById('userPasswordLoginError').style.display="block";
        Alaeddin.getElementById("userPasswordLoginPart").classList.add('is-invalid');
        Alaeddin.getElementById("userPasswordLoginPart").classList.add('animate__animated');
        Alaeddin.getElementById("userPasswordLoginPart").classList.add('animate__shakeX');
        Alaeddin.getElementById("eyeShowPassword").classList.add('animate__animated');
        Alaeddin.getElementById("eyeShowPassword").classList.add('animate__shakeX');
        Alaeddin.getElementById("ButtonLoginForm").type = 'button';
    }
    else{
        Alaeddin.getElementById("userPasswordLoginError").classList.remove('text-warning');
        Alaeddin.getElementById("userPasswordLoginError").classList.add('text-success');
        Alaeddin.getElementById('userPasswordLoginError').style.display="none";
        Alaeddin.getElementById("userPasswordLoginPart").classList.remove('is-invalid');
        Alaeddin.getElementById("userPasswordLoginPart").classList.remove('animate__animated');
        Alaeddin.getElementById("userPasswordLoginPart").classList.remove('animate__shakeX');
        Alaeddin.getElementById("eyeShowPassword").classList.remove('animate__animated');
        Alaeddin.getElementById("eyeShowPassword").classList.remove('animate__shakeX');
        Alaeddin.getElementById("ButtonLoginForm").type = 'button';
    }

}