const campuses = [
	{
		id: 1,
		code: "AUB",
		name: "Auburn Campus",
		city: "Auburn",
		open: true,
		programs: ["CS", "IT", "Nursing"],
	},
	{
		id: 2,
		code: "KCC",
		name: "Kent Campus",
		city: "Kent",
		open: true,
		programs: ["CS", "Business"],
	},
	{
		id: 3,
		code: "SEA",
		name: "Seattle Center",
		city: "Seattle",
		open: false,
		programs: ["Continuing Ed"],
	},
	{
		id: 4,
		code: "TAC",
		name: "Tacoma Site",
		city: "Tacoma",
		open: true,
		programs: ["Trades", "IT"],
	},
	{
		id: 5,
		code: "REN",
		name: "Renton Annex",
		city: "Renton",
		open: false,
		programs: ["ESL", "GED"],
	},
];

export const getAbout = (req, res) => {
	const arr = [
		"GET /",
		"GET /about|/info",
		"GET /:id",
		"GET /search?city=&open=&program=",
	];
	return res.status(200).json({
		message: "Campus directory routes",
		routes: arr,
	});
};

export const getAllCampuses = (req, res) => {
	const arr = [];

	campuses.forEach((el) => {
		arr.push(el);
	});

	return res.status(200).json({ campuses: arr });
};
