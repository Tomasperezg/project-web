import {
    trigger,
    state,
    style,
    animate,
    transition,
    animation,
  } from '@angular/animations';

  export const slideAnimation = 
    trigger('slide', [
      state('open', style({
        height: '150px',
        opacity: 1,
        backgroundColor: '#2c2c2c'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
      transition('* => closed', [
        animate('0.3s')
      ]),
      transition('* => open', [
        animate('0.3s')
      ]),
      transition('open <=> closed', [
        animate('0.3s')
      ]),
      transition ('* => open', [
        animate ('0.3s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('0.3s')])
    ])