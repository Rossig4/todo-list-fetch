import React, { useState } from "react";

const Lista = () => {
	const [tarea, setTarea] = useState();
	const [listaTareas, setListaTareas] = useState([]);

	const añadirTarea = event => {
		event.preventDefault();
		setListaTareas([...listaTareas, tarea]);
		setTarea("");
	};

	const eliminar = i => {
		let nuevoarraytareas = listaTareas.filter((element, index) => {
			if (i != index) {
				return element;
			}
		});
		setListaTareas(nuevoarraytareas);
	};

	return (
		<div>
			<form onSubmit={añadirTarea}>
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
					return (
						<li key={index}>
							{element}
							<button onClick={() => eliminar(index)}>x</button>
						</li>
					);
				})}
			</div>

			<div>
				<p>
					{listaTareas.length == 0
						? "No hay tareas"
						: "Hay tareas " + listaTareas.length}
				</p>
			</div>
		</div>
	);
};

export default Lista;
