import ListItem from "../view/mainList.js";
import DetailItem from "../view/DetailList.js";

window.customElements.define("list-item", ListItem);
window.customElements.define("detail-item", DetailItem);

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