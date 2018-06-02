$(function () {
    /*
   1.- Tipo de valores:
        - Cadena de texto (STRING)

            var myText = 'Hola Mundo';

        - Numericos (NUMBER): Nunca van estre comillas

            var myNumber = 100;

        - Booleano (BOOLEAN): Valores lógicos binarios, TRUE or FALSE

            var verdadero = TRUE;
            var verdadero2 = 1; 

            var falso= FALSE;
            var falso2: 0;

        - Objeto (OBJECT): Conjunto de propiedades y metodos

        - Arreglos (vectores o matices) (ARRAY): Conjunto de valores y siempre deben estar entre corchetes y cda valor separado por 'comas'

        - Funciones (FUNCTION): Es un conjunto de sentencias que se ejecuetan cuando se invoca a la función. La sintaxiss de una
                                funcion anonima es:

                                function() {
                                    conjunto de sentencias
                                }

                                Una función puede recibir paranetros, un parametro es una variable local es decir que solo existe dentro de la funcion.

                                function(valor1, valor2){
                                    varvalor1 y valor2 sòlo existen dentro de esta función
                                }

        - Indefinidos (UNDEFINED)

        - Nulos (NULL)

        - NaN = Not an Number

    2.- Operadores Aritmèticos:
        +  -> Suma
            - Valores numericos NUMBER se suma
            - Si al menos un valor es de tipo STRING se concatenan
        -  -> Resta
        /  -> División
        *  -> Multiplicación
        %  -> Resto
        ++  -> Incremento
        --  -> Decremento


    */

    //STRING 
    var myName = 'Daniel';
    var mylastName = 'Sánchez'

    //NUMBER
    var myAge = '21'
    var myHeight = '1.87'

    //BOOLEAN
    var isMarried = true;
    var isRobot = false;
    var isHappy = true;

    //Suma
    var myfullName = myName + ' ' + mylastName;
    // console.log(myfullName);
    
    
    var number1 = 50;
    var number2 = 120;
    var result = number1 + number2;
    //console.log (result)
    
    
    var result2 =  myfullName + myAge;
    //console.log(result2);

    var number3 = '40';
    var number4 = '50';
    var result3 = number3 + number4;
    //console.log(result3);


    var resultadoresta = number1 - number2;
    //console.log(resultadoresta);

    var resultadodivision = number2 / number1;
    //console.log(resultadodivision);
    var resultadoresto = number2 % number1;
    //console.log(resultadoresto);
    number1++
    number1++
    number1++
    number1++
    number1++
    number1++
    //console.log(number1);
    number1--
    number1--
    number1--
    number1--
    number1--
    //console.log(number1);

    //ARRAY
    var diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    var numeroDlasSemana = diasSemana.length;
    var position = 4;

    //console.log(diasSemana);
    //console.log(numeroDlasSemana);
    //console.log(diasSemana[position]);


    //FUNCTION
    // Area = (base * altura) / 2;
    /**
     Cualcular el area de los siguientes triangulos:
     
        1.- Base = 100      Altura = 200;
        2.- Base = 105      Altura = 350;
        3.- Base = 3876     Altura = 1984;
        4.- Base = 245.34   Altura = 54.12;
        5.- Base = 1254.23  Altura = 7463.45;
     */

    // var base1 = 100;
    // var altura1 = 200;
    // var basealtura1 = base1 * altura1;
    // var areatrinagulo1 = basealtura1 / 2;

    // var base2 = 105;
    // var altura2 = 350;
    // var basealtura2 = base2 * altura2;
    // var areatrinagulo2 = basealtura2 / 2;


    //console.log(areatrinagulo1); 
    //console.log(areatrinagulo2);   
    
    // var calculateArea = function(){

    //     var base = 100;
    //     var altura = 200;
    //     var basealtura = base * altura;
    //     var areatrinagulo = basealtura / 2;
    //     console.log(areatrinagulo);
    // }
    //     var calculateArea = function(){
    //     var base = 105;
    //     var altura = 350;
    //     var basealtura = base * altura;
    //     var areatrinagulo = basealtura / 2;

    //     console.log(areatrinagulo);
    // }  
    // calculateArea1();
    // calculateArea2();

    // var ejemplo;
    
    // console.log(ejemplo);
    
    var calcularArea = function(base, altura) {
        var area = (base * altura) / 2;
        return area;

    };
    
    var triangulo1 = calcularArea(100, 200);
    var triangulo2 = calcularArea(105, 350);
    var triangulo3 = calcularArea(3876, 1984);
    var triangulo4 = calcularArea(245.34 , 54.12);
    var triangulo5 = calcularArea(1254.23, 7463.45);
    
    var areas = $('#areas');
    //areas.append(triangulo1, triangulo2, triangulo3, triangulo4, triangulo5);

    var ul = document.createElement('ul');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
    var li5 = document.createElement('li');


    $(li1).append(triangulo1);
    $(li2).append(triangulo2);
    $(li3).append(triangulo3);
    $(li4).append(triangulo4);
    $(li5).append(triangulo5);
    $(ul).append(li1, li2, li3, li4, li5);
    areas.append(ul);
   
    
    //OBJECT

    var persona = {
    name: 'Daniel',
    lastName: 'Sánchez',
    age: 22,
    height: 1.87,
    isMarried: false,
    isRobot: false,
    pets: [
        {
            type: 'Perro',
            name: 'Motty',
            age: 10,
        },
        {
            type: 'Perro',
            name: 'Baloo',
            age: 15
        },
    ],
    printFullName: function(){
        var fullName = this.name + ' ' + this.lastName;
        areas.append(fullName)
    }
    }


console.log(persona['name']);
console.log(persona['lastName']);
console.log(persona['pets'][0]['name']);
console.log(persona['pets'][1]['name']);
console.log('---------------')
console.log(persona.name);
console.log(persona.lastName);
console.log(persona.pets[0].name);
console.log(persona.pets[1].name);

persona.printFullName();


});