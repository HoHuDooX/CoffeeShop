let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};
searchBtn.onclick = function () {
  sidebar.classList.toggle("active");
};
document.addEventListener("DOMContentLoaded", () => {
  const avatarInput = document.getElementById("avatar-input");
  const avatarImg = document.getElementById("avatar-img");
  const changeAvatarBtn = document.getElementById("change-avatar-btn");

  changeAvatarBtn.addEventListener("click", () => {
    avatarInput.click();
  });

  avatarInput.addEventListener("change", () => {
    const file = avatarInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        avatarImg.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Thông tin đã lưu:");
    console.log("Tên:", name);
    console.log("Email:", email);
    console.log("Mật khẩu:", password);

    alert("Thông tin đã được lưu thành công!");
  });
});
