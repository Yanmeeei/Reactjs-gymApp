import {SectionWrapper} from "./SectionWrapper.jsx";
import {SCHEMES, WORKOUTS} from "../util/listActivity.js";
import {useState} from "react";
import Button from "./Button.jsx";

function Header(props) {
    const {index, title, description} = props
    return (
        <div className={'flex flex-col gap-4'}>
            <div className={'flex items-center gap-2 justify-center'}>
                <p className={'text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'}>{index}</p>
                <h4 className={'text-xl sm:text-2xl md:text-3xl'}>{title}</h4>
            </div>
            <p className={'text-sm sm:text-base mx-auto'}>{description}</p>
        </div>
    )
}

function Generator(props) {
    const {poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props
    const [showModel, setShowModel] = useState(false)

    function toggleModel() {
        setShowModel(!showModel)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(value => value !== muscleGroup))
            return
        }
        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            toggleModel()
            return
        }
        if (muscles.length > 2) {
            return
        }
        setMuscles([...muscles, muscleGroup])
    }

    return (
        <div>
            <SectionWrapper header={"Generate your workout"} title={['IT\'s', 'Huge', 'o\'clock']}>
                <Header index={'01'} title={'Pick your Choice'} description={'Select workout'}/>
                <div className={'grid grid-cols-2 sm:grid-cols-4 gap-4'}>
                    {Object.keys(WORKOUTS).map((type, idx) => {
                        return (
                            <button onClick={() => {
                                setPoison(type)
                            }}
                                    className={'border-2 py-3 rounded-lg hover:border-blue-600 px-4 '
                                        + (type === poison ? 'bg-slate-800 border-blue-600' : 'bg-slate-950 border-blue-400')}
                                    key={idx}>
                                <p className={'capitalize'}>{type.replaceAll('_', ' ')}</p>
                            </button>
                        )
                    })}
                </div>
                <Header index={'02'} title={'Lock on Targets'} description={'Select muscle'}/>
                <div className={'bg-slate-950 border border-solid border-blue-400 rounded-b-lg flex flex-col'}>
                    <button onClick={toggleModel}
                            className={'relative p3 flex items-center justify-center bg-slate-950 p-3 border border-solid border-blue-400 rounded-b-lg'}>
                        <p className={'uppercase'}>{muscles.length === 0 ? "Select Muscle Groups" : (muscles.join(' '))}</p>
                        <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                    </button>
                    {
                        showModel && (
                            <div className={'flex flex-col p-3'}>
                                {
                                    (poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, idx) => {
                                        return (
                                            <button onClick={() => {
                                                updateMuscles(muscleGroup)
                                            }} key={idx}>
                                                <p className={'uppercase hover:text-blue-200 ' + (muscles.includes(muscleGroup) ? 'text-blue-400' : '')}>{muscleGroup}</p>
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
                <Header index={'03'} title={'Become Juggernaut'} description={'Select Goal.'}/>
                <div className={'grid grid-cols-1 sm:grid-cols-3 gap-4'}>
                    {Object.keys(SCHEMES).map((scheme, idx) => {
                        return (
                            <button onClick={() => {
                                setGoal(scheme)
                            }}
                                    className={'border-2 py-3 rounded-lg hover:border-blue-600 px-4 '
                                        + (scheme === goal ? 'bg-slate-800 border-blue-600' : 'bg-slate-950 border-blue-400')}
                                    key={idx}>
                                <p className={'capitalize'}>{scheme.replaceAll('_', ' ')}</p>
                            </button>
                        )
                    })}
                </div>
                <Button func={updateWorkout} text={"Formulate"} />
            </SectionWrapper>

        </div>
    )
}

export default Generator