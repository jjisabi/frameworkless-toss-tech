import getDetailData from "../api/getDetailDatai.js";

class DetailItem extends HTMLElement {
    constructor(){
        super();
        const id = this.getAttribute("id");
        try{
            const detailContents = getDetailData("id" + id);
            this.setState({detailContents});
        }catch(error){
            this.innerHTML = "페이지를 찾을 수 없습니다.";
        }
    }

    setState(view){
        this.state = {...view};
        this.render();
    }

    render() {
        this.innerHTML = `
         <style>
            .detail-image {
                width: 600px;
                height: 350px;
            }
         </style>
      `;
        this.innerHTML += `<div>
        <img class="detail-image" src=${this.state.detailContents.thumbImg} />
        <h1>${this.state.detailContents.title}</h1>
        <p>${this.state.detailContents.writer}</p>
        <p>${this.state.detailContents.uploadDate}</p>
        <p>${this.state.detailContents.content}</p>
        </div>`;
    }
}

export default DetailItem;