import html from "./contacts.html";
import "./contacts.css";

export default class ViewAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}
