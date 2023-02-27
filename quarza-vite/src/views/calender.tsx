import './styles/calender.css'

const Calender = () => {
    const startYear = 1820
    const FakeYear = new Date().getFullYear()
    const yearDiff = FakeYear - startYear
    const RealYear = yearDiff + 1000
    const ResetYear = 1000

    return (
      <div className="main">
        <div className="calenders">
            <h1>tartaria</h1>
            <div className="calender">
                <h1>real year: {RealYear}</h1>
                <p>reset date: {ResetYear} </p>
            </div>
        </div>
        <div className="calenders">
            <h1>satan time</h1>
            <div className="calender">
                <h1>fake year: {FakeYear}</h1>
                <p>reset date: {startYear}</p>
            </div>
        </div>
      </div>
    );
}

export default Calender;
