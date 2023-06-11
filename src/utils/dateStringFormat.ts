const dateStringFormat = (dateString: string) => {
  const regex = /^(\d{4})(\d{2})(\d{2})$/;
  const match = dateString.match(regex);
  if (!match) {
    throw new Error('Invalid date string');
  }

  // const [, year, month, day] = match;
  // const date = new Date(Number(year), Number(month) - 1, Number(day));
  return `${match[1]}-${match[2]}-${match[3]}`;
};

export default dateStringFormat;
