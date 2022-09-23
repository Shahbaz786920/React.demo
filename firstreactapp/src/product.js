function Product(props){
    return (
    <>
    <img src={props.imglink} alt="not found"></img>
    <h3>{props.Price}</h3>
    <a href={props.Details}>click here</a>
    </>
    )
}
export default Product