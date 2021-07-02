const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const contain = document.getElementById("contain");

signUpButton.addEventListener("click", () => {
	contain.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
	contain.classList.remove("right-panel-active");
});

