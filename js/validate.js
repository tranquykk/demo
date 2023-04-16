
$(document).ready(function() {
    $('#form-send').validate({
        ignore: [],
        debug: false,
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            message: {
                required: true,
            },
        },
    })
})

