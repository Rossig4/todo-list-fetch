import React, { useState, useEffect } from "react";

const Lista = () => {
	const [tarea, setTarea] = useState();
	const [listaTareas, setListaTareas] = useState([]);

	const añadirTarea = event => {
		event.preventDefault();
		setListaTareas([...listaTareas, { label: tarea, done: false }]);
		setTarea("");
		updateListaTarea([...listaTareas, { label: tarea, done: false }]);
	};

	const updateListaTarea = toDos => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/rossig4", {
			method: "PUT",
			body: JSON.stringify(toDos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch(error => {
				//manejo de errores
				console.log(error);
			});
	};

	const getData = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/rossig4")
			.then(resp => {
				// console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				// console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				// console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
				setListaTareas(data);
			})
			.catch(error => {
				//manejo de errores
				console.log(error);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	const eliminar = i => {
		let nuevoarraytareas = listaTareas.filter((element, index) => {
			if (i != index) {
				return element;
			}
		});
		setListaTareas(nuevoarraytareas);
		updateListaTarea(nuevoarraytareas);
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
							placeholder="Describa la tarea"
							onChange={event => setTarea(event.target.value)}
						/>
					</div>
					<div className="col-auto">
						<button type="submit" className="btn btn-danger mb-2">
							<i class="fas fa-angry fa-2x"></i>
						</button>
					</div>
				</div>
			</form>
			<div className="lista">
				{listaTareas.map((element, index) => {
					return (
						<li
							className="list-group-item d-flex justify-content-between align-items-center"
							key={index}>
							{element.label}
							<button
								className="btn btn-outline-danger"
								onClick={() => eliminar(index)}>
								<i class="fas fa-check"></i>
							</button>
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
