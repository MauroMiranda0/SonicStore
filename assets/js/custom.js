$(document).ready(function() {
    $('#miFormulario').submit(function(event) {
        // Prevenir el envío automático del formulario
        event.preventDefault();

        // Obtener los datos del formulario
        var formData = $(this).serialize();

        // Enviar los datos por AJAX
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function(response) {
                // Mostrar el mensaje de confirmación
                $('#mensajeConfirmacion').text('Formulario enviado correctamente. Gracias por tu mensaje.').removeClass('d-none');
            },
            error: function(error) {
                console.log('Error al enviar el formulario:', error);
            }
        });
    });
});