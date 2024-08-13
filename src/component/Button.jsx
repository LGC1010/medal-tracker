const Button = (props) => {

    // const {onclick, classname} = props

    return (
        <button className={props.className} type="button" onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
