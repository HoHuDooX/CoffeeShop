document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("maquanli").value;
    const password = document.getElementById("password").value;
    const usernamePattern = /^[a-zA-Z0-9._]{4,20}$/;
    const passwordPattern = /^.{8,}$/;

    if (usernamePattern.test(username) && passwordPattern.test(password)) {
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("message").innerText =
        "Tên người dùng hoặc mật khẩu không đúng!";
    }
  });
