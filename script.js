document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const usernamePattern = /^[a-zA-Z0-9._]{4,20}$/;
    const passwordPattern = /^.{8,}$/;
    if (usernamePattern.test(username) && passwordPattern.test(password)) {
      if (role === "manager") {
        window.location.href = "dashboard.html";
      } else if (role === "employee") {
        window.location.href = "employee_menu.html";
      }
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
