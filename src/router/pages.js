export default(container) => {
    const tech = () => {
      container.textContent = "개발";
    };
    
    const design = () => {
      container.textContent = "디자인";
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