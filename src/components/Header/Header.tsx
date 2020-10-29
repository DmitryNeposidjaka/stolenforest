import * as React from "react";
import logo from "../../assets/images/logo_white.svg";
type Props = {alt: string};
const Header: React.FC<Props> = ({alt}: Props): JSX.Element => {
    return (
        <header id="header">
            <a href="#" className="logo">
                <img src={logo} alt={alt} />
            </a>
        </header>
    )
}

export {Header}