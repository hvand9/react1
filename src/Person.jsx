const Person = (props) => {

    return(
        <div>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>personality: {props.personality}</p>
            <hr></hr>
        </div>
    );



}

export default Person