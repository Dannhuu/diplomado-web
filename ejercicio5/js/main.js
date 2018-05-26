
$(function () {
  /* 
    Selectorees JQuery, sintaxis:
        $("[selector css] ")

        Ejemplos:
        $(".form") -> Esto va a selccionar a todos los elementos HTML
        que tengan el atributo "class" con un valor "form"

        $("#form") -> Esto va a seleccionar al elemnto HTML que tengan 
        el atrubuto "id" con un valor "form"

        $("p") -> Esto va a seleccionar al elemnto HTML tipo "p"

        $("page.main page.section p a ") -> Esto va a seleccionar al elemnto HTML tipo "a"
        que esten dentro de "p" que este dentro de un "page.section" que este dentro de
        un "page.main"


                Ejemplo de combinación de 2 objetos utilizando el metodo
                (función) ".extend()" de JQuery


         var alumno = {
    nombre: "Daniel",
    apellido: "Sánchez",
    edad: 22,
};
var alumnoUpdate = {
    nombre: "Daniel Alberto",
    edad: 12,
    ocupación: "Graphic Designer"
};

$.extend(alumno, alumnoUpdate)


  */
$.extend($.validator.messages, {
    required: "Este campo es obligatorio",
    email: "Por favor, escribe una dirección de correo válida.",
    number: "Por favor escribe un numero entero valido",
    rangelength: $.validator.format( "Por favor, escribe un valor entre {0} y {1} caracteres." ),
});
$("#form").validate({
    rules:{
        tel: {
            rangelength: [6, 10],
            number: true,
        }
    }
});



});