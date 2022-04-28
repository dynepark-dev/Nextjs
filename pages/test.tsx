import Promo from "../components/Promo";

export default function test() {
  return (
    <div
      style={{
        padding: "100px",
        display: "flex",
        flexWrap: "wrap",
        gap: "2em",
        background: "grey",
      }}
    >
      <Promo />
      <Promo />
      <Promo />
    </div>
  );
}
