import React from "react";

type Props = {
    title: string
    desc: string
    image: string
}

const ClientBox: React.FC<Props> = ({title, desc, image}) => {
    return <div className="client-box">
        <img src={ image } width="40px" height="40px" style={{marginBottom: '5px'}} />
        <h4 className='mt-2'>{title}</h4>
        <p>
            {desc}
        </p>
    </div>
}

export default ClientBox;