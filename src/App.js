import Box from "./components/Box";
import {CiTurnL1, CiTurnR1} from 'react-icons/ci';
import Personnel from "./components/Personnel";
import Data from "./components/Data";
import { useState } from "react";


const App = () => {
    let boxes = []; // the boxes with the hover effect
    
    const [persons, setPersons] = useState(Data);
    const [index, setIndex] = useState(0);
    
    for(let i = 0; i < 70; i++) {
        boxes.push(<Box key={i} img={persons[index].image}/>);
    }

    const showNextImage = event => {
        let {classList} = event.currentTarget;
        if(classList.contains("next")) {
            setIndex(prevIndex => {
                return prevIndex >= persons.length - 1 ?  0 : prevIndex + 1;
            })
        }else {
            setIndex(prevIndex => {
                return prevIndex <= 0 ? persons.length - 1 : prevIndex - 1;
            })
        }
    }

    const personsElement = persons.map((person, personIndex) => {
        let position = "nextSlide personnel";
        if(personIndex === index) {
            position = "activeSlide personnel";
        }
        if(personIndex === index -1 || (index === 0 && personIndex === persons.length - 1)) {
            position = "lastSlide personnel";
        }
       return(
        <Personnel
            key={person.id} {...person} classes={position}
        />
       )
    })
    
    return(
        <>
          {
            boxes.map(item => item)
          }  
          <div className="review">
            <section className="r-wrap">
                <CiTurnL1 className="prev" onClick={showNextImage} />
                <div className="show">
                    {personsElement}
                </div>
                <CiTurnR1 className="next" onClick={showNextImage} />
            </section>
          </div>
        </>
    )
}

export default App;