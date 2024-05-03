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

   this.innerHTML += 
      `<div>
        ${this.state?.listItem
          .map(
            ({
              id,
              category_title,
              thumbImg,
              title,
              description,
              uploadDate,
            }) =>
              `<h1>${category_title}</h1>
                <ul>
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
