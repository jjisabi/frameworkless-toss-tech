import { LIST_DATA } from "../data/data-list.js";

const getData = (category)  => {
    return category === "tech" ? LIST_DATA.tech : LIST_DATA.design;
}

export default getData;