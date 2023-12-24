import { buffer, debounceTime, filter, fromEvent, map, merge, repeat, share, Subscription, switchMap, take, takeUntil, throttleTime, timer, } from 'rxjs';
/**
 * TODO: cleanup
 * TODO: add doublelong
 */
export function firable(node, options) {
    const bufferTime = 200;
    const pointerdown$ = fromEvent(node, 'pointerdown');
    const pointerup$ = fromEvent(node, 'pointerup');
    const pointermove$ = fromEvent(node, 'pointermove');
    const pointerleave$ = fromEvent(node, 'pointerleave');
    const contextmenu$ = fromEvent(node, 'contextmenu');
    const rightclick$ = pointerup$.pipe(filter((event) => event.button === 2));
    const pointerdownPrimary$ = pointerdown$.pipe(filter((event) => event.button === 0 || event.button === 1 || event.pointerType === 'touch'));
    const longpress$ = pointerdownPrimary$.pipe(switchMap((event) => timer(bufferTime).pipe(takeUntil(merge(pointerup$, pointermove$, pointerleave$)), map(() => event))));
    const alternativeFire$ = merge(longpress$, rightclick$).pipe(throttleTime(bufferTime), map((event) => new CustomEvent('alternativeFire', event)));
    let canceller$ = pointerleave$;
    if (options?.draggable) {
        canceller$ = pointermove$;
    }
    const cancelFire$ = pointerdown$.pipe(switchMap(() => canceller$.pipe(take(1), takeUntil(merge(pointerup$, alternativeFire$)))), map((event) => new CustomEvent('cancelFire', event)));
    const bufferedFire$ = pointerdownPrimary$.pipe(buffer(merge(pointerdownPrimary$, alternativeFire$).pipe(debounceTime(bufferTime))), takeUntil(merge(alternativeFire$, cancelFire$)), repeat(), share());
    const startFire$ = pointerdownPrimary$.pipe(throttleTime(bufferTime), map((event) => new CustomEvent('startFire', event)));
    // Fires if only 1 event is emitted within a time period
    const fire$ = bufferedFire$.pipe(takeUntil(merge(alternativeFire$, cancelFire$)), filter((clicks) => clicks.length === 1), take(1), map((clicks) => clicks[0]), repeat(), map((event) => new CustomEvent('fire', event)));
    // Fires if 2 events are emittedwithin a time period
    const doubleFire$ = bufferedFire$.pipe(takeUntil(merge(alternativeFire$, cancelFire$)), filter((clicks) => clicks.length > 1), take(1), map((clicks) => clicks.at(-1)), repeat(), map((event) => new CustomEvent('doubleFire', event)));
    const sink = new Subscription();
    sink.add(startFire$.subscribe((event) => node.dispatchEvent(event)));
    sink.add(fire$.subscribe((event) => node.dispatchEvent(event)));
    sink.add(doubleFire$.subscribe((event) => node.dispatchEvent(event)));
    sink.add(alternativeFire$.subscribe((event) => node.dispatchEvent(event)));
    sink.add(cancelFire$.subscribe((event) => node.dispatchEvent(event)));
    sink.add(contextmenu$.subscribe((event) => {
        event.preventDefault();
    }));
    return {
        update: (updatedParameter) => {
            console.log('UPDATE', updatedParameter);
            // options = updatedParameter;
        },
        destroy: () => {
            sink.unsubscribe();
        },
    };
}
