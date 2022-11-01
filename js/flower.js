let searchBar = document.querySelector('.search_bar');

document.querySelector('#search').onclick = () =>{
	searchBar.classList.toggle('active');
}

let loginForm = document.querySelector('.login_form');

document.querySelector('#user').onclick = () =>{
	loginForm.classList.toggle('active');
}

let signForm = document.querySelector('.sign_form');

document.querySelector('#new_account').onclick = () =>{
	signForm.classList.toggle('active');
}