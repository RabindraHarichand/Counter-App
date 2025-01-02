import PropTypes from 'prop-types'

const getResult = (a,b)=>{
    return a+b
}

export const FirstApp = ({title, subtitle}) =>{
    
    

    return (
        <>
        <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle + 1}</p>
        </>
        
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}