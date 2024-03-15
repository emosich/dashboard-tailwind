import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Elegi tu pizza</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Destacados
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="muzzarella.png"
              title="Muzzarella"
              description="Pizza grande de Muzzarella elaborada con jamón cocido y morrones asados."
              price="10"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="muzzarella.png"
              title="Napolitana"
              description="Pizza grande de queso Muzzarella elaborada con rodajas de tomate fresco y topping de salsa casera de provenzal."
              price="10"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="muzzarella.png"
              title="Provolone"
              description="Pizza grande de queso Muzzarella elaborada con queso provolone, salsa de tomate, con orégano y ají molido."
              price="10"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="muzzarella.png"
              title="Calabresa con jamón"
              description="Pizza grande de queso Muzzarella elaborada con carne, fetas de calabresa y jamón cocido."
              price="10"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="muzzarella.png"
              title="Anchoas"
              description="Pizza grande de queso Muzzarella elaborada con salsa de tomate, anchoas y alcaparras."
              price="10"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="muzzarella.png"
              title="Caprese"
              description="Pizza grande de queso Muzzarella elaborada con hojas de albahaca, tomate y aceite de oliva."
              price="10"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="muzzarella.png"
              title="Provolone, jamón y longaniza"
              description="Pizza grande de queso Muzzarella elaborada con queso provolone, jamón cocido y fetas de longaniza."
              price="10"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="muzzarella.png"
              title="Cuatro quesos"
              description="Pizza 4 quesos mezcla de queso muzzarella elaborada con queso roquefort, provolone."
              price="10"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="muzzarella.png"
              title="Napolitana con jamón"
              description="Pizza grande de queso Muzzarella elaborada con jamón cocido, rodajas de tomate fresco y topping de salsa casera de provenzal."
              price="10"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="muzzarella.png"
              title="Jamón con morrones"
              description="Pizza grande de Muzzarella elaborada con jamón cocido y morrones asados."
              price="10"
              inventory="20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
