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
        this.innerHTML += 
        `<section class='px-[30px] max-w-[680px] mb-[192px] mt-[52px] mx-auto'>
            <img class="flex-shrink-0 flex-grow-0 flex-[240px] overflow-hidden object-cover rounded-[14px]" src=${this.state.detailContents.thumbImg} />
            <h1 class="mb-[14px] text-[#333d4b] font-[600] text-[45px]">${this.state.detailContents.title}</h1>
            <p class="text-[#333d4b] font-[600]">${this.state.detailContents.writer}</p>
            <time class="text-[15px] text-[#8b95a1] leading-[1.6]">${this.state.detailContents.uploadDate}</time>
            <p class="flex flex-col mt-16">${this.state.detailContents.content}</p>
        </section>`;
    }
}

export default DetailItem;