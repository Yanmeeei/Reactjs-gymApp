export default function Workout(props) {
    const {workout} = props
    console.log(workout)
    return (
        <div className={'mx-auto justify-center items-center text-center p-6'}>
            {
                workout.map((entry, idx) => {
                    return (
                        <div key={idx} className={'p-3'}>
                            <h2 className={'font-semibold text-2xl sm:text-3xl font-weight-bold'}>
                                Name: {entry['name'].replaceAll('_', ' ')}
                            </h2>
                            <div>
                                Muscle: {entry['muscles']}
                            </div>
                            <div>
                                Type: {entry['type']}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
