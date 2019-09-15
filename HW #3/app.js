///////Function declarations

//the equals signs in the function are defaults
function greet(firstName = 'John', lastName = 'Doe'){
    //if(typeof firstName === 'undefined'){firstName = 'John'}
    //if(typeof lastName === 'undefined'){lastName = 'Smith'}
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

//////FUNCTION EXPRESSIONS

const square = function(x = 3){
    return x*x;
}

// console.log(square());

////////IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
//////(declare and run at the same time)

/*  (function(name){
    console.log('Hello '+ name);
})('Brad'); */

///////PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo..');
    }, //dont forget comma
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}
todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

