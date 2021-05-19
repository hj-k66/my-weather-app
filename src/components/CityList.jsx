import "./CityList.css";

function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  return (
    <div>
      <h1>CityList</h1>
      <a
        className="Weather-link"
        href="https://www.weather.go.kr/w/index.do"
        target="_blank"
        rel="noopener noreferrer"
      >
        Weather
      </a>
      <ul class="Citycom">
        {cities.map((item, index) => {
          return <li key={index}>{item}
        </li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
