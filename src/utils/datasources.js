export const getCities = () =>
  JSON.parse(localStorage.getItem("cities") || "[]");

export const convertDate = (lng, dates) => {
  const day_names = {
    en: [
      "Sunday",
      "Monday",
      "Tueday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    vn: [
      "Chủ Nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy"
    ]
  };
  const month_names = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    vn: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12"
    ]
  };
  let ordinal_numbers = "";
  const day = dates.getDay();
  const date = dates.getDate();
  const month = dates.getMonth();
  if (date > 3 && date < 21) {
    ordinal_numbers = "th";
  } else {
    switch (date % 10) {
      case 1:
        ordinal_numbers = "st";
        break;
      case 2:
        ordinal_numbers = "nd";
        break;
      case 3:
        ordinal_numbers = "rd";
        break;
      default:
        ordinal_numbers = "th";
        break;
    }
  }
  return `${day_names[lng][day]}, ${date}${
    lng === "en" ? ordinal_numbers : ""
  } ${month_names[lng][month]}`;
};
