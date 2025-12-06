// this shows error, because fetch return promise
const request = fetch('https://jsonplaceholder.typicode.com/users');
console.log(request.json());

// async function GetData1() {
  let endpoint = 'https://jsonplaceholder.typicode.com/users';
  const request = await fetch(endpoint);
  const response = await request.json();
  console.log(response);
}

GetData1()); // call the function



// GET HTTP Method
async function GetData2 () {
    let endpoint = 'https://jsonplaceholder.typicode.com/users' ;
    const request = await fetch (endpoint, {method: 'GET'}) ;
    const response = await request.json() ;
    console.log(response) ;
}
GetData2() ;


// POST HTTP Method
async function AddData() {
    let endpoint = 'https://jsonplaceholder.typicode.com/users' ;
    const request = await fetch (endpoint, {
        method : 'POST' ,
        body : JSON.stringify(data),
    }) ;

    const response = await request.json() ;
    console.log(response) ;
}

const data = {username : 'John Snow', age : 22} ;

AddData() ;


//PUT HTTP Method
async function UpdateData() {
  let endpoint = 'https://jsonplaceholder.typicode.com/users/2';
  const request = await fetch(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  const response = await request.json();
  console.log(response);
}

const data = { age: 42 }; // update the age

UpdateData(); // call the function


// DELETE HTTP Method
async function UpdateData() {
  let endpoint = 'https://jsonplaceholder.typicode.com/users/2';
  const request = await fetch(endpoint, { method: 'DELETE' });

  const response = await request.json();
  console.log(response);
}

UpdateData(); // call the function


// including headers
async function AddData() {
  let endpoint = 'https://jsonplaceholder.typicode.com/users';
  const request = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  const response = await request.json();
  console.log(response);
}

const data = { username: 'John Snow', age: 22 };

AddData(); // call the function