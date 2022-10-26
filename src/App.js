import "./styles.css";

//function App(){
//State

//Comportement
const submit = () => {
  alert("Votre est interface va etre tester par Seliluim");
};

//Affichage

export default function App() {
  return (
    <body>
      <div>
        <div>
          <h1 id="1">Testeur d'interface</h1>
        </div>
        <div type="text">
          <h2 id="2">Vieullez saisir l'URL du site a tester</h2>
          <form id="8">
            <input type="text" placeholder="URL du site" />
            <button onClick={submit}> Soumettre</button>
          </form>
        </div>
      </div>
    </body>
  );
}
