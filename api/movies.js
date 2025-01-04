const moviesdata = [
	{
		id: 1,
		title: 'Inception',
		year: 2010,
		genre: 'Sci-Fi, Thriller',
		rating: 8.8,
		description: 'A thief who enters the dreams of others...',
		director: 'Christopher Nolan',
		cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
		cover:
			'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
	},
	{
		id: 2,
		title: 'The Dark Knight',
		year: 2008,
		genre: 'Action, Crime, Drama',
		rating: 9.0,
		description: 'When the Joker emerges, he wreaks havoc on Gotham.',
		director: 'Christopher Nolan',
		cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
		cover:
			'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
	},
	{
		id: 3,
		title: 'The Matrix',
		year: 1999,
		genre: 'Action, Sci-Fi',
		rating: 8.7,
		description: 'A computer hacker learns the true nature of his reality.',
		director: 'Lana Wachowski, Lilly Wachowski',
		cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
		cover:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwDvq7oPpLWcnGvfjXn97_xwwAoPoGxAhMA&s',
	},
	{
		id: 4,
		title: 'The Shawshank Redemption',
		year: 1994,
		genre: 'Drama',
		rating: 9.3,
		description: 'Two imprisoned men bond over years...',
		director: 'Frank Darabont',
		cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
		cover:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sKn2cILCNSkdsuWvINAQ84a3O6shl66j0A&s',
	},
	{
		id: 5,
		title: 'The Godfather',
		year: 1972,
		genre: 'Crime, Drama',
		rating: 9.2,
		description: 'The aging patriarch of an organized crime dynasty...',
		director: 'Francis Ford Coppola',
		cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
		cover:
			'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
	},
	{
		id: 6,
		title: "Schindler's List",
		year: 1993,
		genre: 'Biography, Drama, History',
		rating: 9.0,
		description:
			'In German-occupied Poland during WWII, Oskar Schindler saves the lives of over a thousand Jews.',
		director: 'Steven Spielberg',
		cast: ['Liam Neeson', 'Ben Kingsley', 'Ralph Fiennes'],
		cover:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqgBgFS8rztcL78aN_Mkt312-ZWpjgFT7gQ&s',
	},
	{
		id: 7,
		title: 'Pulp Fiction',
		year: 1994,
		genre: 'Crime, Drama',
		rating: 8.9,
		description:
			"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine.",
		director: 'Quentin Tarantino',
		cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
		cover:
			'https://assets.scriptslug.com/live/img/x/posters/3184/pulp-fiction-1994_2731b11b11.jpg',
	},
	{
		id: 8,
		title: 'Forrest Gump',
		year: 1994,
		genre: 'Drama, Romance',
		rating: 8.8,
		description:
			'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an extraordinary story.',
		director: 'Robert Zemeckis',
		cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
		cover:
			'https://m.media-amazon.com/images/I/91++WV6FP4L._AC_UF894,1000_QL80_.jpg',
	},
	{
		id: 9,
		title: 'The Lord of the Rings: The Return of the King',
		year: 2003,
		genre: 'Action, Adventure, Drama',
		rating: 8.9,
		description:
			"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
		director: 'Peter Jackson',
		cast: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
		cover:
			'https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
	},
	{
		id: 10,
		title: 'Fight Club',
		year: 1999,
		genre: 'Drama',
		rating: 8.8,
		description:
			'An insomniac office worker and a soap salesman form an underground fight club.',
		director: 'David Fincher',
		cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
		cover:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5rkKTG2JFWq_FiFZnIkDhQ_ZPqYAPHYqAw&s',
	},
	{
		id: 11,
		title: 'The Empire Strikes Back',
		year: 1980,
		genre: 'Action, Adventure, Fantasy',
		rating: 8.7,
		description:
			'After the Rebels are brutally overpowered by the Empire on their base, Luke Skywalker begins Jedi training with Yoda.',
		director: 'Irvin Kershner',
		cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		cover:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoXyho2QrTd54u59NGj3gQWK1gYnezDT3PA&s',
	},
	{
		id: 12,
		title: 'The Lion King',
		year: 1994,
		genre: 'Animation, Adventure, Drama',
		rating: 8.5,
		description:
			'Lion prince Simba and his father are targeted by his evil uncle, who wants to ascend the throne himself.',
		director: 'Roger Allers, Rob Minkoff',
		cast: ['Matthew Broderick', 'James Earl Jones', 'Jeremy Irons'],
		cover:
			'https://m.media-amazon.com/images/M/MV5BYjBkOWUwODYtYWI3YS00N2I0LWEyYTktOTJjM2YzOTc3ZDNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
	},
	{
		id: 13,
		title: 'The Silence of the Lambs',
		year: 1991,
		genre: 'Crime, Drama, Thriller',
		rating: 8.6,
		description:
			'A young FBI cadet seeks the advice of an incarcerated cannibalistic serial killer to help catch another serial killer.',
		director: 'Jonathan Demme',
		cast: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
		cover:
			'https://m.media-amazon.com/images/I/51SHYSFNP2L._AC_UF894,1000_QL80_.jpg',
	},
	{
		id: 14,
		title: 'Goodfellas',
		year: 1990,
		genre: 'Crime, Drama',
		rating: 8.7,
		description:
			'The story of Henry Hill and his life in the mob, covering his relationships with his wife and his mob partners.',
		director: 'Martin Scorsese',
		cast: ['Ray Liotta', 'Robert De Niro', 'Joe Pesci'],
		cover:
			'https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
	},
	{
		id: 15,
		title: 'Star Wars: A New Hope',
		year: 1977,
		genre: 'Action, Adventure, Fantasy',
		rating: 8.6,
		description:
			'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and his Chewbacca co-pilot to rescue a princess from an evil empire.',
		director: 'George Lucas',
		cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		cover:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MPfBHTW5uFr9Tp5rolr7yFetO2ApvS2PqA&s',
	},
	{
		id: 16,
		title: 'Back to the Future',
		year: 1985,
		genre: 'Adventure, Comedy, Sci-Fi',
		rating: 8.5,
		description:
			'A young man is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, a mad scientist.',
		director: 'Robert Zemeckis',
		cast: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
		cover:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMDj9S8s5TyZXPlY88yO7OjhXvWYrBVf67w&s',
	},
	{
		id: 17,
		title: 'The Prestige',
		year: 2006,
		genre: 'Drama, Mystery, Sci-Fi',
		rating: 8.5,
		description:
			'Two magicians engage in a bitter rivalry, each trying to create the ultimate stage illusion.',
		director: 'Christopher Nolan',
		cast: ['Christian Bale', 'Hugh Jackman', 'Scarlett Johansson'],
		cover: 'https://m.media-amazon.com/images/I/619c+UQZaOL.jpg',
	},
	{
		id: 18,
		title: 'The Green Mile',
		year: 1999,
		genre: 'Crime, Drama, Fantasy',
		rating: 8.6,
		description:
			'A man with a miraculous gift is held on death row for the murder of two girls while the correctional officers try to understand what he is capable of.',
		director: 'Frank Darabont',
		cast: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse'],
		cover:
			'https://m.media-amazon.com/images/I/81ryvZtPc7L._AC_UF1000,1000_QL80_.jpg',
	},
	{
		id: 19,
		title: 'The Usual Suspects',
		year: 1995,
		genre: 'Crime, Drama, Mystery',
		rating: 8.5,
		description:
			'A sole survivor tells the incredible story of five criminals and their involvement in a heist gone wrong.',
		director: 'Bryan Singer',
		cast: ['Kevin Spacey', 'Gabriel Byrne', 'Chazz Palminteri'],
		cover: 'https://m.media-amazon.com/images/I/517NYZ62HAL._AC_SY445_.jpg',
	},
	{
		id: 20,
		title: 'Gladiator',
		year: 2000,
		genre: 'Action, Adventure, Drama',
		rating: 8.5,
		description:
			'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
		director: 'Ridley Scott',
		cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
		cover:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhhMgeDZa6jV-wVWDuOOGyoZjG6APytxaaQ&s',
	},
]

export { moviesdata }
