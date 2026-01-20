import { campuses } from "../services/campusesService.js";

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

export const getCampusByID = (req, res) => {
	const id = Number(req.params.id);

	const campus = campuses.find((el) => el.id === id);

	if (!campus) {
		return res.status(404).json({ error: "Campus not found" });
	}

	return res.status(200).json(campus);
};

export const searchCampuses = (req, res) => {
	const { city, open, program } = req.query;

	let results = campuses;

	if (city) {
		results = results.filter(
			(c) => c.city.toLowerCase() === city.toLowerCase(),
		);
	}

	if (open !== undefined) {
		results = results.filter((c) => c.open === (open === "true"));
	}

	if (program) {
		const programLower = program.toLowerCase();

		results = results.filter((c) =>
			c.programs.some((p) => p.toLowerCase().includes(programLower)),
		);
	}

	return res.status(200).json({ campuses: results });
};
