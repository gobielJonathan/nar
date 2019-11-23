(function ($) {
    "use strict"
    /*==================================================================
    [ Validate ]*/
    var inputLogin = $('.validate-input-login .input100');

    $('#nav-login').on('submit', function (e) {
        e.preventDefault()
        var check = true;

        for (var i = 0; i < inputLogin.length; i++) {
            if (validate(inputLogin[i]) == false) {
                showValidate(inputLogin[i]);
                check = false;
            }
        }

        if (check) {
            $.ajax({
                url: "http://localhost:8000/src/api/login.php",
                type: "POST",
                data: {
                    "username": $(this).find("#username").val(),
                    "password": btoa($(this).find("#password").val())
                },
                success: function (data) {
                    const res = JSON.parse(data)
                    const user = res.data

                    if (user == null) {
                        swal({
                            title: "Failed Authentication",
                            text: "Wrong Username or Password",
                            icon: "error"
                        })
                    } else {
                        location.href = "index.php";
                        sessionStorage.setItem("auth", user)
                    }
                },
                fail: function (data) {
                    console.log(data)
                }
            })

        }

    });


    var inputRegister = $('.validate-input-register .input100');

    $('#nav-register').on('submit', function (e) {
        e.preventDefault()
        var check = true;

        for (var i = 0; i < inputRegister.length; i++) {
            if (validate(inputRegister[i]) == false) {
                showValidate(inputRegister[i]);
                check = false;
            }
        }

        if (check) {
            $.ajax({
                url: "http://localhost:8000/src/api/register.php",
                type: "POST",
                data: {
                    "username": $(this).find("#username").val(),
                    "fullname": $(this).find("#fullname").val(),
                    "password": btoa($(this).find("#password").val())
                },
                success: function (data) {
                    const res = JSON.parse(data)
                    const status = res.data.status

                    if (status != true) {
                        swal({
                            title: "Failed Register",
                            text: status,
                            icon: "error"
                        })
                    } else {
                        swal({
                            title: "Success Register",
                            text: "Please Login to continue...",
                            icon: "success"
                        })
                    }
                },
                fail: function (data) {
                    console.log(data)
                }
            })

        }

    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);