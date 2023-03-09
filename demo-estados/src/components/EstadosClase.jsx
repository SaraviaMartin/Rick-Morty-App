import React from "react";

class EstadosClase extends React.Component {
  constructor(props) {
    super(props);
    // Cuando me pregunto si acá puedo poner otra palabara/nombre
    // Por qué querría hacerlo?
    this.state = {
      count: 0,
      nombre: "Alan",
    };
  }

  render() {
    const aumentar = () => {
      this.setState({ count: this.state.count + 1 }, () => {
        console.log(this.state.count);
      }); // Acá React demora un chikin
    };

    const disminuir = () => {
      this.state.count > 0 && this.setState({ count: this.state.count - 1 });
    };

    return (
      <>
        <h1>Contador con estados (Clase)</h1>
        <h3>{this.state.count}</h3>
        <button onClick={disminuir}>-</button>
        <button onClick={aumentar}>+</button>
      </>
    );
  }

  componentDidMount() {
    // Cuando monton el componente, pido determinada info a un servidor
    // Esta información, la guardaré seguramente en un estado
    console.log(
      "Esta función se ejecuta si quiero hacer algo cuando el componente se ha terminado de montar. Esto sucederá UN MONTÓN de veces"
    );
  }

  componentDidUpdate() {
    console.log(
      "Esta función se va a ejecutar cada vez que el componente se actualice"
    );
  }

  componentWillUnmount() {
    // borro todo lo que dejé guardado en el estado
  }
}

export default EstadosClase;
