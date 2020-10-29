import * as React from "react";
import startupVillage from "../../assets/images/Startup-Village.png";

type Props = {name: string, link: string, tags: string[]}

const Card: React.FC<Props> = ({name, link, tags}: Props): JSX.Element => {
    return (
        <div className="item">
            <div className="item__header">
                <h5>
                    {name}
                </h5>
            </div>
            <div className="item__image">
                <a href={link}>
                <img src={startupVillage} alt="Startup Village" />
                </a>
            </div>
            <div className="item__text">
                <p>{tags.join(' | ')}</p>
            </div>
        </div>
    );
}

export { Card }