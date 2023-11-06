export const formatDate = (date: any): string => {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    const year = date.getFullYear();
    const month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day =  date.getDate() < 9 ? "0" + (date.getDate()) : (date.getDate());
    return day + '/' + month + '/' + year;
  };