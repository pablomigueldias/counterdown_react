import "./Home.css";

import { useContext, useState } from "react";

import { CountdownContext } from "../context/CounterdownContext";

import { useNavigate } from "react-router-dom";

const home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();

  const { setEvent } = useContext(CountdownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title,
      date,
    };

    setEvent(eventObject);

    navigate("/countdown");
  };

  return (
    <div className="home">
      <h2>Monte sua contagem regressiva!</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Titulo</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o titulo do evento"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Data do evento</span>
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default home;
