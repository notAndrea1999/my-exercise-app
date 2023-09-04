const ButtonComponent = (props) => (
  <>
    <h1>
      Esercizio numero 1, Crea un nuovo componente a funzione, chiamalo ButtonComponent: dovrebbe ritornare un tag
      ‘button’.
    </h1>
    <button>{props.btnText}</button>
  </>
);

export default ButtonComponent;
