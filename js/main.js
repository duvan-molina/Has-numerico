/* descripcion */
console.log("Has númerico: se obtiene la cantidad de letras del nombre y apellido, luego se multiplica por la edad y por ultimo se divide por un numero random y se redondea al entero mas cercano");

var data = function(){
    /* variables con las que voy a trabajar*/
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var age = parseInt(document.getElementById('age').value);
    
    /* validacion de inputs*/
    
    if(document.getElementById('form').name.value.length == 0){
        
        alert("valida tu nombre");
        
    } else if(document.getElementById('form').lastname.value.length == 0) {
        
        alert("valida tu apellido");
        
    }else if (document.getElementById('form').age.value.length  == 0){
        
        alert("por favor ingresa tu edad");
        
    }
    else(
        mostrar()
    )

    /*Muestra en pantalle el resultado*/ 
        function mostrar(){
            var sum = name.length + lastname.length;
            var result = (Math.round(sum * age / random))
            document.getElementById('p').innerHTML = "El resultado es: " + result;
          };
    
    
    /* Limpia los inputs*/
    function clean (){
        document.getElementById('name').value = "";
        document.getElementById('lastname').value = "";
        document.getElementById('age').value = "";
    } 
    clean();
};

/*numero random*/

    var random = random(10, 60);
    function random (min, max){
        return Math.round(Math.random() * (max - min)) + min;
    };
    console.log("el número random es "+ random);

    
    
    
  


