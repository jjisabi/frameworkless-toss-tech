import ListItem from "../view/mainList.js";

window.customElements.define("list-item", ListItem);

export default(container) => {
    const tech = () => {
      container.innerHTML = `<list-item></list-item>`;
    };
    
    const design = () => {
      container.innerHTML = `<list-item></list-item>`;
    };
    
    const detail = (params) => {
      const { id } = params;
      container.textContent = `상세 페이지 ${id}`;
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