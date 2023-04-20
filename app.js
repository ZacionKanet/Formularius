jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
}, "No use espacios y no deje en blanco este campo");
jQuery.validator.addMethod("customEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Please enter valid email address!");
$.validator.addMethod( "alphanumeric", function( value, element ) {
return this.optional( element ) || /^\w+$/i.test( value );
}, "Letras, números, y guiones bajos solamente" );
jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es requerido.",
});


var $registrationForm = $('#registration');
if($registrationForm.length){
  $registrationForm.validate({
      rules:{
          //"nombre" es el nombre de la caja de texto
          rut: {
            required: true,
            //alphanumeric es el método definido arriba
            alphanumeric: true,
            minlength: 9,
            maxlength: 10
          },
          nombre: {
              required: true,
              alphanumeric: true,
              minlength: 3,
              maxlength: 20
            },
          apaterno: {
            required: true,
            alphanumeric: true,
            minlength: 3,
            maxlength: 20
            },
        amaterno: {
            required: true,
            alphanumeric: true,
            minlength: 3,
            maxlength: 20
            },
          edad: {
              required: true,
              Range:[18,35]
          },
          password: {
              required: true
          },
          confirm: {
              required: true,
              equalTo: '#password'
          },
          fname: {
              required: true,
              noSpace: true
          },
          lname: {
              required: true,
              noSpace: true
          },
          gender: {
              required: true
          },
          hobbies: {
              required: true
          },
          country: {
              required: true
          },
          address: {
              required: true
          },
        telefono: {
            required: true,
            minlength: 9,
            maxlength: 12
          },
          carta: {
            required: true
      },
      messages:{            //mensajes de error para el campo mencionado
          rut: {
            required: 'Ingrese rut del usuario!',
            minlength: 'Ingrese al menos 9 carácteres',
            maxlength: 'Ingrese menos de 10 carácteres'
        },
          nombre: {
              required: 'Ingrese nombre del usuario!',
              minlength: 'Ingrese al menos 3 carácteres',
              maxlength: 'Ingrese menos de 20 carácteres'
          },
          apaterno: {
            required: 'Ingrese apellido paterno del usuario!',
            minlength: 'Ingrese al menos 3 carácteres',
            maxlength: 'Ingrese menos de 20 carácteres'
        },
          amaterno: {
            required: 'Ingrese apellido materno del usuario!',
            minlength: 'Ingrese al menos 3 carácteres',
            maxlength: 'Ingrese menos de 20 carácteres'
        },
          edad: {
              required: 'Por favor ingrese edad!',
              Range: 'Por favor ingrese una edad entre 18 y 35 años!',
              number: 'Por favor ingrese un número'
          },
          password: {
              required: 'Please enter password!'
          },
          confirm: {
              required: 'Please enter confirm password!',
              equalTo: 'Please enter same password!'
          },
          fname: {
              required: 'Please enter first name!'
          },
          lname: {
              required: 'Please enter last name!'
          },
          country: {
              required: 'Please select country!'
          },
          address: {
              required: 'Please enter address!'
          },
          telefono: {
            required: 'Ingrese nombre del usuario!',
            minlength: 'Ingrese al menos 3 carácteres',
            maxlength: 'Ingrese menos de 20 carácteres'
        },
      },
      errorPlacement: function(error, element) 
      {
        if (element.is(":radio")) 
        {
            error.appendTo(element.parents('.gender'));
        }
        else if(element.is(":checkbox")){
            error.appendTo(element.parents('.hobbies'));
        }
        else 
        { 
            error.insertAfter( element );
        }
        
       }
       
  });
}