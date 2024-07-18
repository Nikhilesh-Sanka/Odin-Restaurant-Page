export default function addMenu(DOM){
    return function () {
        DOM.innerHTML = `<div class="menu">
                                <ol>
                                    <li>Pasta</li>
                                    <li>Chapati</li>
                                    <li>Lasagna</li>
                                    <li>Toast</li>
                                </ol>
                            </div>`;
    }
}