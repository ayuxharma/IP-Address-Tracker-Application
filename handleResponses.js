// // 2XX Success Status Code
async function GetData() {
    let endpoint = 'https://jsonplaceholder.typicode.com/users' ;
    const request = await fetch(endpoint, {method: 'GET'}) ;
    const response = await request.json() ;

    console.log(response.status) ;
}

GetData() ;


// // We should always use this status code to check if our request was successful before we try to use the data returned from an API request.
async function GetData() {
  let endpoint = 'https://jsonplaceholder.typicode.com/users';
  const request = await fetch(endpoint, { method: 'GET' });
  const response = await request.json();

  if (request.status == 200) {
    // Request was successful
    console.log(request.status);
  }
}

GetData(); // call the function



// // Additionally, you can also use theResponse.ok property to check if the request was successful; this property will return true if the request was successful.
async function GetData() {
  let endpoint = 'https://jsonplaceholder.typicode.com/users';
  const request = await fetch(endpoint, { method: 'GET' });
  const response = await request.json();

  if (response.ok) {
    // Request was successful
    console.log(response.status);
  }
}

GetData(); // call the function




// 4XX/5XX Error Status Code

async function AddData() {
  let endpoint = 'https://jsonplaceholder.typicode.com/nonexistent';
  const request = await fetch(endpoint, {
    method: 'POST',
    body: data, // don't convert the data to json
  });

  const response = await request.json();

  if (response.ok) {
    console.log(response);
  } else {
    console.log(`An error with status code ${response.status} occured`);
  }
}

const data = { username: 'John Snow', age: 22 };

AddData(); // call the function






async function GetData() {
  let endpoint = 'https://jsonplaceholder.typicode.com/users';
  const request = await fetch(endpoint);

  const dataType = request.headers.get('content-type');

  if (dataType.includes('application/json')) {
    const response = await request.json(); // parse the data
    console.log(response);
  } else {
    console.log('We expected the data to be in json format');
  }
}
GetData(); // call the function