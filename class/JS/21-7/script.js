const createBtn = document.querySelector("#create-btn");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close-btn");

const form = document.querySelector("form");
const userContainer = document.querySelector(".users-container");

let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

let editIndex = -1;
let isUpdated = "";



const renderUi = () => {
  userContainer.innerHTML = "";

  usersData.forEach((val, index) => {
    userContainer.innerHTML += `
      <div class="card">
        <div class="img">
          <img src="${val.image}" alt="">
        </div>

        <div class="content">
          <h4>${val.name}</h4>
          <p>${val.email}</p>
          <p>${val.company}</p>
        </div>

        <div id="btns">
          <button onclick="updateUser('${val.email}'')" id="update">Update</button>
          <button onclick="delUser('${val.email}')" id="delete">Delete</button>
        </div>
      </div>
    `;
  });
};
//{/* <button onclick="updateUser(${index})" id="update">Update</button> */}



form.addEventListener("submit", (events) => {
  events.preventDefault();

  let name = events.target[0].value;
  let email = events.target[1].value;
  let company = events.target[2].value;
  let image = events.target[3].value;

  let obj = {
    name,
    email,
    company,
    image,
  };

  if (editIndex === -1) {
    usersData.push(obj);
  } else {
    usersData[editIndex] = obj;
    editIndex = -1;
  }

  localStorage.setItem("usersData", JSON.stringify(usersData));

  renderUi();

  form.reset();
  formDiv.style.display = "none";
});




createBtn.addEventListener("click", () => {
  form.reset();
  editIndex = -1;
  formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});



const delUser = (email) => {
  let newArr = usersData.filter((val) => {
    return val.email !== email;
  });

  usersData = newArr;

  localStorage.setItem("usersData", JSON.stringify(usersData));

  renderUi();
};




// const updateUser = (index) => {
//   let user = usersData[index];

//   form[0].value = user.name;
//   form[1].value = user.email;
//   form[2].value = user.company;
//   form[3].value = user.image;

//   editIndex = index;

//   formDiv.style.display = "flex";
// };

const updateUser = (email)=>{
  let user = usersData.find((val)=>val.email===email);
  formDiv.style.display = "flex";

  isUpdated = user.email;

  form.name.val = user.name;
  form.email.val = user.email;
  form.company.val = user.company;
  form.image.val = user.image;
}

renderUi();