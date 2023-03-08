import { EventEmitter } from '../common/eventEmitter.js';
import { events } from '../common/events.js';
import { getOptions } from '../common/options.js';
import { state } from '../common/state.js';
import { getLast } from '../common/utils.js';

EventEmitter.on(events.bindEvents, init);

function init(){
    const position = getOptions().credits.position || 'right';
    const positionStyle = ['left', 'right'].indexOf(position) > -1 ? `${position}: 0;` : '';
    const waterMark = `
        <div class="fp-watermark" style="${positionStyle}">
            
        </div>
    `;
    const lastSection = getLast(state.sections);
    const shouldUseWaterMark =  !state.isValid || getOptions().credits.enabled;

    if(lastSection && lastSection.item && shouldUseWaterMark){
        lastSection.item.insertAdjacentHTML('beforeend', waterMark);
    }
}