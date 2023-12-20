import { Card, Col, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

function Bebida({ bebida }) {

    const { handleModalClick, handleBebidaIdClick } = useBebidas();

    return (
        <Col md={4} lg={3}>
            <Card className="mb-4">
                <Card.Img
                    variant="top" //Requiere este componente para funcionar bien
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de Bebida ${bebida.strDrink}`}
                />
                <Card.Body>
                    <Card.Title>{bebida.strDrink}</Card.Title>

                    <Button
                        variant="danger"
                        className="w-100 text-uppercase mt-2"
                        onClick={() => {
                            handleModalClick()
                            handleBebidaIdClick(bebida.idDrink)
                        }}
                    >Ver Receta
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida