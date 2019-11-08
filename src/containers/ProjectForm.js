import React from "react";

export default function ProjectForm(props) {
  const { show = true, onSubmit } = props;

  const onHandleSubmit = event => {
    event.preventDefault();
    const {
      name: { value: name },
      description: { value: description },
    } = event.target.elements;
    onSubmit({ name, description });
  };

  return show ? (
    <form onSubmit={onHandleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" className="form-control" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Example textarea</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </div>
    </form>
  ) : null;
}
