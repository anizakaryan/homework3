
//A function that takes at least three arguments and returns the result of some set of operations using those arguments
const add=function(a,b,c) {
	return a+b+c;
};
//const g=add(45,56,35);
//console.log(g);
//A function that takes no arguments and returns something
   const EmptyOne = function(){
    return 1; 
   }; 

 

 //A function that takes arguments, does something but does not return anything

const JustAFunction=function(m,n,k){
  console.log(m+n+k);
	};
 JustAFunction(3,4,6);
 
//A function called fullName that takes as argument first name and last name and returns the full name of the person
 const FirstName = function () {
 	return 'Ani';
 };
const LastName = function (){
	return 'Zak';
};
const fullName = function (name, lastname){
return name + ' ' + lastname;
};
//const b=fullName (FirstName(), LastName());
//console.log(b);


//A function that takes three strings and returns the string that is the longest
const LongestString=function(s1,s2,s3){
	if (s1.length>s2.length && s1.length>s3.length){
		return s1;
	}
	else if (s2.length>s1.length && s2.length>s3.length) {
		return s2;

	}
	else if (s3.length>s1.length && s3.length>s2.length) {
		return s3;
	}
};
//const r=LongestString('Hello','Heyy','AUA');
//console.log(r);


//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger

	const IfEqual=function(num1,num2){

		if (num1===num2) {
			return 0;
		}
		else if(num1>num2){
			return 1;
		}
		else{
			return -1;
		}
	};

//const e=IfEqual(5,7);
//console.log(e);

//A function that takes three inputs and returns the first truethy value
const firstTruethy=function(f,n,d){
      const truethy=f || n || d;
      return truethy;
};
//const t=firstTruethy(undefined,3,4);
//console.log(t);
