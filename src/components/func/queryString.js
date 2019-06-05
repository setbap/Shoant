export const query_string = (string) => {
	return string
		.slice(1)
		.split("&")
		.map((q) => q.split("="))
		.reduce((a, c) => {
			a[c[0]] = c[1];
			return a;
		}, {});
};
