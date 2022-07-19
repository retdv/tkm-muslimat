import VisiMisi from "./visiMisi/visiMisi";
import Fasilitas from "./fasilitas/fasilitas";

const tentangFull = () => {
  const fasilitasText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturvelit quas laudantium repellat iure, dolorum perferendis";

  const pendaftaranText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exlaudantium unde quis ducimus ab quae obcaecati provident,";

  const visiMisiText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quaeratporro totam corrupti libero dolor qui non, explicabo voluptatibus,dolorum quia ex consequatur, dignissimos voluptates culpa. Omnis, ut! Corrupti, beatae voluptates maiores fugiat rem id, numquam delectus";
  return (
    <div className='tentang'>
      <VisiMisi visiMisiText={visiMisiText} show={false} />
      <Fasilitas
        fasilitasText={fasilitasText}
        showBtn={false}
        pendaftaranText={pendaftaranText}
      />
    </div>
  );
};

export default tentangFull;
