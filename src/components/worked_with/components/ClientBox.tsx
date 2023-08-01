import React from "react";

type Props = {
    title: string
    desc: string
}

const ClientBox: React.FC<Props> = ({title, desc}) => {
    return <div className="client-box">
        <h4>{title}</h4>
        <p>
            {desc}
        </p>
    </div>
}

export default ClientBox;