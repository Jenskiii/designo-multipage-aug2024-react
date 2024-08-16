import data from "./data/data.json";

function App() {
  console.log(data.design.web.others);
  return (
    <>
      {data.design.graphic.others.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
            <img src={item.img.desktop} alt="" />
          </div>
        );
      })}
      <p></p>
      <p>hi</p>
    </>
  );
}

export default App;
