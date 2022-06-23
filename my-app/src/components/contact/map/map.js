import "./map.css";

const map = () => {
  return (
    <div className='map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7914.058624081521!2d112.74221425390624!3d-7.350604999999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e5597c3a5c19%3A0x7f3a58fd0e7ffdb5!2sPG%20-%20TK.Muslimat%20Wedoro!5e0!3m2!1sid!2sid!4v1655783303341!5m2!1sid!2sid'
        width='800'
        height='450'
        style={{ border: 0 }}
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default map;
