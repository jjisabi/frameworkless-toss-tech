import ListItem from "../view/mainList.js";
import DetailItem from "../view/DetailList.js";
import Footer from "../view/footer.js";
import Banner from "../view/banner.js";
import Header from "../view/header.js";

window.customElements.define("list-item", ListItem);
window.customElements.define("detail-item", DetailItem);
window.customElements.define("footer-component", Footer);
window.customElements.define("banner-component", Banner);
window.customElements.define("header-component", Header);

export default(container) => {
    const tech = () => {
      container.innerHTML = `<list-item></list-item>`;
    };
    
    const design = () => {
      container.innerHTML = `<list-item></list-item>`;
    };
    
    const detail = (params) => {
      const { id } = params;
      container.innerHTML = `<detail-item id=${id}></detail-item>`
    };
    
    const notFound = () => {
      container.textContent = "페이지를 찾을 수 없습니다.";
    };
    
    return {
      tech,
      design,
      detail,
      notFound,
    };
}