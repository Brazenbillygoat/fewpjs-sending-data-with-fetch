
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   }); 


const submitData = (name, email) => {
  
  let paragraph = document.createElement("p");
  paragraph.innerText = "hello"
  document.body.appendChild(paragraph)
  

  let newUser = {
    name: name,
    email: email
  }

  let reqPackage = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newUser)
  }

  return fetch("http://localhost:3000/users", reqPackage)
  .then(resp => resp.json())
  .then(data => {
    paragraph.innerHTML = data.id
  })
  .catch((error) => {
    alert("Something went wrong")
    paragraph.innerHTML = error.message
  })
}
