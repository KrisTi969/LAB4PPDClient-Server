/**
 * Created by Florina on 12.10.2017.
 */
function formSubmit() {
    document.getElementById("logoutForm").submit();
    sessionStorage.clear();
}
$(document).ready(function () {


    $("#resetEmailForm").formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'email_reset': {
                validators: {
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'The value is not a valid email address'
                    }
                }
            }
        }
    });

    $("#loginForm").formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'username_login': {
                validators: {
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'The value is not a valid email address'
                    }
                }
            },
            'password_login': {
                validators: {
                    regexp: {
                        regexp: '^(?=[\\w!@#$%^&*()+])(?:.*[!@#$%^&*()+]+.*)$',
                        message: 'The password should contain at least one symbol.'
                    },
                    stringLength: {
                        min: 8,
                        message: 'Password content must be minimum 8 characters'
                    }
                }
            }
        }
    });


    $("[name='registerForm']").formValidation({
        framework: 'bootstrap',
        excluded: ':disabled',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'email': {
                validators: {
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'The value is not a valid email address'
                    }
                }
            },
            'password': {
                validators: {
                    identical: {
                        field: 'password2',
                        message: 'The password and its confirm are not the same'
                    },
                    regexp: {
                        regexp: '^(?=[\\w!@#$%^&*()+])(?:.*[!@#$%^&*()+]+.*)$',
                        message: 'The password should contain at least one symbol.'
                    },
                    stringLength: {
                        min: 8,
                        message: 'Password content must be minimum 8 characters'
                    }
                }
            },
            'password2': {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    },
                    regexp: {
                        regexp: '^(?=[\\w!@#$%^&*()+])(?:.*[!@#$%^&*()+]+.*)$',
                        message: 'The password should contain at least one symbol.'
                    },
                    stringLength: {
                        min: 8,
                        message: 'Password content must be minimum 8 characters'
                    }
                }
            },
            'phoneNumber': {
                validators: {
                    phone: {
                        country: 'Ro',
                        message: 'The value entered is a %s phone number'
                    }
                }
            },
            'plate': {
                validators: {
                    regexp: {
                        regexp: '(^(AB|AR|AG|BC|BH|BN|BT|BV|BR|BZ|CS|CJ|CL|CT|CV|DB|DJ|GL|GR|GJ|HR|HD|IS|IL|MM|MH|MS|NT|OT|PH|SM|SJ|SB|TR|TM|TL|VS|VN|B)-\\d{2}\\d?-[A-Z]{3}$)|(^[A-Z]{2}-\\d{2}-[A-Z]{3}$)',
                        message: "The plate number is not valid! example: CJ-96-JNG"
                    }
                }
            },
            'lastName': {
                validators: {
                    regexp: {
                        regexp: '[a-zA-Z]+$',
                        message: "Lastname should not contain numbers or special characters."
                    }
                }
            },
            'firstName': {
                validators: {
                    regexp: {
                        regexp: '[a-zA-Z]+$',
                        message: "Firstname should not contain numbers or special characters."
                    }
                }
            },
            'checkboxTC': {
                validators: {
                    notEmpty: {
                        message: 'You must accept the terms and conditions.'
                    }
                }
            }
        }
    });

    $("#passForm").formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'password_reset': {
                validators: {
                    identical: {
                        field: 'password2_reset',
                        message: 'The password and its confirm are not the same'
                    },
                    regexp: {
                        regexp: '^(?=[\\w!@#$%^&*()+])(?:.*[!@#$%^&*()+]+.*)$',
                        message: 'The password should contain at least one symbol.'
                    },
                    stringLength: {
                        min: 8,
                        message: 'Password content must be minimum 8 characters'
                    }
                }
            },
            'password2_reset': {
                validators: {
                    identical: {
                        field: 'password_reset',
                        message: 'The password and its confirm are not the same'
                    }
                }
            }
        }
    });




});