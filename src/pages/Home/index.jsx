import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "12d3as11d2a",
      name: "Carlos",
      age: 40,
      email: "carlinhovrau@email",
    },
    {
      id: "321314556112312",
      name: "Caique",
      age: 14,
      email: "pinguin@email",
    },
  ];

  return (
    <div className="conteiner">
      <form>
        <h1>Cadastro de Usuario</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="Email" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>
      
      {users.map((user) => (
        <div key={user.id} className="card ">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
