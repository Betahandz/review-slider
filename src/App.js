// import {CiTurnL1, CiTurnR1} from 'react-icons/ci';
import { useEffect } from 'react';
import Landing from './components/Landing/Landing';
import SliderPage from './components/SliderPage/SliderPage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        let panels = gsap.utils.toArray(".panel");

        panels.forEach((pan, i) => {
            ScrollTrigger.create({
                trigger: pan,
                scrub: true,
                pin: true,
                pinSpacing: false,
            })
        })
    }, []);

    return (
        <div className='container'>
            <Landing />
            <SliderPage />
        </div>
    )
}

export default App;