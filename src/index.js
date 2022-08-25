import react, { useEffect, useState } from "react"
import Styles from "../styles/Index.module.css"
import axios from "axios"
const Index = () => {
    const [data, setData] = useState([])
    const getData = () => {
        axios.get("https://api.cricapi.com/v1/matches?apikey=Add your api key&offset=0").then((result) => {
            setData(result.data.data)
            console.log(result)
        })
    }



    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className={Styles.main}>
                <h1>Cricket Live Score </h1>


                {data.length > 0 && data.map((val, index) => {
                    return (
                        <>
                            <div key={index} className={Styles.mainItem} >
                                <h2>{val.name}<span>{val.date}</span></h2>
                                <div className={Styles.mainItemImage} >
                                    <img src={val?.teamInfo[0]?.img ? val?.teamInfo[0]?.img : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Dummy_flag.svg/1200px-Dummy_flag.svg.png"} />
                                    <b>V/s</b>
                                    <img src={val?.teamInfo[1]?.img ? val?.teamInfo[1]?.img : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Dummy_flag.svg/1200px-Dummy_flag.svg.png"} />
                                </div>
                                <div className={Styles.mainItemDetails} >
                                    <p><b>status</b> : {val.status}</p>
                                    <p><b>Type</b> : Match Type {val.matchType}</p>
                                    <p><b>Teams</b> : {val.teams[0]} {'&'} {val.teams[1]} </p>
                                    <p><b>venue</b> : {val.venue}</p>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}
export default Index