export default function addTimings(DOM) {
  return function () {
    DOM.innerHTML = `<div class="timings">
                                          <ol>
                                            <li>Mon 9:00 am to 10:00 pm</li>
                                            <li>Tue 9:00 am to 10:00 pm</li>
                                            <li>Wed 9:00 am to 10:00 pm</li>
                                            <li>Thur 9:00 am to 10:00 pm</li>
                                            <li>Fri 9:00 am to 10:00 pm</li>
                                            <li>Sat 9:00 am to 10:00 pm</li>
                                            <li>Sun 9:00 am to 10:00 pm</li>
                                          </ol>
                                        </div>`;
    console.log('fuck you webpack');
  }
}