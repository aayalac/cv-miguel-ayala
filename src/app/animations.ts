import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(40px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('hidden => visible', [
    animate('0.6s ease-out')
  ])
]);

export const fadeInLeft = trigger('fadeInLeft', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(-40px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('hidden => visible', [
    animate('0.6s ease-out')
  ])
]);

export const fadeInRight = trigger('fadeInRight', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(40px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('hidden => visible', [
    animate('0.6s ease-out')
  ])
]);

export const scaleIn = trigger('scaleIn', [
  state('hidden', style({
    opacity: 0,
    transform: 'scale(0.9)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'scale(1)'
  })),
  transition('hidden => visible', [
    animate('0.5s ease-out')
  ])
]);
