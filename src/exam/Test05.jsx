export default function Test05() {
  const [src, setSrc] = useState("pic_bulboff.gif");

  const turnOn = () => {
    setSrc("https://www.w3schools.com/js/pic_bulboㅅ.gif");
  };

  const turnOff = () => {
    setSrc("https://www.w3schools.com/js/pic_bulboff.gif");
  };

  return (
    <div>

      <button onClick={turnOn}>켜기</button>

      <img src={src} style={{ width: "100px" }} />
      <button onClick={turnOff}>끄기</button>
    </div>
  );
}
