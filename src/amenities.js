import amenities from './amenities.jpg';


export default function addAmenities (DOM) {
    return function () {
        DOM.innerHTML=`<img src="${amenities}">`;
    }
}