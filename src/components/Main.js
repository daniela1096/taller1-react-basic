import React, { Component } from "react";
import Form from "./Form";
import Search from "./Search";
import List from "./List";
import "./Main.css";

export default class Main extends Component {
  state = {
    alumnos: [],
    form: {
      codigo: "",
      alumno: "",
      parcial: "",
      final: "",
      seguimiento: "",
      estado: "",
      definitiva: "",
    },
    errors: {},
    filterAlumnos: undefined
  };

  handleFiltroGanaron = (e) => {
    let filtro = this.state.alumnos;
    let result = filtro
      .map((a) => a)
      .filter((student) => student.definitiva >= 3);
    console.log(result);
    this.setState({filterAlumnos:result})
  };

  handleFiltroPerdieron = (e) => {
    let filtro = this.state.alumnos;
    let result = filtro
      .map((a) => a)
      .filter((student) => student.definitiva < 3);
    console.log(result);
    this.setState({filterAlumnos:result})
  };

  handleFiltroTodos = (e) => {
    let filtro = this.state.alumnos;
    let result = filtro
      .map((a) => a);
    console.log(result);
    this.setState({filterAlumnos:filtro})
  };


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };

  handleCalcularNota = () => {
    let parcial, final, seguimiento, definitiva;
    parcial = 0.25 * this.state.form.parcial;
    final = 0.25 * this.state.form.final;
    seguimiento = 0.5 * this.state.form.seguimiento;
    definitiva = parcial + final + seguimiento;
    this.setState((prevStete) => ({
      form: {
        ...prevStete.form,
        definitiva: definitiva,
      },
    }));
  };

  asignarEstado = () => {
    this.setState((prevStete) => ({
      form: {
        ...prevStete.form,
        estado:
          this.state.form.definitiva >= 3.0
            ? (this.state.estado = "Ganó")
            : (this.state.estado = "Perdió"),
      },
    }));
  };

  handlerFindCodigo = (event) => {
    const inputValue = event.target.value;
    let filtro = this.state.alumnos.filter((alumno) => alumno.codigo.includes(inputValue));
    this.setState({filterAlumnos:filtro})
  };


  addRegistro = (e) => {
    //let regex ="/(^([0-5]{1}$))|(^[0-4]{1}[.,]{1}[0-9])/";
    e.preventDefault();
      this.asignarEstado();
      setTimeout(
        function () {
          let alumnos = [...this.state.alumnos, this.state.form];
          this.setState((prevStete) => ({
            alumnos,
            form: {
              codigo: "",
              alumno: "",
              parcial: "",
              final: "",
              seguimiento: "",
              estado: "",
              definitiva: "",
            },
          }));
        }.bind(this),
        200
      );
    }

  render() {
    const { alumnos } = this.state;

    return (
      <div className="container">
        <h2>TALLER 1 REACT BASIC 2020</h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <Form
              handleChange={this.handleChange}
              addRegistro={this.addRegistro}
              handleCalcularNota={this.handleCalcularNota}
              form={this.state.form}
              
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="row-12 row-md-6">
              <Search
                alumnos={alumnos}
                handleFiltroGanaron={this.handleFiltroGanaron}
                handleFiltroPerdieron={this.handleFiltroPerdieron}
                handleFiltroTodos={this.handleFiltroTodos}
                findCodigo={this.handlerFindCodigo}
              />
            </div>
            <div className="row-12 row-md-6">
              <List
                data={this.state.form}
                alumnos={alumnos}
                ganaron={this.state.ganaron}
                filterAlumnos={this.state.filterAlumnos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
