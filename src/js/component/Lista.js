import React, { useState } from "react";

const Lista = () => {
    const [tarea, setTarea] = useState();
    const [setListaTareas, setListaTareas] = useState([]);


    const añadirTarea = () => {
        event.preventDefault();
        setListaTareas([...listaTareas, tarea])
        setTarea("");
    };
}

    return (
        <div>
            <form onSubmit={}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            Name
</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                            onChange={event => setTarea(event.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">
                            Submit
</button>
                    </div>
                </div>
            </form>
            <div className="lista">
                {listaTareas.map((element, index) => {
                    return <li key={index}>{element}</li>;
                })}
        </div>
    );
}

export default Lista;

