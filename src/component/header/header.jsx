import "./header.scss";
import logo from "../../asset/image/logo.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerWrap">
        <div className="headerLeft">
          <div className="headerLogo" alt="logo" />
          <div className="headerList">
            <ul>
              <li>
                <a href="#" className="active">
                  남성
                </a>
              </li>
              <li>
                <a href="#">여성</a>
              </li>
              <li>
                <a href="#">라이프</a>
              </li>
              <li>
                <a href="#" className="sale">
                  세일
                </a>
              </li>
              <li>
                <a href="#">브랜드</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="headerRight">
          <div className="headerItemNav">
            <ul>
              <li>
                <a href="#" className="textBold">
                  큐레이션
                </a>
              </li>
              <li>
                <a href="#" className="textBold magazine">
                  매거진
                </a>
              </li>
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
            </ul>
          </div>
          <div className="headerIconWrap">
            <div className="searchIcon">
              <img
                src={
                  "https://heights-store.com/web/baton/images/icon/icon_header_search_black.png"
                }
                alt="돋보기"
              />
            </div>
            <div className="basketIconWrap">
              <img
                src={
                  "https://heights-store.com/web/baton/images/icon/icon_header_basket_black.png"
                }
                alt="장바구니"
                className="basketIcon"
              />
              <span className="basketCount">
                <span>0</span>
              </span>
            </div>
            <div className="bergerIcon">
              <img
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=="
                }
                alt="메뉴바"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
