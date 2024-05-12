import getData from "../api/getData.js";

class ListItem extends HTMLElement {
  constructor() {
    super();
    const category = this.baseURI === "http://localhost:3000/tech" ? "tech" : "design";
    const listItem = getData(category);
    this.setState({listItem});
  }

  setState(State){
    this.state = {...State};
    this.start();
  }

  start() {    
    const category = this.state.listItem[0].category_title === "개발" ? "개발" : "디자인";

    this.innerHTML += 
        `<section class='px-[30px] max-w-[980px] mb-[192px] mx-auto'>
          <h1 class="py-[20px] text-[36px] font-[700] mt-[52px] mb-[32px]">${category}</h1>
          ${this.state?.listItem
            .map(
              ({
                id,
                thumbImg,
                title,
                description,
                uploadDate,
              }) =>
                `<li data-navigate="/detail/${id}" class="cursor-pointer mb-[85px] last:mb-[0] list-none">
                      <div class="flex items-center gap-x-[48px]">
                        <img class=" flex-shrink-0 flex-grow-0 flex-[240px] w-[240px] h-[240px] overflow-hidden object-cover rounded-[14px]" src=${thumbImg} />
                        <div>
                          <h1 class="mb-[14px] text-[#333d4b] font-[700] text-[34px]">${title}</h1>
                          <p class="mb-[12px] text-[#4e5968] text-ellipsis line-clamp-2 leading-[1.6]">${description}</p>
                          <time class="text-[15px] text-[#8b95a1] leading-[1.6]">${uploadDate}</time>
                        </div>
                      </div>
                  </li>
                `
            )
          .join("")}
        </section>`;
    }
  }
  
  export default ListItem;
