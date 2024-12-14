export const dateFormat = (isoDate: string) => {
	const date = new Date(isoDate);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	};

	return date.toLocaleDateString("tr-TR", options);
};
