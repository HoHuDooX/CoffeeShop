document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("maquanli").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "123456") {
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("message").innerText =
        "Tên người dùng hoặc mật khẩu không đúng!";
    }
  });
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const isPasswordHidden = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isPasswordHidden ? "text" : "password");
    this.classList.toggle("fa-eye-slash", !isPasswordHidden);
    this.classList.toggle("fa-eye", isPasswordHidden);
  });
