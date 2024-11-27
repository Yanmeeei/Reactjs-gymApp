import PropTypes from "prop-types";
import {SectionWrapper} from "./SectionWrapper.jsx";
import ExerciseCard from "./ExerciseCard.jsx";

export default function Workout(props) {
    const {workout} = props
    return (
        <div>
            <SectionWrapper id={'workout'} header={"Welcome to"} title={['The', 'DANGER', 'zone']}>
                <div className={'flex flex-col gap-4'}>
                    {
                        workout.map((exercise, idx) => {
                            return (
                                <ExerciseCard key={idx} exercise={exercise} index={idx} />
                            )}
                        )
                    }
                </div>
            </SectionWrapper>
        </div>
    )
}