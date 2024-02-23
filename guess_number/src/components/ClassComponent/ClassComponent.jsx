import React from "react";
import style from "./ClassComponent.module.css";

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "Результат",
      userNumber: "",
      randomNumber: Math.floor(Math.random() * 10 - 1) + 1,
      count: 0,
      win: false,
    };
  }

  clearForm = () => {
    this.setState((state) => {
      state.userNumber = "";
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState((state) => ({
      count: state.count + 1,
    }));

    this.setState((state) => {
      if (!state.userNumber) {
        return {
          result: `Введите число`,
        };
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загоданного`,
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загоданного`,
        };
      }

      return {
        result: `Вы угадали загаданное число ${state.randomNumber},
        с попытки №${state.count}`,
        randomNumber: Math.floor(Math.random() * 10 - 1) + 1,
        count: 0,
        win: true,
      };
    });

    this.clearForm();
  };

  handleChange = (e) => {
    this.setState(() => ({
      userNumber: e.target.value,
    }));
  };

  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>

        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor="user_number">
            Угадай число
          </label>
          <input
            className={style.input}
            type="number"
            id="user_number"
            onChange={this.handleChange}
            value={this.state.userNumber}
          />

          <button className={style.btn} onClick={this.handleSubmit}>
            {this.state.win ? "Сыграть ещё раз" : "Угадать"}
          </button>
        </form>
      </div>
    );
  }
}
