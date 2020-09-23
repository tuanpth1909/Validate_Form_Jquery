$(document).ready(function () {
    alert("hello world");

    //Validate form 
    $('#validate').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                rangelength: [8, 16]
            },
            address1: {
                required: true
            },
            zip: {
                required: true,
                length: 6,
                number: true,
            },
        },
        messages: {
            email: {
                required: "Vui lòng nhập email!",
                email: "Định dạng phải là email",
            },
            password: {
                required: "Vui lòng nhập password!",
                rangelength: "Độ dài của password từ 8 đến 16 kí tự",
            },
            address1: {
                required: "Vui lòng nhập địa chỉ!",
            },
            zip: {
                required: "Vui lòng nhập mã zip",
                length: "Chỉ 6 kí tự!",
                number: "Mã zip chỉ có thể là số!",
            },
        }
    });

});