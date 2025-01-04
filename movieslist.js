import { moviesdata } from './api/movies.js'
let moviesList = document.querySelector('.movies-list')

moviesdata.forEach(el => {
	let moviesItem = document.createElement('div')
	moviesItem.classList.add('swiper-slide', 'boocks-slide')
	moviesItem.innerHTML = `
<div key='${el.id}'>
<img src='${el.cover}' alt='${el.title}'>
</div>
`
	moviesList.appendChild(moviesItem)
})
