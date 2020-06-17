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
    ganaron: [],
    errors: {},
  };

  handleFiltroGanaron = (e) => {
    let filtro = this.state.alumnos;
    let result = filtro
      .map((a) => a)
      .filter((student) => student.definitiva >= 3);
    console.log(result);
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

  addRegistro = (e) => {
    let regex ="/(^([0-5]{1}$))|(^[0-4]{1}[.,]{1}[0-9])/";
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
    
  };

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
              errors={this.state.errors}
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="row-12 row-md-6">
              <Search
                alumnos={alumnos}
                handleFiltroGanaron={this.handleFiltroGanaron}
              />
            </div>
            <div className="row-12 row-md-6">
              <List
                data={this.state.form}
                alumnos={alumnos}
                ganaron={this.state.ganaron}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
