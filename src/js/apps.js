window.onload = function(){
  //array with the words
  var first = 'Un ';
  var adj = ['de dos cabezas ', 'radioactivo ', 'enfadado ', 'solitario ','loco ','brillante ','pestoso ','raro ','viejo ' ];
  var noun = ['mapache ','leon ','reno ', 'Mark Zuckemberg ', 'niño malo ', 'Arbolito de navidad ', 'ladron '];
  var action = ['se llevo ', 'tiro mi ', 'pateo mi ' , 'rompio mi ', 'mordio mi ', 'me robo mi ', 'escupio ', 'destrozo mi '];
  var possetion = ['coche ', 'reloj ', 'zapatilla ', 'shoe ', 'cartera ', 'camiseta ', 'llave ', 'portatil ', 'telefono ', 'trabajo '];
  var where = ['en la calle','en mi casa','en la ofi', 'encima tuya', 'al lado del parque', 'dentro del water', 'en el aeropuerto'];
  
  // declaring random variables
   var rdm1 = Math.floor((Math.random() * adj.length) );
   var rdm2 = Math.floor((Math.random() * noun.length) );
   var rdm3 = Math.floor((Math.random() * action.length) );
   var rdm4 = Math.floor((Math.random() * possetion.length) );
   var rdm5 = Math.floor((Math.random() * where.length) );
  
    //creating a sentence (the excuse)
    document.querySelector('#excusa').innerHTML = first + noun[rdm2] + adj[rdm1] + action[rdm3] + possetion[rdm4] + where[rdm5];
}