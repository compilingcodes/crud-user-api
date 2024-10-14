let users= document.getElementById("users")

let readData= async()=>{
  await fetch(`api/user/all`,{
    method: "GET",
    headers:{
      "content-type" : "application/json"
    }
  }).then(res => res.json())
  .then(res=> {
    printData(res.users)
  }).catch(err=> console.log(err.msg)
  )
}

readData()

function printData(data){
  data.forEach(item => {
    document.getElementById("users").innerHTML +=
     ` <tr class="text-center">
     <td>${item.name}</td>
     <td>${item.email}</td>
     <td>${item.mobile}</td>
     <td>${item.age}</td>
     <td>${item.role}</td>
     <td>${item.address}</td>
     <td class="d-flex justify-content-around">

     <a class ="btn btn-info" href="/update?id=${item._id}" >
        <i class="bi bi-pencil"></i>
     </a>

<button class="btn btn-danger">
   
<i class="bi bi-trash"></i>

</button>

     </td>
     </tr>
    
    `
  });
}