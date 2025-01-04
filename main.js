if (!localStorage.getItem('user')) {
	window.location.href = '/register.html'
}

document.getElementById('language-button').addEventListener('click', () => {
	const menu = document.getElementById('language-menu')
	menu.classList.toggle('hidden')
})

// Закрытие меню при клике вне его области
document.addEventListener('click', event => {
	const button = document.getElementById('language-button')
	const menu = document.getElementById('language-menu')
	if (!button.contains(event.target) && !menu.contains(event.target)) {
		menu.classList.add('hidden')
	}
})

document.querySelector('#signin-button').addEventListener('click', () => {
	const menu = document.querySelector('.signin-menu')
	menu.classList.toggle('activite')
})

document.addEventListener('click', event => {
	const button = document.querySelector('#signin-button')
	const menu = document.querySelector('.signin-menu')
	if (!button.contains(event.target) && !menu.contains(event.target)) {
		menu.classList.remove('activite')
	}
})

document.querySelector('.navbar-btn').addEventListener('click', () => {
	document.querySelector('.navbar').classList.toggle('navbar-activite')
})

document.addEventListener('click', event => {
	const navbar = document.querySelector('.navbar')
	const navbar_btn = document.querySelector('.navbar-btn')
	if (!navbar.contains(event.target) && !navbar_btn.contains(event.target)) {
		navbar.classList.remove('navbar-activite')
	}
})

document.querySelector('.navbar-close').addEventListener('click', () => {
	document.querySelector('.navbar').classList.remove('navbar-activite')
})

let username = localStorage.getItem('name')
document.querySelector('.signin-name').innerHTML = `Hello, ${username}`
document.querySelector('.navbar-title-name').innerHTML = `Hello, ${username}`

// import { books } from './api/boockslist'

fetch(
	'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=BCZKbGK4gynSc4LeKJoMD1b7mASk2Nze'
)
	.then(res => res.json())
	.then(data => {
		const boocks = data?.results?.books
		const boockList = document.querySelector('.boocks-list')

		boocks.forEach(el => {
			let listItem = document.createElement('div')
			listItem.classList.add('swiper-slide', 'boocks-slide')
			listItem.innerHTML = `<img src='${el.book_image}' alt='${el.list_name}'>`
			boockList.appendChild(listItem)
		})
	})
	.catch(err => console.log('Ошибка:', err))
