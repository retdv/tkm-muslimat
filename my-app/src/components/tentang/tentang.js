import VisiMisi from "./visiMisi/visiMisi";
import Fasilitas from "./fasilitas/fasilitas";

const tentang = () => {
  const fasilitasText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturvelit quas laudantium repellat iure, dolorum perferendis";

  const pendaftaranText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exlaudantium unde quis ducimus ab quae obcaecati provident,";

  const visiMisiText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quaeratporro totam corrupti libero dolor qui non, explicabo voluptatibus,dolorum quia ex consequatur, dignissimos voluptates culpa. Omnis, ut! Corrupti, beatae voluptates maiores fugiat rem id, numquam delectus";

  function textLimiter(text) {
    let content = text.split(" ").splice(0, 15).join(" ");
    return content + "...";
  }
  return (
    <div className='tentang'>
      <VisiMisi visiMisiText={textLimiter(visiMisiText)} show={true} />
      <Fasilitas
        fasilitasText={textLimiter(fasilitasText)}
        pendaftaranText={textLimiter(pendaftaranText)}
      />
    </div>
  );
};

export default tentang;
