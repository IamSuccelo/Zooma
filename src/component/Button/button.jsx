import "./button.scss";


let Button = ({children, ...otherProps})=>{



    return(
        <div>
            <button {...otherProps}>{children}</button>
        </div>
    )
}

export default Button;