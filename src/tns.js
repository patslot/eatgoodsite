
import { tns } from  "../node_modules/tiny-slider/src/tiny-slider";
const storeSlider = selector =>
  tns({
    container: selector,
    slideBy: 1,
    speed: 300,
    autoplayTimeout:1500,
    autoplay: false,
    nav: false,
    touch: false,
    center: true,
    mouseDrag: false,
    swipeAngle: false,
    controls: true,
    controlsText:["<",">"],
    controlsContainer: "#customize-controls"
  });

export default storeSlider;