import "./contact.css";
import Map from "./map/map";
import Contacts from "./contacts/contacts";

const contact = () => {
  return (
    <div className='text-center bg-light'>
      <Contacts />

      <div className='location'>
        <h2 className='title'>Lokasi Sekolah</h2>
        <Map />
      </div>
    </div>
  );
};

export default contact;
