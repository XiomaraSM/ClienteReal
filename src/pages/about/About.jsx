import "./about.css";
import Carrousel from "../../components/carrousel/Carrousel";

const About = () => { 

  return (
    <>
      <div className="divwe">
        <div className="textWe">
          <h2 className="title">¿Quiénes somos?</h2>
          <p>
            Somos un emprendimiento de mujeres cabeza de familia y victimas del
            conflicto armado, quienes buscamos salir adelante mediante la venta
            de pulpa de fruta. Al comprar nuestros productos apoyas a muchas
            personas quienes trabajamos diariamente por salir adelante por un
            mejor futuro y bienestar, a la vez aportamos al crecimiento de
            nuestro país Vendemos nuestros productos por todo Bogotá y
            Cundinamarca. Pueden ser unidades, docenas y al por mayor para
            negocios como fruterias, supermercados, etc
          </p>
          <Carrousel/>
        </div>        
      </div>
    </>
  );
};

export default About;

