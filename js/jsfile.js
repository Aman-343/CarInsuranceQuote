
var errorMessages = "";


function ValidateInputs() {

    var f = $("#addForm");

    f.validate({
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            address: {
                required: true
            },
            city: {
                required: true
            },
            province: {
                required: true
            },
            postalCode: {
                required: true,
                postalCodeCheck: true
            },
            phone: {
                required: true,
                phoneNumberCheck: true
            },
            email: {
                required: true,
                email: true,
            },
            age: {
                required: true
            },
            experience: {
                required: true
            },
            accidents: {
                required: true
            }
        },
        messages: {
            firstName: {
                required: "First Name is required"
            },
            lastName: {
                required: "Last Name is required"
            },
            address: {
                required: "Address is required"
            },
            city: {
                required: "City is required"
            },
            province: {
                required: "Province is required"
            },
            postalCode: {
                required: "Postal Code is required",
                postalCodeCheck: "Postal Code must follow the pattern A1A 1A1"
            },
            phone: {
                required: "Phone Number is required",
                phoneNumberCheck: "Phone Number must follow the patterns 111-111-1111 or (111)111-1111"
            },
            email: {
                required: "email address is required",
                email: "Must be a valid email address"

            },
            age: {
                required: "Age (>=16) is required",
                ageCheck: "You must be at least 16 years of age."
            },
            experience: {
                required: "Years of experience is required"
            },
            accidents: {
                required: "Number of accidents is required"
            }
        }
    });

    return f.valid();

}


jQuery.validator.addMethod("postalCodeCheck",
    function (value, element) {
        var postalCodePattern = /^[A-Z][0-9][A-Z]\s[0-9][A-Z][0-9]$/i;

        return this.optional(element) || postalCodePattern.test(value);

    },
    "Postal Code must follow the pattern A1A 1A1"
);

jQuery.validator.addMethod("phoneNumberCheck",
    function (value, element) {
        var phonePattern1 = /^\d{3}-\d{3}-\d{4}$/;
        var phonePattern2 = /^\(\d{3}\)\d{3}-\d{4}$/;

        return this.optional(element) || phonePattern1.test(value) || phonePattern2.test(value);

    },
    "Phone Number must follow the patterns 111-111-1111 or (111)111-1111"
);

jQuery.validator.addMethod("ageCheck",
    function (value, element) {
        //var age = /^([1-9]\d|[6-9]\d{2})$/;
        var ageValue = /^(1[6789]|[2-9]\d)$/;
        return this.optional(element) || ageValue.test(value);

    },
    "Age must be greater than or equal to 16"
);

function AddQuote() {
    if (ValidateInputs()) {

        var json = {};

        $(":input").each(function () {
            json[$(this).attr("id")] = $(this).val();
        });

        var nextId = Number(localStorage.getItem('nextId'));
        if (!nextId) {
            nextId = 1;
        }

        localStorage.setItem("quote-" + nextId, JSON.stringify(json));
        localStorage.setItem("nextId", String(nextId + 1));
        $(location).prop('href', 'viewQuote.html?' + nextId);

    }
}


function LoadQuoteData(id) {

    var json = JSON.parse(localStorage.getItem("quote-" + id));

    $(":input").each(function () {
        $(this).val(json[$(this).attr("id")]);
    });
    

    var driverAge = Number(json['age']);
    var driverExperience = Number(json['experience']);
    var driverAccidents = Number(json['accidents']);
    var subQuote;
    var insuranceQuote = Number(json['finalQuote']);

    if ((driverExperience + 15) >= driverAge){
        console.log(json);
        $("#finalQuote").val("No Insurance for you!! Driver Age / Experience Not Correct");
    }
    else {    
                if (driverAccidents < 3) {


                    if (driverExperience === 0) {
                        subQuote = 4000;

                    }
                    else if (driverExperience >= 1 && driverExperience <= 9) {
                        subQuote = 2500;

                    }
                    else {
                        subQuote = 1800;
                    }

                    if (driverAge >= 30 && driverExperience >= 2) {
                        insuranceQuote = subQuote * 0.75;
                    }

                    else {
                        insuranceQuote = subQuote;
                    }

                    console.log(json);

                    $("#finalQuote").val("$" + insuranceQuote);

                }
                else {
                    console.log(json);

                    $("#finalQuote").val("No Insurance for you!!  Too many accidents - go take a course!");

                }
            }        
        
}




