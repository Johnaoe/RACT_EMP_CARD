import {people} from './../data/people'

function People(){
    let chemists = people.filter((person) => person.profession === "chemist");
    let chmistsjsx = chemists.map((chemist) => {

        return(
            <div>
            <h1>{chemist.name}</h1>
            <p>{chemist.profession}</p>
            </div>
        )})

    return (<div>
        <h1>
        {chemistsjsx}
        </h1>
    </div>)
    
}
export default People