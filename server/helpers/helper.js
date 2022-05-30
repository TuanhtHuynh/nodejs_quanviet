exports.formatDate = (value, showHour = false) => {
  try {
    const date = new Date(value);
    const day = date.getDate();
    const addlead_day = addleadToDate(day);
    const month = date.getMonth() + 1;
    const addlead_month = addleadToDate(month);
    const year = date.getFullYear();

    let datestring = addlead_day + "/" + addlead_month + "/" + year;
    if (showHour) {
      const hour = date.getHours();
      const min = date.getMinutes();
      datestring = datestring + " @" + hour + ":" + min;
    }
    return datestring;
  } catch (error) {
    return "00/00/0000";
  }
};

const addleadToDate = (value) => {
  return value < 10 ? "0" + value : value;
};

exports.addCommas = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
