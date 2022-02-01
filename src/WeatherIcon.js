export default function WeatherIcon(props) {
  let icon = "";

  if (props.icon === "04n" || props.icon === "04d") {
    icon = "☁️";
  } else if (props.icon === "03n" || props.icon === "03d") {
    icon = "🌥";
  } else if (props.icon === "13n" || props.icon === "13d") {
    icon = "❄️";
  } else if (props.icon === "50n" || props.icon === "50d") {
    icon = "🌫";
  } else if (props.icon === "02n" || props.icon === "02d") {
    icon = "⛅️";
  } else if (props.icon === "01d") {
    icon = "☀️";
  } else if (props.icon === "01n") {
    icon = "🌙 ";
  } else if (props.icon === "09n" || props.icon === "09d") {
    icon = "🌧";
  } else if (props.icon === "10n" || props.icon === "10d") {
    icon = "🌦";
  } else if (props.icon === "11n" || props.icon === "11d") {
    icon = "🌩";
  } else if (props.description === "tornado") {
    icon = "🌪";
  } else if (
    props.description === "thunderstorm with light rain" ||
    props.description === "thunderstorm with rain" ||
    props.description === "thunderstorm with heavy rain" ||
    props.description === "thunderstorm with heavy drizzle"
  ) {
    icon = "⛈";
  }

  return icon;
}
