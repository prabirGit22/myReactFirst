import React from "react";
import ReactDOM from "react-dom/client";
const navbar = (
    <nav>
        <h1>Vegitable's List</h1>
        <ul>
            <li>Potato</li>
            <li>Onion</li>
            <li>Tomato</li>
            <li>Ginger</li>
            <li>Beetroot</li>
            <li>Capsicum</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))