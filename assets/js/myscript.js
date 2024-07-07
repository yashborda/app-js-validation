$('.otp').on('keyup', function (e) {
    var key = event.keyCode || event.charCode;

    /* for backspace, focus will move to the previous box */
    if (key === 8 || key === 46) {
        $(this).prev('input').focus();
        return;
    }
    $(this).next('input').focus();
});

$('#next, #skip').click(function () {
    $('#sign_up').css('display', 'flex');
    $('.moblie').css('display', 'none');
});

$('#sign_up_arrow').click(function () {
    $('.moblie').css('display', 'flex');
    $('#sign_up').css('display', 'none');
});

var show = "assets/images/Show.jpg";
var hide = "assets/images/hide.png";

$('.field-icon').click(function () {
    if (($('.field-icon').attr("src") === show)) {
        $('.field-icon').attr("src", hide);
        $('#password_up').attr("type", "text");
        $('#password_in').attr("type", "text");
    } else {
        $('.field-icon').attr("src", show);
        $('#password_up').attr("type", "password");
        $('#password_in').attr("type", "password");
    }
});


$('#field-icon_1').click(function () {
    if (($('#field-icon_1').attr("src") === show)) {
        $('#field-icon_1').attr("src", hide);
        $('#password_new').attr("type", "text");
    } else {
        $('#field-icon_1').attr("src", show);
        $('#password_new').attr("type", "password");
    }
});

$('#field-icon_2').click(function () {
    if (($('#field-icon_2').attr("src") === show)) {
        $('#field-icon_2').attr("src", hide);
        $('#password_confirm').attr("type", "text");

    } else {
        $('#field-icon_2').attr("src", show);
        $('#password_confirm').attr("type", "password");
    }
});

$('#sign_up_btn').click(function () {

    let name = $('#name');
    let number = $('#number');
    let email = $('#email');
    let password_up = $('#password_up');

    if (((name.val()).trim() != 0) || ((number.val()).trim() != 0) || ((email.val()).trim() != 0) || ((password_up.val()).trim() != 0)) {

        let sign_up_form = localStorage.getItem("sign_up_form");
        let form_obj = (sign_up_form == null) ? [] : JSON.parse(sign_up_form);

        let form_details = {
            name: name.val(),
            number: number.val(),
            email: email.val(),
            password_up: password_up.val()
        };

        let isSame = false;
        for (let i = 0; i <  form_obj.length; i++) {
            if ((form_details.name == form_obj[i].name) && (form_details.number == form_obj[i].number) && (form_details.email == form_obj[i].email) && (form_details.password_up == form_obj[i].password_up)) {
                isSame = true;
            }
        }

        form_name(form_details.name, form_details.number, form_details.email, form_details.password_up)
        function form_name(name, number, email, password_up) {
            if (!(/[A-Za-z]{3,20}/.test(name))) {
                alert("**  Invalid User Name.");
                isSame = true;
                return;
            }

            if (!(/[0-9]{10}/.test(number))) {
                alert("**  Invalid Mobile Number.");
                isSame = true;
                return;
            }

            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
                alert("**  Invalid email address.");
                isSame = true;
                return;
            }
            if (!(password_up).match(/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}/)) {
                alert("Must contain at least one number and one uppercase and lowercase letter required.");
                isSame = true;
                return;
            }
        }

        if (!isSame) {
            form_obj.push(form_details);
            localStorage.setItem("sign_up_form", JSON.stringify(form_obj));
            alert("Account Created.\nPlease Sign In using the link below.");
            $('#homepage').css('display', 'block');
            $('#sign_up').css('display', 'none');
            $("#name").val("");
            $("#number").val("");
            $("#email").val("");
            $("#password_up").val("");
        };
        // console.log(form_obj);
    }

});

$('#sign_up_line').click(function () {
    $('#sign_in').css('display', 'flex');
    $('#sign_up').css('display', 'none');
});

$('#sign_in_arrow').click(function () {
    $('#sign_up').css('display', 'flex');
    $('#sign_in').css('display', 'none');
});

$('#sign_in_line').click(function () {
    $('#sign_up').css('display', 'flex');
    $('#sign_in').css('display', 'none');
});

$('#sign_in_btn').click(function () {
    let email_in = $('#email_in');
    let password_in = $('#password_in');

    let sign_up_form = localStorage.getItem("sign_up_form");
    let form_obj = (sign_up_form == null) ? [] : JSON.parse(sign_up_form);
    let form_detail_in = {
        email_in: email_in.val(),
        password_in: password_in.val()
    };

    let isSame = false;
    for (let i = 0; i < form_obj.length; i++) {
        if ((form_detail_in.email_in == form_obj[i].email) && (form_detail_in.password_in == form_obj[i].password_up)) {
            isSame = true;
        }
    }

    console.log(form_detail_in.email_in);
    console.log(form_obj[2].email);
    console.log(form_detail_in.password_in);
    console.log(form_obj[2].password_up);

    if (isSame == true) {
        $('#homepage').css('display', 'block');
        $('#sign_in').css('display', 'none');
    }
    if (isSame == false) {
        alert("Incorrect login Email and Password");
    }

});

$('#forgot_password_line').click(function () {
    $('#forgot_password').css('display', 'flex');
    $('#sign_in').css('display', 'none');
});

$('#forgot_password_arrow').click(function () {
    $('#sign_in').css('display', 'flex');
    $('#forgot_password').css('display', 'none');
});

$('#activation_code_btn').click(function () {
    $('#confirm_code').css('display', 'flex');
    $('#forgot_password').css('display', 'none');
});

$('#confirm_code_arrow').click(function () {
    $('#forgot_password').css('display', 'flex');
    $('#confirm_code').css('display', 'none');
});

$('#confirm_btn').click(function () {
    $('#confirm_password').css('display', 'flex');
    $('#confirm_code').css('display', 'none');
});

$('#confirm_password_arrow').click(function () {
    $('#confirm_code').css('display', 'flex');
    $('#confirm_password').css('display', 'none');
});

$('#confirm_password_btn').click(function () {
    $('#homepage').css('display', 'block');
    $('#confirm_password').css('display', 'none');
});