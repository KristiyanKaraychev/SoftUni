import { render } from "./node_modules/lit-html/lit-html.js";
import tableTemplate from "./templates/tableTemplate.js";

function solve() {
    document.querySelector("#searchBtn").addEventListener("click", onClick);

    const URL = "http://localhost:3030/jsonstore/advanced/table";
    const tableBodyElement = document.querySelector(".container tbody");
    const inputElement = document.querySelector("#searchField");

    getData();

    function onClick() {
        //   TODO:
        let inputText = inputElement.value;

        getData(inputText);

        inputElement.value = "";
    }

    function getData(input) {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                render(
                    tableTemplate(Object.values(data), input),
                    tableBodyElement
                );
            })
            .catch((err) => console.error(err));
    }
}

solve();
