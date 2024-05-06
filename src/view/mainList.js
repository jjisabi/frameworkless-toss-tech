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
    this.innerHTML = `
      <style>
        ul{
          list-style:none;
        }
        .list-image {
          width: 200px;
          height: 200px;
        }
      </style>
      `;
    
    const category = this.state.listItem[0].category_title === "개발" ? "개발" : "디자인";

    this.innerHTML += 
        `<div>
          <h1>${category}</h1>
          ${this.state?.listItem
            .map(
              ({
                id,
                thumbImg,
                title,
                description,
                uploadDate,
              }) =>
                `<ul>
                    <li data-navigate="/detail/${id}">
                      <div>
                        <img class="list-image" src=${thumbImg} />
                        <h1>${title}</h1>
                        <p>${description}</p>
                        <time>${uploadDate}</time>
                      </div>
                    </li>
                  </ul>
                `
            )
          .join("")}
        </div>`;
    }
  }
  
  export default ListItem;
