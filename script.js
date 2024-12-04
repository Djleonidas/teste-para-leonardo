document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const toggleForm = document.getElementById("toggle-form");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
    let isLogin = true; // Estado inicial como login
  
    // Alternar entre login e cadastro
    toggleForm.addEventListener("click", () => {
      isLogin = !isLogin;
      if (isLogin) {
        formTitle.textContent = "Login";
        confirmPasswordInput.style.display = "none";
        toggleForm.textContent = "Não tem uma conta? Cadastre-se";
        authForm.querySelector("button").textContent = "Entrar";
      } else {
        formTitle.textContent = "Cadastro";
        confirmPasswordInput.style.display = "block";
        toggleForm.textContent = "Já tem uma conta? Faça login";
        authForm.querySelector("button").textContent = "Cadastrar";
      }
    });
  
    // Validar e enviar formulário
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value;
      const password = passwordInput.value;
  
      if (isLogin) {
        console.log("Login com:", { email, password });
        alert("Login efetuado com sucesso!");
      } else {
        const confirmPassword = confirmPasswordInput.value;
        if (password !== confirmPassword) {
          alert("As senhas não coincidem!");
          return;
        }
        console.log("Cadastro com:", { email, password });
        alert("Cadastro efetuado com sucesso!");
      }
    });
  
    // Login com Google
    document.getElementById("google-btn").addEventListener("click", () => {
      alert("Iniciar autenticação com Google.");
      // Aqui você pode integrar a biblioteca do Firebase ou Google Auth API
    });
  
    // Login com Facebook
    document.getElementById("facebook-btn").addEventListener("click", () => {
      alert("Iniciar autenticação com Facebook.");
      // Aqui você pode integrar a API de Login do Facebook
    });
  });
  