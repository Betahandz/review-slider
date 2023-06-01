import './slider.css';
import Data from '../Data';
import { useState } from 'react';

const Customer = ({name, image, title, quote, classes}) => {
    return(
                <fieldset className={`customer ${classes}`}>
                    <legend>
                        <img src={image} alt={name} />
                    </legend>
                    <h2 className='name'>{name}</h2>
                    <em>{title}</em>
                    <q>
                        {quote}
                    </q>
                </fieldset>
    )
}

const SliderPage = () => {
    const [index, setIndex] = useState(0);

    const handleClick = e => {
        let {classList} = e.currentTarget;
        // getting the maximum of the array
        let max = Data.length - 1;
        if(classList.contains("next")) {
            setIndex(prevIndex => {
                return prevIndex >= max ? 0 : (prevIndex + 1);
            })
        }else {
            setIndex(prevIndex => {
                return prevIndex <= 0 ? max : (prevIndex - 1);
            })
        }
        
    }

    return (
        <section className="review panel">
            {
                Data.map((data, dataIndex) => {
                    let position = "next";
                    if(dataIndex === index) {
                        position = null;
                    }
                    if(dataIndex === (index - 1) || (index === 0 && dataIndex === Data.length - 1)) {
                        position = "prev";
                    }
                    return(
                        <Customer 
                            key={data.id}
                            {...data}
                            classes={position}
                        />
                    )
                })
            }
            <button className='previous' onClick={e => handleClick(e)}>
                prev
            </button>
            <button className='next' onClick={e => handleClick(e)}>
                next
            </button>
        </section>
    )
}

export default SliderPage;