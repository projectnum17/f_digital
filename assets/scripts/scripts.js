'use strict';

import headerHandler from './mods/headerHandler.js';
import videoAsyncHandler from './mods/videoAsyncHandler.js';
import selectInit from './mods/selectInit.js';
import tariffsSliderHandler from './mods/tariffsSliderHandler.js';
import faqHandler from './mods/faqHandler.js';
import connectTarget from './mods/connectTarget.js';

document.addEventListener('DOMContentLoaded', () => {
    headerHandler();
    videoAsyncHandler();
    selectInit();
    tariffsSliderHandler();
    faqHandler();
    connectTarget();
});
