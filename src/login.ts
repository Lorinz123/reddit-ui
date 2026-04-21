export function renderLogin(container: HTMLDivElement) {
  container.innerHTML = `
    <div class="page">
      
      <!-- NAVBAR -->
      <nav class="navbar">
        <div class="logo">
  <img src="https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png" />
  <span>reddit</span>
</div>
      </nav>

      <!-- OVERLAY + MODAL -->
      <div class="overlay">
        <div class="modal">

  <!-- 🔒 STICKY HEADER -->
  <div class="modal-header">
    <h2>Log In</h2>
  </div>

  <!-- 📜 SCROLLABLE CONTENT -->
  <div class="modal-body">

    <p class="subtext">
      By continuing, you agree to our <a href="#">User Agreement</a>
      and acknowledge that you understand the <a href="#">Privacy Policy</a>.
    </p>

    <button class="btn">
      <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/phone.svg" />
      <span>Continue With Phone Number</span>
    </button>

    <button class="btn">
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" />
      <span>Continue with Google</span>
    </button>

    <button class="btn">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" />
      <span>Continue With Apple</span>
    </button>

    <button class="btn">
      <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/link-45deg.svg" />
      <span>Email me a one-time link</span>
    </button>

    <div class="divider">OR</div>

    <input id="username" type="text" placeholder="Email or username *" />
    <input id="password" type="password" placeholder="Password *" />

    <a class="link" href="#">Forgot password?</a>
    <p class="signup">New to Reddit? <a href="#">Sign Up</a></p>

    

  </div>
<div class="modal-footer">
  <button id="loginBtn" class="login-btn">Log In</button>
    </div>
</div>
    </div>
  `;
  const username = document.getElementById("username") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement;

function checkInputs() {
  if (username.value.trim() !== "" && password.value.trim() !== "") {
    loginBtn.classList.add("active");
  } else {
    loginBtn.classList.remove("active");
  }
}

username.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);
}