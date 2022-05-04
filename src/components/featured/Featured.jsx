import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://img.static-kl.com/images/media/596F6286-0AAE-4BA0-88E8282530BBDCD2?aspect_ratio=1:1&min_width=912"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/6aad6ffe9f70faeccaca3a26fe0a95fb/960x960.jpg?fit=bounds&format=jpg&width=960"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>456 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://assets.website-files.com/6078f212688f14effe118008/60b132a8dc7d0305adeb7a15_Reno-Gallery.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>789 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
