import Hero from "./components/Hero.jsx";
import Generator from "./components/Generator.jsx";
import Workout from "./components/Workout.jsx";
import {useState} from "react";
import {generateWorkout} from "./util/functions.js";

function App() {
    const [poison, setPoison] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goal, setGoal] = useState('strength_power')

    const [workout, setWorkout] = useState()
    function updateWorkout() {
        if (muscles.length === 0) {
            return
        }
        console.log(poison, muscles, goal)
        let newWorkout = generateWorkout({poison, muscles, goal})
        console.log(newWorkout)
        setWorkout(newWorkout)
    }
    return (
        <main
            className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
            <Hero/>
            <Generator
                poison={poison}
                setPoison={setPoison}
                muscles={muscles}
                setMuscles={setMuscles}
                goal={goal}
                setGoal={setGoal}
                updateWorkout={updateWorkout}
            />
            {workout && <Workout workout={workout}/>}
        </main>
    )
}

export default App
