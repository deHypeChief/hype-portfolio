import './style.css'

export default function Button(props){
    const {type, children} = props

    return(
        <>
            <div className="button">
                <button className={type}>{children}</button>
                <div className="bttn-line"></div>
            </div>

        </>
    )
}