	 function calculator(id,value) {
		 	let calcutValue =document.getElementById(id).value;
	 		calcutValue=parseFloat(calcutValue)
	 		    document.getElementById(id).value+=value,num;
	 		    
	 		
	 	}
	   let calculatorValue=document.getElementById('calcutCount');
 	calculatorValue.addEventListener('click', function(){
	  calculator('calculatorInput' , 7);
	})
   let valuecalculator=document.getElementById('calcutCount8');
 	 valuecalculator.addEventListener('click', function(){
	 
	  calculator('calculatorInput' , 8);
	  

	})
 	  let calculatorNum=document.getElementById('calcutCount9');
 	 calculatorNum.addEventListener('click', function(){
	 
	  calculator('calculatorInput',9);
	  

	})
 	  let numCalculator=document.getElementById('calcutCount4');
 	 numCalculator.addEventListener('click', function(){
	 
	  calculator('calculatorInput',4);
	  

	})
 	  let countCalculator=document.getElementById('calcutCount5');
 	 countCalculator.addEventListener('click', function(){
	 
	  calculator('calculatorInput',5);
	  

	})
 	   let calculatorCount=document.getElementById('calcutCount6');
 	  calculatorCount.addEventListener('click', function(){
	 
	  calculator('calculatorInput',6);
	  

	})
  	  let inputCalculator=document.getElementById('calcutCount1');
 	 inputCalculator.addEventListener('click', function(){
	 
	   calculator('calculatorInput',1);
	  

	 })
 	  let calculatorInput=document.getElementById('calcutCount2');
 	  calculatorInput.addEventListener('click', function(){

	   calculator('calculatorInput',2);
	  

	 })
 	  let calculator3=document.getElementById('calcutCount3');
  	 calculator3.addEventListener('click', function(){
	 
	   calculator('calculatorInput',3);
	  

	})
  	 let calculator0=document.getElementById('calcutCount0');
  	 calculator0.addEventListener('click', function(){
	 
	   calculator('calculatorInput',0);
	  

	})
	let calcutCountdot=document.getElementById('calcutCountdot');
  	 calcutCountdot.addEventListener('click', function(){
	 
	   calculator('calculatorInput','.');

	})

  	 let calcutCountPlus=document.getElementById('calcutCountPlus');
  	 calcutCountPlus.addEventListener('click', function(){
	   calculator('calculatorInput','+');
	})

  	 let calcutCountMainus=document.getElementById('calcutCountMainus');
  	calcutCountMainus.addEventListener('click', function(){
	   calculator('calculatorInput','-');
	})

  	let Bug=document.getElementById('Bug');
  	Bug.addEventListener('click', function(){
	   calculator('calculatorInput','/');
	})
	 
	let Multiple=document.getElementById('Multiple');
  	Multiple.addEventListener('click', function(){
	   calculator('calculatorInput','*');
	})

 //  	let Equel=document.getElementById('Equel');
 //  	Equel.addEventListener('click', function(){
	//    calculator('calculatorInput','=');
	// })
	
	 let button=document.getElementById('calcutCountc');
    button.addEventListener('click', function(){

	  document.getElementById('calculatorInput').value = '';
	 		  
	 })
     let slice=document.getElementById('slice');
    slice.addEventListener('click', function(){

	  document.getElementById('calculatorInput').value=  
	  document.getElementById('calculatorInput').value.slice(0,-1);
	 		  
	 })
      let Equel=document.getElementById('Equel');
    Equel.addEventListener('click', function(){

	  document.getElementById('calculatorInput').value =eval(
	   document.getElementById('calculatorInput').value);
	 		  
	 })
