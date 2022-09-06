import ProfilImg from '../../Assets/Tof.jpg'
import Card from 'react-bootstrap/Card';
function ProfilPhoto(){
    return(
        <>
        <Card.Img variant="top" src={ProfilImg} />
        </>
    )
}
export default ProfilPhoto;